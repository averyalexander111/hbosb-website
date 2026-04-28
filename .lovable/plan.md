## Plan: Fix tablet button alignment in the dual-CTA cards

On tablet (sm breakpoint, where the two cards sit side-by-side in a 2-column grid), Option 1's button label "Book an AI Revenue System Assessment" wraps to two lines while Option 2's "Start Your AI Lead System Installation" stays on one line. Because each card sizes to its own content, the buttons end up at different vertical positions even though the cards themselves stretch to equal height (CSS Grid default).

### Fix

In `src/pages/AILeadResponseSystem.tsx`, make each card a vertical flex container and push the CTA button to the bottom so both buttons align regardless of label wrapping.

Two minimal class changes per card (lines ~521 and ~551):
- Add `flex flex-col` to the card wrapper.
- Add `mt-auto` to the `<Link>` (Option 1, line ~541) and `<a>` (Option 2, line ~573).

### Why this is safe for desktop and mobile

- **Mobile (single column):** Cards stack vertically and each is only as tall as its own content. `mt-auto` on the button has no extra space to absorb (card height = content height), so the visible spacing between the paragraph and the button remains exactly the existing `mb-8` on the paragraph. No visual change.
- **Desktop (lg and up):** Both button labels fit on a single line at `max-w-3xl` widths, so the cards already have matching content heights. `mt-auto` again has no slack to consume. No visual change.
- **Tablet (sm to md):** Option 1's button wraps, making its content taller. Grid stretches both cards to the taller height; `mt-auto` now pushes Option 2's button down to match Option 1's button position. Buttons align.

### Out of scope

- No copy, color, padding, icon, or animation changes.
- No grid, gap, or container width changes.
- No edits to other components or pages.
