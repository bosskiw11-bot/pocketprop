# Room/area detail: keep completed work visible (2026.09.29-a)

## Summary
On the Rooms & Areas zone detail page, the work list previously filtered to incomplete tasks only (`!t.completed`), so completed items vanished after entering the area. This release shows **all** tasks for that zone and sorts them newest → oldest by `issueDate`.

## Changes
- New computed `viewingZoneTasks`: filter by `propertyId` + `zone` only (no completed filter); sort `issueDate` descending.
- Zone detail template uses `viewingZoneTasks`; completed rows keep line-through + opacity.
- **Unchanged:** `getZoneTaskCount` still counts incomplete only — property blueprint area ring / pulse still lights only when open work exists.
- Version bump: `APP_VERSION` / SW `VERSION` → `2026.09.29-a`.

## Test
1. Open a property → Rooms & areas → enter a zone that has both open and completed tasks (demo data includes a completed task).
2. Confirm completed tasks remain listed, newest first.
3. Confirm area buttons on the property page still glow only when incomplete work exists.
