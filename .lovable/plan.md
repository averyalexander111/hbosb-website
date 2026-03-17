

## Wrap "See What This Looks Like" CTA in a Card

### Change in `src/components/ImplementationSection.tsx` (lines 75–92)

Wrap the existing `motion.div` content in a styled card container matching the site's dark navy card pattern (consistent with FinalCTASection):

- Add `bg-navy rounded-2xl p-8 md:p-10 border border-navy-foreground/10` to the wrapper
- Update text colors: `text-foreground` → `text-navy-foreground`, `text-muted-foreground` → `text-navy-foreground/60`
- Add a subtle radial glow orb inside for visual depth

This matches the "dark card on light background" pattern used in the FinalCTASection and other CTA blocks.

