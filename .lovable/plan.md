

## Add CTA Section to Blog Page

The blog page ends with the post grid and jumps straight to the footer. Readers who've scrolled through blog content are already engaged — this is a prime conversion opportunity being missed.

### Approach

Reuse the existing `FinalCTASection` component (already used on the homepage) at the bottom of the Blog page, just before the footer. This keeps the design consistent across the site and requires minimal code.

### Changes

**`src/pages/Blog.tsx`**
- Import `FinalCTASection`
- Place `<FinalCTASection />` after the blog posts `</section>` closing tag and before `</div>` / `<HeartbeatFooter />`

Single import, single line addition. No new components needed.

