

## Update /leads Page — Conversion Flow Improvements

### File Modified
- `src/pages/AILeadResponseSystem.tsx`

### Changes

**1. Hero subtitle (line 111)**
- Change to: "We install systems that respond instantly, follow up automatically, and help you convert more of your existing leads into paying customers."

**2. Hero description section (lines 114–144)**
- Remove the paragraph "Most businesses don't lose leads because of bad marketing..."
- Replace with: "No ads. No extra traffic. Just better conversion from the leads you already have."
- Update CTA button link from `https://cal.com/hbosb/lead-system-install` to `https://audit.heartbeatofsouthbay.com/`
- Keep button text: "Book an AI Revenue System Assessment"
- Add subtle text link below button: "Already getting leads? Skip the assessment and install your system →" linking to `https://cal.com/hbosb/lead-system-install`

**3. Move problem statement above Investment (lines 146–184 → new position)**
- Remove the existing "Why You're Losing Leads" navy section from its current position (between hero and solution)
- Insert a new section just before the Investment section (before line 357) with:
  - Title: "Most Businesses Are Losing Leads Without Realizing It"
  - Body: "Most businesses don't have a lead problem. / They have a response problem. / The first business to respond usually wins the customer. / If you're not first, you're invisible."
  - Uses same navy styling as the removed section

**4. System/explanation section CTAs**
- Verify all mid-page CTAs use "Book an AI Revenue System Assessment" linking to `https://audit.heartbeatofsouthbay.com/` (currently no mid-section CTAs exist beyond hero and final — no change needed)

**5. Investment section — add installation CTA (after line 421)**
- Add below existing pricing notes:
  - Headline: "Ready to install your AI Lead Conversion System?"
  - Subtext: "Start your system setup and get everything configured for your business."
  - Line: "Most businesses recover the cost with just one additional customer."
  - Primary CTA button: "Start Your AI Lead System Installation" → `https://cal.com/hbosb/lead-system-install`
  - Small text: "This call begins your system installation. Not a sales pitch."

**6. Final CTA section (lines 475–505) — replace with dual-option**
- Headline: "Start with a plan or install your system"
- Two side-by-side cards (using existing grid pattern):
  - **Option 1**: "Book an AI Revenue System Assessment" / "Not sure where to start? We'll map it out." → `https://audit.heartbeatofsouthbay.com/`
  - **Option 2**: "Start Your AI Lead System Installation" / "Ready to move? We'll build it with you." → `https://cal.com/hbosb/lead-system-install`
- Both use existing button styling

### Section Order After Changes
1. Hero (updated copy + dual links)
2. How It Works (unchanged)
3. Conversion section (unchanged)
4. What You Get — navy (unchanged)
5. **NEW: "Most Businesses Are Losing Leads..." — navy** (moved/rewritten problem section)
6. Investment (existing + new installation CTA)
7. Who This System Is For — navy (unchanged)
8. **Dual-option Final CTA** (replaced)
9. Advanced section — navy (unchanged)
10. ConnectSection + Footer

### What Stays the Same
- All layout, spacing, typography, colors
- All component imports and structure
- NavySectionBg, ConnectSection, HeartbeatFooter, ScrollToTopButton
- Steps, features, conversionBullets, advancedBullets arrays
- Pricing cards content

