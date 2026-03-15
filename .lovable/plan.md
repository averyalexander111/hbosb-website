

## Make ROI Calculator Background Dark Navy

The ROI Calculator currently uses `bg-background` (light) as its outer wrapper, with a white card inside. The SubpageHero above it is dark navy, so there's a jarring light break. We need to make the entire calculator section dark navy to flow seamlessly from the hero.

### Changes in `src/components/ROICalculator.tsx`

**Outer wrapper (line 122):**
- `bg-background` with `color: '#1e293b'` → `bg-navy` with no inline color override

**Calculator card (line 129-137):**
- White background `#ffffff` → semi-transparent glass `bg-white/10 backdrop-blur` with `border: 1px solid rgba(255,255,255,0.1)`
- Text color `#16324f` → `#e1ecff` (light blue for dark bg)

**Title (line 143):**
- `color: '#16324f'` → `color: '#ffffff'`

**Subtitle (line 147):**
- `color: '#34577a'` → `color: '#94b8d8'`

**All labels (~10 occurrences, lines 154, 182, 225, 253, 281, 310, 338, 366, 395):**
- `color: '#16324f'` → `color: '#e1ecff'`

**All inputs and select (~10 occurrences):**
- `color: '#16324f'`, `background: '#ffffff'`, `border: '1px solid #c7d6ea'` → `color: '#e1ecff'`, `background: 'rgba(255,255,255,0.1)'`, `border: '1px solid rgba(255,255,255,0.2)'`

**Tip text (line 437):**
- `color: '#5e84a7'` → `color: '#94b8d8'`

**CTA area (line 479):**
- The "Start My Assessment" button area text: `text-slate-500` → `text-navy-foreground/60`

**Results card stays as-is** — it's already dark navy `#16324f` which will look like a slightly lighter panel within the dark section.

### Changes in `src/pages/ROICalculatorPage.tsx`

**Line 13:** Remove `bg-background` from outer div since the calculator itself is now navy and needs to flow from the dark hero seamlessly. Change to just `min-h-screen`.

