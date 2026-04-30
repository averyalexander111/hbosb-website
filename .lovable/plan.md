## Plan: Make footer nav a horizontal wrapping row

Remove the "Navigate" heading and reflow the seven nav links as a horizontal row that wraps to a second line when space runs out.

### Changes in `src/components/HeartbeatFooter.tsx`

1. **Restructure the top of the footer** from a single 3-column grid (Brand · Navigate · Social) into two stacked rows:

   - **Row 1 — Brand + Social.** A 2-column grid on `md+` (`md:grid-cols-2`) with Brand on the left and Social on the right (`md:justify-end`). On mobile they stack as before.
   - **Row 2 — Navigation.** A full-width horizontal row of links centered under Row 1, separated from Row 1 by a thin divider (`border-t border-navy-foreground/10`) and the existing vertical rhythm (`mt-10 pt-8`).

2. **Remove the "Navigate" `<h4>`** entirely.

3. **Convert the nav container** from `flex flex-col` to a centered, wrapping row:
   - Classes: `flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-3 text-sm`
   - Each `<Link>` keeps its existing color and animated underline; only `self-start` is removed (no longer needed).

4. **Keep the bottom row unchanged** (copyright + Terms / Privacy).

### Behavior by breakpoint

- **Desktop (lg+):** All seven links fit comfortably on a single centered line.
- **Tablet (md):** Links wrap to two centered rows naturally if needed; the longer "Lead Conversion System" still sits inline with neighbors thanks to the consistent `gap-x` spacing.
- **Mobile (<md):** Brand and Social stack; nav wraps across as many centered rows as needed (typically 3) with even spacing — no ragged left-aligned column.

### Out of scope

- No copy, route, color, or hover-animation changes to individual links.
- No edits to the Connect section, brand block content, social icons, or legal row.
- No changes to other components or pages.
