

## Enhance AI Lead Response System → AI Lead Conversion System

### 1. Global Text Replacement

Replace all instances of "AI Lead Response System" with "AI Lead Conversion System" in:
- `src/pages/AILeadResponseSystem.tsx` — SEO title, description, hero title, "How it Works" heading, "Who This System Is For" body text, Final CTA body text (6 instances)
- `src/components/AILeadResponseSection.tsx` — CTA button text (1 instance)

File name and route (`/ai-lead-response-system`) stay unchanged to avoid breaking links.

### 2. Hero Section — Add Supporting Line

After the existing subtitle ("Turn every inquiry into an organized opportunity."), add a new `<motion.p>` below the existing paragraph (line ~111):

> Automatically respond to leads and turn them into booked appointments with AI-powered follow-up.

### 3. New Section: "Conversion, Not Just Response" (after How It Works, before "What the System Includes")

Light background (`bg-background`), centered text with a bullet list using `CheckCircle2` icons. Content:

- Intro: "Most systems stop at responding to leads. Heartbeat of South Bay focuses on converting them. Our system is designed to:"
- Bullets: Engage leads instantly / Guide conversations / Qualify opportunities / Move prospects toward a booked appointment
- Closing: "This ensures your leads don't just get a reply — they move forward."

Uses existing `fadeUp` / `stagger` animation variants. Matches the visual style of other light sections on the page.

### 4. New Section: "Need Something More Advanced?" (after Investment, before "Who This System Is For")

Navy background section using existing `NavySectionBg`. Content:

- Intro paragraph about advanced AI systems for outbound/revenue generation
- Bullet list (4 items): Follow up after events / Reconnect old contacts / AI voice agents / Proactive outreach
- Closing: "Each system is custom-built based on your business, workflow, and growth goals."
- CTA button: "Apply for AI Revenue System Assessment" → links to `https://audit.heartbeatofsouthbay.com/` with `border-glow-spin` class
- Supporting line beneath button

### 5. Micro-Line Above Final CTA

Add a single animated sentence inside the final CTA card, above the heading:

> Turn your existing leads into real conversations and booked appointments automatically.

Styled as `text-navy-foreground/60 text-lg mb-6`.

### Files Changed

- `src/pages/AILeadResponseSystem.tsx` — all changes (text replacements, 2 new sections, micro-line)
- `src/components/AILeadResponseSection.tsx` — text replacement only

