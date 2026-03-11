

## Plan: Add Framer-Motion Entrance Animations to BaySignalSection Cards

### Step 1: Install Framer-Motion
Add `framer-motion` to dependencies in `package.json` (version ^11.x).

### Step 2: Update `src/components/BaySignalSection.tsx`
Import `motion` from framer-motion and create staggered entrance animations:

1. **Container variant** — parent container with `staggerChildren: 0.1` to sequence card animations
2. **Card variant** — individual cards fade in + slide up from `y: 30` with `opacity: 0` to visible
3. **Apply to card groups**:
   - Stats row (4 cards)
   - Feature cards (3 cards)
   - How It Works steps (4 steps)
   - Results highlights (3 cards)

4. **Header animation** — Hero text fades in first with slightly longer duration

Animation specs:
- Duration: 0.6s
- Easing: `[0.25, 0.1, 0.25, 1]` (ease-out-quart)
- Stagger: 0.1s between cards
- Initial state: `opacity: 0, y: 30`
- Animate state: `opacity: 1, y: 0`

### Files to Edit
- `package.json` — add framer-motion dependency
- `src/components/BaySignalSection.tsx` — add motion components and variants

