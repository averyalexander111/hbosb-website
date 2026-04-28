## Plan: Replace assessment booking iframe with Cal.com inline embed

Swap the `<iframe>` in the Results view of `/assessment` for the official Cal.com inline embed, and update the booking URL from `hbosb/heartbeat-audit` to `hbosb/assessment`. Mirror the existing embed pattern already used on `src/pages/Contact.tsx` for consistency. No layout, copy, or styling changes.

### Files

**1. `src/lib/audit.ts`**
- Update the booking URL constant:
  - From: `https://cal.com/hbosb/heartbeat-audit`
  - To:   `https://cal.com/hbosb/assessment`
- This automatically updates the "Book the assessment review" button in `Audit.tsx` (line 857), which already references `AUDIT_BOOKING_URL`.

**2. `src/pages/Audit.tsx`**

a) Add a `useEffect` in the `Audit` component (alongside existing hooks) that injects the Cal.com loader script into `document.head` and initializes the `assessment` namespace. Pattern copied from `Contact.tsx` (lines 12–70), adapted with:
- `scriptId`: `cal-embed-script-assessment`
- Namespace: `assessment`
- `elementOrSelector`: `#my-cal-inline-assessment`
- `calLink`: `hbosb/assessment`
- Same `cssVarsPerTheme` brand colors (`#4a91c4` light / `#fafafa` dark)
- Cleanup function removes the script on unmount

The effect should only execute when the results view is mounted. Simplest approach: gate the effect body on `view === "results"` (or whichever state flag drives the results render) so the script isn't injected on the intro/questions/processing views. Cleanup still removes the script on unmount.

b) Replace the iframe block (lines 891–897):

```tsx
<div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-white">
  <iframe
    src={`${AUDIT_BOOKING_URL}?embed=true`}
    title="Heartbeat assessment booking"
    className="min-h-[720px] w-full"
  />
</div>
```

with the inline embed mount node:

```tsx
<div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-white">
  <div
    id="my-cal-inline-assessment"
    className="w-full min-h-[760px] lg:min-h-[820px]"
    style={{ height: "100%" }}
  />
</div>
```

Notes on the mount node:
- Uses Tailwind `min-h-[760px]` (mobile) / `lg:min-h-[820px]` (desktop) to satisfy the 700–900px requirement while staying responsive.
- Outer card already has `overflow-hidden`, and the mount div uses `w-full` with no explicit `overflow:scroll`, so we avoid the double scrollbar that the raw embed snippet's `overflow:scroll` would cause. Cal's own widget handles internal scrolling.
- Keeps the existing rounded white container so visual styling is unchanged.

c) No changes to surrounding copy:
- "Schedule your strategy session" heading stays.
- "Use the calendar below to book the next step from this assessment." subhead stays — already reinforces this is the post-assessment review booking.
- "Next step" badge stays.
- "Book the assessment review" button stays (now points to the new URL via the constant).
- "Best next move" callout stays.

### Out of scope

- No copy changes anywhere on the page.
- No changes to layout grid, card styling, spacing, or section structure.
- No changes to other Cal.com links elsewhere in the app (`/contact`, `/leads`, `30min`, etc.).
- No analytics or new dependencies.

### Verification after implementation

- `/assessment` → complete the flow → on results view, the Cal embed renders inline (no iframe), shows the `hbosb/assessment` event, and the primary button links to `https://cal.com/hbosb/assessment`.
- Resize to mobile width (≤640px): embed remains usable, no horizontal overflow, no double scrollbars.
- Navigating away from `/assessment` removes the injected script (cleanup).
