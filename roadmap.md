# Roadmap

## Final homepage copy refinement (complete, preview only)
- [x] Update assessment, software, and security FAQ answers and matching structured data
- [x] Refine AI systems introduction and implementation assessment wording
- [x] Validate protected hero, motion, /leads, /roi, links, layouts, types, and production build
- [x] Do not publish or deploy

## Surgical restored-homepage reconciliation (complete, preview only)
- [x] Qualify approved homepage claims without changing structure, cards, or motion
- [x] Reconcile four-step implementation language and assessment-generated guidance
- [x] Remove Launchpad and SiteCare from active structured data
- [x] Validate protected /leads and /roi state, active legacy references, types, and preview
- [x] Do not publish or deploy

## AI Lead Conversion System offer update (complete, not published)
- [x] Rewrite /leads with approved 08 copy ($997 one-time, $1,497/mo)
- [x] Homepage alignment: HeartbeatHero, AILeadResponseSection, AISystemsSection, AIOperatingSystem, ResultsSection, FAQSection, ConnectSection
- [x] ROI calculator reconciliation (no presets, blank assumptions, $1,497/$997, no profit language)
- [x] Metadata: index.html title/OG/FAQ schema, public/llms.txt
- [x] Quality check: typecheck, lint, browser pass at 1280px and 390px
- [x] Not published this turn

## Flagged / blocked (needs 01)
- [ ] "Complimentary assessment · No commitment required" claims — unchanged. Locations: src/components/HeartbeatHero.tsx:164, src/components/FAQSection.tsx:12, index.html FAQ schema, public/llms.txt line 15, src/components/BaySignalSection.tsx:219 (unrouted), src/components/GrowthPlansSection.tsx:429 (unrouted), src/components/RevenueUnlockSection.tsx:23,32 (unrouted)
- [x] BaySignal / Launchpad / SiteCare OfferCatalog pricing removed from active index.html structured data
- [x] Assessment-result absolutes and immediate-response guidance requalified without changing scoring or submission behavior
- [ ] Unrouted legacy components still hold Core/Plus/Pro and $1,497 setup-fee language (GrowthPlansSection, BaySignalSection) — dead code, not served

## Production lead-routing cleanup (preview only, not published)
- [x] Remove GHL/LeadConnector external-tracking script from index.html
- [x] ContactForm: direct n8n webhook on both production hostnames regardless of pathname
- [x] Remove secondary Supabase edge-function submission from production branch (non-production fallback kept)
- [x] Validation: TypeScript, build, isolated diff, assessment files untouched
