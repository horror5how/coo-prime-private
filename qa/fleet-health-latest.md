🩺 **COO Fleet Health** — last check 2026-06-07T14:00:00.904Z

**14** scheduled routines · **8** healthy · **6** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 1.7h ago | healing via rerun-failed-jobs |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 6.2h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 24.0h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 10.4d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 13.1d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | Review Pulse — nightly refresh | ❌ FAILING | 6.3h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 4.1h ago | — |
| beyond-elevation | Daily Blog Draft Review Digest | ✅ HEALTHY | 23.3h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 1.8h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.9h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.8h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 3.6h ago | — |
| top11 | List factory (autonomous) | ✅ HEALTHY | 3.4h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 19.7h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/27086477003
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27064337813
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → Review Pulse — nightly refresh: FAILING after 3 auto-heals. job "refresh" step "Commit refreshed pulse". https://github.com/horror5how/top11/actions/runs/27086379420

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
