

## Add Visual Transition Between ROI Calculator and FinalCTASection

Both sections share the same `bg-background` light blue background. Adding a subtle visual break will improve the flow.

### Change in `src/pages/ROICalculatorPage.tsx`
- Insert a decorative divider between the `ROICalculator` Suspense block and `FinalCTASection`
- Use a centered fading horizontal line with extra vertical padding (`py-8`) to create breathing room — matching the site's navy accent color at low opacity

```tsx
{/* Between ROICalculator and FinalCTASection */}
<div className="bg-background flex justify-center py-8">
  <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
</div>
```

This creates a soft, centered gradient line that visually separates the two sections without disrupting the light-blue background flow.

