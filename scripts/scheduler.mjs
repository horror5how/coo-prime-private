#!/usr/bin/env node
// COO-Prime unified scheduler. Runs every 5 min.
// Reads routines/*.yaml schedules, tracks last_run in state.json,
// dispatches any routine whose next_run <= now via workflow_dispatch.
// Purpose: insulate COO-Prime from GitHub's unreliable native cron.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import yaml from 'js-yaml';

const REPO = process.env.GITHUB_REPO || 'horror5how/coo-prime-private';
const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const SIGNING_KEY = process.env.COO_PRIME_SIGNING_KEY;
const now = new Date();
const NOW_MS = now.getTime();

if (!TOKEN) { console.error('no GH_TOKEN'); process.exit(1); }

// --- cron parsing: minute hour dom month dow, '*' or comma-lists or simple ranges ---
function parseField(f, min, max) {
  if (f === '*') return null; // wildcard
  const out = new Set();
  for (const part of f.split(',')) {
    if (part.includes('/')) {
      const [range, step] = part.split('/');
      const s = Number(step);
      const [lo, hi] = range === '*' ? [min, max] : range.split('-').map(Number);
      for (let i = lo; i <= (hi ?? lo); i += s) out.add(i);
    } else if (part.includes('-')) {
      const [lo, hi] = part.split('-').map(Number);
      for (let i = lo; i <= hi; i++) out.add(i);
    } else {
      out.add(Number(part));
    }
  }
  return out;
}

function cronMatches(cronExpr, d) {
  const [m, h, dom, mo, dow] = cronExpr.trim().split(/\s+/);
  const ms = parseField(m, 0, 59);
  const hs = parseField(h, 0, 23);
  const doms = parseField(dom, 1, 31);
  const mos = parseField(mo, 1, 12);
  const dows = parseField(dow, 0, 6);
  const mm = d.getUTCMinutes(), hh = d.getUTCHours();
  const dd = d.getUTCDate(), M = d.getUTCMonth() + 1, w = d.getUTCDay();
  if (ms && !ms.has(mm)) return false;
  if (hs && !hs.has(hh)) return false;
  if (mos && !mos.has(M)) return false;
  // Cron "OR" semantics for dom/dow when both restricted:
  if (doms && dows) return doms.has(dd) || dows.has(w);
  if (doms && !doms.has(dd)) return false;
  if (dows && !dows.has(w)) return false;
  return true;
}

// Find the most recent cron fire time <= now (walk back up to 7 days)
function lastScheduledFire(cronExpr, reference) {
  const d = new Date(reference.getTime());
  d.setUTCSeconds(0, 0);
  for (let i = 0; i < 60 * 24 * 7; i++) {
    if (cronMatches(cronExpr, d)) return d;
    d.setUTCMinutes(d.getUTCMinutes() - 1);
  }
  return null;
}

// --- load routines ---
const routinesDir = path.resolve('routines');
const routines = fs.readdirSync(routinesDir)
  .filter(f => f.endsWith('.yaml') && !f.startsWith('_'))
  .map(f => {
    const r = yaml.load(fs.readFileSync(path.join(routinesDir, f), 'utf8'));
    const schedRaw = (r.schedule || '').trim();
    let cron = null, kind = 'other';
    if (schedRaw.startsWith('cron:')) { cron = schedRaw.slice(5).trim().replace(/^"|"$/g, ''); kind = 'cron'; }
    else if (schedRaw.startsWith('event:')) kind = 'event';
    else if (schedRaw === 'ondemand') kind = 'ondemand';
    return { id: r.id, tier: r.tier, schedRaw, cron, kind };
  })
  .filter(r => r.kind === 'cron');

// --- load state ---
const statePath = path.resolve('state.json');
const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
state.scheduler = state.scheduler || { last_run: {}, heartbeats: [] };

// --- decide dispatches ---
const dueSet = [];
const GRACE_MS = 30 * 60 * 1000; // dispatch if within 30 min past fire slot
for (const r of routines) {
  const fire = lastScheduledFire(r.cron, now);
  if (!fire) continue;
  const fireISO = fire.toISOString();
  const lastRun = state.scheduler.last_run[r.id];
  if (lastRun && lastRun >= fireISO) continue; // already handled this slot
  const ageMs = NOW_MS - fire.getTime();
  if (ageMs > GRACE_MS && !lastRun) {
    // first time we see this routine; don't backfill ancient slots, just mark
    state.scheduler.last_run[r.id] = fireISO;
    continue;
  }
  if (ageMs > GRACE_MS) continue; // skip, too stale
  dueSet.push({ ...r, fireISO });
}

console.log(`scheduler: ${routines.length} cron routines, ${dueSet.length} due at ${now.toISOString()}`);

// --- dispatch ---
async function dispatch(routineId) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${routineId}.yml/dispatches`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({ ref: 'main' }),
  });
  return res.status;
}

const results = [];
for (const r of dueSet) {
  try {
    const status = await dispatch(r.id);
    const ok = status === 204;
    console.log(`  dispatch ${r.id} (for ${r.fireISO}) -> HTTP ${status} ${ok ? 'OK' : 'FAIL'}`);
    if (ok) state.scheduler.last_run[r.id] = r.fireISO;
    results.push({ id: r.id, fireISO: r.fireISO, status });
  } catch (e) {
    console.error(`  dispatch ${r.id} error:`, e.message);
    results.push({ id: r.id, error: e.message });
  }
}

// --- heartbeat ---
state.scheduler.heartbeats = (state.scheduler.heartbeats || []).slice(-143); // keep ~12h
state.scheduler.heartbeats.push(now.toISOString());
fs.writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');

// --- audit entry ---
if (results.length > 0 || (NOW_MS % (30 * 60 * 1000)) < 5 * 60 * 1000) {
  // write audit entry if we did work OR every ~30 min as heartbeat
  const auditPath = path.resolve('audit.log');
  const lines = fs.existsSync(auditPath) ? fs.readFileSync(auditPath, 'utf8').trim().split('\n').filter(Boolean) : [];
  const prev = lines.length
    ? 'sha256:' + crypto.createHash('sha256').update(lines[lines.length - 1]).digest('hex')
    : 'sha256:' + '0'.repeat(64);
  const rec = {
    ts: now.toISOString(),
    actor: 'COO-Prime',
    action: 'scheduler.tick',
    target: 'unified-scheduler',
    tier: 'A',
    runtime: 'cloud:github-actions',
    result: 'success',
    duration_ms: 0,
    prev_hash: prev,
    notes: `dispatched=${results.length} routines_tracked=${routines.length}`,
    dispatched: results,
  };
  if (SIGNING_KEY) {
    rec.signature = 'hmac-sha256:' + crypto.createHmac('sha256', SIGNING_KEY).update(JSON.stringify(rec)).digest('hex');
  }
  fs.appendFileSync(auditPath, JSON.stringify(rec) + '\n');
}

console.log('scheduler: done');
