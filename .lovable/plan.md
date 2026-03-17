

## Remove duplicate CTA from ROI Calculator

The ROI Calculator component has its own "Start My Assessment" wave button and tagline at the bottom, which is redundant since the `FinalCTASection` immediately follows with a more polished CTA ("Start Your AI Revenue System Assessment").

### Change in `src/components/ROICalculator.tsx`
- Remove the entire CTA block at the bottom (lines ~225-280): the `<div style={{ textAlign: 'center' }}>` containing the wave button styles, the `<a>` linking to the audit page, and the "Complimentary. Get your fastest first win." tagline.

This leaves the calculator focused on its purpose (input + results) and lets `FinalCTASection` handle the conversion step.

