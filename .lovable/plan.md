

## Premium Design Refinement — All 8 Improvements

This is a large but purely visual/UX refinement across 7 files, preserving all existing structure, content, and functionality.

### 1. Hero Section (`HeartbeatHero.tsx`)
- Increase headline to `text-5xl sm:text-6xl md:text-7xl`
- Add animated SVG workflow graphic in background (subtle pulsing connected nodes/lines using CSS animations, positioned absolute on the right side)
- Make CTA button more prominent: larger padding (`px-8 py-4`), add `shadow-[0_0_30px_rgba(var(--primary),0.3)]` glow effect, slight scale on hover
- Add a subtle animated gradient sweep on the CTA button

### 2. AI Operating System Diagram (`AIOperatingSystem.tsx`)
- Add animated connecting lines between stages using a horizontal dashed line with a CSS `animate-pulse` glow
- Add hover scale + border glow effect on each stage card (`hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]`)
- Increase icon container size slightly and add a subtle icon rotation on hover
- The chevron arrows get a subtle pulse animation

### 3. Technology Carousel (`TechnologyCarousel.tsx`)
- Add soft card backgrounds behind each logo: `bg-white/5 rounded-xl border border-white/10`
- Increase padding/spacing in carousel items
- Add hover glow: `hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]`
- Add tech name label below each logo on hover

### 4. Testimonials Section (`TestimonialsSection.tsx`)
- Already has avatars, star ratings, and names — enhance with:
  - Add business type/industry labels under each name
  - Add subtle hover lift (`hover:-translate-y-1`) 
  - Increase card padding and spacing between cards

### 5. FAQ Section (`FAQSection.tsx`)
- Increase vertical spacing between accordion items (`py-5` on items, `gap-2`)
- Add active state accent: left border highlight on open item (`data-[state=open]:border-l-2 data-[state=open]:border-l-primary`)
- Add subtle background on open item (`data-[state=open]:bg-primary/5 rounded-lg px-4`)
- Add section subtitle

### 6. Final CTA Section (`FinalCTASection.tsx`)
- Update CTA text to "Book Your AI Opportunity Assessment"
- Add subtitle line under button: "Discover where automation can create the biggest impact in your business."
- Increase section padding (`py-28`)
- Add gradient background: `bg-gradient-to-br from-navy via-navy-light to-navy`
- Make CTA button larger with glow effect matching hero
- Add subtle radial glow behind the CTA area

### 7. Footer (`HeartbeatFooter.tsx`)
- Add stronger divider: `border-t-2 border-navy-foreground/15`
- Add hover underline animation on nav links
- Increase spacing between grid columns
- Add subtle hover scale on social icons
- Make tagline more prominent: slightly larger text, `text-navy-foreground/60`

### 8. Micro-interactions (spread across above files)
- Cards: `hover:-translate-y-1 hover:shadow-elegant-hover` (already on some, add consistently)
- Icon containers: `group-hover:scale-110 transition-transform` on icon wrappers
- All scroll animations already use `whileInView` fade-in — these stay as-is

### Files changed
- `src/components/HeartbeatHero.tsx`
- `src/components/AIOperatingSystem.tsx`
- `src/components/TechnologyCarousel.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/FAQSection.tsx`
- `src/components/FinalCTASection.tsx`
- `src/components/HeartbeatFooter.tsx`

