

## Fix Background Flow Between Consecutive Navy Sections

Both "Who This System Is For" and "See If This System Is Right" use `bg-navy` with separate `NavySectionBg` blur orbs. Two consecutive navy sections each rendering their own gradient overlay and orbs creates a visible seam at the boundary.

### Fix in `src/pages/AILeadResponseSystem.tsx`

**Remove `<NavySectionBg />` from the "Next Step CTA" section (line 398)**. Since it immediately follows another `bg-navy` section, the background already flows seamlessly — the duplicate gradient overlay and orbs are what cause the visual break.

This matches the site's established dark-flow pattern where consecutive navy sections share a single visual treatment rather than stacking independent backgrounds.

