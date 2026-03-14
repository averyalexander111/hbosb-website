

## Unify Dark Section Backgrounds

**Problem**: Three adjacent sections have mismatched dark backgrounds:
- **FinalCTA**: `bg-gradient-to-br from-navy via-navy-light to-navy` (diagonal gradient)
- **Connect**: `bg-gradient-to-br from-navy via-navy-light to-navy` (same gradient, but restarts — creating a visible seam)
- **Footer**: `bg-navy` (flat, different shade) + a `border-t-2` hard line

Each gradient section restarts independently, creating visible shade shifts at boundaries.

**Solution**: Unify all three into a single continuous visual flow:

1. **FinalCTASection.tsx** — Change gradient direction to `bg-gradient-to-b from-navy via-navy-light to-navy` (top-to-bottom instead of diagonal) so the bottom edge ends at `navy`, matching the next section's start.

2. **ConnectSection.tsx** — Use flat `bg-navy` instead of restarting the gradient. Keep the decorative glow orbs for visual interest (they provide enough variation without creating shade mismatches).

3. **HeartbeatFooter.tsx** — Keep `bg-navy` but soften the `border-t-2 border-navy-foreground/15` to `border-t border-navy-foreground/8` so it's a subtle separator rather than a hard line.

This creates a smooth flow: gradient fades into flat navy → flat navy continues → subtle divider into footer navy.

