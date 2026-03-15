

## Update Final CTA Card Styling

The card currently uses `bg-card` which appears white/light on the `bg-background` section. Change it to use the navy card treatment (`bg-navy-light/50 border-navy-foreground/10`) with navy-foreground text colors — consistent with the premium navy aesthetic used in "The Problem" and "What's Included" sections.

### Changes in `src/pages/AILeadResponseSystem.tsx`

**Line 404** — Update card styling:
- From: `border border-border bg-card`
- To: `border border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm`

**Lines 407, 410** — Update text colors back to navy:
- `text-foreground` → `text-navy-foreground`
- `text-muted-foreground` → `text-navy-foreground/60`

This creates a premium navy-tinted floating card on the light background, visually distinct from white while maintaining the site's color system.

