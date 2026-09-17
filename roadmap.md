# Roadmap

## AI Lead Conversion System offer update (complete, not published)
- [x] Rewrite /leads with approved 08 copy ($997 one-time, $1,497/mo)
- [x] Homepage alignment: HeartbeatHero, AILeadResponseSection, AISystemsSection, AIOperatingSystem, ResultsSection, FAQSection, ConnectSection
- [x] ROI calculator reconciliation (no presets, blank assumptions, $1,497/$997, no profit language)
- [x] Metadata: index.html title/OG/FAQ schema, public/llms.txt
- [x] Quality check: typecheck, lint, browser pass at 1280px and 390px
- [x] Not published this turn

## Flagged / blocked (needs 01)
- [ ] "Complimentary assessment · No commitment required" claims — unchanged. Locations: src/components/HeartbeatHero.tsx:164, src/components/FAQSection.tsx:12, index.html FAQ schema, public/llms.txt line 15, src/components/BaySignalSection.tsx:219 (unrouted), src/components/GrowthPlansSection.tsx:429 (unrouted), src/components/RevenueUnlockSection.tsx:23,32 (unrouted)
- [ ] BaySignal / Launchpad / SiteCare OfferCatalog pricing in index.html JSON-LD ($597/$1,297/$2,497/$500/$50) — unchanged, unresolved reconciliation
- [ ] src/lib/audit.ts:341,408 assessment-result copy still uses "every inquiry" / "every lead" absolutes — outside this turn's scope
- [ ] Unrouted legacy components still hold Core/Plus/Pro and $1,497 setup-fee language (GrowthPlansSection, BaySignalSection) — dead code, not served

## Website-wide commercial and motion reconciliation (in progress, preview only)
- [ ] Reconcile homepage hierarchy, CTA priority, claims, retired public offers, and motion
- [ ] Update /assessment messaging without changing its form data contract; report SMS-consent gap if downstream texting is contemplated
- [ ] Update /about positioning and founder credentials without unsupported certification claims
- [ ] Apply only targeted /leads CTA, restoration-use-case, motion, and metadata refinements
- [ ] Preserve /roi calculations; update only metadata and lower assessment CTA
- [ ] Reconcile shared navigation, footer, contact copy, metadata, and structured data
- [ ] Remove unsupported homepage technology carousel; do not infer platform support
- [ ] Validate build, lint, JSON-LD, public claims, routes, CTAs, forms, responsive widths, accessibility, and reduced motion
- [ ] Keep internal legacy components and Starter Website Launch terms intact; do not publish
