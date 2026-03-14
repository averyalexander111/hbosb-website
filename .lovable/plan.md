

## Make AI Lead Response System Background Flow Consistent

The AI Lead Response page currently alternates between `bg-background` (white) and `bg-muted/30` (very faint gray), which creates a flat, washed-out feel compared to the rest of the site. Other subpages like About Us use a bold `bg-background` / `bg-navy` alternating rhythm with blur orbs and overlays, creating the premium dark-to-light visual flow.

### Current section backgrounds (AI Lead Response)

```text
SubpageHero         → navy (correct)
Hero desc + CTA     → bg-background
The Problem         → bg-muted/30      ← flat
The Solution        → bg-background
What's Included     → bg-muted/30      ← flat
Investment          → bg-background
Why Install         → bg-muted/30      ← flat
Next Step CTA       → navy gradient (correct)
```

### Proposed section backgrounds

```text
SubpageHero         → navy (no change)
Hero desc + CTA     → bg-background (no change)
The Problem         → bg-navy + blur orbs
The Solution        → bg-background (no change)
What's Included     → bg-navy + blur orbs
Investment          → bg-background (no change)
Why Install         → bg-navy + blur orbs
Next Step CTA       → navy gradient (no change)
```

### Changes — single file: `src/pages/AILeadResponseSystem.tsx`

1. Wrap content in `<main>` for semantic consistency with other subpages
2. Convert three `bg-muted/30` sections to `bg-navy` with `relative overflow-hidden`, blur orb overlays, and update text colors from `text-foreground` / `text-muted-foreground` to `text-navy-foreground` / `text-navy-foreground/60` — matching the About Us pattern exactly
3. Update card styling inside navy sections from `bg-card border-border` to `bg-navy-light/50 border-navy-foreground/10 backdrop-blur-sm`
4. Update icon containers in navy sections from `bg-destructive/10` / `bg-primary/10` to appropriate navy-aware variants

This brings the page in line with the About Us, homepage, and other subpages' premium dark-to-light visual rhythm.

