🩺 **COO Fleet Health** — last check 2026-06-13T18:17:42.670Z

**15** scheduled routines · **9** healthy · **6** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | 🕒 STALLED | 7.1d ago | ESCALATED (3 heals failed) |
| getinpositions | Blog Content Engine | ❌ FAILING | 3.8d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 2.9d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 16.6d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 19.3d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | Weekly index audit | 🕒 STALLED | 30.8h ago | healing via workflow_dispatch |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 8.5h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.3h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 6.1h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.4h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.3h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 7.9h ago | — |
| top11 | List factory (autonomous) | ✅ HEALTHY | 0.5h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 11.1h ago | — |
| top11 | Syndicate to Dev.to | ✅ HEALTHY | 8.6h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: STALLED after 3 auto-heals. . https://github.com/horror5how/beyond-elevation/actions/runs/27065236698
- **horror5how/getinpositions** → Blog Content Engine: FAILING after 3 auto-heals. job "publish". https://github.com/horror5how/getinpositions/actions/runs/27240054865
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27308737965
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
