# PocketProp — Project & Grok Bot Brief
# PocketProp — 项目与 Grok Bot 说明

Updated / 更新日期: 2026-09-23  
Live PWA / 线上地址: https://bosskiw11-bot.github.io/pocketprop/  
Repo / 仓库: https://github.com/bosskiw11-bot/pocketprop  
Build on Pages / 线上构建号: `2026.09.11-a` (`index.html`) + service worker `2026.09.14-c`

This file is the current operating picture. English and Chinese sit in the same section so a person or a bot can read either language without a second document.

本文是当前作战图。同一节里中英并列，人或 Bot 不必再开第二份文件。

---

## 1. Product / 产品

**EN.** PocketProp is a local-first property OS for multi-unit landlords and serious homeowners in Canada (Ontario and B.C. first). Data stays on the device (IndexedDB + separate media blobs). There is no PocketProp server and no object-storage bill. The core loop is an evidence chain: pending work or a cycle → history with before photos, after photos, receipt, cost, and a tax kind (operating vs capital).

**ZH.** PocketProp 是本地优先的房屋操作系统，面向加拿大（先做安省、BC）的多套物业房东和认真管房的业主。数据留在本机（IndexedDB + 独立照片库）。没有 PocketProp 服务器，也没有对象存储账单。主线是证据链：待办或周期 → 历史（修前图、修后图、收据、费用、税务档：运营费用 / 资本开支）。

Brand / 品牌

- Name stays **PocketProp** in both languages. Do not translate the product name.  
  中英界面都用 **PocketProp**，不翻译产品名。
- Dark themes only: Harbor / Brick / Fir (default Harbor). A fourth “Steel” theme was tried and **reverted**. No light / paper theme.  
  仅深色三套：港湾 / 砖色 / 杉（默认港湾）。第四套「钢青」试过已**撤回**。不做浅色纸底。

---

## 2. What ships today / 现在已上线的能力

**EN — Home.** Properties; list and grid share one 3:2 map on top (no standalone Map tab); usage and tenant timelines; zone blueprint; lifetime maintenance by year (with / without receipt; operating vs capital tags); property ledger with three switch positions: rental cash flow, owner-occupier expenses, hidden. Title “房屋账本 / Property ledger” stays visible above the switch.

**ZH — 房屋页。** 房产列表；列表与网格共用顶部 3:2 地图（已去掉独立地图页）；用途与租客时间线；分区平面；按年累计维护（有/无收据，维护保养 / 资产改良）；房屋账本三档：出租现金流、自住开销、隐藏。滑钮上方始终显示账本节标题。

**EN — Work.** Order of pages: Cycles → Pending → History. Catalog is preset only (edit names in Settings). Pending has issue date first and optional deadline. Completing a cycle or a pending item opens the same repair editor (category already bound; tax kind required). After a cycle save, confirm next due. A finished pending task is deleted from the device list so it does not linger. Cycle cards in history show a cycle tag. Local calendar dates (`YYYY-MM-DD`), not UTC “today”.

**ZH — 工作页。** 顺序：周期 → 待办 → 历史。任务与分类全部预设（设置里改名）。待办第一行是问题日期，可选截止日期。完成周期或待办都进入同一维修编辑页（分类已绑定；税务档必选）。周期保存后再确认下次日期。待办保存进历史后从本机待办列表删除。历史里的周期记录带 cycle 标签。日期用手机本地日历日，不用 UTC 的「今天」。

**EN — Tax.** Required `taxKind`: operating (default) or capital. Settings → tax worksheet PDF: year, property, EN or ZH; receipted rows with cost > 0 only; A4; columns aligned; not a CRA T776.

**ZH — 税务。** 必选税务档：运营费用（默认）或资本开支。设置里导出工作底稿 PDF：年份、房屋、中/英文；只含有收据且金额大于 0；A4；列对齐。不是 T776 申报表。

