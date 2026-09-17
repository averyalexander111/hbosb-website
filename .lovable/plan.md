# Offer Update Inspection — AI Lead Conversion System

Inspection only. No code changed in this turn.

## F) Is this the right source project for heartbeatofsouthbay.com?

Yes. Routes (`/leads`, `/roi`, `/assessment`, `/contact`, `/blog`, `/privacy-policy`, `/terms-and-conditions`), sitemap and llms.txt all use `https://heartbeatofsouthbay.com`, phone `+1-424-488-3774`, HBOSB branding, and the live cal.com links `hbosb/assessment` and `hbosb/lead-system-install`. Published URL matches the custom domain.

## A) Files that carry the offer

| Area | File |
| --- | --- |
| /leads page (whole offer) | `src/pages/AILeadResponseSystem.tsx` (592 lines) |
| Homepage lead section | `src/components/AILeadResponseSection.tsx` |
| Homepage hero | `src/components/HeartbeatHero.tsx` |
| Homepage services (voice claim) | `src/components/AISystemsSection.tsx` |
| Homepage stats + testimonial | `src/components/ResultsSection.tsx` |
| Homepage ladder language | `src/components/AIOperatingSystem.tsx` |
| Homepage/global FAQ | `src/components/FAQSection.tsx` |
| ROI tool | `src/components/ROICalculator.tsx`, `src/pages/ROICalculatorPage.tsx` |
| Assessment funnel + booking | `src/pages/Audit.tsx`, `src/lib/audit.ts` |
| Metadata, JSON-LD, FAQ schema | `index.html` |
| Machine-readable summary | `public/llms.txt` |
| Sitemap | `public/sitemap.xml` |
| Contact booking embed | `src/pages/Contact.tsx` |
| Legacy, unrouted | `src/components/GrowthPlansSection.tsx`, `BaySignalSection.tsx`, `RevenueUnlockSection.tsx`, `ProgramsSection.tsx`, `Hero.tsx`, `HowItWorks.tsx` |

## B) Contradictions found (exact)

**Pricing**
- `AILeadResponseSystem.tsx:386` — `$97/mo` "Monthly System Hosting & Maintenance". Retired price, still public.
- `AILeadResponseSystem.tsx:376` — `$997` labeled "System Installation / One-time setup"; wording is install-first, not scoped implementation.
- `index.html` JSON-LD — publishes a completely different product line: BaySignal Core `$597/mo` (setup $749), Plus `$1,297/mo` (setup $1,499), Pro `$2,497/mo` (setup $2,999), Launchpad `$500`, SiteCare `$50/mo`, plus an OfferCatalog. Google can surface these prices. Nothing publishes $997/$1,497.
- `GrowthPlansSection.tsx:73` — `Setup fee: $1,497` under a Core plan (unrouted, but the number collides with the new monthly price).

**Unsupported absolutes on /leads**
- `:359` "Designed to pay for itself from day one"
- `:409` "recovering just one additional customer per month covers the entire cost"
- `:428` "Most businesses recover the cost with just one additional customer"
- `:440` "This call begins your system installation. Not a sales pitch."
- `:263` "every new inquiry is contacted instantly"
- `:63` "Every new inquiry gets an immediate text reply"
- `:64` "without manual effort"; `:78`, `:81` same framing
- `:239` "If you're not first, you're invisible"
- `:490` "This is the first system inside your AI Operating System™" (ladder language to remove)
- `:108/:109` hero: "Turn More of Your Leads Into Booked Jobs Automatically" / "We install systems…"
- `:122` "No ads. No extra traffic."
- `:340` "Everything is installed and configured for your business."
- `:436/:575` CTA "Start Your AI Lead System Installation" → cal.com/hbosb/lead-system-install (install-first path, contradicts assessment → review → confirmed scope)
- No human-responsibilities section, no qualification/poor-fit section, no pilot language, no page-level FAQ, no usage-cost or separately-scoped list.

**Homepage**
- `HeartbeatHero.tsx:123` "Capture every lead"; `:112` "Every step of your pipeline, handled by intelligent systems"; `:164` "Complimentary assessment · No commitment required".
- `AILeadResponseSection.tsx:41` "Never Miss Another Lead"; `:7` "respond to every inquiry the moment it comes in"; `:9` "Organize every lead".
- `AISystemsSection.tsx:9` "AI Voice Assistants — 24/7 AI-powered communication that responds, qualifies, and routes leads instantly" — reads as included and available.
- `AIOperatingSystem.tsx:9` "ensure no opportunity is missed"; whole section is ladder framing.
- `ResultsSection.tsx:5-7` — 30% / 22% / 18% presented as outcome metrics with no source; `:55` an unattributed testimonial signed "— Client".
- `ConnectSection.tsx:31` "measurable ROI" phrased as an outcome.

