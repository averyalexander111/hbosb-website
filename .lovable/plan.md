

## Rename Legal Page URLs & Update All References

### Files to Modify

**1. `src/App.tsx`** — Update routes and add redirects
- Change `/terms` route to `/terms-and-conditions`
- Change `/privacy` route to `/privacy-policy`
- Add redirect routes: `/terms` → `/terms-and-conditions`, `/privacy` → `/privacy-policy` using `<Navigate to="..." replace />`

**2. `src/components/ContactForm.tsx`** — Update links
- `/terms` → `/terms-and-conditions`
- `/privacy` → `/privacy-policy`

**3. `src/components/HeartbeatFooter.tsx`** — Update footer links
- `/terms` → `/terms-and-conditions`
- `/privacy` → `/privacy-policy`

**4. `src/pages/TermsAndConditions.tsx`** — Update metadata
- `canonicalUrl` → `${window.location.origin}/terms-and-conditions`
- `ogDescription` → "Review the terms and conditions for using Heartbeat of South Bay services."

**5. `src/pages/PrivacyPolicy.tsx`** — Update metadata and internal link
- `canonicalUrl` → `${window.location.origin}/privacy-policy`
- `ogDescription` → "Learn how Heartbeat of South Bay collects, uses, and protects your information."
- Update internal `/terms` link to `/terms-and-conditions`
- Update internal `/privacy` link to `/privacy-policy`

### Technical Details

- React Router's `<Navigate to="..." replace />` serves as a client-side redirect (equivalent to 301 for SPA). Old URLs `/privacy` and `/terms` will instantly redirect to new paths.
- Import `Navigate` from `react-router-dom` in App.tsx.
- The `usePerformanceOptimization.tsx` prefetch list already uses the new URLs — no change needed there.
- Total: 5 files modified, no new files.

