

## Plan

Restore the "Blog" link in both global navigation surfaces, matching the original position (between "About Us" and "Contact" per the standardized navigation order).

### Files

1. **`src/components/HeartbeatNavbar.tsx`** — add `{ to: "/blog", label: "Blog" }` back into the `links` array, positioned between `/about` and `/contact`. Renders in both desktop and mobile menus automatically.

2. **`src/components/HeartbeatFooter.tsx`** — add `{ to: "/blog", label: "Blog" }` back into the inline links array in the Navigation column, in the same position.

### Not changing

- Routes are already intact in `src/App.tsx`.
- No memory update needed — this restores the standard navigation structure already documented in `mem://features/navigation-structure`.

