🩺 **COO Fleet Health** — last check 2026-05-26T22:26:32.448Z

**13** scheduled routines · **10** healthy · **3** unhealthy · **2** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 25.4d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 0.5h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 34.8h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 11.8h ago | — |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ✅ HEALTHY | 15.7h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 14.9h ago | — |
| beyond-elevation | LinkedIn First-30-Min Engagement | ✅ HEALTHY | 0.1h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 3.2h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 8.2h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.1h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.3h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 4.8h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 15.5h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
