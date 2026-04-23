

## Plan: Strip Lovable branding from publicly-visible meta and shared content

### What's actually exposed when the site is shared

When someone pastes `heartbeatofsouthbay.com` into iMessage, Slack, LinkedIn, X, or Facebook, the link unfurler reads:
- `<title>`, `<meta name="description">`
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:*` tags
- The favicon

Today, the **og:image** and **favicon** URLs both resolve to paths starting with `/lovable-uploads/...`. So the shared image preview's underlying URL is literally `https://heartbeatofsouthbay.com/lovable-uploads/72f8c969-3149-4fbe-b2f1-104ba80febd2.png` — the word "lovable" is visible to anyone who inspects the unfurl payload or right-clicks the preview. That's the main thing to fix.

The "Edit with Lovable" badge on the published site is already hidden (verified via publish settings).

### Changes

**1. Re-host shared assets under a neutral path**

Copy the two assets currently used in social/SEO meta out of `/public/lovable-uploads/` into `/public/brand/` so the public-facing URLs no longer contain the word "lovable":

| Current path | New path |
|---|---|
| `/lovable-uploads/8a3ccb7e-983a-4e89-8910-236ab612f1c3.png` (favicon) | `/brand/favicon.png` |
| `/lovable-uploads/72f8c969-3149-4fbe-b2f1-104ba80febd2.png` (og:image) | `/brand/social-share.png` |

The originals stay in place so other in-page references keep working — we're not breaking the rest of the site, only changing what shows up in shared/meta contexts.

**2. Update `index.html`**
- Favicon `<link rel="icon">` → `/brand/favicon.png`
- `og:image` → `https://heartbeatofsouthbay.com/brand/social-share.png` (absolute URL, required by most unfurlers)
- `twitter:image` → same absolute URL
- Add `<meta name="generator" content="Heartbeat of South Bay">` to override any default generator hint
- Leave the gptengineer.js script in place (removing it breaks the Lovable editor; it's a `<script>` tag with no user-visible meta payload and isn't read by unfurlers)

**3. Update `src/components/SEOHead.tsx`**
- Favicon `<link rel="icon">` → `/brand/favicon.png`
- `og:image` and `twitter:image` → `/brand/social-share.png`

This component sets meta on every route via React Helmet, so this catches per-page shares too.

**4. Delete the unused `src/components/Footer.tsx`**

It contains the visible line "built entirely with Lovable" but is not imported anywhere (verified — the site uses `HeartbeatFooter`). Removing it eliminates the dead branding from the codebase.

**5. Rewrite `README.md`**

Replace the Lovable boilerplate with a short project README describing Heartbeat of South Bay. README isn't served to the public site, but it's visible to anyone with repo access and shows up in GitHub link previews.

### Out of scope (intentionally)

- **`/lovable-uploads/` paths used only inside the rendered page** (logo `<img>` in navbar/footer, hero images, technology carousel icons, etc.) — these aren't read by social unfurlers and aren't part of the "meta code." Renaming them would mean rewriting ~20 components for zero shared-link benefit. If you want a full asset repath later, that's a separate cleanup.
- **`gptengineer.js` script tag** — required for the Lovable editor to function. It's a script reference, not a meta tag, and unfurlers ignore it.
- **`lovable-tagger` dev dependency in `vite.config.ts` / `package.json`** — dev-only, never ships to the production bundle.
- **The "Edit with Lovable" badge** — already hidden.

### Files touched

- `index.html` — meta tag updates
- `src/components/SEOHead.tsx` — meta tag updates
- `src/components/Footer.tsx` — delete
- `README.md` — rewrite
- `public/brand/favicon.png` — new (copy of existing favicon)
- `public/brand/social-share.png` — new (copy of existing og image)

