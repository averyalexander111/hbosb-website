

## What I know

- DB has 1 row matching the query: `Leveraging AI for Smarter Customer Segmentation`, status `published`, `published_at = 2025-10-04`.
- RLS policy `Anyone can view published blog posts` allows public SELECT on rows where `status='published'`.
- No console errors or failed network calls captured.
- You said `/blog` is empty/shows an error and will send a screenshot.

So the data and policy are fine. The failure is in either the frontend query, the React render, or a runtime crash inside the page. Without the screenshot I'm guessing — so the plan is to instrument and inspect, then fix.

## Plan

1. **Wait for / read your screenshot** to see exactly what `/blog` is rendering (blank, error boundary, partial UI, or just "No blog posts yet").
2. **Add temporary debug logs** in `src/pages/Blog.tsx` so the next render captures:
   - The exact Supabase response (`data`, `error`) from the `blog-posts` query
   - The exact response from the `blog-tags` query
   - Any thrown error from React Query
   These show up in the console-log feed automatically on your next message.
3. **Run the same query directly** with the anon key (matching what the browser uses) via `curl` to confirm RLS truly returns the row to an unauthenticated client — this rules out an RLS-vs-anon mismatch.
4. **Inspect children that wrap the list**: `SubpageHero`, `AnimatedSection`, `FinalCTASection`, `HeartbeatNavbar`, `HeartbeatFooter` — a runtime error in any of them would blank the page. Check for recent changes / missing imports.
5. Based on findings, apply the targeted fix:
   - If it's a query error → fix filter or column reference.
   - If it's RLS for anon → adjust policy / migration.
   - If it's a render crash → wrap in error boundary and fix the offending component.
   - If it's just the empty state → adjust the published_at filter or copy.
6. Remove the debug logs after the fix is verified.

## Files likely touched

- `src/pages/Blog.tsx` (debug logs, then the actual fix)
- Possibly `src/components/SubpageHero.tsx` / `AnimatedSection.tsx` (if a render crash)
- Possibly a migration on `blog_posts` RLS (only if anon SELECT actually fails)

