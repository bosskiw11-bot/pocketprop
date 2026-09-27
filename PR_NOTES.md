# PR: CPO polish — 房史 rename, year-health demotion, Work 完善度 tab

**Branch:** `fix/cpo-polish-20260927`  
**Version:** `2026.09.27-c` (index.html `APP_VERSION` + sw.js `VERSION`)  
**Base:** `main` @ `4f3c129` / `2026.09.27-b`

## What

### 1) Rename 用途时间线 → 房史 (copy only)
- i18n `usageTimeline`: zh **房史**, en **Property history**
- `linkedFromHint` updated to say 房史 / property history
- HTML comment → `<!-- Property history (房史) -->`
- Repair nesting in the timeline **unchanged** (no standalone 房史 section restored)

### 2) Downgrade 「本年健康」
- Removed always-visible year-health card from top of property detail
- Collapsed experimental disclosure near bottom (after ledger), default `yearHealthExpanded: false`
- Labels: zh `实验 · 本年健康`, en `Experimental · Year health` + incomplete-books disclaimer
- Computation (`getPropertyYearHealth` / `propertyYearHealth`) kept
- Missing-receipts jump → Work **完善度** tab; open todos → tasks

### 3) Soft gaps → Work 4th tab (`workSubTab === 'gaps'`)
- Removed property-detail soft-checklist card
- Removed settings daily soft-checklist block (backup health + tax PDF + accounting CSV kept)
- New Work tab: zh **完善度**, en **Check** (section title **记录检查** / **Record check**)
- Hint clarifies check tool ≠ todo queue
- Respects `selectedPropertyId`; property chips show gap counts on this tab
- `jumpToSoftGaps` → Work gaps tab (no settings)
- FAB on gaps: toast only (`toastGapsNotQueue`), no create modal

### 4) Out of scope (unchanged)
- No cloud/accounts/paywall/tenant intake/contractor marketplace/insurance/equipment ledger
- Local-first; backup health + accounting CSV + tax PDF stay
