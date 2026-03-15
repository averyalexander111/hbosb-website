

## Make "See If This System Is Right" Card Dark Navy with Light Background

### Changes in `src/pages/AILeadResponseSystem.tsx`

**Section background (line 396):**
- `bg-gradient-to-b from-navy via-navy-light to-navy` → `bg-background`
- Remove the two decorative blur orb divs (lines 397-398) since the section will be light

**Card (line 405):**
- `bg-white/10 backdrop-blur-sm` → `bg-navy border-navy-foreground/10` (matching the "Send Us a Message" and ROI calculator card pattern)

**Text colors stay as-is** — `text-navy-foreground` and `text-navy-foreground/60` are already light-on-dark and will remain legible on the navy card.

