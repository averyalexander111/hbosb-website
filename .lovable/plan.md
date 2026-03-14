

## Prevent "Heartbeat of South Bay" Text Wrapping

On tablet viewports (~833px), the brand name "Heartbeat of South Bay" can break with "Bay" dropping to a new line. This affects multiple places across the site.

### Affected locations

1. **HeartbeatFooter** — Brand name `<span>` next to logo (line 18)
2. **HeartbeatHero** — Body paragraph mentioning the brand (line 103)
3. **SubpageHero** — Used as a title on the About page: `"About Heartbeat of South Bay"`
4. **AboutUs page** — Multiple paragraph mentions throughout
5. **ConnectSection** — Paragraph mention

### Fix

Add `whitespace-nowrap` to the brand name in the **footer** (the most visible standalone instance). For the **hero paragraph** and **body copy**, wrap "Heartbeat of South&nbsp;Bay" with a `<span className="whitespace-nowrap">` or use `\u00A0` (non-breaking space) before "Bay" to prevent the orphan word from wrapping.

**Files to change:**
- `src/components/HeartbeatFooter.tsx` — Add `whitespace-nowrap` to brand `<span>`
- `src/components/HeartbeatHero.tsx` — Use non-breaking space: `South\u00A0Bay`
- `src/components/ConnectSection.tsx` — Use non-breaking space in brand mentions
- `src/pages/AboutUs.tsx` — Use non-breaking space in all "South Bay" instances
- `src/components/SEOHead.tsx` — No change needed (meta text doesn't render visually)
- `src/pages/Contact.tsx`, `src/pages/PrivacyPolicy.tsx`, `src/pages/TermsAndConditions.tsx` — Use non-breaking space in visible brand mentions

This is a text-only change across multiple files — no layout or structural modifications.

