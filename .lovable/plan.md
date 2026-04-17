

## What I checked

I just loaded the live published site `https://heartbeatofsouthbay.com/blog` in the browser and confirmed:

- The post **is visible** — it shows as a card directly under "The Pulse" hero
- Title shown: **"Leveraging AI for Smarter Customer Segmentation"**
- Date: October 3, 2025 — Author: BaySignal AI Team
- Tags chips above the card: AI, Customer Segmentation, Digital Marketing, Machine Learning, Marketing, Predictive Analytics
- Network: `GET /rest/v1/blog_posts?status=eq.published…` returns 200
- Database: row exists, `status=published`, `published_at=2025-10-04`, `slug=leveraging-ai-for-smarter-customer-segmentation`
- No "No blog posts yet" empty state on the page

So the post **is technically live and rendering correctly**.

## Why it might still feel "not visible" to you

Two likely explanations:

1. **Browser cache / stale tab** — earlier renders of the page (before the post was published) may have been cached. A hard refresh (Ctrl/Cmd+Shift+R) on `/blog` will pull the latest.
2. **Author byline says "BaySignal AI Team"** — this is the wrong brand and may have made the card look like a placeholder rather than your real post. The post was created with `author = "BaySignal AI Team"` (the default from BlogAdmin), and the same brand still appears in:
   - `BlogAdmin.tsx` default author + page title
   - `BlogPost.tsx` `<title>` template (`| BaySignal AI Blog`)

## Proposed fix (one approval, four small edits)

### 1. Update the existing post's author in the database
SQL update to rename the author on the live post:
```
UPDATE public.blog_posts
SET author = 'Heartbeat of South Bay Team', updated_at = now()
WHERE slug = 'leveraging-ai-for-smarter-customer-segmentation';
```

### 2. `src/pages/BlogAdmin.tsx`
- Change default `author: "BaySignal AI Team"` → `"Heartbeat of South Bay Team"` (lines 40 and 149)
- Change `<title>Blog Admin - BaySignal AI</title>` → `Blog Admin — Heartbeat of South Bay` (line 209)

### 3. `src/pages/BlogPost.tsx`
- Change `<title>{post.seo_title || post.title} | BaySignal AI Blog</title>` → `… | The Pulse — Heartbeat of South Bay` (line 149)

### 4. Verification
- Hard-refresh `/blog` and confirm the card shows the new author
- Open `/blog/leveraging-ai-for-smarter-customer-segmentation` and confirm tab title is correct

### Files touched
- DB migration: `blog_posts` row update (one row)
- `src/pages/BlogAdmin.tsx` (3 lines)
- `src/pages/BlogPost.tsx` (1 line)

No changes needed to `Blog.tsx` (already correct after the previous fix) or to RLS policies (already permitting public reads of published posts).

