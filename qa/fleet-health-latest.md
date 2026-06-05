🩺 **COO Fleet Health** — last check 2026-06-05T04:41:27.773Z

**17** scheduled routines · **9** healthy · **8** unhealthy · **7** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 21.3h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 34.7d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 9.5h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily Blog Draft Review Digest | 🗑️ WORKFLOW_MISSING | 12.4h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 6.9h ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 8.0d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 10.7d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | List factory (autonomous) | ❌ FAILING | 6.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 18.2h ago | — |
| beyond-elevation | Daily Blog Draft Review Digest | ✅ HEALTHY | 6.9h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 20.5h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 14.4h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 3.2h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 3.2h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 17.7h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 20.6h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 23.7h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/26937174784
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Scheduled Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending post from queue". https://github.com/horror5how/beyond-elevation/actions/runs/26973669569
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily-review-digest 2.yml no longer on default branch. https://github.com/horror5how/beyond-elevation/actions/runs/26964580425
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → List factory (autonomous): FAILING after 3 auto-heals. job "produce" step "Deploy to Vercel (production)". https://github.com/horror5how/top11/actions/runs/26981934802

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
