
The Blog page currently has SEO metadata referencing "BaySignal AI" — wrong brand. It should match the Heartbeat of South Bay branding and "The Pulse" naming used on the page hero.

## Fix

Update `src/pages/Blog.tsx` SEOHead props:

- **title**: `The Pulse — AI Revenue Insights | Heartbeat of South Bay`
- **description**: `Insights on AI Revenue Systems, lead conversion, and growth strategies for service-based businesses from the Heartbeat of South Bay team.`
- **ogTitle / ogDescription**: same as above

No other changes. Canonical URL stays as `/blog`.

### Files Touched
- `src/pages/Blog.tsx` (lines 87–93 only)
