#!/usr/bin/env node
// COO-Prime FLEET HEALTH — the real operational brain.
// Enumerates EVERY scheduled workflow across every repo Hayat owns, classifies
// health, AUTO-HEALS (re-run failed jobs / re-enable inactivity-disabled crons /
// workflow_dispatch), escalates what it cannot fix, and reports to a living
// GitHub issue + Slack. Runs hourly in GitHub Actions. Append-only signed audit.

import fs from 'node:fs';
import crypto from 'node:crypto';

const TOKEN = process.env.GH_TOKEN;
const OWNER = process.env.FLEET_OWNER || 'horror5how';
const SELF = process.env.GITHUB_REPOSITORY || 'horror5how/coo-prime-private';
const SLACK = process.env.SLACK_WEBHOOK_URL || '';
const SIGNING_KEY = process.env.COO_PRIME_SIGNING_KEY || '';
const STALL_HOURS = Number(process.env.STALL_HOURS || 30);   // a daily cron should run within this window
const MAX_HEAL_ATTEMPTS = Number(process.env.MAX_HEAL_ATTEMPTS || 3);
const DRY = process.env.DRY_RUN === '1';

if (!TOKEN) { console.error('FATAL: GH_TOKEN missing'); process.exit(1); }

const STATE_PATH = 'fleet-state.json';
const AUDIT_PATH = 'audit.log';
const REPORT_PATH = 'qa/fleet-health-latest.md';
const now = new Date();
const NOW = now.getTime();

