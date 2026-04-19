# COO-Prime — Disaster Recovery Runbook

**Purpose:** Full restore of COO-Prime from cold in < 30 min.
**Owner:** Hayat Amin
**Last tested:** never (schedule first drill at first quarterly review)

---

## 1. Backup inventory

| Asset | Primary | Backup | Frequency |
|---|---|---|---|
| `spec.md` | `~/.claude/coo-prime/spec.md` | `github.com/hayatamin/coo-prime-private` | on change |
| `routines/*.yaml` | local | same repo | on change |
| `audit.log` | local (append-only) | same repo, daily snapshot | daily 19:30 |
| `state.json` | local | same repo, daily snapshot | daily 19:30 |
| `feedback/*.md` + `MEMORY.md` | local | same repo | on change |
| `incidents/*.md` | local | same repo | on change |
| L1 hot memory | `~/.claude/projects/*/memory/` | Google Drive snapshot, weekly | weekly |
| L2 warm memory | AgentDB | AgentDB snapshot export, weekly | weekly |
| `secrets.manifest.json` | local | same repo (manifest only, no values) | on change |
| Secret values | OS keychain / env | **NEVER in repo** | manual rotation |

## 2. Restore procedure

```
# 1. Fresh Claude Code install
curl -fsSL https://claude.ai/install.sh | sh

# 2. Clone backup
gh repo clone hayatamin/coo-prime-private ~/.claude/coo-prime-restore

# 3. Merge into ~/.claude/
cp -r ~/.claude/coo-prime-restore/. ~/.claude/coo-prime/

# 4. Verify audit chain
node ~/.claude/coo-prime/tools/verify-chain.js   # (tool TBD; manual JSON scan acceptable)

# 5. Re-supply secrets from keychain / env per secrets.manifest.json

# 6. Bootstrap
#    Open Claude Code, run: "COO-Prime, bootstrap from ~/.claude/coo-prime/"
#    This re-loads state.json, diffs schedules, resumes dispatch loop.
```

## 3. Partial-loss scenarios

| Loss | Action |
|---|---|
| `audit.log` corruption | Restore from last daily snapshot; replay L2 warm memory to fill gap; flag gap window in incidents/ |
| `state.json` lost | Rebuild from `routines/*.yaml` + last 24h of audit.log |
| Secret leaked | Rotate at source; update manifest; audit log entry; notify user |
| Routine file corrupt | Restore from git history of backup repo |
| L2 AgentDB corrupt | Re-embed from L1 hot memory on next bootstrap |

## 4. Contact tree

1. User (Hayat) — `hayat@beyondelevation.com`
2. Backup operator — _TBD by user_
3. Anthropic Support — via Claude Code `/bug`

## 5. Drill cadence

- Quarterly: full restore into isolated dir, verify parity with live, delete.
- Record drill outcome in `incidents/YYYY-MM-DD-dr-drill.md` (even on success).
