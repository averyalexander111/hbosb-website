

## Improve AI Lead Response System Page to Match Site Patterns

After comparing with the homepage and other subpages, here are the inconsistencies and fixes:

### 1. Missing end-of-page dark flow
Every other page ends with a seamless dark sequence (CTA → ConnectSection → Footer). This page goes from a light CTA section straight to the footer, breaking the site-wide pattern.

**Fix:** Make the Final CTA section navy-themed (matching FinalCTASection style) and add the `ConnectSection` component between it and the footer for the unified dark flow.

### 2. Missing ScrollToTopButton
Homepage includes `ScrollToTopButton`; this page does not.

**Fix:** Add `ScrollToTopButton` component.

### 3. Card animations inconsistent
Homepage standardizes all cards to `scaleIn` (scale: 0.9 → 1) with staggerChildren. This page uses `fadeUp` (translateY) for problem cards and feature cards.

**Fix:** Switch problem cards and feature cards to use `scaleIn` variants within staggered parents.

### 4. Unnecessary dot-grid pattern
The "How It Works" section has a radial dot-grid background pattern. No light-background section on the homepage uses this — it's a visual outlier.

**Fix:** Remove the inline `backgroundImage` style from that section.

### 5. Page wrapper structure
Homepage uses `<div className="min-h-screen">` with `<main>` inside. This page uses `<main>` as the root.

**Fix:** Wrap in `<div className="min-h-screen">` with `<main className="bg-background">` inside, consistent with Contact page pattern.

---

### Changes in `src/pages/AILeadResponseSystem.tsx`

- **Imports:** Add `ConnectSection`, `ScrollToTopButton`
- **Wrapper:** Change `<main className="min-h-screen">` to `<div className="min-h-screen"><main className="bg-background">`
- **Problem cards (line 155):** Change `variants={fadeUp}` to `variants={scaleIn}`
- **Feature cards (line 267):** Change `variants={fadeUp}` to `variants={scaleIn}`
- **"How It Works" section (lines 170-174):** Remove inline `style` with dot-grid pattern
- **Final CTA section (line 397):** Change `bg-background` to navy gradient (`bg-gradient-to-b from-navy via-navy-light to-navy`), update card to glass style (`bg-white/10 backdrop-blur`), update text to `text-navy-foreground`
- **After Final CTA:** Add `<ConnectSection />`
- **After footer:** Add `<ScrollToTopButton />`
- **Closing tags:** Close `</main></div>` properly

