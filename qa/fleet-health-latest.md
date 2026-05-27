🩺 **COO Fleet Health** — last check 2026-05-27T21:06:13.509Z

**13** scheduled routines · **8** healthy · **5** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 14.1h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 26.4d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 13.2h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 0.7h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 2.4d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 10.4h ago | — |
| beyond-elevation | LinkedIn First-30-Min Engagement | ✅ HEALTHY | 0.5h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 1.9h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 9.3h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.5h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.5h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 27.4h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 13.3h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26496124866
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/26498442104
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/26536492708
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
