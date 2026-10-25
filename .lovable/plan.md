# Read-only conversion audit (no edits, nothing published)

**Evidence basis:** current preview source only. I did not take browser screenshots, compare against the live site, start the assessment, or measure load speed this turn, so none of the findings below is "tested". Live vs preview differences are unconfirmed. The last verified publish matched preview for the final call-to-action copy only.

## Findings, in priority order

**1. Billing terms v1.2 are missing (Must fix)**
`/leads` shows "$997 one-time" and "$1,497/month" (AILeadResponseSystem.tsx ~505, ~532, ~636–647). The source has no wording for when monthly billing starts (at go-live), the one first period, then month-to-month, or that there is no mandatory 3-month minimum. A search for "month-to-month", "go-live", "minimum" and "cancel" found nothing. Buyers will assume a lock-in. Fix: one sentence under the monthly card and one FAQ entry.

**2. Testimonials don't match the offer and can't be traced (Must fix)**
TestimonialsSection.tsx lists six reviews with stars, such as "Redondo Beach Barber" (4★) and Dana Mason ("for your digital marketing needs"). Erica Wilson mentions "increase your online presence". These read as past web and marketing work, not lead-conversion systems. There are no links, dates or sources. I'm not assuming they are false. But next to a $1,497/month offer they weaken trust instead of proving results. Fix: label them "Earlier client work", or link each to its source (Google or Yelp).

**3. About page contradicts the positioning (Should fix soon)**
AboutUs.tsx metadata reads "AI Consulting — … an AI consulting and automation firm". The founder bio says "Certified Project Manager, Creative Entrepreneur, and AI Consultant". This conflicts with the "AI Revenue Systems" positioning and the rule to avoid "automation". The "Certified Project Manager" badge (line 50) names no certifying body (for example PMP). Fix: name the credential, or soften it, and align the metadata.

**4. Homepage is long and abstract before anything concrete (Should fix soon)**
Order: Hero → Problem → AIOperatingSystem (5 stages) → AISystems → Results → Implementation → logo strip → Testimonials → FAQ → AILeadResponse → FinalCTA → Connect. That is twelve sections, and three framework-style sections in a row before any example. "Results" is a list of qualities ("Response Consistency", "Follow-Up Discipline", "Pipeline Visibility") rather than an example. Pricing and the concrete offer (AILeadResponseSection) only appear near the end. Fix: move AILeadResponse higher, or add one short worked example (missed call → text → booked) near the top.

**5. Competing calls to action (Should fix soon)**
The menu runs Home, Lead Conversion System, ROI Calculator, About, Blog, Contact, plus an assessment button. Visitors can choose between the assessment, the ROI calculator, a booking link and the contact form, with no clear first step. Fix: make the assessment the main action site-wide and keep the others secondary. Consider dropping Blog from the main menu.

**6. Assessment effort is not stated up front (Should fix soon)**
Before the first question, Audit.tsx requires name, email and phone (~lines 468–502), plus one more required field (~665). lib/audit.ts has 17 question ids. Asking for a phone number before any value is given, without saying the length, adds friction. Fix: state "about N questions, ~X minutes" on the start screen. Optionally make phone optional (that is a business decision).

**7. Logo strip meaning (Optional later)**
"Built With Technology You Already Trust" shows 17 tools, including Higgsfield, Runway and GitHub. Most service-business owners won't recognise these, and they may read as partnerships. Fix: a short caption ("Tools we build with; not endorsements"), or trim to the tools a client actually touches.

**Also noted:** GrowthPlansSection.tsx still holds the old $997/month and $1,497 setup pricing. It isn't on any current page, but it could be reused by mistake. The ROI page correctly says "not a forecast or guarantee". The /leads FAQ correctly avoids guaranteeing response time.

## Not checked
- Rendered screenshots
- Mobile readability on a real device
- Live site differences
- Speed / Core Web Vitals
- Assessment screens after the start step
- Contact page copy beyond earlier QA

If you approve, the next step is a browser pass on preview and live, with no submissions and no assessment start, to confirm these findings and close the gaps above. It would still be read-only.
