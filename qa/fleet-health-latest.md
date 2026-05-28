🩺 **COO Fleet Health** — last check 2026-05-28T15:20:46.287Z

**14** scheduled routines · **7** healthy · **7** unhealthy · **6** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | ⚪ NO_RUNS | — ago | healing via workflow_dispatch |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 8.5h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 27.1d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 7.6h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn First-30-Min Engagement | 🗑️ WORKFLOW_MISSING | 2.8h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 3.3h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 3.2d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 4.6h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.7h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 3.5h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 3.4h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 3.4h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 11.0h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 8.2h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26559557608
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/26561774499
- **horror5how/beyond-elevation** → LinkedIn First-30-Min Engagement: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/linkedin-engage.yml no longer on default branch. https://github.com/horror5how/beyond-elevation/actions/runs/26574739742
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/26573559620
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
