🩺 **COO Fleet Health** — last check 2026-06-04T23:17:31.492Z

**17** scheduled routines · **9** healthy · **8** unhealthy · **7** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 15.9h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 34.5d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 4.1h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily Blog Draft Review Digest | 🗑️ WORKFLOW_MISSING | 7.0h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 1.5h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 7.8d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 10.5d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | List factory (autonomous) | ❌ FAILING | 1.4h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 12.8h ago | — |
| beyond-elevation | Daily Blog Draft Review Digest | ✅ HEALTHY | 1.5h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 15.1h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 9.0h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.0h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.0h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 12.3h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 15.2h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 18.3h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26937174784
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Scheduled Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending post from queue". https://github.com/horror5how/beyond-elevation/actions/runs/26973669569
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily-review-digest 2.yml no longer on default branch. https://github.com/horror5how/beyond-elevation/actions/runs/26964580425
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → List factory (autonomous): FAILING after 3 auto-heals. job "produce" step "Deploy to Vercel (production)". https://github.com/horror5how/top11/actions/runs/26981934802

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
