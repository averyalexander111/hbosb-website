## Recommendation

I agree the card looks visually narrow on wider screens. However, **truly full-bleed (edge-to-edge) would actually break consistency** — every other section on the homepage (services grid, AI Operating System, Results, Final CTA) sits inside the centered `container` with side padding, never touching the page edges.

The right fix is to match the **section's content width** rather than the inner `max-w-5xl` constraint currently on the card. This makes the card stretch as wide as the page's content rhythm allows, while still respecting the consistent left/right gutters used everywhere else.

## Change

**File:** `src/components/AISystemsSection.tsx` (line 65)

In the dark CTA card's wrapper `motion.div`, change:

- `max-w-5xl mx-auto` → `mx-auto` (drop the 5xl cap)

This lets the card fill the full width of the parent `container` (which already provides the standard `px-4 sm:px-6 lg:px-8` gutters), making it noticeably wider than the services grid above it and visually anchoring the bottom of the section — similar to how the navy `ResultsSection` below spans the full container width.

## Untouched

- Services grid above (still `max-w-5xl` — keeps card readability)
- Card's internal padding, colors, glow, headline, body copy, button
- Vertical spacing (`mt-12 md:mt-16`)
- All other sections and the page flow
- Mobile behavior (container padding already handles small screens)

Approve to apply this single class change.