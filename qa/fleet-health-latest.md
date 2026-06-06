🩺 **COO Fleet Health** — last check 2026-06-06T16:15:26.707Z

**16** scheduled routines · **8** healthy · **8** unhealthy · **7** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 9.5h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 9.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 36.2d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 2.2h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 9.5d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 12.2d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | List factory (autonomous) | ❌ FAILING | 2.1h ago | ESCALATED (3 heals failed) |
| top11 | Review Pulse — nightly refresh | ❌ FAILING | 9.6h ago | healing via rerun-failed-jobs |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 7.0h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 1.8h ago | — |
| beyond-elevation | Daily Blog Draft Review Digest | ✅ HEALTHY | 1.5h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 4.3h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.9h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.2h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 0.6h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 28.6h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/27055333420
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/27054985719
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27064337813
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → List factory (autonomous): FAILING after 3 auto-heals. job "produce". https://github.com/horror5how/top11/actions/runs/27064522841

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
