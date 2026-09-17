# Plan: Surgical HBOSB Homepage Commercial Reconciliation

## Verified minimum corrections

1. **`src/components/ProblemSection.tsx` — needed**
   - Replace only the sentence claiming AI systems automatically capture, respond to, and convert opportunities.
   - Use qualified process-support language.
   - Preserve the heading, all five cards, layout, styling, and motion.

2. **`src/components/AIOperatingSystem.tsx` — needed**
   - Preserve the complete five-stage pipeline, icons, connectors, animations, and section placement.
   - Change the product-like heading “The Heartbeat AI Operating System” to “Where Better Systems Create Leverage.”
   - Qualify the Convert-stage sentence so CRM and scheduling support an approved next step rather than turning prospects into customers automatically.
   - Keep all other stage detail unless a directly conflicting claim requires a small wording correction.

3. **`src/components/AISystemsSection.tsx` — needed**
   - Preserve all six capability cards, the lower explanatory panel, layout, and motion.
   - Clarify in the section introduction that capabilities are selected where appropriate and are not six standard offers.
   - Keep AI Voice explicitly separately scoped and outside the standard system.
   - Qualify “convert visitors into leads,” “tie directly to revenue outcomes,” and outbound/reactivation “generate conversations and book appointments.”
   - Keep outbound/reactivation as a capability, with scope-dependent wording.

4. **`src/components/AILeadResponseSection.tsx` — needed**
   - Add one restrained sentence connecting the managed lead-response system to restoration and other high-value service businesses.
   - Preserve the component structure, cards, CTA, styling, and motion.

5. **`src/components/ImplementationSection.tsx` — needed**
   - Preserve the four-step layout and animation.
   - Replace only the current sequence with: AI Revenue System Assessment → Appropriate Recommendation → Approved Implementation → Management & Improvement.
   - Keep the free assessment distinct from the paid Business Systems Audit & AI Blueprint.

6. **`index.html` — needed**
   - Remove only the active public Heartbeat Launchpad and Heartbeat SiteCare `Service` schema entries, including their public prices and the embedded BaySignal reference.
   - Preserve the valid ProfessionalService and FAQ structured data, canonical site signals, analytics, social image, and unrelated metadata.
   - Validate the remaining JSON-LD after removal.

7. **`src/lib/audit.ts` — needed**
   - Preserve question IDs, scores, calculation logic, webhook payload shape, and submission behavior.
   - Correct the malformed q6 high-score option.
   - Requalify only the generated guidance that says “respond immediately,” “responds within minutes,” reports “exactly how many” converted, or names a “Phased AI operating system roadmap.”
   - Keep results framed as assessment guidance, not guaranteed performance or a standard blueprint deliverable.

8. **`/leads` and `/roi` — validation only**
   - Confirm `/leads` retains `$997` one-time implementation, `$1,497/month` management, single-location scope, separately scoped multi-location work, and standard AI voice exclusion.
   - Confirm `/roi` retains defaults `1497` and `997`, blank user-controlled business assumptions, disclaimer, revenue-not-profit labels, and no Core/Plus/Pro presets.
   - Make no edits unless validation exposes a restored contradiction.

9. **Active/shared legacy search — needed as final gate**
   - Re-scan imported public code and machine-readable content for Starter Website Launch promotion, Launchpad, SiteCare, BaySignal, `$97` Lead Conversion pricing, standard-step “AI System Blueprint,” and unsupported guarantee/instant/automatic-conversion claims.
   - Ignore unrouted legacy components and preserve their internal records and terms.
   - No dedicated Starter Website Launch route exists in the current route table; no route action is planned.

## Additional targeted metadata correction

- **`src/components/SEOHead.tsx` — needed**
  - Align only the homepage default title/description with the current managed lead-response positioning so client-rendered metadata does not restore “high-converting websites,” outcome promises, or “Done for you” language.
  - Preserve canonical behavior, social image, and per-route overrides.

## Explicitly preserved untouched

- **Homepage hero:** exact H1, structure, typography, background/effects, entrance animation, capability pills, CTA layout/styling, assessment CTA, and ROI calculator secondary action.
- **Homepage architecture:** current section order, section count, capability depth, diagrams, explanatory detail, Results section, technology carousel, testimonials, FAQ, final CTA, contact section, navigation, and footer.
- **Motion system:** no new lead-flow animation, no new hero sequence, no broad motion rewrite, and no removal of current animations.
- **Technology carousel:** retained in this pass; no logo-support claims will be expanded. Its platform support remains an operational validation item.
- **`/leads`:** commercial wording, pricing, scope, service envelope, pilot boundaries, human responsibilities, voice boundary, CTAs, and motion unless a validation-only contradiction appears.
- **`/roi`:** formulas, defaults, fields, assumptions, results, disclaimer, visual structure, hero action, and route label unless a real defect is found.
- **Assessment form:** existing fields, data contract, question IDs, scoring, webhook events, and functionality. No SMS-consent field will be added. Existing contact-form SMS consent remains unchanged.
- **Internal material:** dead/unrouted legacy components, Starter Website Launch records/terms, sales materials, and historical pricing are not deleted or rewritten.
- **No unrelated cleanup:** no About-page rewrite, navigation relabeling, footer rewrite, section reordering, capability removal, or broad claim/style pass.

## Technical validation and QA

- Run TypeScript checking, production build, lint, and JSON-LD parsing; fix only issues caused by this work.
- Browser-check `/`, `/leads`, `/assessment`, and `/roi` at representative mobile, tablet, and desktop widths for rendering, overflow, console errors, and CTA destinations.
- Verify homepage lazy-loaded sections still load after the recent chunk-reload fix.
- Report, without changing commercial copy, operational items the website repository cannot prove: delivery capacity for the published service envelope, monitoring/failure alerts, supported stack, monthly performance-data availability, separate-scope AI voice readiness, and downstream assessment routing.
- Report assessment-specific SMS consent as a pending compliance consideration only if downstream SMS follow-up is contemplated. Preserve the current contact-form consent implementation.
- Keep all work preview-only. Do not publish or deploy.
