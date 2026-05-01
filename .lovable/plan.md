# Normalize CTA button heights

## Issue
Two primary CTAs are taller than the site-standard primary button:

- `AILeadResponseSection` ("Learn How the AI Lead Conversion System Works") uses `py-4.5` — taller than every other CTA.
- `AISystemsSection` ("Start AI Revenue System Assessment") currently uses `py-4` already, but visually reads taller because of `gap-2` + `text-base` combined with the surrounding card spacing — it actually matches `FinalCTASection` exactly. On re-check, it is already consistent.

The site-standard primary CTA pattern (used in `FinalCTASection`) is:
`px-10 py-4 text-base font-semibold rounded-lg border-glow-spin`

## Change

**File: `src/components/AILeadResponseSection.tsx`** (line 98)
- Change `py-4.5` → `py-4` so its height matches `FinalCTASection` and `AISystemsSection`.

**File: `src/components/AISystemsSection.tsx`** (line 77)
- No change needed — already `py-4` and matches the standard. Leave as-is.

## Result
Both CTAs render at the same height as the "Start Your AI Revenue System Assessment" button in the final CTA section, giving a single consistent primary-button height across the site. No color, width, font, or layout changes.