# Audit: AI Lead Conversion System references (read-only, no changes made)

Target public pricing: $997 one-time implementation, $1,497/month ongoing management.

## 1. Already aligned with the updated direction

- `src/pages/AILeadResponseSystem.tsx` (/leads) — managed-service structure in place. `$997 one-time` at lines 505 and 636; `$1,497` at lines 532 and 647. No `$97/month` framing remains anywhere on this page. FAQ explicitly disclaims guarantees (line 199-200: "Does HBOSB guarantee every lead is contacted instantly?" / "No. We do not guarantee a specific response time..."), disclaims standard voice inclusion (203-204), and disclaims pilot promises (791: "not an automatic discount, a revenue guarantee, or a performance promise"). Line 164 lists "Live AI voice systems" under separately scoped items.
- `src/components/ROICalculator.tsx` — Core/Plus/Pro presets are gone. `DEFAULT_MONTHLY_MANAGEMENT = '1497'` (line 3), `DEFAULT_ONE_TIME_IMPLEMENTATION = '997'` (line 4), disclaimer constant (line 7), "not profit" labeling (lines 276, 282). No ROI-percentage result.
- `src/pages/ROICalculatorPage.tsx` lines 15, 21 — "estimation tool, not a forecast or guarantee".
- `src/components/ResultsSection.tsx` — 30/22/18 stats and "— Client" testimonial removed; now Response Consistency / Follow-Up Discipline / Pipeline Visibility with qualified copy.
- `src/components/AISystemsSection.tsx` line 9 — "AI Voice Systems (Separately Scoped)", explicitly not included in the standard system.
- `src/components/HeartbeatHero.tsx` lines 111-112 — qualified subline; pills at 124-126 are "Improve lead capture", "Automate follow-up", "Improve pipeline visibility".
- `index.html` line 7-8 — title "Managed AI Lead Conversion Systems…" and managed-system description; FAQ schema implementation-timing answer (~line 186) says timing is confirmed after scope review.
- `public/llms.txt` line 10 — "$997 one-time implementation and $1,497/month ongoing system management".

## 2. Flags — live, user-visible

1. `index.html` lines 60-170 — structured data still publishes a contradicting product line: BaySignal Core $597/mo (setup $749), Plus $1,297/mo (setup $1,499), Pro $2,497/mo (setup $2,999), Launchpad $500, SiteCare $50/mo, plus an `OfferCatalog` named "BaySignal AI Plans". Nothing in the schema publishes $997/$1,497. Pro description (line 109) includes "AI Voice Agent" as an included feature. Voice-minute allowances (200/600/1,500) imply standard voice inclusion.
2. `index.html` line 10 — keywords still include "AI voice agent for leads", "BaySignal AI", "Heartbeat Launchpad".
3. `src/lib/audit.ts` (powers /assessment results) — line 341: "instant-response system that captures every inquiry"; line 408: "every lead gets a branded confirmation… without delay"; line 233: "If every lead was responded to immediately…"; line 145: "same process every time, for every lead"; line 227 placeholder "Every lead responded to within 5 minutes, 20% more booked calls…".
4. Complimentary / no-commitment claims (unchanged per prior instruction, locations for 01): `HeartbeatHero.tsx:164`, `FAQSection.tsx:12`, `index.html:179`, `public/llms.txt:15`.
5. `src/components/ProblemSection.tsx:28` — "Losing Opportunities Every Day" (absolute framing, mild).
6. `src/components/AIOperatingSystem.tsx:54` — "strengthens every stage of the customer journey".
7. `src/components/FAQSection.tsx:18` — "Security is built into every system we deploy".
8. `src/pages/AboutUs.tsx:265` — "every business — regardless of size"; also contains an em dash pairing.
9. `src/components/HeartbeatHero.tsx:104` — "capture leads, automate follow-up, and convert more opportunities into revenue" reads as outcome promise; line 154 CTA "Calculate Your Potential ROI" and nav/footer label "ROI Calculator" (`HeartbeatNavbar.tsx:21`, `HeartbeatFooter.tsx:66`) conflict with the /roi page now titled "Scenario Model".

## 3. Flags — legacy/unrouted (dead code, not served, but present in repo)

- `src/components/GrowthPlansSection.tsx` — Core/Plus/Pro plans; line 73 "Setup fee: $1,497" under Core (directly contradicts $1,497/month); line 204 "AI Voice Agent for instant lead calls & booking"; line 311 "AI Voice Agent" comparison row; line 429 "Complimentary Consultation".
- `src/components/BaySignalSection.tsx` — line 25 "24/7 Coverage — AI handles calls & messages around the clock"; line 32 "Answers calls, texts, and website chats instantly"; line 219 "Complimentary. Get your fastest first win."
- `src/components/RevenueUnlockSection.tsx` lines 23, 32 — "Complimentary Consultation".
- Other unrouted: `Hero.tsx`, `HowItWorks.tsx`, `ProgramsSection.tsx`.

## 4. Not found (clean)

- No `$97/month` framing anywhere in `src/`, `index.html`, or `public/`.
- No "pays for itself", "one customer covers the cost", "installation begins immediately", or "Not a sales pitch" wording remains.
- No Core/Plus/Pro presets in the ROI calculator.
- No route or sitemap inconsistencies observed.

## 5. Items requiring commercial (01) decisions before any edit

- BaySignal / Launchpad / SiteCare schema pricing: remove, or confirm as sellable.
- Complimentary / no-commitment assessment status.
- Whether `/assessment` result copy (`src/lib/audit.ts`) may be requalified.
- Whether the "ROI Calculator" nav/footer/CTA label should become "Scenario Model" for consistency.
