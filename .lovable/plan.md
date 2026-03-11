

## Plan: Move ROI Calculator to Its Own Page

### Changes

1. **Create `src/pages/ROICalculator.tsx`** — New page component that imports and renders the existing `ROICalculator` component, wrapped with `HeartbeatNavbar`, `HeartbeatFooter`, `SEOHead`, and `bg-background` styling (matching other pages).

2. **Update `src/App.tsx`** — Add lazy-loaded route: `<Route path="/roi" element={<ROICalculatorPage />} />`.

3. **Update `src/components/HeartbeatNavbar.tsx`** — Add "ROI Calculator" link (`/contact` pattern) to both desktop and mobile nav menus.

4. **Update `src/pages/Index.tsx`** — Remove the `ROICalculator` lazy import and its `<AnimatedSection>` block from the homepage.