**EN — Privacy & lock.** Light or full JSON backup; optional AES-GCM passphrase; import size cap and media-URL allowlist; unused-blob cleanup; three-step wipe (`ERASE`). Optional PIN locks the screen only — it does not encrypt the database. Forgot PIN = delete this site’s data (home-screen icon **and** `github.io` website data) then restore a backup. Address lookup sends the address string to OpenStreetMap Nominatim. GPS only when the user taps locate.

**ZH — 隐私与锁。** 轻备份 / 完整备份；可选口令（AES-GCM）；导入体积上限与媒体地址白名单；清理未用照片；三步清空（输入 ERASE）。可选 PIN 只锁屏幕，不加密数据库。忘记 PIN = 删主屏图标 **并且** 清 `github.io` 网站数据，再用备份恢复。按地址打点会把地址发给 OpenStreetMap。只有点定位才要 GPS。

---

## 3. Intentional gaps / 明确不做与停放

**Out / 不做:** appliance serial library; closing / insurance / lease vault; bank accounts and feeds; auto-tying the ledger to repair totals.

**Parked / 停放:** guest mode; offline map tiles; photo fine-tuning; copy-last-month ledger; CCA class breakdown; CSV / Excel export; SMS / email push; vendoring CDN + SRI; Google Drive background sync.

**Door left open / 门留着先不建:** optional property community and a later online edition. The local ledger must keep working with no account. Private house records never auto-publish.

**Future shape / 未来形态（未做登录页）:** one app; guest = device only (free); member = opt-in iCloud on the user’s quota, then maybe a company cloud. Growth of real users comes before monetization.

---

## 4. iOS store app / 商店版

**EN.** iOS is the next native product, not Android first. Hardware is ready: Mac mini M4 (compile) and 13" MacBook Air M5 (TestFlight on the phone). Skeleton lives in `artifacts/native/` (Capacitor id `ca.pocketprop.app`, CloudKit stubs, Face ID stub, widget snapshot). The PWA remains the guest / Android / no-store edition.

Success is not “it listed.” Success is: a landlord would rather open the store app every day than Safari. TestFlight must include iCloud **text** sync, system camera slots, Face ID instead of typing the PIN, a home-screen widget (overdue + due-soon), system share for the tax PDF, and gestures that do not feel like a browser. Photos stay on-device in v1. Do not ship an empty wrapper (App Store 4.2). Watch, AR, and iMessage are out of year one.

Xcode, Apple Developer ($99 USD / year), signing, and a physical iPhone are human steps. The bot writes glue and docs; it cannot produce a signed `.ipa` from this chat.

**ZH.** 先做 iOS，安卓不并行。硬件已有：Mac mini M4 编译，13 寸 Air M5 出门连真机。骨架在 `artifacts/native/`（Capacitor、CloudKit 草稿、Face ID、小组件写入）。PWA 继续给游客、安卓、不愿下商店的人用。

成功标准不是「上架了」，而是房东更愿意每天打开商店版而不是 Safari。进 TestFlight 就必须有：iCloud **文字**同步、系统分槽相机、Face ID 代替手输 PIN、主屏过期/快到期组件、税务 PDF 走系统分享、手势不像浏览器。照片 v1 仍本机。禁止无同步的空壳（4.2）。手表、AR、iMessage 第一年不做。

Xcode、开发者年费、证书、真机是人的步骤。Bot 写胶水和文稿，不能在这个对话里签出 `.ipa`。

Details: `IOS_ICLOUD_PREP.md` and `native/README.md`.

---

## 5. Grok Bot company design / Grok Bot 无人公司设计

### 5.1 Why a bot company / 为什么要用 Bot 公司

**EN.** The founder wants an unmanned bench that can keep shipping, writing, and chasing real users without waiting for a hire. Bots do not replace the founder on Apple accounts, money, or “ship to the store.” They replace the idle gap between decisions.

**ZH.** 创始人要一条能持续改产品、写内容、找真用户的无人工作台，而不是先招人。Bot 不能代替创始人管苹果账号、付钱、点上架。它们补的是「决定已下、中间却空着」的那段。

