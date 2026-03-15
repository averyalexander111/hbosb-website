

## Fix the visible line between ROI Calculator and Connect Section

The seam appears because the ROI Calculator section has `paddingBottom: '60px'` on its outer `bg-background` div, and the ConnectSection starts its own `bg-background` section below. The `AnimatedSection` wrapper around `ConnectSection` may also introduce a gap.

### Changes

**`src/components/ROICalculator.tsx` (line 141):**
- Remove `paddingBottom: '60px'` — change to `paddingBottom: '0px'` so there's no gap before ConnectSection

**`src/pages/ROICalculatorPage.tsx` (lines 27-31):**
- Remove the `AnimatedSection` wrapper around `ConnectSection` so there's no extra wrapper element creating a boundary. Keep the Suspense wrapper.

This eliminates the visual break between the two sections that share the same `bg-background`.

