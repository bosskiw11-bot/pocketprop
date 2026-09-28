# PR: Hide purchase/rental after-handover photo UI

**Version:** `2026.09.27-e` (index.html `APP_VERSION` + sw.js `VERSION`)  
**Base:** live `2026.09.27-d`

## What / 改动

### EN
- **Purchase (`purchased`) + rental tenants:** remove 「交接后」/ after-handover photo UI — upload slots, labels, and timeline view chips for after photos.
- **Keep** 交接前 / before photos and the existing `hasBeforePhotos` / 「无交接前照」 toggle for purchase and tenants.
- **Sold (`sold`):** after-photo upload UI and timeline after chip unchanged (before + after).
- **Repair:** `hasAfterPhotos` / after photo UI unchanged.
- **Data:** do not wipe existing `afterPhotos` arrays on load/save — only hide UI for purchased + tenants.
- **Completeness:** still soft-gaps handover **before** only for purchase/rental; no after gaps added. Soft only — never blocks save.
- **Copy:** `gapListHint` (EN) tightened to say “repair before/after” so it does not imply purchase/rental after photos.

### 中文
- **买入 / 出租租期：** 去掉「交接后」照片 UI（上传格、标签、时间线查看芯片）。
- **保留**「交接前」照片与「有/无交接前照」开关。
- **卖出：** 仍保留交接前+交接后上传与时间线芯片。
- **维修：** 修后照逻辑不动。
- **数据：** 不清理已保存的 `afterPhotos`，仅隐藏买入/租期 UI。
- **完善度：** 买入/出租仍只软检查交接前；不加交接后缺口；仍不拦截保存。
- **文案：** EN `gapListHint` 明确为维修修前/修后，避免被理解成买入/出租也要交接后照。
