🩺 **COO Fleet Health** — last check 2026-05-29T10:58:14.846Z

**13** scheduled routines · **6** healthy · **7** unhealthy · **6** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | ❌ FAILING | 18.1h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 4.1h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 28.0d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 3.2h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 0.8h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 30.6h ago | heal failed (422 {"message":"Cannot trigger a 'workflow_dispatch' on a disabled workflow","documentation_url":"https://docs.github.com/rest/actions/workflows#create-a-workflow-d) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 4.0d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 0.4h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.1h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 23.2h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 2.5h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 2.6h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 3.8h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: FAILING after 3 auto-heals. job "digest" step "Send daily draft digest". https://github.com/horror5how/beyond-elevation/actions/runs/26589012591
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26622859257
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/26624935067
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/26631402229
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
