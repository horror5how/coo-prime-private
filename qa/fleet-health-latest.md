🩺 **COO Fleet Health** — last check 2026-05-28T19:41:32.461Z

**14** scheduled routines · **7** healthy · **7** unhealthy · **7** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | ❌ FAILING | 2.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 12.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 27.3d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 11.9h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn First-30-Min Engagement | 🗑️ WORKFLOW_MISSING | 7.2h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 3.4h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 3.3d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 9.0h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.2h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 7.9h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.0h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.6h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 15.3h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 12.6h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: FAILING after 3 auto-heals. job "digest" step "Send daily draft digest". https://github.com/horror5how/beyond-elevation/actions/runs/26589012591
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26559557608
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/26561774499
- **horror5how/beyond-elevation** → LinkedIn First-30-Min Engagement: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/linkedin-engage.yml no longer on default branch. https://github.com/horror5how/beyond-elevation/actions/runs/26574739742
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/26587354633
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
