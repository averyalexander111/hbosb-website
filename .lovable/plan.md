

## Add "Who This System Is For" Section

Insert a new navy-themed section between the Investment section (ends line 344) and the Final CTA section (starts line 347). Following the page's alternating light/dark pattern, Investment is light (`bg-background`), so this new section uses the navy treatment with blur orbs — consistent with "The Problem" and "What's Included" sections.

### Changes in `src/pages/AILeadResponseSystem.tsx`

**Insert after line 345** (between Investment and Next Step CTA):

- Navy background with `NavySectionBg` orbs
- `fadeUp` animated heading: "Who This System Is For"
- Intro paragraph + 4 bullet points using `CheckCircle2` icons (matching the monthly-includes pattern)
- Closing paragraph
- All text uses `navy-foreground` / `navy-foreground/60` for consistency
- `py-20` vertical padding, `max-w-3xl` content width

**Data**: Define a `whoIsItFor` array of 4 strings for the bullet list items, placed alongside the other data arrays at the top of the file.

No other sections, layout, or design changes.

