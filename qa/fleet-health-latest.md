🩺 **COO Fleet Health** — last check 2026-06-09T19:24:27.938Z

**14** scheduled routines · **6** healthy · **8** unhealthy · **7** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 0.3h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 11.8h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily Blog Draft Review Digest | 🕒 STALLED | 3.2d ago | ESCALATED (3 heals failed) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 3.2d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 12.6d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 15.3d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | Review Pulse — nightly refresh | ❌ FAILING | 12.4h ago | ESCALATED (3 heals failed) |
| top11 | Weekly index audit | 🕒 STALLED | 30.4h ago | healing via workflow_dispatch |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 9.0h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 5.4h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 1.6h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 0.8h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 8.5h ago | — |
| top11 | List factory (autonomous) | ✅ HEALTHY | 1.0h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Scheduled Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending post from queue". https://github.com/horror5how/beyond-elevation/actions/runs/27229218300
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/27191163582
- **horror5how/beyond-elevation** → Daily Blog Draft Review Digest: STALLED after 3 auto-heals. . https://github.com/horror5how/beyond-elevation/actions/runs/27065236698
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27064337813
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → Review Pulse — nightly refresh: FAILING after 3 auto-heals. job "refresh" step "Commit refreshed pulse". https://github.com/horror5how/top11/actions/runs/27189564880

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
