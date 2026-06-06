🩺 **COO Fleet Health** — last check 2026-06-06T20:17:38.060Z

**16** scheduled routines · **8** healthy · **8** unhealthy · **8** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 13.5h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ❌ FAILING | 13.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 36.4d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 6.2h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 9.7d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 12.4d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | List factory (autonomous) | ❌ FAILING | 2.7h ago | ESCALATED (3 heals failed) |
| top11 | Review Pulse — nightly refresh | ❌ FAILING | 13.6h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 11.1h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 2.3h ago | — |
| beyond-elevation | Daily Blog Draft Review Digest | ✅ HEALTHY | 5.6h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 8.3h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.0h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.0h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 4.6h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 2.0h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/27055333420
- **horror5how/beyond-elevation** → LinkedIn Carousel Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily carousel queue". https://github.com/horror5how/beyond-elevation/actions/runs/27054985719
- **horror5how/beyond-elevation** → LinkedIn Carousel Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending carousel". https://github.com/horror5how/beyond-elevation/actions/runs/25213249715
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27064337813
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → List factory (autonomous): FAILING after 3 auto-heals. job "produce" step "Commit + push (if anything changed)". https://github.com/horror5how/top11/actions/runs/27069226677
- **horror5how/top11** → Review Pulse — nightly refresh: FAILING after 3 auto-heals. job "refresh" step "Commit refreshed pulse". https://github.com/horror5how/top11/actions/runs/27055271920

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
