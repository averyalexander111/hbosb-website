

## Move "Who This System Is For" Above "Need Something More Advanced?"

### What & Why
Swap the two sections so the page narrative flows: Investment → Who This System Is For → Need Something More Advanced? → Final CTA. This keeps the core system pitch together before introducing the upsell.

### Changes — `src/pages/AILeadResponseSystem.tsx`

1. **Cut** the "Who This System Is For" section (currently after "Need Something More Advanced?") and **paste** it before "Need Something More Advanced?"

2. **Retheme "Who This System Is For"** to light background (`bg-background`) so the alternating dark/light rhythm is maintained:
   - Remove `NavySectionBg`
   - Change text colors from `text-navy-foreground` → `text-foreground` and `text-navy-foreground/60` → `text-muted-foreground`
   - Update the check icon color from `text-primary` to keep it visible on light bg

Result: Investment (light) → Who This System Is For (light — or we keep it navy and make "Need Something More Advanced?" light; either works) → Need Something More Advanced? (navy) → Final CTA

Since Investment is already light, I'll keep "Who This System Is For" as navy and switch "Need Something More Advanced?" to light to maintain alternation: Investment (light) → Who (navy) → Advanced (light) → Final CTA (light w/ navy card). That preserves the existing styling of both sections with minimal changes — just a simple cut-paste reorder.

### Summary
- **One file changed**: `src/pages/AILeadResponseSystem.tsx`
- **One edit**: Move the "Who This System Is For" section block above the "Need Something More Advanced?" section block (cut & paste, no styling changes needed since the alternation already works: Investment light → Who navy → Advanced navy → but that's two navys again...)

Actually the simplest approach: just reorder the two sections and convert "Need Something More Advanced?" to a light background section. This gives us: Investment (light) → Who This System Is For (navy) → Need Something More Advanced? (light) → Final CTA section (light w/ navy card).

### Final plan

**File: `src/pages/AILeadResponseSystem.tsx`**

1. **Move** the entire "Who This System Is For" section block to sit between Investment and "Need Something More Advanced?"

2. **Convert "Need Something More Advanced?"** from navy to light background:
   - Remove `bg-navy` → `bg-background`
   - Remove `<NavySectionBg />`
   - `text-navy-foreground` → `text-foreground`
   - `text-navy-foreground/60` → `text-muted-foreground`
   - Check icon colors: keep `text-primary`

