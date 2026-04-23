

## Plan: Make navbar consistently visible on the assessment page

### Problem

The `HeartbeatNavbar` is transparent until the user scrolls past 20px, then it switches to the navy/blurred bar. On the intro view this is fine because the hero behind it is already dark navy, so the transparent navbar reads as navy. But on **question 1** (and the other question steps), the section background is `bg-background` (light blue) and the page often fits in the viewport without scrolling — so the navbar stays transparent over a light background and effectively disappears until the user scrolls.

### Fix

Force the navbar into its solid navy/blurred state whenever the user is on the questions, processing, or results view of the assessment — i.e., any time the active view is not the dark intro hero.

### Change in `src/components/HeartbeatNavbar.tsx`

Add an optional `forceSolid?: boolean` prop. When `true`, the navbar renders its scrolled styling regardless of `window.scrollY`.

```tsx
const HeartbeatNavbar = ({ forceSolid = false }: { forceSolid?: boolean }) => {
  ...
  const showSolid = forceSolid || scrolled;
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      showSolid
        ? "bg-navy/90 backdrop-blur-md border-b border-navy-foreground/10 shadow-lg shadow-black/10"
        : "bg-transparent"
    }`}>
```

No change to existing call sites — they keep the scroll-driven behavior.

### Change in `src/pages/Audit.tsx`

Pass `forceSolid` based on the current `view`:

```tsx
<HeartbeatNavbar forceSolid={view !== "intro"} />
```

This keeps the elegant transparent-over-hero look on the intro screen and guarantees the solid navy bar from the moment question 1 appears through processing and results.

### Out of scope

- No change to the navbar markup, links, mobile menu, or the scroll listener itself.
- No change to other pages — they continue to use the default scroll-driven behavior.
- No styling changes to the questions screen content.

