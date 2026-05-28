🩺 **COO Fleet Health** — last check 2026-05-28T12:39:18.528Z

**13** scheduled routines · **8** healthy · **5** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 5.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 27.0d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 4.9h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 0.6h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 3.0d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 1.9h ago | — |
| beyond-elevation | LinkedIn Engagement (UK 3×/day) | 🔄 RUNNING | -0.0h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.2h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 0.8h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.7h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.7h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 8.3h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 5.5h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26559557608
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/26561774499
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/26573559620
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
