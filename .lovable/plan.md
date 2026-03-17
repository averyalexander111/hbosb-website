

## Make About Us CTA a Full-Width Section (Not a Card)

The About Us CTA currently renders as a rounded navy card (`rounded-3xl`, `border`, `max-w-3xl`) inside a light background section — giving it a "card" feel. The homepage's `FinalCTASection` is a full-width dark section with no card container, which feels more impactful and consistent.

### Change in `src/pages/AboutUs.tsx` (lines 270-313)

Replace the current card-based CTA with the shared `FinalCTASection` component, just like the Blog page does. This eliminates the card wrapper entirely and gives it the same full-bleed dark section treatment as the homepage.

- Remove the entire custom CTA section (lines 270-313)
- Import and drop in `<FinalCTASection />` in its place
- Remove now-unused imports (`CheckCircle2`, `ArrowRight`) if they're no longer referenced elsewhere in the file

One-line swap — maximum consistency, zero duplication.

