🩺 **COO Fleet Health** — last check 2026-06-07T08:06:51.043Z

**14** scheduled routines · **8** healthy · **6** unhealthy · **6** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 0.4h ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 18.1h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 10.2d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 12.9d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | List factory (autonomous) | ❌ FAILING | 3.1h ago | ESCALATED (3 heals failed) |
| top11 | Review Pulse — nightly refresh | ❌ FAILING | 0.4h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 22.9h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 14.1h ago | — |
| beyond-elevation | Daily Blog Draft Review Digest | ✅ HEALTHY | 17.4h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 20.1h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 2.0h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.5h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 16.4h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 13.8h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/27086477003
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27064337813
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → List factory (autonomous): FAILING after 3 auto-heals. job "produce" step "Commit + push (if anything changed)". https://github.com/horror5how/top11/actions/runs/27083227391
- **horror5how/top11** → Review Pulse — nightly refresh: FAILING after 3 auto-heals. job "refresh" step "Commit refreshed pulse". https://github.com/horror5how/top11/actions/runs/27086379420

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
