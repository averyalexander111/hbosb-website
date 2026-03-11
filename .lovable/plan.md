

## Plan: Redesign BaySignalSection for Clarity and Visual Appeal

Inspired by Nurturefy's clean card-based layout, stat highlights, and clear language — while removing jargon that could confuse potential clients.

### Problems with Current Section
- Terms like "Frankenstacks," "RAG knowledge base," "ROAS/ROI," "SOPs," and "CRM pipelines" are industry jargon
- Dense two-column wall of text with too many bullet points
- No visual hierarchy or breathing room between concepts
- The "micro-proof points" panel feels like an afterthought

### New Structure for `src/components/BaySignalSection.tsx`

**1. Hero header** — Clean centered intro (keep "Custom AI Ops" chip):
- Headline: "Your Business, Running Smarter with AI"
- Subtitle: "We build a clean, connected system so leads get answered, clients stay engaged, and your team spends less time on busywork."
- Remove "Frankenstacks" and any technical jargon.

**2. Stats row** — 3-4 highlight cards in a horizontal row (Nurturefy-inspired):
- "Minutes, Not Hours" — Average lead response time
- "30-Day Results" — See impact in your first month
- "One Dashboard" — Everything in one place
- "24/7 Coverage" — AI handles calls and messages around the clock

**3. Feature cards grid** — 3 clean cards (replacing the dense bullet lists), each with an icon, short title, and 2-3 line description:
- **AI Receptionist** — "Answers calls, texts, and website chats instantly. Captures leads, routes them to your team, and follows up automatically."
- **Automated Scheduling & Follow-Ups** — "Books appointments, sends quotes, and follows up with reminders — so nothing falls through the cracks."
- **Performance Dashboard** — "See your bookings, revenue, reviews, and pipeline health in one simple view."

**4. How It Works** — 4-step horizontal timeline (keep existing steps but simplify language):
1. **Assess** — "We map your tools and find the bottlenecks"
2. **Design** — "We propose the simplest setup that fits your budget"
3. **Build** — "You get a working system in 2-4 weeks"
4. **Grow** — "We add features as your business scales"

**5. Results highlights** — Replace micro-proof panel with 3 clean result statements in styled cards:
- "Response times drop from hours to minutes"
- "Clients rebook and leave more reviews"
- "Your team reclaims hours every week"

**6. CTA** — Keep the existing wave button and assessment link, unchanged.

### Jargon Removals
| Remove | Replace with |
|---|---|
| Frankenstacks | "disconnected tools" or remove entirely |
| RAG knowledge base | "smart answer system trained on your business info" |
| ROAS/ROI | "performance" or "results" |
| SOPs | "your processes" |
| CRM workflows/pipelines | "customer tracking" or "follow-up system" |
| Reputation boosts | "more reviews" |
| Reactivation | "win-back campaigns" or "re-engage past clients" |

### Visual Changes
- Use `rounded-2xl` cards with subtle shadows and white backgrounds on the `#d1e8ff` base
- Add lucide icons (Phone, Calendar, BarChart3, Clock, TrendingUp, Users) to feature and stat cards
- More whitespace and `gap-6` / `gap-8` spacing
- Stats use large bold numbers with blue accent color

### File Changes
- **`src/components/BaySignalSection.tsx`** — Full rewrite with new structure above

