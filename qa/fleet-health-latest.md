🩺 **COO Fleet Health** — last check 2026-05-27T10:14:04.263Z

**13** scheduled routines · **9** healthy · **4** unhealthy · **2** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 3.2h ago | healing via rerun-failed-jobs |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 25.9d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 2.3h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 46.6h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 23.6h ago | — |
| beyond-elevation | LinkedIn First-30-Min Engagement | ✅ HEALTHY | 1.8h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 15.0h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 20.0h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 3.6h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 3.9h ago | — |
| instagram-autopilot | autopilot-hourly | 🔄 RUNNING | 0.0h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 16.6h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 2.5h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
