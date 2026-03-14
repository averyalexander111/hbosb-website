

## Fix AI Lead Response Section Background

**The problem**: The "Never Miss Another Lead" section uses `bg-gradient-to-br from-navy via-navy-light to-navy` (dark), but it sits between the FAQ section (light) and the Final CTA section (also dark navy). This creates two consecutive dark sections, breaking the homepage's dark-light alternating rhythm.

**The fix**: Change the AILeadResponseSection background to a light theme (`bg-background`) and update all text colors from navy-foreground to standard foreground/muted-foreground so the content remains readable on a light background.

### Changes to `src/components/AILeadResponseSection.tsx`

- Section background: `bg-gradient-to-br from-navy via-navy-light to-navy` → `bg-background`
- Glow orb: `bg-primary/8` → `bg-primary/5` (subtler on light bg)
- Heading: `text-navy-foreground` → `text-foreground`
- Description paragraphs: `text-navy-foreground/60` → `text-muted-foreground`
- Cards remain `bg-card` with `border-border` (already work on light backgrounds)

Single file change, no structural modifications.

