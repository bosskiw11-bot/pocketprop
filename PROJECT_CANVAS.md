# PocketProp — Living Project Canvas

Updated: 2026-09-23  
**Pivot:** local-first cancelled as product architecture. PWA is reference only. Shipping product = iOS. See `PIVOT_IOS.md`.

Reference build (frozen): `2026.09.11-a` — `index.html` + `sw.js` + `manifest.webmanifest`

## 1. Position

iOS property OS for multi-unit landlords and serious homeowners (Ontario / B.C. first).

- System of record moves to iOS + cloud (CloudKit private DB default for v1; company cloud later)
- PWA / IndexedDB kept only as the rules and UX reference
- Evidence chain still: Task / Cycle → History (Before + After + Receipt + cost + tax kind)
- Account / iCloud allowed; write privacy copy before TestFlight

## 2. Current monolith

### Home
Properties, list/grid with a shared 3:2 map on top (no standalone Map tab), usage + tenant timelines, zone blueprint, lifetime maintenance by year (receipt / no receipt, operating vs capital tags), property ledger (owner / rental / hidden).

### Work
Cycles → Pending → History. Preset catalog only. Issue date + optional deadline on pending. Cycle completion opens the same repair form, then confirm next due. Successful pending completion deletes the task.

Dates use the phone’s local calendar day (`YYYY-MM-DD`), including “done today”, default issue date, overdue, and due-soon windows.

Work dots: settings master switch; overdue red / due-soon yellow; cycles and pending separate; bottom Work tab combines both.

### Tax
- Required `taxKind`: operating (default) vs capital.
- Settings → Tax worksheet PDF: year, property, PDF language; receipted rows with cost > 0; A4; not a T776.

### Data & privacy
- Light / full JSON backup; optional AES-GCM passphrase; import size cap; media URL allowlist; count confirm before overwrite
- Unused-blob cleanup, demo reset, three-step wipe (`ERASE`)
- Optional PIN lock (hash in localStorage). Forgot PIN = clear this site’s data, then restore a backup
- Address lookup discloses the address string to OpenStreetMap Nominatim; GPS only on tap
- Guest mode removed (parked)
- CDN scripts still loaded from the network (parked; no SRI yet)

### Brand
Dark themes Harbor / Brick / Fir (default Harbor). Wordmark PocketProp. No light/paper theme.

## 3. Plan vs now

| Original | Status |
|---|---|
| Property → Zone → Task → Log | Done |
| Before / After / Receipt | Done (6 per bucket, 20MB/file) |
| IndexedDB local-first | Done (blobs split out) |
| PWA | Done |
| Recurring checks | Done (no server push) |
| CRA taxonomy + export | Two-way tag + A4 worksheet |
| Backup passphrase / import allowlist | Done |
| App PIN | Done (UI lock only) |
| iCloud / Drive / stores | **Product is iOS now.** PWA frozen as reference. |
| Vendor CDN / SRI | Parked |

## 4. Explicitly out / parked

Out: appliance serial library; closing/insurance/lease vault; accounts; bank feeds; auto-reconciling ledger to repairs.

Parked: guest mode on PWA, offline map, photo-tune, copy-last-month ledger, CCA classes, CSV/Excel, SMS/email push, vendoring CDN + SRI, Google Drive background sync.

Private property records still never auto-publish to a social feed.

## 5. How to work on this file

Do not treat `index.html` as the place to add product features. Copy rules into the iOS project. Read `PIVOT_IOS.md` first.
