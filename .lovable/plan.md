

User wants me to verify the blog renders end-to-end in the preview. This is a browser verification task — straightforward, no code changes. Need default mode for browser tools.

## Plan

1. `navigate_to_sandbox` to `/blog` — verify list view: post card, featured image, tags, author, date, "Read More" link.
2. Take a screenshot of `/blog` to confirm visual rendering.
3. `navigate_to_sandbox` to `/blog/leveraging-ai-for-smarter-customer-segmentation` — verify detail view: title, hero image, tags, author/date, sanitized content, Share button.
4. Click the Share button to confirm clipboard fallback toast appears.
5. Scroll to bottom and confirm Related Posts section behavior (will likely be empty since only 1 published post exists — note this as expected).
6. Capture a screenshot of the post page.
7. Report findings: what rendered correctly, what was empty-by-design (related posts), and any console errors.

## Files Touched

None — verification only.

