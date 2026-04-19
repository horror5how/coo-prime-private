#!/usr/bin/env bash
# COO-Prime cloud bootstrap — run once from any env with `gh` + `git` + authenticated GitHub CLI.
# Idempotent: safe to re-run.
set -euo pipefail

REPO="${COO_PRIME_REPO:-horror5how/coo-prime-private}"
ROOT="$HOME/.claude/coo-prime"

cd "$ROOT"

echo "==> [1/4] Ensure GitHub repo exists (private): $REPO"
if ! gh repo view "$REPO" >/dev/null 2>&1; then
  gh repo create "$REPO" --private --description "COO-Prime cloud execution + backup" --source=. --remote=origin --push
else
  if ! git remote | grep -q '^origin$'; then
    git remote add origin "https://github.com/${REPO}.git"
  fi
  git push -u origin main || true
fi

echo "==> [2/4] Seed GitHub Actions secrets"
# HMAC signing key
gh secret set COO_PRIME_SIGNING_KEY --repo "$REPO" < "$ROOT/.signing-key"

# Required
: "${ANTHROPIC_API_KEY:?set ANTHROPIC_API_KEY in env before running}"
gh secret set ANTHROPIC_API_KEY --repo "$REPO" --body "$ANTHROPIC_API_KEY"

# Optional — only set if present
for name in GH_TOKEN VERCEL_TOKEN LINKEDIN_TOKEN SUPABASE_ACCESS_TOKEN GMAIL_TOKEN; do
  val="${!name:-}"
  if [ -n "$val" ]; then
    gh secret set "$name" --repo "$REPO" --body "$val"
    echo "  - set $name"
  else
    echo "  - SKIP $name (env var not set; optional)"
  fi
done

echo "==> [3/4] Verify workflows registered"
gh workflow list --repo "$REPO" | head -20

echo "==> [4/4] Smoke test: bootstrap-self-check"
gh workflow run coo-bootstrap-self-check --repo "$REPO"
sleep 5
gh run list --repo "$REPO" --workflow coo-bootstrap-self-check --limit 1

echo ""
echo "COO-Prime is now cloud-resident. Laptop state no longer required."
echo "Monitor: gh run list --repo $REPO"
