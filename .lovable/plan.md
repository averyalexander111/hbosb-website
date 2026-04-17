

## Diagnosis

The DB and RLS are healthy (1 published post, anon SELECT works). The Blog page has been over-tuned to bypass the cache:

```ts
staleTime: 0,
refetchOnMount: "always",
refetchOnWindowFocus: true,
queryKey: ["blog-posts", searchTerm, selectedTag],
// no retry config
```

Combined effects that match exactly what you're seeing ("stays loading" or "switches to error"):

1. **Skeleton flash on every focus / nav** — `refetchOnMount: "always"` + `staleTime: 0` discards the cache. Coming back from a post or switching tabs always re-shows the skeletons.
2. **No retry + no error recovery** — a single transient Supabase request failure (cold connection, network blip, ad/script blocker on the live domain) immediately renders "Unable to load blog posts" with no way to retry except a full reload.
3. **Search keystrokes thrash** — every character of typing creates a new query key → new in-flight request → flicker back to skeletons.
4. **Same applies to `BlogPost.tsx`** — it inherits the same anti-cache config plus `single()` which throws on any blip, including the auth race when `useAuth` initializes.

The earlier "always refetch" change was a workaround for a stale cache, but it's now the cause of the instability. The fix is to use a sane cache strategy and add real error recovery.

## Plan

1. **`src/pages/Blog.tsx`** — replace the aggressive cache-busting with sensible defaults:
   - `staleTime: 60_000`, drop `refetchOnMount: "always"`, drop `refetchOnWindowFocus: true`
   - Add `retry: 2` with exponential backoff on both queries
   - Debounce `searchTerm` (300 ms) before it hits the queryKey, so typing doesn't kill the list
   - Add a **Retry** button to the error state that calls `refetch()` instead of forcing a full page reload
   - Remove the leftover debug `console.log` lines from the previous round
2. **`src/pages/BlogPost.tsx`** — same cache-policy cleanup:
   - `staleTime: 60_000`, drop the always-refetch flags, add `retry: 2`
   - Replace `.single()` with `.maybeSingle()` so a missing row returns `null` instead of throwing — the existing `!post` branch already handles that case cleanly
3. **`src/pages/BlogAdmin.tsx`** — keep the existing `invalidateQueries` calls so admin edits still update the public list immediately (no change needed beyond confirming).
4. **No DB / RLS changes** — schema and policies are correct.
5. **Verify** by hard-refreshing `/blog`, navigating into the post and back, switching tabs, and typing in the search box — none of those should leave the page stuck or in the error state.

## Files Touched

- `src/pages/Blog.tsx` — cache config, debounced search, retry button, remove debug logs
- `src/pages/BlogPost.tsx` — cache config, `maybeSingle()`

