

## Update Contact Page to 30-Minute AI Opportunity Assessment

Replace the 15-minute Cal.com booking section with the new 30-minute AI Opportunity Assessment embed.

### Changes

1. **Heading update** (line 141-142)
   - Change "Book a 15-Minute Consultation" → "Book a 30-Minute AI Opportunity Assessment"

2. **Embed div ID update** (line 148-150)
   - Change `id="my-cal-inline-15min"` → `id="my-cal-inline-ai-opportunity-assessment"`

3. **Script update** (lines 25-83)
   - Replace entire useEffect script with the new AI Opportunity Assessment configuration:
     - `Cal("init", "ai-opportunity-assessment")`
     - `Cal.ns["ai-opportunity-assessment"]("inline", { elementOrSelector: "#my-cal-inline-ai-opportunity-assessment", calLink: "hbosb/ai-opportunity-assessment" })`

### Files to edit
- `src/pages/Contact.tsx` — single file replacement of Cal.com embed code