**"Complimentary / no commitment" locations (flag only, not changed)**
`HeartbeatHero.tsx:164`, `FAQSection.tsx:12`, `index.html:179` (FAQ schema), `public/llms.txt:15`, `BaySignalSection.tsx:219`, `GrowthPlansSection.tsx:429`, `RevenueUnlockSection.tsx:23,32`.

**ROI calculator**
- `ROICalculator.tsx:30-43` — Core/Plus/Pro presets with monthly costs `997 / 2497 / 4997` and baked-in assumptions (recovered 20/30/40%, retention 3/5/8%, spend 4/8/12%, time savings 30/45/60%). None match the current model; 997 is presented as a *monthly* cost.
- `:83, :262` — `profitAfterAI` labels revenue gain minus cost as "Profit After AI Cost". Revenue presented as profit.
- `:263` ROI% up to "999%+".
- `:99/:102` "Estimate Your ROI" / "projected monthly impact"; `ROICalculatorPage.tsx:21` "Calculate your potential ROI and see how AI can accelerate your growth". No disclaimer anywhere.
- No separate one-time $997 field.

**Other public references**
- `index.html:8-9`, `254-257` — title/OG/Twitter still "capture leads, follow up instantly".
- `FAQSection.tsx:13` "results in the first 30 days"; `:17` "dashboards you can access anytime"; both mirrored in `index.html` FAQ schema.
- `llms.txt:3,5` — "capture leads, automate follow-up"; line 15 "complimentary".
- `lib/audit.ts:341,408` — assessment result copy promises "captures every inquiry", "every lead gets a branded confirmation… without delay".
- JSON-LD `serviceType` includes "AI Voice Systems".

## C) Recommended edits vs untouched

**Rewrite /leads** (`AILeadResponseSystem.tsx`) to the 13-point 08 structure: new hero + two CTAs + scope microcopy, problem section, six workflow areas with the "we do not replace the business" line, positioning section, $997 implementation scope list, $1,497 management scope list, human responsibilities, investment + usage/separately-scoped lists, qualification good/poor fit, pilot paragraph (no duration/commitment), assessment-first final CTA, page FAQ. Remove ladder line and all absolutes above.

**Targeted edits elsewhere:** homepage hero pill + subline + `AILeadResponseSection` headline/copy/CTA; qualify or move the AI Voice card; qualify or remove the 30/22/18 block and unattributed quote; reword "measurable ROI" to measurement capability; replace the BaySignal/Launchpad/SiteCare JSON-LD with a single accurate Service or drop offers entirely; sync `index.html` FAQ schema to whatever FAQ ships; update title/OG/description; update `llms.txt` line 3/5 wording; soften `lib/audit.ts:341,408`.

**ROI calculator:** remove Core/Plus/Pro presets, relabel to "Model a potential monthly scenario using your own assumptions", split monthly ($1,497 default) from one-time $997, rename "Profit After AI Cost" to "Revenue gain after system cost (not profit)", add a persistent disclaimer, cap or drop the 999%+ display.

**Leave untouched:** navbar/footer, contact form and SMS consent, privacy/terms, blog, auth/admin, Supabase functions, design tokens and layout, sitemap URLs (no route changes), unrouted legacy components (dead code — flag only, do not resurrect).

## D) Commercial inputs blocking publication (need 01)

1. "Complimentary assessment · No commitment required" — not confirmed by the handoff; currently live in 8 places.
2. Retiring $97 for existing clients — is any grandfathering language needed publicly?
3. Pilot terms (duration, cancellation, minimum) — explicitly unresolved; nothing may be published.
4. Whether the BaySignal/Launchpad/SiteCare price tiers in JSON-LD are still sellable offers or fully retired.
5. Source for 30% / 22% / 18% and whether the "— Client" testimonial is real and approved.
6. Whether $1,497 should be the ROI tool's default monthly cost publicly.
7. Multi-Listing Lead Conversion System — is it a nameable offer yet?
8. Sales-tax/usage allowance wording for SMS, voice, model usage.

## E) Technical delivery gaps needing 05 validation

The site is marketing-only. The repo contains **no** delivery system: Supabase holds only `submit-contact-form`, `audit-redirect`, `sitemap`, blog, and roles. Therefore:

- **Voice intake** — no telephony, no voice provider, no call handling anywhere in code. The 24/7 voice claim is unproven; must stay separately scoped.
- **Responder acknowledgment** — no missed-call recovery, no SMS/email responder in this project. Response-speed claims cannot be evidenced here.
- **Request-specific escalation** — no escalation routing logic exists.
- **Outcome tracking** — no CRM pipeline, dashboard, or outcome data model. "Dashboards you can access anytime" and "measurable ROI" are unsupported by this codebase.
- Twilio is referenced only as a logo asset (`src/assets/twilio-logo.png`); GoHighLevel appears only as an embedded script tag.

Delivery presumably lives in an external CRM/automation stack outside this repo. Marketing copy should describe managed capability in qualified terms until 05 confirms per-client architecture, cost, and compliance readiness.

## Next step

Confirm section D items and I will implement section C as scoped edits.
