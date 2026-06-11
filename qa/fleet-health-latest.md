🩺 **COO Fleet Health** — last check 2026-06-11T21:28:01.188Z

**15** scheduled routines · **10** healthy · **5** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | 🕒 STALLED | 5.3d ago | ESCALATED (3 heals failed) |
| getinpositions | Blog Content Engine | ❌ FAILING | 47.0h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 23.6h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 14.7d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 17.4d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 10.2h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 2.0h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 9.2h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.5h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.4h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 9.3h ago | — |
| top11 | List factory (autonomous) | ✅ HEALTHY | 2.2h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 13.1h ago | — |
| top11 | Syndicate to Dev.to | ✅ HEALTHY | 15.4h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 18.3h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: STALLED after 3 auto-heals. . https://github.com/horror5how/beyond-elevation/actions/runs/27065236698
- **horror5how/getinpositions** → Blog Content Engine: FAILING after 3 auto-heals. job "publish". https://github.com/horror5how/getinpositions/actions/runs/27240054865
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27308737965
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
