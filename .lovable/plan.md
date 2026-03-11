

## Plan: Redesign Homepage as High-End AI Consulting Site

This is a comprehensive homepage redesign touching most existing components and adding several new sections. The new structure replaces the current "Custom AI Ops" messaging with a more strategic "AI-Powered Business Systems" positioning.

### Color & Design Direction

- Update CSS variables: deeper blues for backgrounds (`#0a1628`, `#0f2137`), keep `#d1e8ff` as light accent
- Add a dark navy hero with subtle gradient mesh
- Alternate between dark and light sections for visual rhythm
- Use Inter font throughout for clean SaaS feel

### Section-to-File Mapping

```text
Section                        File                          Action
─────────────────────────────  ────────────────────────────  ──────
1. Hero                        HeartbeatHero.tsx             Rewrite
2. Problem                     ProblemSection.tsx            NEW
3. AI Operating System         AIOperatingSystem.tsx         NEW
4. AI Systems We Build         AISystemsSection.tsx          NEW
5. Results                     ResultsSection.tsx            NEW
6. Implementation Process      ImplementationSection.tsx     NEW
7. Technology Carousel         TechnologyCarousel.tsx        Update
8. Customer Reviews            TestimonialsSection.tsx       Update
9. FAQ                         FAQSection.tsx                Update
10. Final CTA                  FinalCTASection.tsx           NEW
11. Footer                     HeartbeatFooter.tsx           Update
    Navbar                     HeartbeatNavbar.tsx           Update
    Page                       Index.tsx                     Update
```

### Key Changes Per File

**HeartbeatHero.tsx** — Dark navy gradient background. New headline "Turn Your Business Into an AI-Powered System." Three icon-based benefit pills. Two CTA buttons (primary: "Start Your AI Opportunity Assessment", secondary outline: "Calculate Your Potential ROI"). Remove wave button CSS, use clean styled buttons.

**ProblemSection.tsx** (new) — Light section. Title "Most Businesses Are Losing Opportunities Every Day." Five pain point cards with icons (missed inquiries, inconsistent follow-ups, etc.). Closing paragraph about AI automation.

**AIOperatingSystem.tsx** (new) — Dark section. Title "The Heartbeat AI Operating System™". Horizontal 5-stage pipeline diagram: Capture → Follow Up → Convert → Retain → Optimize. Each stage with icon, title, description. Connected by arrows/lines. Uses framer-motion stagger.

**AISystemsSection.tsx** (new) — Light section. 5 service cards in a grid: AI Lead Capture, Automated Follow-Ups, AI Voice Assistants, Automation Infrastructure, Analytics & Reporting. Each with icon, title, description. Hover lift effect.

**ResultsSection.tsx** (new) — Dark gradient section. Three large metric cards (30% no-shows, 22% retention, 18% conversion). Placeholder testimonial quote area below.

**ImplementationSection.tsx** (new) — Light section. Four numbered steps in a horizontal timeline: Assessment → Blueprint → Implementation → Growth. Each with description.

**TechnologyCarousel.tsx** — Update title to "Built With Technology You Already Trust". Add subtitle. Keep carousel, add subtle glow on hover.

**TestimonialsSection.tsx** — Update title to "What Clients Are Saying". Update subtitle. Keep existing real testimonials. Add subtle card shadows and star ratings (already present).

**FAQSection.tsx** — Update questions to match new content (AI Opportunity Assessment, implementation timeline, software requirements, integrations, business types). Keep accordion pattern. Remove wave button, use clean CTA.

**FinalCTASection.tsx** (new) — Dark section. "Let's Explore What AI Could Fix In Your Business." Three bullet highlights. Single CTA button "Book Your Strategy Call."

**HeartbeatFooter.tsx** — Add nav links (Home, About, Blog, Assessment, ROI Calculator, Contact), social icons, brand statement "AI systems for modern businesses." Clean layout with separators.

**HeartbeatNavbar.tsx** — Update to dark/transparent with white text, glass-morphism on scroll. Keep existing nav links.

**Index.tsx** — Update imports and section order to match new 10-section structure. Remove BaySignalSection import.

**index.css** — Minimal variable tweaks for darker hero tones.

### Technical Notes

- All new sections use framer-motion for viewport-triggered animations (already installed)
- Lucide icons for all iconography
- Existing Supabase contact form in ConnectSection preserved within the footer/CTA area
- No new dependencies needed
- BaySignalSection.tsx becomes unused (replaced by AIOperatingSystem + AISystemsSection)

### Files to create (5)
`src/components/ProblemSection.tsx`, `src/components/AIOperatingSystem.tsx`, `src/components/AISystemsSection.tsx`, `src/components/ResultsSection.tsx`, `src/components/ImplementationSection.tsx`, `src/components/FinalCTASection.tsx`

### Files to edit (7)
`src/components/HeartbeatHero.tsx`, `src/components/TechnologyCarousel.tsx`, `src/components/TestimonialsSection.tsx`, `src/components/FAQSection.tsx`, `src/components/HeartbeatFooter.tsx`, `src/components/HeartbeatNavbar.tsx`, `src/pages/Index.tsx`

