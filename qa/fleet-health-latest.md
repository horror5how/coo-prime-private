🩺 **COO Fleet Health** — last check 2026-06-03T23:53:32.927Z

**16** scheduled routines · **9** healthy · **7** unhealthy · **5** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | Daily Blog Draft Review Digest | ❌ FAILING | 5.9h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 15.7h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 33.5d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 3.7h ago | healing via rerun-failed-jobs |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 1.4h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 6.8d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 9.5d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 12.1h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 15.1h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 11.1h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.3h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.2h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 10.5h ago | — |
| top11 | List factory (autonomous) | 🔄 RUNNING | 1.3h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 15.3h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 26.7h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: FAILING after 3 auto-heals. job "digest" step "Send daily draft digest". https://github.com/horror5how/beyond-elevation/actions/runs/26903214567
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26872299625
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
