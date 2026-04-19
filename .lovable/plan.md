

The user is on `/blog` and noticed the browser tab title doesn't include "Blog". Looking at `Blog.tsx`, `SEOHead` is called with `title="The Pulse — AI Revenue Insights | Heartbeat of South Bay"` — so "Blog" literally isn't in the `<title>`. "The Pulse" is the brand name for the blog, but for SEO + user clarity in tabs/search results, including "Blog" is standard.

## Plan

Update the `<title>` (and matching OG/Twitter titles) in `src/pages/Blog.tsx` to include the word "Blog".

### Change

In `src/pages/Blog.tsx`, update the `SEOHead` props:

- `title`: `"The Pulse — AI Revenue Systems Blog | Heartbeat of South Bay"`
- `ogTitle`: same as above
- `ogDescription` / `description`: unchanged

### Not changing

- `BlogPost.tsx` already appends the post title; no change needed there unless you want "Blog" added to individual post titles too (let me know).
- No memory update — this is a copy tweak, not a new convention.

