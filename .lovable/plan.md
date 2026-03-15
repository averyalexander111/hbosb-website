

## Make "Estimate Your ROI" Card White with Dark Text

### Changes in `src/components/ROICalculator.tsx`

**Card background (line 151-156):**
- `background: 'rgba(255,255,255,0.07)'` → `background: '#ffffff'`
- `border: '1px solid rgba(255,255,255,0.1)'` → `border: '1px solid #e2e8f0'`
- Remove `backdropFilter`

**Title (line 163):**
- `color: '#ffffff'` → `color: '#16324f'`

**Subtitle (line 167):**
- `color: '#94b8d8'` → `color: '#5e84a7'`

**Label style (line 136):**
- `color: '#e1ecff'` → `color: '#16324f'`

**Input style (lines 125-127):**
- `color: '#e1ecff'` → `color: '#16324f'`
- `background: 'rgba(255,255,255,0.1)'` → `background: '#f8fafc'`
- `border: '1px solid rgba(255,255,255,0.2)'` → `border: '1px solid #c7d6ea'`

**Tip text (find `color: '#94b8d8'` near the tip):**
- → `color: '#5e84a7'`

**Calculate button** stays green — works on both backgrounds.

**Results card stays dark** (`#16324f`) — provides contrast within the white card.

