

## Fix "See If This System Is Right" Section Background

The section above ("Who This System Is For") uses `bg-navy`, making the gradient Final CTA section still feel repetitive since it's navy-to-navy.

**Solution:** Switch the Final CTA to use the light `bg-background` treatment, matching the Investment section's style. Update text colors from `navy-foreground` to `foreground`/`muted-foreground`, and the card from navy-light to `bg-card border-border` — consistent with the page's alternating pattern.

### Changes in `src/pages/AILeadResponseSystem.tsx`

**Line 397** — Change section background:
- From: `bg-gradient-to-b from-navy via-navy-light to-navy`
- To: `bg-background`

**Line 404** — Update card styling:
- From: `border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm`
- To: `border-border bg-card`

**Lines 407, 410** — Update text colors:
- `text-navy-foreground` → `text-foreground`
- `text-navy-foreground/60` → `text-muted-foreground`

