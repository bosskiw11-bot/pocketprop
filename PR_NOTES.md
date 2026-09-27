# PR: Completeness polish — photo skips + handover before gaps

**Branch:** `fix/completeness-photo-skips`  
**Version:** `2026.09.27-d` (index.html `APP_VERSION` + sw.js `VERSION`)  
**Base:** `main` @ `a807167` / `2026.09.27-c`

## What

### 1) Repair photo skips (mirror receipt toggle)
- New fields: `hasBeforePhotos` / `hasAfterPhotos` (default `true`)
- Same UI pattern as receipt: has/no toggle; hide upload grid when marked none
- Soft gaps: marked none ≠ gap; unmarked + missing photos → Work 完善度
- Receipt gap logic unchanged

### 2) Purchase / rental — 完善度 only checks 交接前
- Purchased usages + rental tenants: soft-gap missing before photos unless marked none
- No soft-gap for after photos; sold skipped this PR

### 3) Work 完善度 list UX
- Gap kinds: `before` | `after` | `receipt` | `handoverBefore`
- Open target: repair / usage / tenant editors

### 4) Out of scope
- Soft only — never blocks save
- No cloud/accounts/paywall