### 5.2 Roles / 角色

Keep roles physically split so one chat does not swell into an unreadable context.

角色必须拆开，避免单对话把上下文撑爆。

| Role / 角色 | Job / 职责 | Must not / 禁止 |
|---|---|---|
| **CEO (founder)** | Priority, money, Apple ID, TestFlight, “ship or wait.” 拍板、付钱、账号、发不发版。 | Do not ask a bot to pretend it signed the app. 不要让 Bot 假装已经签包。 |
| **CPO / 守本地优先** | Every feature must still work offline with no account. 每个功能离线、无账号仍能用。 | No silent login wall. 不准默默加上登录墙。 |
| **Chief of staff / 幕僮长** | Daily 10-line status: done / blocked / next three. 每日十行：已做 / 卡住 / 下一件三件事。 | No essays. 不准写长文充数。 |
| **Engineer / 主程** | Edit `index.html` / `sw.js` / `native/` stubs; keep VERSION in lockstep. 改代码，版本号锁步。 | Do not invent a second app. 不准另起一套产品。 |
| **QA / 测试官** | Walk the evidence-chain and backup/PIN paths; write the test note. 走证据链和备份/PIN。 | Do not “test” by only reading the canvas. 不准只读文档就叫测过。 |
| **Growth / 增长** | Define a real user: weekly open + a real property + at least one task or history or backup. 真用户 = 每周打开 + 真房子 + 至少一条待办/历史/备份。 | Downloads are not the KPI. 下载量不是指标。 |
| **Content / 内容** | Ontario / B.C. landlord language; tax worksheet help; short how-tos. 安省/BC 房东口吻的说明。 | No CRA-filing claims. 不准写成「可直接报税」。 |
| **BD / 合作** | Later: inspectors, small contractors. 以后才碰师傅和检查。 | Not while the user base is still tiny. 用户还少时不要铺。 |

### 5.3 Operating rules / 运转规则

**EN.**

1. One week, at most **three** active tasks across the whole bench. Everything else stays on the parked list.
2. Strategy talk and code edits do not share a bloated thread. Snapshot the architecture into this file (or the canvas) before starting a new module.
3. Real-user growth is the current company job. Monetization waits until people actually keep house data in the app.
4. Local-first is the floor. iCloud is opt-in and uses the owner’s quota. PIN and backup passphrase never sync.
5. Prepare early, build late: iOS stubs and CloudKit shapes may exist before Xcode is opened. Do not compile “to look busy.”
6. Language switch translates **system presets only**. Anything the user typed or renamed stays as-is.

**ZH.**

1. 全公司一周最多 **三件** 在办。其余进停放清单。
2. 战略和写代码物理分流。新模块开工前先把架构快照写进本文或画布。
3. 当前公司主业是真用户，不是收费。有人把真房子数据留在 App 里之前，不深挖盈利。
4. 本地优先是底线。iCloud 自愿、走用户自己的配额。PIN 和备份口令不同步。
5. 文稿和草稿可以早做，Xcode 不要为了「看起来在做」而开。
6. 切语言只换系统预设。用户自己写过或改过的名字，系统不主动翻译。

### 5.4 What this Grok chat can and cannot do / 本对话里的 Grok 能做什么

**EN — Can.**

- Edit the project files in this workspace and keep the canvas / this brief current.
- Push **small** GitHub files through the connected account `bosskiw11-bot` (`sw.js`, manifest, markdown, `native/` stubs).
- Open issues, list commits, inspect the repo tree.
- Draft CloudKit / Capacitor / privacy-label text.
- Reason about product, tax wording, and iOS scope.

**EN — Cannot.**

- Reliably push the current monolith `index.html` (~475 KB) through this GitHub connector. The gateway truncates large payloads. GitHub itself would accept the file via `git push` from the Mac.
- Sign an iOS app or enroll Apple Developer.
- Run Xcode, talk to a physical iPhone, or finish CloudKit container setup.
- Send SMS / email cycle reminders (explicitly parked).
- See or sync the user’s on-device IndexedDB from here.

