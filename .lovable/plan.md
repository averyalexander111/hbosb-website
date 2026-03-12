

## Fix Janky Card Animations on Homepage

**Root cause:** Every card component has `transition-all duration-300` in its Tailwind classes. This CSS transition captures *all* property changes — including `opacity` and `transform` (scale) — which are also being animated by framer-motion. The two animation systems fight each other, producing stuttery, non-smooth entrance animations.

**Fix:** Replace `transition-all` with specific CSS transition properties that only cover hover effects (shadow, translate, colors), leaving `opacity` and `scale` entirely to framer-motion.

### Files to edit (5 files, one class change each)

1. **`src/components/ProblemSection.tsx`** (line 51)
   - `transition-all duration-300` → `transition-[box-shadow] duration-300`

2. **`src/components/AIOperatingSystem.tsx`** (line 65)
   - `transition-all duration-300` → `transition-[border-color,box-shadow] duration-300`

3. **`src/components/AISystemsSection.tsx`** (line 47)
   - `transition-all duration-300` → `transition-[box-shadow,transform] duration-300`
   - (keeps hover translate working, but framer-motion controls initial scale)

4. **`src/components/ImplementationSection.tsx`** (line 51)
   - `transition-all duration-300` → remove entirely (no hover effects on these cards)

5. **`src/components/TestimonialsSection.tsx`** (line 41)
   - `transition-all duration-300` → `transition-[box-shadow,transform] duration-300`

This ensures CSS transitions only animate hover interactions while framer-motion has sole control over entrance animations.

