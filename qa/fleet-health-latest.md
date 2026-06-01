🩺 **COO Fleet Health** — last check 2026-06-01T18:45:03.792Z

**15** scheduled routines · **8** healthy · **7** unhealthy · **7** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | ❌ FAILING | 0.2h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 10.2h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 31.3d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 0.5h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 4.6d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 7.3d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | .github/workflows/list-factory.yml | ❌ FAILING | 32.6h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 6.3h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 9.6h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.2h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 5.0h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.5h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.5h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 9.8h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 3.8h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: FAILING after 3 auto-heals. job "digest" step "Send daily draft digest". https://github.com/horror5how/beyond-elevation/actions/runs/26774237318
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26743993721
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/26773155306
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → .github/workflows/list-factory.yml: FAILING after 3 auto-heals. . https://github.com/horror5how/top11/actions/runs/26709775885

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
