

## Style "See If This System Is Right" Card as Navy Premium Card

Currently the card uses `bg-card` (white on light background). Change it to a navy-themed premium card that stands out against the light section background, with inverted light text.

### Changes in `src/pages/AILeadResponseSystem.tsx`

**Line 404** — Update card styling:
- From: `border-border bg-card`
- To: `border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm`

**Line 407** — Update heading text:
- From: `text-foreground`
- To: `text-navy-foreground`

**Line 410** — Update body text:
- From: `text-muted-foreground`
- To: `text-navy-foreground/60`

The card will now appear as a navy-tinted glass panel floating on the light background, with the page's premium dark aesthetic while maintaining visual separation from the section above.

