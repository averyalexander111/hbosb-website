## Plan: Polish the "Start with a plan or install your system" cards

Upgrade the two CTA cards in `src/pages/AILeadResponseSystem.tsx` (lines ~509–551) so they feel intentional and premium instead of flat boxes with a subtitle and a button. Copy, section background, heading, animations, and links stay exactly as they are.

### Visual changes per card

Each card gets a clearer hierarchy and a distinct identity while staying visually balanced as a pair:

1. **Icon badge at the top** — a circular tinted badge containing a Lucide icon.
   - Card 1 (Assessment): `Compass` icon — "map it out".
   - Card 2 (Installation): `Rocket` icon — "ready to move / build it".
   - Badge: `w-12 h-12 rounded-xl bg-primary/10 text-primary`, centered, with subtle ring on hover.

2. **Eyebrow label** above the title (small uppercase tag):
   - Card 1: `Option 1 · Plan`
   - Card 2: `Option 2 · Install`
   - Style: `text-xs font-semibold tracking-[0.15em] uppercase text-primary`.

3. **Card title** (new, derived from existing button labels — does not change button copy):
   - Card 1: "Get your assessment"
   - Card 2: "Install your system"
   - Style: `text-xl font-semibold text-foreground`.

4. **Existing tagline** (unchanged copy) demoted slightly to a supporting paragraph under the title with consistent line-height.

5. **Existing CTA button** preserved verbatim (label, link, `border-glow-spin`, hover behavior). Button becomes `w-full` so both cards have a strong, even base.

6. **Card chrome upgrade**:
   - Replace flat `bg-card border border-border` with a layered look:
     - `bg-card/80 backdrop-blur-sm`
     - `border border-border/60`
     - `rounded-2xl`
     - Soft top accent bar: a 1px gradient line `bg-gradient-to-r from-transparent via-primary/40 to-transparent` at the top inside edge.
     - Subtle inner glow on hover via `hover:border-primary/40` and existing `hover:shadow-elegant-hover hover:-translate-y-1`.
   - Increase internal padding to `p-8 sm:p-10`, switch text alignment to `text-left` for a more editorial feel (icon + eyebrow + title left-aligned; button full-width below).

7. **Grid spacing**: bump gap from `gap-6` to `gap-6 lg:gap-8` and widen container slightly (`max-w-3xl` instead of `max-w-2xl`) so cards breathe at desktop without dominating the section.

8. **Section heading support**: keep the existing accent bar + `section-title`. Add a single supporting line under the title (using existing muted style) — only if it strengthens hierarchy. **Decision: skip** to honor the "no new copy" preference; rely on card eyebrows for context.

### Out of scope

- No copy changes to: the section heading, the two existing taglines, or the two button labels.
- No changes to links, animation variants (`fadeUp`, `stagger`, `scaleIn`), section background, or surrounding sections.
- No changes to other pages or shared components.

### Technical notes

- File touched: `src/pages/AILeadResponseSystem.tsx` only.
- Add `Compass` and `Rocket` to the existing `lucide-react` import (already used for `ArrowRight`).
- Keep `motion.div` wrappers and existing `variants={scaleIn}` intact; only the inner card markup changes.
- Continue using brand tokens (`primary`, `card`, `border`, `foreground`, `muted-foreground`) — no hardcoded colors.
- Respect existing animation guidance: keep `transition-[box-shadow,transform]` (no `transition-all`).
