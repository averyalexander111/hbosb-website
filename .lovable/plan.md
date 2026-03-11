

## Match ProblemSection and AISystemsSection animations to the rest of the homepage

### Problem
ProblemSection and AISystemsSection use a parent container `variants` pattern (`containerVariants` + `itemVariants` with `staggerChildren`), while every other homepage section uses individual `motion.div` elements with their own `initial`/`whileInView`/`transition` props and per-item `delay: i * 0.1`. This creates a visual inconsistency (the "double animation" feel).

### Fix
Rewrite both sections to match the pattern used by ImplementationSection, ResultsSection, etc.:

- **Remove** `containerVariants` and `itemVariants` definitions
- **Replace** the parent `motion.div` container with a plain `div`
- **Heading**: Use `motion.div` with `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`, `transition={{ duration: 0.5 }}`
- **Each card**: Use `motion.div` with `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`, `transition={{ duration: 0.4, delay: i * 0.1 }}`

### Files changed
- `src/components/ProblemSection.tsx`
- `src/components/AISystemsSection.tsx`

