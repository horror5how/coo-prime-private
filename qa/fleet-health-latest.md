🩺 **COO Fleet Health** — last check 2026-06-10T12:32:45.178Z

**16** scheduled routines · **10** healthy · **6** unhealthy · **6** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 0.2h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily Blog Draft Review Digest | 🕒 STALLED | 3.9d ago | ESCALATED (3 heals failed) |
| getinpositions | Blog Content Engine | ❌ FAILING | 14.0h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 3.9d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 13.3d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 16.0d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 1.8h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 4.6h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 0.8h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.5h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.5h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 0.9h ago | — |
| top11 | List factory (autonomous) | ✅ HEALTHY | 0.7h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 4.7h ago | — |
| top11 | Syndicate to Dev.to | ✅ HEALTHY | 13.1h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 17.1h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Scheduled Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending post from queue". https://github.com/horror5how/beyond-elevation/actions/runs/27275879912
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: STALLED after 3 auto-heals. . https://github.com/horror5how/beyond-elevation/actions/runs/27065236698
- **horror5how/getinpositions** → Blog Content Engine: FAILING after 3 auto-heals. job "publish". https://github.com/horror5how/getinpositions/actions/runs/27240054865
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27064337813
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
