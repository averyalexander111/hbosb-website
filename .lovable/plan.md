

Simple, focused task. Add a JSON-LD `BlogPosting` script tag inside the existing `<Helmet>` block in `src/pages/BlogPost.tsx` so Google can pick up rich results for each post.

## Plan

1. In `src/pages/BlogPost.tsx`, build a `blogPostingSchema` object inside the component (memoized) with these fields mapped from the loaded `post`:
   - `@context`: `https://schema.org`
   - `@type`: `BlogPosting`
   - `headline`: `post.title`
   - `description`: `post.meta_description || post.excerpt`
   - `image`: `post.featured_image` (only included if present)
   - `datePublished`: `post.published_at`
   - `dateModified`: `post.published_at` (table has `updated_at` but it's not currently selected; keep scope tight and reuse `published_at`)
   - `author`: `{ "@type": "Person", "name": post.author }`
   - `publisher`: `{ "@type": "Organization", "name": "Heartbeat of South Bay", "logo": { "@type": "ImageObject", "url": "<origin>/lovable-uploads/8a3ccb7e-983a-4e89-8910-236ab612f1c3.png" } }`
   - `mainEntityOfPage`: `{ "@type": "WebPage", "@id": "<origin>/blog/<slug>" }`
2. Inside the existing `<Helmet>` block, add:
   ```tsx
   <script type="application/ld+json">
     {JSON.stringify(blogPostingSchema)}
   </script>
   ```
3. No new dependencies, no schema/migration changes, no other files touched.

## Validation

After implementation, view-source on a published post and confirm a `<script type="application/ld+json">` block is present with valid JSON. Optionally paste into Google's Rich Results Test.

## Files Touched

- `src/pages/BlogPost.tsx` — add memoized schema object + JSON-LD `<script>` inside `<Helmet>`.

