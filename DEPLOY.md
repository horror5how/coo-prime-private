# COO-Prime — Cloud Deployment

Turns COO-Prime into a fully cloud-resident operator. Laptop can be off.

## What lives here

```
cloud/
├── .github/workflows/       # 15 GitHub Actions workflows (one per routine + _runner)
├── scripts/dispatch-routine.mjs   # routine executor (Claude Agent SDK caller)
├── package.json
├── .gitignore               # excludes .signing-key
└── DEPLOY.md                # this file
```

## One-time setup (performed autonomously where possible)

### 1. Create private backup + execution repo

```bash
gh repo create hayatamin/coo-prime-private --private --description "COO-Prime cloud execution + backup"
cd ~/.claude/coo-prime
git init
git add -A
git commit -m "coo-prime: initial cloud deployment v1.0"
git remote add origin git@github.com:hayatamin/coo-prime-private.git
git push -u origin main
```

### 2. Seed GitHub Actions secrets (from `secrets.manifest.json`)

```bash
# HMAC signing key (already generated locally; read and push)
gh secret set COO_PRIME_SIGNING_KEY < ~/.claude/coo-prime/.signing-key

# Required
gh secret set ANTHROPIC_API_KEY --body "$ANTHROPIC_API_KEY"

# Optional — set if present in local env
[ -n "$GH_TOKEN" ]              && gh secret set GH_TOKEN --body "$GH_TOKEN"
[ -n "$VERCEL_TOKEN" ]          && gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN"
[ -n "$LINKEDIN_TOKEN" ]        && gh secret set LINKEDIN_TOKEN --body "$LINKEDIN_TOKEN"
[ -n "$SUPABASE_ACCESS_TOKEN" ] && gh secret set SUPABASE_ACCESS_TOKEN --body "$SUPABASE_ACCESS_TOKEN"
[ -n "$GMAIL_TOKEN" ]           && gh secret set GMAIL_TOKEN --body "$GMAIL_TOKEN"
```

### 3. Enable workflows

```bash
# All workflows auto-enable on first push to main. No manual step.
# Verify:
gh workflow list
```

### 4. Smoke test

```bash
gh workflow run coo-bootstrap-self-check
gh run watch
```

## Time-zone note

Cron in `.github/workflows/*.yml` is UTC. If the user's local is not UTC, adjust each cron by the UTC offset or wrap the dispatcher in a TZ-aware gate. Current crons assume spec's "local time" === UTC for baseline; amend once user timezone is known (inferred as Europe/London during BST = UTC+1, so subtract 1h from each cron when activating).

## Autonomy posture

- Every dispatch runs with `permissionMode: "bypassPermissions"`.
- All elevated actions are HMAC-signed inside the job using `COO_PRIME_SIGNING_KEY` and logged to `audit.log`, which is committed back to the repo each run.
- No human approval step exists in any workflow.

## Failure escape hatch

If a routine enters a failure loop, the user can pause it without code changes:

```bash
gh workflow disable coo-<routine-id>
```

Re-enable:

```bash
gh workflow enable coo-<routine-id>
```

## Observability

- Run history: `gh run list --workflow coo-<routine-id>`
- Logs: `gh run view <run-id> --log`
- Audit mirror: committed back to repo at `audit.log` after every run
