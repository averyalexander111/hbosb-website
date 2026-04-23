

## Plan: Rename `/audit` → `/assessment`

Switch the route to `/assessment` (matching the user-facing "Assessment" label) and add a permanent redirect from `/audit` so existing links, bookmarks, and any indexed URLs continue to work.

### Changes

**1. `src/App.tsx`** — update the route and add a redirect:
```tsx
<Route path="/assessment" element={<Audit />} />
<Route path="/audit" element={<Navigate to="/assessment" replace />} />
```
(`Navigate` is already imported.)

**2. Update internal `to="/audit"` links to `to="/assessment"`** in:
- `src/components/HeartbeatNavbar.tsx` (desktop + mobile)
- `src/components/HeartbeatFooter.tsx`
- `src/components/HeartbeatHero.tsx`
- `src/components/ImplementationSection.tsx`
- `src/components/FinalCTASection.tsx`
- `src/components/BaySignalSection.tsx`
- `src/pages/AboutUs.tsx`
- `src/pages/AILeadResponseSystem.tsx` (two occurrences)

**3. `src/pages/Audit.tsx`** — update the `canonicalUrl` in `SEOHead` from `/audit` to `/assessment` so search engines treat `/assessment` as the canonical URL.

### Not changing

- `Audit.tsx` filename, component name, and the `audit.ts` lib stay as-is — internal naming doesn't need to change and avoids unnecessary churn.
- External booking links and the `audit.ts` API helpers are unrelated to the route path.
- No memory updates required (route label/path is implementation detail; navigation memory references the "Assessment" label, not the path).

### Result

- `/assessment` becomes the live page.
- `/audit` permanently redirects to `/assessment` (client-side via React Router; works for all SPA navigations and direct loads thanks to Lovable's SPA fallback).

