

## Optimize Homepage Animations for Mobile

### Changes

1. **`src/components/HeartbeatHero.tsx`** — Hide `FloatingNodes` on small screens
   - Wrap the SVG component with `hidden md:block` so it doesn't render/animate on mobile at all
   - Removes 13 concurrent framer-motion animations from mobile paint

2. **`src/components/AIOperatingSystem.tsx`** — Remove `hover:scale-105` on mobile
   - Replace with `lg:hover:scale-105` so the scale effect only applies on desktop (where hover exists)
   - Prevents accidental layout shift on tap

3. **`src/components/TechnologyCarousel.tsx`** — Narrow transition scope on image hover
   - Change `transition-all duration-300` → `transition-transform duration-300` on carousel images

4. **`src/App.css`** — Fix `.feature-item` transition
   - Change `transition: all 0.3s ease` → `transition: box-shadow 0.3s ease, transform 0.3s ease`

These are small, targeted fixes that reduce GPU load and prevent CSS/framer-motion conflicts on mobile devices.

