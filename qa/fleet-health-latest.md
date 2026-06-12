🩺 **COO Fleet Health** — last check 2026-06-12T19:16:29.129Z

**15** scheduled routines · **10** healthy · **5** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | 🕒 STALLED | 6.2d ago | ESCALATED (3 heals failed) |
| getinpositions | Blog Content Engine | ❌ FAILING | 2.9d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 45.4h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 15.6d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 18.3d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 8.4h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.3h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 7.4h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.4h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.3h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 7.6h ago | — |
| top11 | List factory (autonomous) | ✅ HEALTHY | 0.9h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 11.2h ago | — |
| top11 | Syndicate to Dev.to | ✅ HEALTHY | 8.4h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 7.7h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: STALLED after 3 auto-heals. . https://github.com/horror5how/beyond-elevation/actions/runs/27065236698
- **horror5how/getinpositions** → Blog Content Engine: FAILING after 3 auto-heals. job "publish". https://github.com/horror5how/getinpositions/actions/runs/27240054865
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27308737965
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
