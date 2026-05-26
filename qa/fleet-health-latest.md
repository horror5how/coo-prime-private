🩺 **COO Fleet Health** — last check 2026-05-26T20:58:15.904Z

**13** scheduled routines · **11** healthy · **2** unhealthy · **2** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 25.4d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 33.3h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 10.3h ago | — |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ✅ HEALTHY | 14.3h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 13.4h ago | — |
| beyond-elevation | LinkedIn First-30-Min Engagement | ✅ HEALTHY | 0.0h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 1.8h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 6.7h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.2h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.2h ago | — |
| instagram-autopilot | autopilot-hourly | ✅ HEALTHY | 4.9h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 3.3h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 14.0h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
