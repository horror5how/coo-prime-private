🩺 **COO Fleet Health** — last check 2026-06-02T17:08:52.400Z

**15** scheduled routines · **7** healthy · **8** unhealthy · **7** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | ❌ FAILING | 22.6h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 9.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 32.2d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 8.8h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 0.2h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 5.5d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 8.2d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | .github/workflows/list-factory.yml | ❌ FAILING | 2.3d ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 6.0h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 2.3h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 4.9h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 2.1h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 2.0h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 8.9h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 26.2h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: FAILING after 3 auto-heals. job "digest" step "Send daily draft digest". https://github.com/horror5how/beyond-elevation/actions/runs/26774237318
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26804862445
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/26807479228
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → .github/workflows/list-factory.yml: FAILING after 3 auto-heals. . https://github.com/horror5how/top11/actions/runs/26709775885

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
