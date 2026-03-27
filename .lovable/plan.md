

## Update /leads Page Copy and Add Sections

### File Modified
- `src/pages/AILeadResponseSystem.tsx`

Copy and section updates only — no layout, styling, or structural changes.

### Changes

**1. Hero SubpageHero (line 111)**
- Update subtitle to: "We install systems that respond instantly, follow up automatically, and help you convert more of your existing leads into paying customers."

**2. Hero description section (lines 115–143)**
- Remove the paragraph "Most businesses don't lose leads because of bad marketing..."
- Replace with: "No ads. No extra traffic. Just better conversion from the leads you already have."
- Keep CTA button unchanged

**3. Add new section between Hero description and Problem section (after line 143, before line 146)**
- New light background section with same styling patterns as existing sections
- Title: "Most Businesses Are Losing Leads Without Realizing It"
- Body text as specified (multi-line: "Most businesses don't lose leads because of bad marketing..." through "No system to convert interest into action.")
- Uses existing `fadeUp` animation variant

**4. Investment section — add CTA below pricing text (after line 421, before line 423)**
- Add a centered block below the existing pricing notes:
  - Headline: "Ready to install your AI Lead Conversion System?"
  - Subtext: "Start your system setup and get everything configured for your business."
  - CTA button: "Start Your AI Lead System Installation" linking to `https://cal.com/hbosb/lead-system-install`
  - Small text: "This call begins your system installation. Not a sales pitch."
- Uses same button styling as existing CTAs on the page

**5. Final CTA section (lines 476–505) — replace content**
- Headline: "Start Your AI Lead Conversion System"
- Subheadline: "We'll confirm your setup details and begin installing your system so your leads are responded to, followed up with, and organized automatically."
- Button text: "Start Your AI Lead System Installation"
- Button link stays: `https://cal.com/hbosb/lead-system-install`
- Add small text below button: "This session is where your system gets set up."

### What Stays the Same
- All imports, components, layout structure, animations
- Section order (new section inserted, not reordered)
- All Tailwind classes, spacing, colors, typography
- Problem, Solution, Conversion, What You Get, Who This Is For, Advanced sections unchanged
- ConnectSection, HeartbeatFooter, ScrollToTopButton unchanged

