# PocketProp pivot — 2026-09-23

**Founder decision / 创始人决定（当日生效）**

Local-first is no longer the product architecture.  
本地优先不再是产品架构。

The HTML / PWA app (`index.html` + `sw.js` + Pages) is **reference only**. Do not treat it as the shipping product. Do not spend the week polishing PWA sync workarounds.  
HTML / PWA（`index.html` + `sw.js` + Pages）**只作参考**。不再当正品维护。不要再把一周配额花在 PWA 同步权宜之计上。

The product is an **iOS app**, starting now. Work with Grok Bot on that track.  
正品是 **iOS App**，现在开始。与 Grok Bot 在这条线上做。

---

## What this changes / 改了什么

| Before / 以前 | After / 现在 |
|---|---|
| IndexedDB on device is the system of record | iOS local store + cloud of record (schema TBD: CloudKit first, company cloud later) |
| No account, no PocketProp server | Account / iCloud / server are allowed by design. Write a privacy note before first TestFlight. |
| CPO job = block login walls | CPO job = keep the evidence chain and offline-usable core; login is allowed |
| GitHub Pages PWA is “live product” | Pages stays up as a demo / reference. Ship target is TestFlight → App Store |
| “Do not start iOS until users exist” | iOS starts now. Growth still means real landlords with real houses, not download vanity |

## What does **not** change / 先不动

- Brand name **PocketProp**; do not translate it.
- Evidence chain: property → zone → cycle/pending → history with before / after / receipt + tax kind.
- Canada first (Ontario, B.C.). Tax PDF is a worksheet, not a T776 filing.
- Dark themes Harbor / Brick / Fir. No Steel, no paper theme unless asked.
- Founder still owns Apple Developer, signing, TestFlight, money.
- Photos, receipts, PIN/passwords are not public. Private house files still do not auto-publish to a social feed.
- Week cap: three active tasks for the whole bench.

## PWA freeze / 网页版冻结

Keep the files. Do not delete. Use them to copy business rules into Swift / SwiftUI (or Capacitor, if the iOS bot keeps that shell).

保留文件，不要删。用来把业务规则抄进 Swift / SwiftUI（或 Bot 继续用的 Capacitor 壳）。

Do not: add features only to `index.html`, inject themes via `sw.js`, or promise Pages as the iPhone product.

不要：只给 `index.html` 加功能、用 `sw.js` 打补丁、或把 Pages 说成 iPhone 正品。

## First iOS bar / iOS 第一道门槛

Still the store-bar from `IOS_ICLOUD_PREP.md`, now as the **product** bar, not a side quest:

- Text sync across the owner’s devices (CloudKit private DB is the default v1 guess)
- System camera slots for before / after / receipt
- Device lock via Face ID
- Home-screen widget: overdue + due-soon
- Share sheet for the tax worksheet
- Does not feel like a Safari tab

Human on Mini: Apple Developer + Xcode + a phone. Bot: screens, models, CloudKit records, copy.

人在 Mini：开发者账号、Xcode、真机。Bot：界面、模型、CloudKit 记录、文案。

## Open questions for the iOS bot / 留给 iOS Bot 的问题

1. Native SwiftUI vs Capacitor wrapping the existing Vue rules.
2. Cloud of record: iCloud only vs PocketProp backend in v1.
3. Guest-on-device mode: keep a no-login slice, or login from screen one.
4. What happens to the GitHub Pages demo URL in public copy.

Until those are written down, default: **SwiftUI + CloudKit private database + optional no-login preview that cannot sync.**
