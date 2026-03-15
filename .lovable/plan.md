

## Fade the Hard Line Between ROI Calculator and Connect Section

Both sections use `bg-background`, so the line is caused by the boundary between the ROI Calculator's padded container and the ConnectSection's own section element. On this page only, we'll blend them by:

### Changes in `src/pages/ROICalculatorPage.tsx`

1. Remove `paddingBottom: '60px'` from ROICalculator by passing a prop (or wrapping approach), and remove the `AnimatedSection` wrapper around ConnectSection to eliminate extra DOM boundaries.

Actually, simpler approach — since both sections already share `bg-background`, the visible line is from the `AnimatedSection` wrapper (which starts at `opacity-0` and shifts layout) plus the gap between padding. We'll:

1. **Remove the `AnimatedSection` wrapper** around `ConnectSection` — it adds a translate/opacity boundary.
2. **Add a shared wrapper** with `bg-background` around both the ROICalculator and ConnectSection, removing the bottom padding from the calculator so they flow together seamlessly.

### `src/pages/ROICalculatorPage.tsx`

- Wrap both `ROICalculator` and `ConnectSection` in a single `<div className="bg-background">` container.
- Remove `AnimatedSection` around `ConnectSection`.

### `src/components/ROICalculator.tsx` (line 141)

- Remove `paddingBottom: '60px'` from the outer div (change to `paddingBottom: '0'`).
- The CTA button area below the card already has `marginTop: '40px'` which provides spacing.

This ensures both components sit within one continuous `bg-background` container with no seams.

