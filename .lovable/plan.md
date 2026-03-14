

## Match "See If This System" CTA Section to Investment Background

The "Next Step CTA" section (line 344) currently uses `bg-gradient-to-b from-navy via-navy-light to-navy` with custom overlays. The "Investment" section (line 245) uses a simple `bg-background` (white/light).

### Change — `src/pages/AILeadResponseSystem.tsx`

1. Replace the CTA section's background classes and remove the two decorative overlay divs
2. Update text colors from `text-navy-foreground` / `text-navy-foreground/60` to `text-foreground` / `text-muted-foreground`

**Line 344:** Change section class from `py-28 bg-gradient-to-b from-navy via-navy-light to-navy relative overflow-hidden` to `py-28 bg-background`

**Lines 345-346:** Remove the two absolute-positioned blur orb divs

**Line 356-359:** Update heading to `text-foreground`, paragraph to `text-muted-foreground`

Single file, minimal changes.

