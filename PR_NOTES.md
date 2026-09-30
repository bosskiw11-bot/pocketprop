# Receipt binder / 收据合订税季夹 (2026.09.30-a)

## Summary
Upgrade the HTML tax-prep print/PDF into a **收据合订税季夹** (receipt binder / tax-season folder): one printable PDF that can replace scattered receipts. Accounting CSV stays the primary numbers path; this PDF remains secondary.

## Entry point
Settings → Backup & restore → **收据合订税季夹** / Receipt binder (tax folder) (still demoted with 次要 / Secondary). Opens the existing browser print-to-PDF sheet (`openTaxExport` → `printTaxPdf` / `window.print()`).

## Filters
- **Year** (default: current calendar year; ALL available)
- **Property / 房** (optional; ALL or one house)
- PDF language (zh/en) unchanged

## Binder contents
1. **Tax-season checklist** (6 items: CSV primary, year/房 filter, Op vs Cap review, receipts or 无收据, print binder, full backup)
2. **Operating vs capital** totals + per-property sections (existing `taxKind`)
3. **All repairs** in filter (not receipt-only): embed compressed receipt images when present
4. **Marked 无收据** (`hasReceipt === false`): placeholder note only — **no fake image**
5. **PDF receipts**: note only (“open in app”); not rasterized into the binder
6. Receipt marked but no image: short note, no fake image

## Embed / compress
- On open and on year/property change: `prepareTaxBinderEmbeds()`
- Images: canvas resize max **960px**, JPEG quality **0.72**
- Cap: **48** embedded images per binder (`taxBinderImageLimit`); further images noted as skipped
- Uses existing media resolve path (`getRepairReceiptPhotos` / blob refs); no new CDN dependency

## Copy
- EN: Tax worksheet → Receipt binder (tax folder); disclaimer retargeted to secondary receipt folder
- ZH: 税务备查 PDF → **收据合订税季夹**; 税季备查夹 wording; CSV still primary in disclaimer

## Untouched
Backup/restore, photo soft-gaps, rooms/areas, noise-pack settings IA (CSV primary highlight + demoted PDF row kept).

## Limits
- PDF attachments are notes, not embedded pages
- Large seasons may hit the 48-image compress cap
- Print quality depends on the device’s Print → Save as PDF

## Version
`APP_VERSION` / SW `VERSION` → `2026.09.30-a`
