

## Make ProblemSection and AISystemsSection animations glide smoothly

### Problem
The cards in these two sections use individual `whileInView` triggers. In a grid layout, cards in different rows can enter the viewport at different scroll positions, causing each to fire its own fade-in independently — resulting in a flickery, choppy feel rather than a coordinated glide.

The AI Operating System section feels smooth because its horizontal layout means all cards enter the viewport together, so the index-based delays create a clean sequential wave.

### Fix
Use a parent container animation to orchestrate all cards as one group (the cards animate together when the grid enters view, not independently):

- Wrap the cards grid in a `motion.div` with `whileInView` that uses `staggerChildren: 0.1` and `ease: "easeOut"`
- Each card uses `variants` (hidden/visible) instead of individual `whileInView` — so they animate relative to the parent trigger, not their own scroll position
- Increase card transition duration from `0.4` to `0.5` and use `ease: "easeOut"` for a smoother glide
- Keep the heading as a separate `motion.div` with its own `whileInView` (unchanged)

### Files changed
- `src/components/ProblemSection.tsx`
- `src/components/AISystemsSection.tsx`

