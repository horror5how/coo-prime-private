🩺 **COO Fleet Health** — last check 2026-05-27T05:23:58.170Z

**13** scheduled routines · **10** healthy · **3** unhealthy · **2** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 25.7d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 7.5h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 41.7h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 18.8h ago | — |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ✅ HEALTHY | 22.7h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 21.8h ago | — |
| beyond-elevation | LinkedIn First-30-Min Engagement | ✅ HEALTHY | 1.3h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 10.2h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 15.1h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 3.5h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 3.5h ago | — |
| patent-ceo-cron | Weekly Patent-CEO Sheet | ✅ HEALTHY | 11.7h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 22.4h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
