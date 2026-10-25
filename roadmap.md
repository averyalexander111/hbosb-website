# Roadmap

## Homepage illustrative walkthrough (preview only)
- [x] Add SystemWalkthroughSection after AILeadResponseSection; verify 390/890/1280; do not publish

## Organic hero mesh refinement (preview only)
- [x] Refine only the decorative network while preserving hero and /leads baseline
- [x] Verify geometry, pointer emphasis, lifecycle stopping, reduced motion, and responsive screenshots in Chromium and WebKit
- [x] Confirm isolated diff and successful automatic validation; do not publish

## Reduced-motion accessibility (preview only)
- [x] Restore app-wide motion and CSS safeguards and immediate visibility for AnimatedSection
- [x] Stop decorative hero loops and carousel auto-scroll under reduced motion only
- [x] Verify reduced-motion and normal-motion behavior in the preview
- [x] Do not publish or deploy

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
- [x] Remove the GoHighLevel tracking script from index.html
- [x] ContactForm: direct n8n webhook on both production hostnames regardless of pathname
- [x] Remove secondary Supabase edge-function submission from production branch (non-production fallback kept)
- [x] Validation: TypeScript, build, isolated diff, assessment files untouched

## AI Operating System heading alignment (preview only, not published)
- [x] Widen the centered heading wrapper to the card row width and drop forced desktop nowrap
- [x] Verify text-line centers over the card group at 390/890/1280/1600 on homepage and About
- [x] Confirm single source file, natural wrapping, no clipping or horizontal overflow, build OK
