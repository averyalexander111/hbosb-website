

## Fix Double Animation in ProblemSection and AISystemsSection

### Problem
Both sections have two separate framer-motion animation groups:
1. The heading/subtitle wrapper animates in (opacity 0→1, y 20→0)
2. Each card animates in independently with staggered delays

Combined with the `<Suspense>` fallback (animated pulse loader), users see what feels like a "double animation" -- content appears to animate in twice.

### Fix
**Consolidate to a single entrance animation per section** by using a staggered container pattern instead of independent animations:

**ProblemSection.tsx and AISystemsSection.tsx:**
- Remove the separate `motion.div` wrapper around the heading
- Use a single parent `motion.div` with `staggerChildren` to orchestrate heading + cards as one coordinated entrance
- The heading appears first, then cards stagger in seamlessly -- one fluid animation instead of two disconnected ones
- Keep `viewport={{ once: true }}` to prevent re-triggering

### Files changed
- `src/components/ProblemSection.tsx`
- `src/components/AISystemsSection.tsx`

