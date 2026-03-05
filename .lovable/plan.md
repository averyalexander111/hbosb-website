

## Plan: Move Testimonials Above ROI Calculator

A single change in `src/pages/Index.tsx` — swap the order of the `TestimonialsSection` and `ROICalculator` lazy-loaded sections.

### Current order:
1. HeartbeatHero
2. TechnologyCarousel
3. BaySignalSection
4. **ROICalculator**
5. **TestimonialsSection**
6. FAQSection
7. ConnectSection

### New order:
1. HeartbeatHero
2. TechnologyCarousel
3. BaySignalSection
4. **TestimonialsSection** ← moved up
5. **ROICalculator** ← moved down
6. FAQSection
7. ConnectSection

### File changed
- **`src/pages/Index.tsx`**: Swap the two `<Suspense>` blocks so TestimonialsSection renders before ROICalculator.

This places social proof immediately after services, building trust before asking the user to engage with the calculator.

