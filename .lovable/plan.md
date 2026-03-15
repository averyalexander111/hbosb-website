

## Match ROI Calculator Background to Connect Section

The Connect Section uses `bg-background` (the site's standard light background). The ROI Calculator currently uses `bg-navy` (dark). We'll switch the ROI Calculator's outer wrapper to `bg-background` and keep the inner card as-is since it's already a dark glass card — this mirrors the Connect Section pattern where the section is light but the form card is dark navy.

### Changes in `src/components/ROICalculator.tsx`

**Line 141 — Outer wrapper:**
- `className="bg-navy"` → `className="bg-background"`

**CTA text (line ~479 area):**
- Update `text-navy-foreground/60` → `text-muted-foreground` so the subtitle text is legible on light background

The inner calculator card and results panel remain dark (glass effect), matching exactly how the Connect Section has a light background with a dark form card inside.

