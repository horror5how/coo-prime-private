🩺 **COO Fleet Health** — last check 2026-06-05T11:36:23.263Z

**17** scheduled routines · **7** healthy · **10** unhealthy · **8** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 4.5h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 35.0d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 3.6h ago | healing via rerun-failed-jobs |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 0.7h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily Blog Draft Review Digest | 🗑️ WORKFLOW_MISSING | 19.3h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 1.5h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 8.3d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 11.0d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | List factory (autonomous) | ❌ FAILING | 6.8h ago | ESCALATED (3 heals failed) |
| top11 | Weekly index audit | 🕒 STALLED | 30.6h ago | healing via workflow_dispatch |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 1.0h ago | — |
| beyond-elevation | Daily Blog Draft Review Digest | ✅ HEALTHY | 13.8h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 0.0h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.5h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.4h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 0.2h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 3.8h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/27000777706
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Scheduled Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending post from queue". https://github.com/horror5how/beyond-elevation/actions/runs/27010667459
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily-review-digest 2.yml no longer on default branch. https://github.com/horror5how/beyond-elevation/actions/runs/26964580425
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/27008761636
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → List factory (autonomous): FAILING after 3 auto-heals. job "produce" step "Deploy to Vercel (production)". https://github.com/horror5how/top11/actions/runs/26996046661

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