// ---------------- GitHub helpers ----------------
async function gh(path, opts = {}) {
  const url = path.startsWith('http') ? path : `https://api.github.com${path}`;
  return fetch(url, {
    ...opts,
    headers: {
      Authorization: `token ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(opts.headers || {}),
    },
  });
}
async function ghJson(path) { const r = await gh(path); if (!r.ok) throw new Error(`${path} -> ${r.status}`); return r.json(); }
async function ghRaw(path) { const r = await gh(path, { headers: { Accept: 'application/vnd.github.raw' } }); return r.ok ? r.text() : ''; }

// ---------------- enumerate fleet ----------------
async function listRepos() {
  const out = [];
  for (let page = 1; page <= 5; page++) {
    let batch = [];
    try { batch = await ghJson(`/user/repos?per_page=100&page=${page}&affiliation=owner`); } catch { break; }
    if (!batch.length) break;
    for (const r of batch) if ((r.owner?.login || '').toLowerCase() === OWNER.toLowerCase()) out.push(r);
    if (batch.length < 100) break;
  }
  return out;
}

function isScheduled(fileText) {
  // crude but reliable: a `cron:` line under an `on:`/`schedule:` block
  return /\n\s*-?\s*cron\s*:/.test('\n' + fileText) || /schedule\s*:/.test(fileText);
}
function hasDispatch(fileText) { return /workflow_dispatch\s*:/.test(fileText); }

// ---------------- classify ----------------
const BAD = new Set(['failure', 'timed_out', 'startup_failure']);
function classify(latest, lastSuccessAgeH) {
  if (!latest) return { status: 'NO_RUNS', healthy: false };
  const ageH = (NOW - new Date(latest.created_at).getTime()) / 3.6e6;
  if (latest.status !== 'completed') return { status: 'RUNNING', healthy: true, ageH };
  if (latest.conclusion === 'success') {
    if (ageH > STALL_HOURS) return { status: 'STALLED', healthy: false, ageH };
    return { status: 'HEALTHY', healthy: true, ageH };
  }
  if (latest.conclusion === 'cancelled') {
    // concurrency cancellations are noise IF there is a recent success
    if (lastSuccessAgeH != null && lastSuccessAgeH < STALL_HOURS) return { status: 'HEALTHY', healthy: true, ageH };
    return { status: 'CANCELLED', healthy: false, ageH };
  }
  if (BAD.has(latest.conclusion)) return { status: 'FAILING', healthy: false, ageH };
  return { status: latest.conclusion?.toUpperCase() || 'UNKNOWN', healthy: false, ageH };
}

// ---------------- heal ----------------
async function heal(full, wf, latest, defaultBranch) {
  if (DRY) return { method: 'dry-run', ok: true };

  // 1) GitHub auto-disabled the cron after 60d inactivity -> re-enable
  if (wf.state === 'disabled_inactivity') {
    const e = await gh(`/repos/${full}/actions/workflows/${wf.id}/enable`, { method: 'PUT' });
    if (e.status === 204) { /* fall through to also trigger a run */ }
  }
  // 2) failing run with a concrete run id -> re-run the failed jobs (works without workflow_dispatch)
  if (latest && (BAD.has(latest.conclusion) || latest.conclusion === 'cancelled')) {
    let r = await gh(`/repos/${full}/actions/runs/${latest.id}/rerun-failed-jobs`, { method: 'POST' });
    if (r.status === 201) return { method: 'rerun-failed-jobs', ok: true };
    r = await gh(`/repos/${full}/actions/runs/${latest.id}/rerun`, { method: 'POST' });
    if (r.status === 201) return { method: 'rerun', ok: true };
  }
  // 3) stalled / no runs -> workflow_dispatch on default branch
  const d = await gh(`/repos/${full}/actions/workflows/${wf.id}/dispatches`, {
    method: 'POST', body: JSON.stringify({ ref: defaultBranch }),
  });
  if (d.status === 204) return { method: 'workflow_dispatch', ok: true };
  const detail = (await d.text().catch(() => '')).slice(0, 160);
  return { method: 'heal-failed', ok: false, status: d.status, detail };
}

// ---------------- diagnostics for escalation ----------------
async function failingStep(full, runId) {
  try {
    const { jobs } = await ghJson(`/repos/${full}/actions/runs/${runId}/jobs`);
    const failed = (jobs || []).find(j => j.conclusion === 'failure');
    if (!failed) return '';
    const step = (failed.steps || []).find(s => s.conclusion === 'failure');
    return step ? `job "${failed.name}" step "${step.name}"` : `job "${failed.name}"`;
  } catch { return ''; }
}

// ---------------- state ----------------
function loadState() { try { return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8')); } catch { return { fleet: {} }; } }
function saveState(s) { fs.writeFileSync(STATE_PATH, JSON.stringify(s, null, 2) + '\n'); }

// ---------------- audit ----------------
function appendAudit(rec) {
  let prev = 'sha256:' + '0'.repeat(64);
  try {
    const lines = fs.readFileSync(AUDIT_PATH, 'utf8').trim().split('\n').filter(Boolean);
    if (lines.length) prev = 'sha256:' + crypto.createHash('sha256').update(lines[lines.length - 1]).digest('hex');
  } catch {}
  const full = { ts: now.toISOString(), actor: 'COO-Prime', action: 'fleet.health', runtime: 'cloud:github-actions', prev_hash: prev, ...rec };
  if (SIGNING_KEY) full.signature = 'hmac-sha256:' + crypto.createHmac('sha256', SIGNING_KEY).update(JSON.stringify(full)).digest('hex');
  fs.appendFileSync(AUDIT_PATH, JSON.stringify(full) + '\n');
}

// ---------------- reporting ----------------
async function upsertIssue(title, body, comment) {
  // ensure label
  await gh(`/repos/${SELF}/labels`, { method: 'POST', body: JSON.stringify({ name: 'coo-fleet-health', color: 'b60205' }) }).catch(() => {});
  const open = await ghJson(`/repos/${SELF}/issues?state=open&labels=coo-fleet-health&per_page=10`).catch(() => []);
  const existing = (open || []).find(i => i.title.startsWith('🩺'));
  if (existing) {
    await gh(`/repos/${SELF}/issues/${existing.number}`, { method: 'PATCH', body: JSON.stringify({ title, body }) });
    if (comment) await gh(`/repos/${SELF}/issues/${existing.number}/comments`, { method: 'POST', body: JSON.stringify({ body: comment }) });
    return existing.number;
  }
  const created = await gh(`/repos/${SELF}/issues`, { method: 'POST', body: JSON.stringify({ title, body, labels: ['coo-fleet-health'] }) });
  const j = await created.json().catch(() => ({}));
  return j.number;
}
async function slack(text) {
  if (!SLACK) return;
  await fetch(SLACK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) }).catch(() => {});
}

// ---------------- main ----------------
const state = loadState();
state.fleet = state.fleet || {};
const repos = await listRepos();
const monitored = [];

for (const repo of repos) {
  const full = repo.full_name;
  // skip repos where Actions are intentionally disabled at the repo level (retired routines)
  try { const perm = await ghJson(`/repos/${full}/actions/permissions`); if (perm && perm.enabled === false) continue; } catch {}
  let wfs = [];
  try { wfs = (await ghJson(`/repos/${full}/actions/workflows?per_page=100`)).workflows || []; } catch { continue; }
  const activePaths = new Set(wfs.map(w => w.path));
  for (const wf of wfs) {
    if (wf.path.endsWith('.disabled')) continue;
    const text = await ghRaw(`/repos/${full}/contents/${wf.path}`);
    if (!text || !isScheduled(text)) continue;            // only scheduled routines
    if (full === SELF && /fleet-health/.test(wf.path)) continue; // never self-heal the monitor

    let runs = [];
    try { runs = (await ghJson(`/repos/${full}/actions/workflows/${wf.id}/runs?per_page=10`)).workflow_runs || []; } catch {}
    const latest = runs[0] || null;
    const lastSuccess = runs.find(r => r.conclusion === 'success');
    const lastSuccessAgeH = lastSuccess ? (NOW - new Date(lastSuccess.created_at).getTime()) / 3.6e6 : null;
    const cls = classify(latest, lastSuccessAgeH);

    monitored.push({ full, wf, text, latest, cls, defaultBranch: repo.default_branch });
  }

  // Detect ORPHANED scheduled routines: a workflow that fired on a schedule recently
  // but whose file no longer exists (deleted/migrated) -> it can never run again.
  let recent = [];
  try { recent = (await ghJson(`/repos/${full}/actions/runs?per_page=30`)).workflow_runs || []; } catch {}
  const seenOrphan = new Set();
  for (const run of recent) {
    if (run.event !== 'schedule' || activePaths.has(run.path) || seenOrphan.has(run.path)) continue;
    seenOrphan.add(run.path);
    const ageH = (NOW - new Date(run.created_at).getTime()) / 3.6e6;
    if (ageH > 24 * 21) continue;                          // ignore orphans older than 3 weeks
    monitored.push({
      full, missing: true, defaultBranch: repo.default_branch,
      wf: { id: null, name: run.name || run.path.split('/').pop(), path: run.path, state: 'missing' },
      text: '', latest: run, cls: { status: 'WORKFLOW_MISSING', healthy: false, ageH },
    });
  }
}

// act
const key = m => `${m.full}::${m.wf.path}`;
const broken = monitored.filter(m => !m.cls.healthy);
const rows = [];
const newlyBroken = [], healedNow = [], escalated = [];

for (const m of monitored) {
  const k = key(m);
  const st = state.fleet[k] || { attempts: 0, last_status: null };
  let action = '—';

  if (m.cls.healthy) {
    if (st.attempts > 0 && (st.last_status && st.last_status !== 'HEALTHY')) healedNow.push(m);
    state.fleet[k] = { attempts: 0, last_status: m.cls.status, last_seen: now.toISOString() };
  } else if (m.missing) {
    // workflow file is gone — re-run/dispatch is impossible, only a restore fixes it
    if (st.last_status !== m.cls.status) newlyBroken.push(m);
    action = 'workflow file deleted — restore required (cannot auto-dispatch)';
    escalated.push({ m, where: `file ${m.wf.path} no longer on default branch` });
    state.fleet[k] = { attempts: MAX_HEAL_ATTEMPTS, last_status: m.cls.status, last_seen: now.toISOString(), last_action: action };
  } else {
    if (st.last_status === 'HEALTHY' || st.last_status == null) newlyBroken.push(m);
    if (st.attempts >= MAX_HEAL_ATTEMPTS) {
      action = `ESCALATED (${st.attempts} heals failed)`;
      const where = m.latest ? await failingStep(m.full, m.latest.id) : '';
      escalated.push({ m, where });
    } else {
      const h = await heal(m.full, m.wf, m.latest, m.defaultBranch);
      action = h.ok ? `healing via ${h.method}` : `heal failed (${h.status} ${h.detail || ''})`;
      st.attempts = (st.attempts || 0) + 1;
    }
    state.fleet[k] = { attempts: st.attempts || 1, last_status: m.cls.status, last_seen: now.toISOString(), last_action: action };
  }

  rows.push({ full: m.full, name: m.wf.name, status: m.cls.status, ageH: m.cls.ageH, action, healthy: m.cls.healthy });
}

// build report
rows.sort((a, b) => (a.healthy === b.healthy) ? a.full.localeCompare(b.full) : (a.healthy ? 1 : -1));
const fmtAge = h => h == null ? '—' : (h < 48 ? `${h.toFixed(1)}h` : `${(h / 24).toFixed(1)}d`);
const icon = s => ({ HEALTHY: '✅', RUNNING: '🔄', FAILING: '❌', STALLED: '🕒', CANCELLED: '⚠️', NO_RUNS: '⚪', WORKFLOW_MISSING: '🗑️' }[s] || '❓');
const tbl = ['| repo | routine | status | last run | action |', '|---|---|---|---|---|',
  ...rows.map(r => `| ${r.full.split('/')[1]} | ${r.name} | ${icon(r.status)} ${r.status} | ${fmtAge(r.ageH)} ago | ${r.action} |`)].join('\n');
const summary = `**${monitored.length}** scheduled routines · **${monitored.length - broken.length}** healthy · **${broken.length}** unhealthy · **${escalated.length}** escalated`;
const body = `🩺 **COO Fleet Health** — last check ${now.toISOString()}\n\n${summary}\n\n${tbl}\n\n` +
  (escalated.length ? `### Needs a human / root-cause fix\n${escalated.map(e => `- **${e.m.full}** → ${e.m.wf.name}: ${e.m.cls.status} after ${MAX_HEAL_ATTEMPTS} auto-heals. ${e.where}. ${e.m.latest?.html_url || ''}`).join('\n')}\n` : '') +
  `\n_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within ${STALL_HOURS}h._`;

fs.mkdirSync('qa', { recursive: true });
fs.writeFileSync(REPORT_PATH, body + '\n');

// escalation/alert comment only when something changed
let comment = '';
if (newlyBroken.length) comment += `🚨 Newly unhealthy:\n${newlyBroken.map(m => `- ${m.full} → ${m.wf.name} (${m.cls.status})`).join('\n')}\n\n`;
if (healedNow.length) comment += `✅ Recovered:\n${healedNow.map(m => `- ${m.full} → ${m.wf.name}`).join('\n')}\n`;

if (!DRY) {
  await upsertIssue('🩺 COO Fleet Health', body, comment || null);
  if (newlyBroken.length || escalated.length) {
    await slack(`🩺 COO fleet health: ${broken.length} routine(s) down.${escalated.length ? ` ${escalated.length} need root-cause fix.` : ''} ${newlyBroken.map(m => m.full.split('/')[1] + '/' + m.wf.name).slice(0, 6).join(', ')}`);
  }
}

appendAudit({
  result: broken.length ? 'degraded' : 'healthy',
  monitored: monitored.length,
  unhealthy: broken.length,
  escalated: escalated.length,
  newly_broken: newlyBroken.length,
  notes: `${monitored.length} routines, ${broken.length} unhealthy, ${escalated.length} escalated`,
});
saveState(state);

console.log(summary.replace(/\*\*/g, ''));
for (const r of rows.filter(r => !r.healthy)) console.log(`  ${icon(r.status)} ${r.full} :: ${r.name} :: ${r.status} :: ${r.action}`);
console.log('fleet-health: done');
