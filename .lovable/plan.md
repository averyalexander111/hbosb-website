

## Plan: Update ROI Calculator Background to Match Homepage

The ROI calculator currently uses a dark navy (`#16324f`) background. The homepage uses the brand's light blue (`#d1e8ff` / `bg-background`). 

### Changes to `src/components/ROICalculator.tsx`

1. **Outer wrapper** (line ~121): Change `background: '#16324f'` to use the light blue `#d1e8ff` background, and update text colors from white to dark slate (`text-slate-800`, `text-slate-600`) to match the homepage's typography.

2. **Section header** (lines ~128-145): Update heading color from `#ffffff` to `#1e293b` (slate-800) and subtitle from `#e1ecff` to `#475569` (slate-600).

3. **Results panel** (lines ~335-365): Keep the dark navy `#16324f` background on the results card as a contrast element (it already works well as an accent), or switch to a white card with dark text — matching the form card style.

4. **CTA "Start My Assessment" area** (lines ~370+): Update the subtitle text color from `text-slate-500` to something visible on the light background.

This brings the calculator section in line with the light blue gradient aesthetic used across the rest of the site.

