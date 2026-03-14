

## Upgrade "How the AI Lead Response System Works" Section

The current section is a plain vertical list of cards with static arrow-down icons. Here's the plan to make it premium and animated:

### Design

Replace the simple stacked cards with a **connected timeline/pipeline** layout featuring:

1. **Numbered step indicators** — Each step gets a large step number (`01`–`05`) with a glowing primary-colored connector line between them
2. **Animated connector line** — A vertical line that "draws" downward as the section scrolls into view using Framer Motion's `pathLength` animation
3. **Staggered scale-in cards** — Cards animate in with the standardized `scale: 0.9 → 1` pattern (per project conventions) with staggered timing
4. **Glowing active nodes** — Each step has a pulsing dot on the connector line that lights up as cards appear
5. **Subtle gradient background** — Add a faint dot-grid pattern (matching the AILeadResponseSection on the homepage) for visual texture

### Technical Changes — `src/pages/AILeadResponseSystem.tsx`

**Lines 164–204** — Replace the current solution section with:

- An SVG vertical connector line animated via Framer Motion's `motion.line` with `pathLength` from 0→1
- Each step rendered as a horizontal row: glowing node → card (alternating left/right on desktop, all left-aligned on mobile)
- Cards use `initial={{ opacity: 0, scale: 0.9 }}` / `whileInView={{ opacity: 1, scale: 1 }}` with `staggerChildren: 0.15` for the coordinated glide effect
- Step numbers displayed as large semi-transparent text behind each card for depth
- Dot-grid background pattern added to the section via CSS `backgroundImage`
- Hover effect on cards: slight lift + primary glow shadow (`shadow-[0_8px_30px_hsl(var(--primary)/0.08)]`)

No new files or dependencies needed — all built with existing Framer Motion and Tailwind utilities.

