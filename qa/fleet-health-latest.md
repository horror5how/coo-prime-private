🩺 **COO Fleet Health** — last check 2026-05-26T14:44:40.438Z

**15** scheduled routines · **10** healthy · **5** unhealthy · **3** escalated

| repo | routine | status | last run | action |
|---|---|---|---|---|
| beyond-elevation | LinkedIn Carousel Posts (5× Daily) | ❌ FAILING | 25.1d ago | healing via rerun-failed-jobs |
| patent-ceo-cron | Patent CEO Daily Pusher | ❌ FAILING | 27.1h ago | healing via rerun-failed-jobs |
| patent-intel-platform | Daily LinkedIn Lead-Gen | 🗑️ WORKFLOW_MISSING | 22.7h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| qwoted-bot | Qwoted Auto-Pitch | 🗑️ WORKFLOW_MISSING | 5.8d ago | workflow file deleted — restore required (cannot auto-dispatch) |
| reddit-karma-warmup | Reddit karma warm-up — daily | 🗑️ WORKFLOW_MISSING | 22.8h ago | workflow file deleted — restore required (cannot auto-dispatch) |
| beyond-elevation | Daily AI & GitHub Digest Email | ✅ HEALTHY | 4.1h ago | — |
| beyond-elevation | LinkedIn Carousel Pipeline (Daily Queue) | ✅ HEALTHY | 8.0h ago | — |
| beyond-elevation | LinkedIn Content Pipeline (Daily Queue) | ✅ HEALTHY | 7.2h ago | — |
| beyond-elevation | LinkedIn First-30-Min Engagement | ✅ HEALTHY | 1.5h ago | — |
| beyond-elevation | LinkedIn Scheduled Posts (5× Daily) | ✅ HEALTHY | 0.9h ago | — |
| coo-prime-private | coo-cross-repo-watchdog | ✅ HEALTHY | 0.5h ago | — |
| coo-prime-private | coo-scheduler-watchdog | ✅ HEALTHY | 0.4h ago | — |
| coo-prime-private | coo-scheduler | ✅ HEALTHY | 1.1h ago | — |
| instagram-autopilot | autopilot-hourly | ✅ HEALTHY | 1.8h ago | — |
| top11 | Review Pulse — nightly refresh | ✅ HEALTHY | 7.8h ago | — |

### Needs a human / root-cause fix
- **horror5how/patent-intel-platform** → Daily LinkedIn Lead-Gen: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily-leadgen.yml no longer on default branch. https://github.com/horror5how/patent-intel-platform/actions/runs/26409364640
- **horror5how/qwoted-bot** → Qwoted Auto-Pitch: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/qwoted-bot.yml no longer on default branch. https://github.com/horror5how/qwoted-bot/actions/runs/26184791778
- **horror5how/reddit-karma-warmup** → Reddit karma warm-up — daily: WORKFLOW_MISSING after 3 auto-heals. file .github/workflows/daily-warmup.yml no longer on default branch. https://github.com/horror5how/reddit-karma-warmup/actions/runs/26408960859

_Auto-managed by coo-prime fleet-health. Healthy rows mean the routine ran and passed within 30h._
