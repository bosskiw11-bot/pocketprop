# Noise reduction pack (2026.09.29-b)

## Summary
Reduce first-screen / settings noise without touching evidence-chain hearts (房史/租客分枝, photo/gap rules, rooms work list, cycle/todo/历史税, contacts, local backup + CSV).

## Changes
1. **Map** — home property map hidden by default (`pocket_prop_map_visible`; unset → off). Toggle in Settings → 显示 / Display. Saved preference respected when present.
2. **实验·本年健康** — removed from property main UI via `SHOW_YEAR_HEALTH_UI: false` (computed/helpers kept).
3. **房屋账本** — bottom fold on property detail, default closed (`ledgerExpanded`); unset `cashflowMode` defaults to `hidden` (existing per-property mode still respected).
4. **显示 group** — List/Grid, map, theme, GPS, work red dots gathered under Settings → Display. Defaults when unset: views `['list']`, map off, GPS off (`pocket_prop_gps` / legacy `my_home_os_gps` only on when explicitly `'true'`), workDots off, theme harbor.
5. **工作目录 / 现金流科目 / 区域管理器** — under Settings → 进阶 → collapsed **高级·专家** (`expertExpanded`, default closed).
6. **Export** — Accounting CSV primary (highlighted); tax-season PDF demoted with 次要 / Secondary label and muted row.
7. **Demo / wipe** — empty-state 「加载示例」kept; settings load-demo + wipe moved into Expert fold, muted (not red eye-catching).
8. **Cycle SMS/email reminder** — UI copy + logic removed (`setRoutineNotify` / draft sms/mailto / phone/email fields / persist keys). Work red dots untouched.

## Untouched hearts
房史/租客分枝, photo rules + 完善度 soft gaps, rooms/areas work list, cycle/todo/历史税 split, contacts, local backup + CSV primary export.

## localStorage keys touched (defaults only when unset)
- `pocket_prop_map_visible` (new; default hidden)
- `pocket_prop_enabled_views` (default `['list']` when missing)
- `pocket_prop_gps` / `my_home_os_gps` (default off when missing)
- Per-property `cashflowMode` unset → `hidden`

## Version
`APP_VERSION` / SW `VERSION` → `2026.09.29-b`
