# PR: Sold handover-before soft gap + tenant move-out (退租前) photos

**Version:** `2026.09.27-f` (index.html `APP_VERSION` + sw.js `VERSION`)  
**Base:** live `2026.09.27-e`

## What / 改动

### EN
- **Sold:** soft-gap handover-before when unmarked-none + missing before photos (same as purchase). Sold after UI stays; no sold-after soft gap.
- **Tenant lease end (退租):** when `endDate` set, show 退租前 photos (`afterPhotos`) + `hasAfterPhotos` / 无照片 toggle. Soft gap `moveOutBefore`. Hidden when no endDate.
- Purchase + rental move-in still only 交接前; repair unchanged. Soft only.

### 中文
- **卖房：** 完善度软检查交接前（可标无照片）；卖房交接后不上完善度。
- **退租：** 有结束日显示退租前照 + 无照片标记；缺图进完善度。
- 买入/入住仍只查交接前；维修不动；不拦保存。
