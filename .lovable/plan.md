

## Plan: Polish remaining assessment subpage copy

Three tiers of edits to `src/pages/Audit.tsx`. All copy-only — no layout, styling, or logic changes.

---

### Tier 1 — Critical (dev copy leak)

**Results view, intro paragraph above the action plan**

Current text reads like an internal note:
> "This mirrors the source form's intent, but it now lives inside the main site..."

Replace with:
> "A focused first 90 days based on what your answers revealed."

---

### Tier 2 — Recommended polish

**a) "What you get" section (intro view)**

Tighten and remove defensive framing. Swap "automation" → "system" per brand vocabulary.

- Replace any "automation" mentions with "AI systems" or "system."
- Trim hedging phrases ("we'll make sure," "designed to," etc.) to direct statements.

**b) Questions view, left-panel subhead**

Currently reads as an internal label. Replace with a benefit-led line, e.g.:
> "A few quick questions. Clear answers on where revenue is leaking."

**c) Brand vocabulary sweep**

Find any remaining instances of "automation" / "automate" across the four views (intro, questions, processing, results) and swap to "system" / "AI systems" wording. Aligns with the existing memory rule (avoid "AI automation").

---

### Tier 3 — Optional refinements

**a) Trust-point titles (intro view)**

If the three trust points use generic titles ("Fast," "Personalized," "Actionable"), tighten to outcome-led phrasing (e.g., "Built around your business," "Designed for action").

**b) Processing view copy**

Make the loading messages feel less like UI placeholder ("Analyzing your responses…") and more like a confidence-builder ("Mapping your revenue gaps…", "Building your 90-day plan…").

**c) Results CTA wording**

Confirm the booking CTA reads as a clear next step (e.g., "Book your strategy call") rather than generic "Get started" / "Continue."

---

### Approach

1. Read the full `src/pages/Audit.tsx` to confirm exact current strings for each tier.
2. Apply Tier 1 edit unconditionally.
3. Apply Tier 2 edits with the wording above (or close variants matching surrounding tone).
4. Apply Tier 3 only where the current copy is noticeably weak — skip if already strong.

### Out of scope

- No changes to question content, scoring, or pillar logic.
- No changes to `SubpageHero` props (already updated).
- No layout, animation, or component structure changes.
- No edits to other pages.

