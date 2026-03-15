

## Add Scale-In Entrance Animation to Investment Pricing Cards

Per the project's animation conventions, card-based items use a scale-in animation (`opacity: 0, scale: 0.9` → `opacity: 1, scale: 1`) with 0.4s duration and staggered children.

### Changes in `src/pages/AILeadResponseSystem.tsx`

**1. Add a `scaleIn` variant** alongside the existing `fadeUp` and `stagger` variants:

```ts
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};
```

**2. Replace `fadeUp` with `scaleIn`** on the two pricing card `motion.div` elements (lines 300-301 and 310-311) so they scale in rather than slide up — matching the card animation pattern used across the rest of the site.

**3. Add hover interaction** to both cards: `hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300` for a subtle lift on hover, consistent with the feature cards in the "What the System Includes" section.