**ZH — 能。**

- 改工作区里的项目文件，维护画布和本说明。
- 用已连接的 `bosskiw11-bot` 推 **小文件**（`sw.js`、manifest、md、`native/` 草稿）。
- 开 issue、看提交、列仓库。
- 写 CloudKit / Capacitor / 隐私标签草稿。
- 讨论产品、税务用词、iOS 范围。

**ZH — 不能。**

- 稳定地经这条连接器整份推当前 `index.html`（约 475 KB）。网关会截断。Mac 上 `git push` 可以。
- 签 iOS 包或代缴开发者年费。
- 开 Xcode、连真机、配完 iCloud 容器。
- 发短信/邮件周期提醒（已停放）。
- 从这边看见或同步用户手机里的 IndexedDB。

### 5.5 Publish path / 发版路径

**EN.**

- Daily PWA: GitHub Pages on `main` of `bosskiw11-bot/pocketprop`.
- Large HTML changes: founder `git push` from Mini until the app is split (`index.html` shell + `app.js` chunks). After a split, this bot can push feature files again.
- After Pages updates: force-quit the home-screen PWA and reopen (service worker is network-first). Clear both the icon **and** `github.io` site data if the PIN must be reset.
- Keep `APP_VERSION` in `index.html` and `VERSION` in `sw.js` equal after every ship.

**ZH.**

- 日常 PWA：`bosskiw11-bot/pocketprop` 的 `main` → GitHub Pages。
- 大 HTML：在拆文件之前，由创始人在 Mini 上 `git push`。拆成小 HTML + JS 之后，Bot 可以再推功能文件。
- Pages 更新后：主屏版划掉重开（SW 网络优先）。忘 PIN 时主屏图标和 `github.io` 网站数据都要清。
- 每次发版 `index.html` 的 `APP_VERSION` 与 `sw.js` 的 `VERSION` 必须一致。

### 5.6 Suggested first bot week / 建议的 Bot 第一周（仍遵守「三件事」）

Pick three, not all / 只选三件，不要全做：

1. Split the monolith so the GitHub connector can ship product code. / 拆单文件，让连接器能发业务代码。  
2. Founder: Xcode once + Apple Developer enroll on the Mini. / 创始人：Mini 上打开一次 Xcode 并报名开发者。  
3. Growth note: one page “what a real user looks like” + where to find Ontario small landlords. / 增长一页纸：真用户长什么样、安省小房东在哪。  

Everything else waits / 其余继续等。

---

## 6. Source map / 文件地图

| Path | Role |
|---|---|
| `index.html` | PWA monolith (Vue 3). Do not paste the whole file into chat. |
| `sw.js` | Service worker; network-first app shell |
| `manifest.webmanifest` | PWA name PocketProp |
| `native/` | iOS Capacitor skeleton |
| `IOS_ICLOUD_PREP.md` | CloudKit + store-bar details |
| `PROJECT_CANVAS.md` | Short living canvas |
| `USAGE_TEST_REPORT.md` | Last QA / security walk (2026-09-11) |
| `POCKETPROP_BOT_BRIEF.md` | This file |

---

## 7. Red lines / 红线

**EN.** Do not put house photos, receipts, or PIN material on a PocketProp server. Do not call iCloud “realtime.” Do not tell users the tax PDF is a filing. Do not translate user-edited catalog names. Do not reopen guest mode or the Steel theme unless the founder asks. Do not start Android or Google Drive while iOS text sync is unfinished.

**ZH.** 房屋照片、收据、PIN 不准进 PocketProp 服务器。不准把 iCloud 写成「实时」。不准把税务 PDF 说成申报表。不准翻译用户改过的任务名。未经要求不准恢复访客模式或钢青主题。iOS 文字同步没站住之前，不准开安卓或 Google Drive 后台。
