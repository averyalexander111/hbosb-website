

## Homepage Messaging & Content Enhancement

### Files to Edit

1. **`src/components/HeartbeatHero.tsx`** — Hero messaging + CTA update
2. **`src/components/ProblemSection.tsx`** — Strategic positioning line + terminology shift
3. **`src/components/AIOperatingSystem.tsx`** — System framework context line
4. **`src/components/AISystemsSection.tsx`** — Terminology update in subtitle
5. **`src/components/ResultsSection.tsx`** — Terminology update in heading
6. **`src/components/ImplementationSection.tsx`** — Rename step 1 + update description
7. **`src/components/FinalCTASection.tsx`** — CTA label + description update
8. **`src/components/FAQSection.tsx`** — Rename assessment in FAQ
9. **`src/components/SEOHead.tsx`** — Update default meta description
10. **`src/pages/Index.tsx`** — Add new AI Voice & Outbound section to page
11. **New file: `src/components/AIVoiceOutboundSection.tsx`** — New section

---

### 1. Hero Section (`HeartbeatHero.tsx`)

- **Headline** (line 94): Change to `"AI Revenue Systems for Modern Businesses"`
- **Subtitle** (lines 103-105): Replace with `"We design AI-powered systems that capture, follow up with, and convert your leads into customers automatically."`
- **Add new `<motion.p>`** after the subtitle (after line 106): `"Automate inbound responses and outbound follow-up with AI voice agents that book appointments for you."`
- **Primary CTA** (line 143): Change `"Start Your AI Opportunity Assessment"` → `"Start Your AI Revenue System Assessment"`
- **Benefit pills**: Update to `"Convert more leads"`, `"Increase revenue"`, `"Automate follow-ups"` (revenue-focused)

### 2. Strategic Positioning Line (`ProblemSection.tsx`)

- **Add line before heading** (before line 24): Insert a styled tagline: `"Most businesses don't have a lead problem — they have a follow-up and conversion problem."`
- **Subtitle** (lines 28-30): Shift from "AI automation solves them" to `"AI systems solve them by improving lead conversion, revenue, and operations continuously in the background."`

### 3. AI Operating System Framework Line (`AIOperatingSystem.tsx`)

- **Add line above section title** (before line 48): Insert: `"Our systems are designed to improve how your business generates and converts revenue."`
- **Subtitle** (line 51): Shift `"A complete automation infrastructure"` → `"A complete system infrastructure that strengthens every stage of the customer journey."`

### 4. AI Systems Section (`AISystemsSection.tsx`)

- **Subtitle** (line 26): Change `"Purpose-built automation systems"` → `"Purpose-built AI systems designed to improve your revenue, lead conversion, and operations."`

### 5. Results Section (`ResultsSection.tsx`)

- **Heading** (line 24): Change `"Real Results From AI Automation"` → `"Real Results From AI Systems"`

### 6. Implementation Section (`ImplementationSection.tsx`)

- **Step 1 title** (line 7): `"AI Opportunity Assessment"` → `"AI Revenue System Assessment"`
- **Step 1 desc** (line 8): Update to `"We analyze your current operations to identify where AI systems can improve your lead capture, follow-up, and conversion process."`

### 7. Final CTA Section (`FinalCTASection.tsx`)

- **CTA button** (line 53): `"Book Your AI Opportunity Assessment"` → `"Start Your AI Revenue System Assessment"`
- **Description** (lines 29-31): Update to `"Identify where your business is losing opportunities and how AI systems can improve your lead capture, follow-up, and conversion process."`
- **Sub-text** (line 56): Update to `"Identify where AI systems can create the biggest impact in your business."`

### 8. FAQ Section (`FAQSection.tsx`)

- **First FAQ question** (line 12): `"What is an AI Opportunity Assessment?"` → `"What is an AI Revenue System Assessment?"`
- **First FAQ answer**: Update to reference revenue system assessment language

### 9. SEO Head (`SEOHead.tsx`)

- **Default description** (line 14): Remove `"Book a free consult"`, replace with `"Start your AI Revenue System Assessment."`

### 10. New Section: AI Voice & Outbound Automation (`AIVoiceOutboundSection.tsx`)

Create a new component matching the existing card-based design style (same as `AISystemsSection`). Light background (`bg-background`), placed after `AISystemsSection` in the page.

Content:
- **Title**: "AI Voice & Outbound Automation"
- **Intro**: "Most businesses lose opportunities because they don't follow up fast enough. Heartbeat of South Bay builds AI voice systems that can automatically call leads, qualify interest, and book appointments on your calendar. Whether it's new leads, old contacts, or conference lists, our systems ensure every opportunity is followed up with consistently."
- **5 bullet cards** with icons: AI Voice Agents That Call Leads Automatically, Conference And Event Lead Follow-Up, CRM Reactivation Campaigns, Appointment Booking Via Voice, SMS Follow-Up Sequences
- Uses same card grid, spacing, and animation patterns as `AISystemsSection`

### 11. Index Page (`Index.tsx`)

- Add lazy import for `AIVoiceOutboundSection`
- Insert `<Suspense><AIVoiceOutboundSection /></Suspense>` after `AISystemsSection` (after line 35)

---

### Section Order (unchanged except for new insertion)

Hero → Problem → AI OS → AI Systems → **AI Voice & Outbound (NEW)** → Results → Implementation → Technology → Testimonials → FAQ → Lead Conversion → Final CTA → Connect

