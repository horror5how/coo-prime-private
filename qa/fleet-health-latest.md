🩺 **COO Fleet Health** — last check 2026-05-27T12:25:13.939Z

**13** scheduled routines · **8** healthy · **5** unhealthy · **2** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 5.4h ago | healing via rerun-failed-jobs |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 26.0d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 4.5h ago | healing via rerun-failed-jobs |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 2.2h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 2.0d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 1.7h ago | — |
| beyond-elevation | LinkedIn First-30-Min Engagement | ✅ HEALTHY | 0.5h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.1h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 0.6h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.8h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.8h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 18.7h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 4.6h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
