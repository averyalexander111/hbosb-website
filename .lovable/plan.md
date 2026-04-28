## Plan: Align footer navigation links cleanly

The footer's nav links currently use `flex flex-wrap gap-x-6 gap-y-3`, which produces an uneven, ragged wrap (e.g. "Home · Lead Conversion System · ROI Calculator" on row 1, "About Us · Blog · Contact · Assessment" on row 2 at most desktop widths, and unpredictable wrapping on tablet). The "Assessment" link is also rendered separately from the array, creating an inconsistent code path.

### Change in `src/components/HeartbeatFooter.tsx`

1. **Merge `Assessment` into the link array** so all seven links live in one map. (The standalone `<Link to="/assessment">` block is removed; `{ to: "/assessment", label: "Assessment" }` becomes the last entry.)

2. **Switch the nav container from wrap-row to a clean vertical column** with a small heading, so every link sits left-aligned with consistent spacing — matching the premium footer pattern of the rest of the site.

   - Container classes change from:
     `flex flex-wrap gap-x-6 gap-y-3 text-sm`
     to:
     `flex flex-col gap-3 text-sm`
   - Add a small section label above the links: an `<h4>` with `text-navy-foreground font-semibold mb-2` reading **"Navigate"**, mirroring the implicit structure of the Brand and Social columns.

3. **Keep each link's existing styling intact** — same text color, same animated underline on hover, same routes.

### Result by breakpoint

- **Desktop / tablet (md+):** The footer remains a 3-column grid (Brand · Navigate · Social). The middle column becomes a tidy vertical list of 7 links, perfectly aligned, no ragged wrap.
- **Mobile (<md):** The grid stacks vertically as before; the nav links also stack vertically with even spacing — visually identical pattern to the rest of the footer.

### Out of scope

- No copy changes to link labels or routes.
- No changes to the brand block, social icons, copyright row, or legal links.
- No color, font, or animation changes to individual links.
- No edits to `ConnectSection` or any other component.
