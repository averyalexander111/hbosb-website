

## Plan: Server-side 301 redirect for `/audit` → `/assessment`

### Problem

Today `/audit` is handled by a client-side `<Navigate to="/assessment" replace />`. To the browser and to React Router this looks fine, but to crawlers, link checkers, and SEO tools it's an HTTP **200 OK on `/audit`** that happens to render JS — not a real **301 Moved Permanently**. Search engines won't reliably consolidate ranking signals onto `/assessment`, and tools like Screaming Frog will flag `/audit` as a duplicate page.

### Constraint

Lovable's hosting layer serves a static SPA with an `index.html` fallback. It does **not** process `_redirects`, `_headers`, `netlify.toml`, or `vercel.json`. There is no built-in way to issue a real 301 from the static origin. So we need a server we control to do it — and we already have one: the existing Supabase Edge Function used for `/sitemap`.

### Solution

Use a Supabase Edge Function as a 301 redirector for `/audit`, and point the `/audit` URL on the production domain at it.

**1. New edge function `supabase/functions/audit-redirect/index.ts`**

Returns `301 Moved Permanently` with `Location: https://heartbeatofsouthbay.com/assessment`. Preserves any query string (e.g. UTM params) and appends it to the destination. Sets `Cache-Control: public, max-age=86400` so the redirect is cached.

```ts
Deno.serve((req) => {
  const url = new URL(req.url);
  const dest = `https://heartbeatofsouthbay.com/assessment${url.search}`;
  return new Response(null, {
    status: 301,
    headers: {
      Location: dest,
      "Cache-Control": "public, max-age=86400",
    },
  });
});
```

Configure as public (no JWT) in `supabase/config.toml`.

**2. Keep the React Router fallback in `src/App.tsx`**

Leave `<Route path="/audit" element={<Navigate to="/assessment" replace />} />` in place. It only fires for in-app SPA navigations that somehow still target `/audit` (e.g. a stale internal link). Real 301 handling happens at the network layer for any external hit.

**3. Update `src/pages/Audit.tsx` SEO**

Already done — `canonicalUrl` points to `/assessment`. No change.

**4. Sitemap hygiene**

`supabase/functions/sitemap/index.ts` does not list `/audit` (confirmed). No change needed. `/assessment` is also not currently listed; add it to `STATIC_ROUTES` with `priority: '0.8'`, `changefreq: 'monthly'` so the new canonical URL is discoverable.

### What the user needs to do after deploy

The edge function gives us a real 301, but only at its Supabase URL (`https://gdmjszxcqqfwhkxxoqlp.supabase.co/functions/v1/audit-redirect`). For the redirect to fire on `https://heartbeatofsouthbay.com/audit`, the user needs **one** of:

- **Option A (recommended): DNS/CDN-level redirect at the domain registrar/Cloudflare.** Add a Page Rule / Bulk Redirect on `heartbeatofsouthbay.com/audit` → `https://heartbeatofsouthbay.com/assessment` with status 301. This is the cleanest path and doesn't require the edge function at all.
- **Option B: Keep the edge function** and submit the Supabase function URL to Google Search Console as the old URL, requesting removal of `/audit` and indexing of `/assessment`. The client-side Navigate continues to handle in-app traffic.

### Verification

After deploy:
- `curl -I https://heartbeatofsouthbay.com/audit` should return `HTTP/2 301` with `Location: /assessment` (only true once Option A is configured).
- `curl -I` on the edge function URL should return `301` immediately.
- Submit updated sitemap in Google Search Console; request removal of `/audit`.

### Files changed

- **New**: `supabase/functions/audit-redirect/index.ts`
- **Modified**: `supabase/config.toml` (register new function as public)
- **Modified**: `supabase/functions/sitemap/index.ts` (add `/assessment` to `STATIC_ROUTES`)

### Recommendation

If the user has Cloudflare or registrar-level redirect control, **skip the edge function entirely** and just do Option A + the sitemap update — that's the canonical SEO-correct setup. The edge function is a fallback for when domain-level redirects aren't available.

