

User wants me to fetch the deployed sitemap edge function URL and confirm the XML renders correctly. Submitting to Google Search Console requires their manual action (it's their account), so I'll verify the XML and then give them the exact submission steps.

## Plan

1. Fetch `https://gdmjszxcqqfwhkxxoqlp.supabase.co/functions/v1/sitemap` via `code--fetch_website` (HTML format, since it's XML text) to confirm:
   - HTTP 200 response
   - Valid `<?xml ...><urlset>...</urlset>` structure
   - All 8 static routes present
   - The 1 published blog post (`leveraging-ai-for-smarter-customer-segmentation`) appears as `/blog/<slug>`
   - `Content-Type: application/xml`
2. If anything is malformed, check edge function logs via `supabase--edge_function_logs` for `sitemap`.
3. Report XML contents inline so the user can eyeball it.
4. Provide step-by-step Google Search Console submission instructions (user must do this themselves — requires their GSC account):
   - Open https://search.google.com/search-console
   - Select the `heartbeatofsouthbay.com` property (verify ownership first if not already done)
   - Sidebar → Sitemaps → enter `sitemap.xml` (since `robots.txt` already references the function URL, but for GSC submission they should use the same URL the site advertises)
   - Note: GSC expects a sitemap on the same domain. Since the sitemap currently lives at the Supabase function URL (cross-origin from `heartbeatofsouthbay.com`), GSC may reject it. Recommend either:
     - (a) Submit the full Supabase function URL directly in GSC, OR
     - (b) Add a Vercel/Lovable rewrite so `https://heartbeatofsouthbay.com/sitemap.xml` proxies to the function (cleaner — GSC strongly prefers same-origin sitemaps).
5. Flag the same-origin recommendation as a follow-up the user may want.

## Files Touched

None — verification + instructions only.

