

## Match ROI Calculator to Connect Section Pattern

The Connect section uses `bg-background` (light) for the outer section and `bg-navy` for the "Send Us a Message" card. The ROI calculator currently uses `bg-navy` for the outer wrapper and a glass effect for the card. We'll flip it to match.

### Changes in `src/components/ROICalculator.tsx`

**Outer wrapper (line 141):**
- `bg-navy` → `bg-background`

**Calculator card (lines 148-158):**
- Glass effect (`rgba(255,255,255,0.07)`, `backdropFilter: blur(12px)`, `border: 1px solid rgba(255,255,255,0.1)`) → Use Tailwind classes `bg-navy` with `border border-navy-foreground/10` (matching the "Send Us a Message" card exactly)

**Text colors stay as-is** — the card interior already uses light text (`#e1ecff`, `#ffffff`, `#94b8d8`) which will remain legible on the dark navy card background.

**CTA area text (line 439):**
- `text-navy-foreground/60` → `text-muted-foreground` (legible on light background)

**Results card** — stays as-is (`#16324f`) since it's inside the navy card.

