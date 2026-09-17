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

## Website-wide commercial and motion reconciliation (complete, preview only)
- [x] Reconcile homepage hierarchy, CTA priority, claims, retired public offers, and motion
- [x] Update /assessment messaging without changing its form data contract; report SMS-consent gap if downstream texting is contemplated
- [x] Update /about positioning and founder credentials without unsupported certification claims
- [x] Apply only targeted /leads CTA, restoration-use-case, motion, and metadata refinements
- [x] Preserve /roi calculations; update only metadata and lower assessment CTA
- [x] Reconcile shared navigation, footer, contact copy, metadata, and structured data
- [x] Remove unsupported homepage technology carousel; do not infer platform support
- [x] Validate TypeScript, JSON-LD, public claims, routes, CTAs, responsive widths, accessibility, and reduced motion
- [x] Keep internal legacy components and Starter Website Launch terms intact; do not publish

### Validation notes
- TypeScript and JSON-LD validation passed.
- Repository-wide lint still reports pre-existing errors in unrelated legacy/UI files; edited files added no lint errors.
- Assessment form fields and webhook contract remain unchanged. It has no assessment-specific SMS consent field; downstream SMS follow-up requires a separate compliance decision.
- Contact-form SMS consent remains unchanged.
- Operational validation remains pending for external calendar slugs, downstream CRM/webhook behavior, monitoring, voice readiness, and production-only contact behavior.
- Technical remediation remains pending for the nonexistent `sync-to-airtable` trigger target, redundant Airtable paths, and the service-role credential committed in migration history.
- No deployment or publication was performed.
