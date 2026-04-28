## Plan: Keep email on a single line in the Get in Touch section

The email `info@heartbeatofsouthbay.com` currently wraps onto two lines in the contact grid (rendered by `src/components/ConnectSection.tsx`, used at the bottom of every page). The cause is the `break-all` class on the paragraph, which forces breaks inside the email string.

### Change

In `src/components/ConnectSection.tsx`, line 67, swap the email paragraph's classes:

- Remove `break-all`.
- Add `whitespace-nowrap` so the address can't wrap.
- Drop the font size one step on small screens (`text-xs sm:text-sm`) so the full address fits inside the narrow column on mobile/tablet without overflowing. At `sm` and up the column is wide enough for the existing `text-sm` size.

Final classes: `text-muted-foreground text-xs sm:text-sm whitespace-nowrap`.

### Why this is safe

- Only the email paragraph changes — phone, hours, and social blocks are untouched.
- `whitespace-nowrap` prevents wrapping; the slight font-size reduction on mobile keeps it from overflowing the column at the smallest widths.
- No layout, grid, padding, color, or copy changes elsewhere.

### Out of scope

- No changes to other sections, the footer component, or any other pages.
