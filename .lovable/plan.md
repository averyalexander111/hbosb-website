

## Plan: Style ROI Calculator Page to Match Homepage + Add ConnectSection

### Changes to `src/pages/ROICalculatorPage.tsx`

1. **Add ConnectSection** — Import and render the `ConnectSection` component (lazy-loaded) between the ROI calculator and the footer, wrapped in an `AnimatedSection` just like the homepage does.

2. **Match homepage structure** — The ROI calculator component already uses the dark navy `#16324f` background internally, so it naturally flows with the `ConnectSection` (which also uses `--connect-bg`). The page wrapper with `bg-background` already matches the homepage.

The result: Navbar → ROI Calculator (dark navy) → ConnectSection (dark navy with contact form + info) → HeartbeatFooter.

### File: `src/pages/ROICalculatorPage.tsx`
- Import `AnimatedSection` and lazy-load `ConnectSection`
- Add `<AnimatedSection><ConnectSection /></AnimatedSection>` after the ROI calculator and before the footer

