

## Fix Background Conflict Between "Who This System Is For" and Final CTA

The problem: Both consecutive sections use identical `bg-navy` backgrounds with the same blur orbs, causing them to visually blend together without clear separation.

**Solution:** Change the Final CTA section to use a gradient background (`bg-gradient-to-b from-navy via-navy-light to-navy`) that differentiates it from the solid navy section above, while maintaining the premium dark aesthetic. The card inside will still use `bg-navy-light/50` for its panel effect.

### Changes in `src/pages/AILeadResponseSystem.tsx`

**Line 397** — Replace the Final CTA section wrapper:
- From: `<section className="py-28 relative overflow-hidden bg-navy">`
- To: `<section className="py-28 relative overflow-hidden bg-gradient-to-b from-navy via-navy-light to-navy">`

**Line 398** — Remove `NavySectionBg` since the gradient provides sufficient depth:
- Remove: `<NavySectionBg />`

This creates a smooth visual transition between the two sections while preserving the premium dark aesthetic and the floating card design of the Final CTA.

