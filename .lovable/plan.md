

## Plan: Replace user-facing "audit" with "assessment" on `/assessment`

Update only the **visible copy** in `src/pages/Audit.tsx`. Internal identifiers (component name, variable names, imports from `@/lib/audit`, `AUDIT_*` constants, form input `id` attributes) stay as-is to avoid churn — those aren't visible to users.

### Edits in `src/pages/Audit.tsx`

| Line | Current | New |
|---|---|---|
| 282 | `title="AI Revenue Audit \| Heartbeat of South Bay"` | `title="AI Revenue Assessment \| Heartbeat of South Bay"` |
| 283 | `description="Take the Heartbeat of South Bay AI revenue audit to uncover where leads, follow-up, and operations are leaking revenue."` | `description="Take the Heartbeat of South Bay AI revenue assessment to uncover where leads, follow-up, and operations are leaking revenue."` |
| 284 | `ogTitle="AI Revenue Audit \| Heartbeat of South Bay"` | `ogTitle="AI Revenue Assessment \| Heartbeat of South Bay"` |
| 285 | `ogDescription="Get a practical audit of your lead handling, systems, and automation readiness."` | `ogDescription="Get a practical assessment of your lead handling, systems, and automation readiness."` |
| 311 | `AI Revenue Audit` (badge) | `AI Revenue Assessment` |
| 317–319 | "This audit brings the form…" intro paragraph | Rewrite without "audit": "Answer a few questions and we'll map the fastest path to better response speed, stronger follow-up, and cleaner automation." |
| 343 | `Begin your audit` | `Begin your assessment` |
| 345 | "…so the audit feels personalized…" | "…so the assessment feels personalized…" |
| 393 | Button: `Start the audit` | `Start the assessment` |
| 445 | Fallback heading: `"Audit in progress."` | `"Assessment in progress."` |
| 600 | `Mapping your audit results...` | `Mapping your assessment results...` |
| 631 | `Audit complete` (eyebrow) | `Assessment complete` |
| 802 | Button: `Book the audit review` | `Book the assessment review` |
| 826 | "…book the next step from this audit." | "…book the next step from this assessment." |
| 838 | `title="Heartbeat audit booking"` (iframe a11y label) | `title="Heartbeat assessment booking"` |

### Not changing

- **Internal identifiers**: `Audit` component name, `AuditView`/`AuditLeadInfo`/`AuditResponse` types, `AUDIT_QUESTIONS`/`AUDIT_BOOKING_URL` imports, `audit_name`/`audit_email`/`audit_phone` input `id`s, `restartAudit`/`startAudit`/`finalizeAudit` function names, `submitAuditCompletion`/`submitAuditLeadInfo` calls. None of these are visible to users.
- **`src/lib/audit.ts`** and the `audit-redirect` edge function — internal/infrastructure naming, no user impact.
- The `/audit` → `/assessment` route redirect remains intact.
- No other pages reference "audit" in user-facing copy (verified via prior search).

