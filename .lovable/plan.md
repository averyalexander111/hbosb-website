

## Remove ConnectSection from ROI Calculator Page

Remove the `ConnectSection` component entirely from the ROI Calculator page. The page flow will become:

**SubpageHero → ROICalculator → FinalCTASection → HeartbeatFooter**

### Changes to `src/pages/ROICalculatorPage.tsx`
- Remove the lazy import of `ConnectSection`
- Remove the `AnimatedSection` + `Suspense` wrapper containing `ConnectSection`
- Clean up unused imports (`AnimatedSection`, `Suspense` if no longer needed — `Suspense` is still needed for `ROICalculator`)

