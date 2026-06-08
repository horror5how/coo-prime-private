🩺 **COO Fleet Health** — last check 2026-06-08T06:01:02.174Z

**14** scheduled routines · **7** healthy · **7** unhealthy · **6** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ❌ FAILING | 12.1h ago | ESCALATED (3 heals failed) |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ❌ FAILING | 22.3h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily Blog Draft Review Digest | 🕒 STALLED | 39.3h ago | heal failed (422 {"message":"Cannot trigger a 'workflow_dispatch' on a disabled workflow","documentation_url":"https://docs.github.com/rest/actions/workflows#create-a-workflow-d) |
| instagram-autopilot | autopilot-hourly | ❌ FAILING | 40.0h ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Weekly Patent-CEO Sheet | 🕒 STALLED | 11.1d ago | ESCALATED (3 heals failed) |
| patent-ceo-cron | Patent CEO Daily Pusher | 🗑️ WORKFLOW_MISSING | 13.8d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| top11 | Review Pulse — nightly refresh | ❌ FAILING | 22.3h ago | ESCALATED (3 heals failed) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 20.1h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 17.8h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 4.0h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.9h ago | — |
| top11 | CEO daily — Top Eleven growth loop | ✅ HEALTHY | 19.6h ago | — |
| top11 | List factory (autonomous) | ✅ HEALTHY | 1.0h ago | — |
| top11 | Weekly index audit | ✅ HEALTHY | 5.7h ago | — |

### Needs a human / root-cause fix
- **horror5how/beyond-elevation** → LinkedIn Scheduled Posts (5× Daily): FAILING after 3 auto-heals. job "post" step "Publish next pending post from queue". https://github.com/horror5how/beyond-elevation/actions/runs/27100329271
- **horror5how/beyond-elevation** → LinkedIn Content Pipeline (Daily Queue): FAILING after 3 auto-heals. job "generate" step "Generate daily queue". https://github.com/horror5how/beyond-elevation/actions/runs/27086477003
- **horror5how/instagram-autopilot** → autopilot-hourly: FAILING after 3 auto-heals. job "run". https://github.com/horror5how/instagram-autopilot/actions/runs/27064337813
- **horror5how/patent-ceo-cron** → Weekly Patent-CEO Sheet: STALLED after 3 auto-heals. . https://github.com/horror5how/patent-ceo-cron/actions/runs/26554528349
- **horror5how/patent-ceo-cron** → Patent CEO Daily Pusher: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily.yml no longer on default branch. https://github.com/horror5how/patent-ceo-cron/actions/runs/26398604768
- **horror5how/top11** → Review Pulse — nightly refresh: FAILING after 3 auto-heals. job "refresh" step "Commit refreshed pulse". https://github.com/horror5how/top11/actions/runs/27086379420

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
