🩺 **COO Fleet Health** — last check 2026-06-08T18:21:47.271Z

**14** scheduled routines · **7** healthy · **7** unhealthy · **7** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 1.6h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 9.7h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily Blog Draft Review Digest | 🕒 STALLED | 2.2d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 2.2d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 11.6d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 14.3d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | Review Pulse — nightly refresh | ❌ FAILING | 9.9h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 6.6h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 5.7h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 2.2h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.5h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 5.9h ago | — |
| top11 | List factory (autonomous) | ✅ HEALTHY | 5.7h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 5.3h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Scheduled Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending post from queue". https://github.com/horror5how/beyond-elevation/actions/runs/27152902136
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/27126021373
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: STALLED after 3 auto-heals. . https://github.com/horror5how/beyond-elevation/actions/runs/27065236698
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27064337813
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → Review Pulse — nightly refresh: FAILING after 3 auto-heals. job "refresh" step "Commit refreshed pulse". https://github.com/horror5how/top11/actions/runs/27125264051

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
