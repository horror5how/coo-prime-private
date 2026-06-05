🩺 **COO Fleet Health** — last check 2026-06-05T14:53:29.789Z

**16** scheduled routines · **8** healthy · **8** unhealthy · **8** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 7.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 35.1d ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 6.9h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 1.0h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 4.8h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 8.4d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 11.1d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | List factory (autonomous) | ❌ FAILING | 3.3h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 4.3h ago | — |
| beyond-elevation | Daily Blog Draft Review Digest | ✅ HEALTHY | 17.1h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 0.8h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 2.1h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.4h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 3.5h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 7.1h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 3.3h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/27000777706
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/27002953589
- **horror5how/beyond-elevation** → LinkedIn Scheduled Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending post from queue". https://github.com/horror5how/beyond-elevation/actions/runs/27018823973
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run" step "Run autopilot (one hourly slot)". https://github.com/horror5how/instagram-autopilot/actions/runs/27008761636
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → List factory (autonomous): FAILING after 3 auto-heals. job "produce" step "Deploy to Vercel (production)". https://github.com/horror5how/top11/actions/runs/27012602768

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
