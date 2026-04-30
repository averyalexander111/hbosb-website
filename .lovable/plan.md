# Homepage Copy Refresh

Goal: Update homepage text to be sharper, more conversion-focused, and tightly aligned with Heartbeat of South Bay's positioning as an AI revenue systems company. No layout, structure, card count, spacing, animation, or visual changes. No em dashes (use commas, periods, or parentheses).

## Files to update (text only)

### 1. `src/components/HeartbeatHero.tsx`
- Headline → "AI Revenue Systems That Help You Capture, Follow Up With, and Convert More Leads"
- Subhead → "Heartbeat of South&nbsp;Bay builds AI-powered systems that help service businesses respond faster, organize every inquiry, and follow up consistently, so fewer opportunities fall through the cracks."
- Secondary line → tighten to: "From first inquiry to booked appointment, every step of your pipeline stays organized and on time."
- Benefit pills (keep 3): "Capture every lead", "Respond faster", "Follow up consistently"
- Primary CTA label unchanged ("Start Your AI Revenue System Assessment"). Secondary CTA unchanged.
- Trust line → "Complimentary assessment. No commitment required."

### 2. `src/components/ProblemSection.tsx`
- Eyebrow → "Most businesses do not have a lead problem. They have a follow-up and conversion problem."
- Title → "Where Service Businesses Quietly Lose Revenue"
- Subtitle → "Calls get missed, forms go unanswered, follow-up is inconsistent, and customer communication ends up scattered across phone, email, text, and CRM. AI systems close those gaps."
- Keep all 5 cards. Rewrite copy (titles tightened, descriptions outcome-focused):
  - Missed Calls → "Inquiries come in by phone and never get a callback."
  - Slow Response Times → "Prospects move on before anyone gets back to them."
  - Unanswered Forms → "Website and Google Business Profile leads sit untouched."
  - No Follow-Up Process → "Leads receive one reply, then go quiet."
  - Scattered Communication → "Conversations live in too many places to track."
- Closing line → "These gaps are predictable, and they are exactly what an AI revenue system is built to fix."

(Icons: swap `Star` → `Inbox` and `Snail` → `MessageSquareOff` to match new card meaning. Same import location, no layout change.)

### 3. `src/components/AIOperatingSystem.tsx`
- Eyebrow → "One connected system, not a stack of disconnected tools."
- Title unchanged.
- Subtitle → "A connected system that strengthens every stage of how your business captures, follows up with, and converts leads. Depending on the business, this may include missed-call response, website form capture, CRM tracking, automated follow-up, customer updates, review request workflows, and reporting."
- Stage descriptions (keep 5 cards, same icons/titles):
  - Capture → "Pull every call, form, and inquiry into one place automatically."
  - Follow Up → "Reach prospects quickly with consistent SMS and email touches."
  - Convert → "Move qualified leads into booked appointments without manual chasing."
  - Retain → "Stay in touch after the job with updates and review requests."
  - Optimize → "See what is working with clear reporting on response and conversion."
- Add a single closing sentence under the pipeline (small muted text, no new card): "If your website, forms, phone process, CRM, or review follow-up is causing leads to slip through the cracks, we help identify the weak point and build the right system around it."

### 4. `src/components/AISystemsSection.tsx`
- Title → "Built Around the Way Your Business Already Gets Leads"
- Subtitle → "Whether leads come from your website, phone calls, Google Business Profile, paid ads, referrals, or repeat customers, the system helps you respond faster, stay organized, and follow up with the right message at the right time."
- Rewrite the 6 cards using the user's exact directions (titles + outcome lines):
  - Lead Capture → "Capture calls, forms, and inquiries before they disappear."
  - Instant Response → "Respond quickly when prospects are most ready to act."
  - Follow-Up Engine → "Keep leads moving with consistent follow-up after the first touch."
  - CRM and Pipeline Tracking → "Organize every opportunity from first contact to next step."
  - Customer Communication → "Help customers stay informed before, during, and after the job."
  - Reviews and Retention → "Turn completed jobs into stronger trust and future opportunities."
- Update icons to match (e.g., `Magnet`, `Zap`, `Send`, `Workflow`, `MessageCircle`, `Star`). Same 3-col grid, same card component.

### 5. `src/components/ResultsSection.tsx`
- Title → "What Changes When the System Is in Place"
- Keep 3 metric cards, same numbers. Rewrite labels:
  - 30% → "Faster response times across calls, forms, and inquiries"
  - 22% → "Improvement in follow-up consistency and pipeline organization"
  - 18% → "Increase in booked appointments from leads you already generate"
- Testimonial copy lightly tightened, attribution unchanged.

### 6. `src/components/AILeadResponseSection.tsx`
- Badge → "AI Lead Conversion"
- Headline kept ("Never Miss Another Lead" with gradient on "Lead").
- Three intro lines tightened:
  - "Most businesses do not lose leads. They lose them in the follow-up."
  - "We build AI-powered systems that respond instantly, follow up consistently, and move prospects toward a booked appointment."
  - "Every step from first inquiry to scheduled call stays organized and on time."
- 4 feature cards rewritten (same icons, same grid):
  - Instant Lead Response → "Reach every inquiry the moment it comes in."
  - Automated SMS and Email Follow-Up → "Stay top of mind with consistent, personalized touches."
  - Lead Tracking Pipeline → "Keep every opportunity organized from first contact to close."
  - Appointment Booking → "Let qualified leads book directly into your calendar."
- CTA label unchanged.

### 7. `src/components/FinalCTASection.tsx`
- Eyebrow → "When businesses operate smarter, they grow stronger."
- Headline → "See Where Leads Are Slipping Through the Cracks"
- Subhead → "Book a focused assessment to review how your business captures inquiries, follows up, and manages opportunities. You will leave with clear next steps, whether you need a simple missed-call system or a more complete AI revenue system."
- 3 bullets:
  - "Where calls, forms, and inquiries are being missed"
  - "Where follow-up and communication are breaking down"
  - "What system would have the biggest impact on revenue"
- CTA button label → "Book Your AI Opportunity Assessment"
- Trailing trust line → "Identify where AI systems can create the biggest impact in your business."

## Out of scope
- No layout, grid, spacing, animation, or color changes.
- No new sections.
- No changes to `ImplementationSection`, `TechnologyCarousel`, `TestimonialsSection`, `FAQSection`, or `ConnectSection`.
- No changes to navbar, footer, routes, or images.

## Review pass
After edits, read top-to-bottom (Hero → Problem → AI Operating System → AI Systems → Results → Implementation → Carousel → Testimonials → FAQ → AI Lead Response → Final CTA → Connect) to confirm the narrative flows: Problem → System → Capabilities → Outcomes → Assessment, and that no em dashes were introduced.
