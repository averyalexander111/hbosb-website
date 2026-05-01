# Make Final CTA section full-width like the Results section

## Issue
The "Let's Explore What AI Could Fix In Your Business" block is currently a `max-w-3xl` navy **card** floating on the light `bg-background` section. The "How AI Systems Improve Business Performance" section, by contrast, is a **full-width** navy section that spans the entire viewport.

The user wants the Final CTA to match that full-bleed navy treatment.

## Change

**File: `src/components/FinalCTASection.tsx`**

Restructure to mirror `ResultsSection`:

1. Change the `<section>` background from `bg-background` → `bg-navy relative overflow-hidden`.
2. Remove the inner navy card wrapper (`bg-navy rounded-3xl p-10 md:p-14 ... border ...`) and the `max-w-3xl` constraint on it.
3. Keep the existing decorative primary blur orb, but move it to the section level (centered, large, behind content) — matching the subtle gradient/orb feel of `ResultsSection`.
4. Wrap content in the standard `container mx-auto px-4 sm:px-6 lg:px-8 relative z-10` pattern used by `ResultsSection`.
5. Keep all copy, bullets, button, and the framer-motion entrance animation — only the wrapper/background changes.
6. Inner content block keeps a `max-w-3xl mx-auto text-center` to preserve readable line length for the headline/paragraph/bullets/button.

## Visual result
- Section becomes full-bleed navy, edge-to-edge (same width as the Results section).
- No more rounded card outline; content sits directly on the navy background.
- All text, bullets, and CTA button remain unchanged in copy, color, and styling.
- Maintains the alternating dark-to-light section rhythm (it already came after a light section).

## Out of scope
- No copy changes.
- No button style changes.
- No changes to other sections.