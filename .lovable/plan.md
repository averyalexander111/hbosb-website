

## Plan

Remove the "Blog" link from the global navigation and footer while leaving the `/blog` route itself intact (so we can keep debugging it without it being user-visible).

### Files

1. **`src/components/HeartbeatNavbar.tsx`** — remove `{ to: "/blog", label: "Blog" }` from the `links` array (line ~26). Affects both desktop and mobile menus since both render from the same array.

2. **`src/components/HeartbeatFooter.tsx`** — remove the `{ to: "/blog", label: "Blog" }` entry from the inline links array in the Navigation column (line ~37).

### Not changing

- `/blog` route in `src/App.tsx` stays — direct URL still works for testing.
- `BlogAdmin` route stays.
- No memory update needed; this is a temporary hide, not a permanent navigation change.

