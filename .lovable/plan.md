

## About Us Page Flow Assessment & Fixes

### Issues Identified

1. **Back-to-back dark sections**: Philosophy (section 5) and AI Operating System (section 6) both use `bg-navy`, breaking the alternating dark/light visual rhythm that the rest of the page follows.

2. **Redundant content**: "When Systems Work" outcomes (section 7) nearly mirror the Philosophy statements (section 5) — both list capturing opportunities, consistent communication, and smoother operations. This makes the page feel repetitive.

3. **Pain point reads as positive**: "Leads are captured in one place" sounds like a benefit, not a problem. Should convey fragmentation.

4. **"Our Vision" is too thin**: A single sentence between Credentials and CTA feels like filler rather than adding value.

5. **CTA inconsistency**: The About page CTA links to `/contact` with "Book a Consultation," while the homepage CTAs link to the external assessment URL. The messaging ("Start Your AI Opportunity Assessment") doesn't match the button ("Book a Consultation").

### Proposed Fixes

**1. Fix alternating background rhythm**
- Change AI Operating System (`AIOperatingSystem.tsx`) background from `bg-navy` to `bg-background` (light), and update text colors accordingly. This restores the dark-light-dark-light pattern.

**2. Merge "When Systems Work" into the CTA section**
- Remove section 7 entirely. Its three outcomes are redundant with sections 4 and 5.
- Fold the key message ("when businesses operate smarter, they grow stronger") into the CTA section as a lead-in line above the headline.

**3. Fix the broken pain point**
- Change "Leads are captured in one place" → "Leads slip through the cracks"

**4. Strengthen the Vision section**
- Add a second line to give it more substance: "We envision a future where every business — regardless of size — has access to the intelligent systems that were once reserved for enterprise organizations."

**5. Fix CTA consistency**
- Change the CTA button to link to `https://audit.heartbeatofsouthbay.com/` (matching the homepage pattern) and update button text to "Start Your AI Opportunity Assessment" with an `<a>` tag instead of `<Link>`.

### Files Changed

- `src/pages/AboutUs.tsx` — remove section 7, fix pain point text, update Vision text, fix CTA link/button
- `src/components/AIOperatingSystem.tsx` — swap to light background with appropriate text color adjustments

