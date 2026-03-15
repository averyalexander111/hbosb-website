

## Improve Investment & Final CTA Sections

### Investment Section (lines 276-338)

- Switch from `bg-background` to dark navy (`bg-navy`) with the `NavySectionBg` blur orbs — matches the premium visual rhythm of the page and creates contrast with the preceding light "What's Included" section
- Increase vertical padding from `py-20` to `py-24`
- Style the pricing cards with `bg-navy-light/50 border-navy-foreground/10 backdrop-blur-sm` (consistent with feature cards above)
- Update text colors to `text-navy-foreground` and `text-navy-foreground/60`
- Give the setup card a subtle primary border highlight (`border-primary/30`) to draw the eye
- Add the ROI closing line as a pill/badge style (`bg-primary/10 text-primary rounded-full px-6 py-3`) instead of plain paragraph text

### Final CTA Section (lines 341-369)

- Keep `bg-background` (light) for contrast after the now-dark Investment section
- Increase vertical padding from `py-28` to `py-32`
- Wrap the content in a styled container card: `rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border p-12 md:p-16`
- Widen max-width from `max-w-2xl` to `max-w-3xl`
- Add a subtle dot-grid background pattern (matching the "How It Works" section) for visual texture

### Result
The two sections now alternate dark → light, each with distinct visual treatment. The Investment section feels premium and elevated; the CTA section feels like a contained, focused closing statement.

