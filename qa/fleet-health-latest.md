🩺 **COO Fleet Health** — last check 2026-06-03T19:13:47.414Z

**16** scheduled routines · **10** healthy · **6** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | ❌ FAILING | 1.3h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 11.0h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 33.3d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 2.1h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 6.6d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 9.3d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 7.4h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 10.5h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 1.3h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 6.4h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 2.1h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 2.0h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 5.9h ago | — |
| top11 | List factory (autonomous) | 🔄 RUNNING | 5.9h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 10.7h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 22.1h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: FAILING after 3 auto-heals. job "digest" step "Send daily draft digest". https://github.com/horror5how/beyond-elevation/actions/runs/26903214567
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26872299625
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
