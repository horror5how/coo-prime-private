🩺 **COO Fleet Health** — last check 2026-05-28T04:22:53.714Z

**13** scheduled routines · **7** healthy · **6** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 21.4h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 26.7d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 20.5h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 6.3h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 34.7h ago | healing via workflow_dispatch |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 2.7d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 17.7h ago | — |
| beyond-elevation | LinkedIn First-30-Min Engagement | ✅ HEALTHY | 4.4h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 9.2h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 16.6h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 4.3h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 4.3h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 20.6h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26496124866
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/26498442104
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/26541467583
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
