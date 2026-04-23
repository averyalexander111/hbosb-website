

## Plan: Improve text legibility across the assessment form

The page has a few low-contrast spots — mostly on the dark navy panels — where text drops below readable contrast. Tighten those without changing the visual design.

### Changes in `src/pages/Audit.tsx`

**Intro form (dark navy glass card)**
- Form input placeholders: `placeholder:text-navy-foreground/35` → `placeholder:text-navy-foreground/55` (3 inputs: name, email, phone, lines 359, 373, 387). 35% on navy is effectively invisible.
- Input background `bg-white/10` → `bg-white/[0.08]` stays, but bump border `border-white/15` → `border-white/25` so fields have a clearer edge.
- Helper copy under "Begin your assessment" (line 343): `text-navy-foreground/60` → `text-navy-foreground/75`.
- Stat label eyebrows (line 327): `text-navy-foreground/45` → `text-navy-foreground/65`.
- Field labels (lines 350, 363, 377): `text-navy-foreground/80` → `text-navy-foreground/90` for stronger label/field hierarchy.

**Questions screen (dark navy left rail)**
- Subhead under pillar headline (line 445): `text-navy-foreground/65` → `text-navy-foreground/80`.
- Progress row "Progress / %" (line 451): `text-navy-foreground/60` → `text-navy-foreground/75`.
- Three tip rows (lines 467, 473, 479): `text-navy-foreground/75` → `text-navy-foreground/85`.

**Processing screen**
- Subhead (line 600): `text-navy-foreground/65` → `text-navy-foreground/80`.
- Progress row labels (line 605): `text-navy-foreground/65` → `text-navy-foreground/80`.

**Results hero (dark navy)**
- Hero summary (line 634): `text-navy-foreground/70` → `text-navy-foreground/85`.
- Readiness card label (line 638): `text-navy-foreground/45` → `text-navy-foreground/65`.
- Readiness recommendation copy (line 647): `text-navy-foreground/65` → `text-navy-foreground/80`.

**Recommended rollout (dark navy section)**
- Section subhead (line 745): `text-navy-foreground/65` → `text-navy-foreground/80`.
- Action plan body copy (line 760): `text-navy-foreground/68` → `text-navy-foreground/85`.

**Light card areas**
- Already meet contrast — no changes to question card, "What stands out", or booking card.

### Why these specific values

WCAG AA needs ~4.5:1 for body text. On `--navy` (220 50% 8%), `navy-foreground` (210 40% 96%) at:
- 35% opacity → ~2.0:1 (fail)
- 65% opacity → ~4.4:1 (borderline)
- 75–85% opacity → 5.5–7:1 (pass)

Bumping body copy to 80–85% and small labels to 65%+ brings everything into AA range while preserving the soft-on-dark aesthetic.

### Out of scope

- Visual layout, colors, animations, and component structure stay identical.
- No changes to the chart, results cards on light bg, or the booking iframe.

