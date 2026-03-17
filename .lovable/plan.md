

## Improve About Us CTA Section

The current CTA is weak compared to the homepage's `FinalCTASection` — it lacks visual weight, specificity, and a value proposition beyond a vague "discover where automation can help."

### Changes to `src/pages/AboutUs.tsx` CTA section (lines 270-297)

**Visual upgrade**: Switch from the light `bg-primary/5` card to a dark navy treatment matching the homepage FinalCTA pattern — navy gradient background, radial glow, and light-on-dark text for stronger visual contrast and closing impact.

**Stronger copy**:
- Lead-in: Keep "When businesses operate smarter, they grow stronger."
- Headline: "Let's Explore What AI Could Fix In Your Business" (matches homepage tone)
- Description: "Identify where your business is losing opportunities and how AI systems can improve your lead capture, follow-up, and conversion process."

**Add bullet points** (matching homepage pattern):
- "Where automation could save time"
- "Where AI could increase revenue"  
- "What systems would improve operations"

**Subtle footer line** below button: "Identify where AI systems can create the biggest impact in your business."

This brings the About Us closing CTA to the same quality and conversion-readiness as the homepage, while keeping it contextually appropriate for the page.

### Single file changed
- `src/pages/AboutUs.tsx` — replace the CTA section block

