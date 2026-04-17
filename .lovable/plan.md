
The blog post exists in Supabase and is `published` with `published_at` in the past, so the `/blog` query should return it. Most likely cause of "missing": React Query is caching an empty result from earlier, OR the user is viewing a stale build. Let me verify by checking the live blog page.

Actually, since I can't execute in plan mode, here's the diagnostic plan:

## Diagnose & Fix Blog Post Display

### Investigation
The post **"Leveraging AI for Smarter Customer Segmentation"** exists with:
- `status: published`
- `published_at: 2025-10-04` (in the past)
- `slug: leveraging-ai-for-smarter-customer-segmentation`

The query in `src/pages/Blog.tsx` should return it. If it's not appearing, likely causes:
1. **Stale React Query cache** (5min staleTime) — unlikely after a refresh
2. **Browser cache** showing an old build
3. **Anon RLS access issue** — but the policy `Anyone can view published blog posts` allows public SELECT where `status = 'published'`

### Plan

1. Open `/blog` in the live preview and check:
   - Network tab for the Supabase REST request to `blog_posts`
   - Console for errors
   - Whether the post card actually renders

2. If the request succeeds but returns `[]`, inspect the filter. The current query uses `.lte("published_at", new Date().toISOString())` — this should pass for a 2025-10-04 timestamp.

3. If the request returns the post but it doesn't render, the issue is in the rendering logic.

4. If the request fails (RLS / 401), confirm anon role policy.

5. Apply the corresponding fix:
   - **Cache issue** → add `refetchOnMount: 'always'` to the query
   - **Render issue** → fix conditional in JSX
   - **RLS issue** → verify/recreate policy via migration

### Files Likely Touched
- `src/pages/Blog.tsx` (only if a code fix is needed)

No DB changes anticipated unless RLS is the culprit.
