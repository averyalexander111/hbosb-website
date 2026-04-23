

## Plan: Update assessment hero copy (fold-in structure)

Update the `SubpageHero` props passed from `src/pages/Audit.tsx` so the intro view leads with the punchier hook and folds the "slipping through the cracks" line into the subtitle.

### Change in `src/pages/Audit.tsx`

Locate the `<SubpageHero />` usage on the intro view and update its props to:

- **title:** `You're getting leads. But not all of them are turning into business.`
- **subtitle:** `Find where they're slipping through the cracks. Answer a few quick questions and get a clear breakdown of your response speed, follow-up gaps, and the fastest way to fix them.`

### Notes

- `SubpageHero` already renders only `title` and `subtitle`, so no component changes are needed.
- The longer title (two sentences) still fits the existing `text-4xl sm:text-5xl md:text-6xl` styling. On mobile the second sentence wraps naturally — acceptable since the rhythm of "problem → consequence" reads well on two lines.
- No changes to layout, animations, downstream form copy, or any other view (questions / processing / results).
- Aligns with vocabulary preferences: avoids "automation," uses concrete language.

### Out of scope

- No edits to the question content, results copy, or CTAs.
- No styling changes to `SubpageHero`.

