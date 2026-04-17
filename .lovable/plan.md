

User wants `/sitemap.xml` to be served dynamically from a Supabase edge function so blog post URLs stay in sync with the `blog_posts` table.

## Approach

Edge function `sitemap` that queries `blog_posts` (status=published, published_at <= now), renders an XML sitemap, and is exposed at `/sitemap.xml` via a Vite dev rewrite + a `public/_redirects` rule for the deployed site (Lovable hosting honors `_redirects`).

## Plan

1. **Create edge function `supabase/functions/sitemap/index.ts`**
   - `verify_jwt = false` (public, no auth).
   - Use service role client (bypasses RLS, but only selects published rows anyway).
   - Static routes: `/`, `/about`, `/contact`, `/blog`, `/leads`, `/roi`, `/privacy-policy`, `/terms-and-conditions` with sensible `changefreq` / `priority`.
   - Dynamic routes: every published `blog_posts` row → `/blog/<slug>` with `lastmod` from `updated_at`.
   - Base URL: `https://heartbeatofsouthbay.com` (canonical custom domain per project URLs).
   - Response headers: `Content-Type: application/xml; charset=utf-8`, `Cache-Control: public, max-age=3600`, plus CORS.
   - XML-escape slugs defensively.

2. **Expose at `/sitemap.xml`**
   - Add `public/_redirects`:
     ```
     /sitemap.xml  https://gdmjszxcqqfwhkxxoqlp.supabase.co/functions/v1/sitemap  200
     ```
     The `200` makes it a rewrite (URL stays `/sitemap.xml`), not a redirect.
   - Note: in the Lovable preview `/sitemap.xml` will 404 (Vite doesn't process `_redirects`); validate by hitting the function URL directly. On the published site it will serve at `/sitemap.xml`.

3. **Reference it from `index.html`**
   - Add `<link rel="sitemap" type="application/xml" href="/sitemap.xml" />` in `<head>` so crawlers discover it.

4. **Validation**
   - `curl` the function URL → expect `<?xml ...><urlset>...</urlset>` with the one current published post.
   - On the live domain after deploy: `curl https://heartbeatofsouthbay.com/sitemap.xml`.

## Files Touched

- `supabase/functions/sitemap/index.ts` (new)
- `public/_redirects` (new)
- `index.html` (add `<link rel="sitemap">`)

No DB migrations, no schema changes, no new secrets (uses existing `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`).

