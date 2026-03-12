

## Redesign About Us Page — Modern AI Consulting Aesthetic

Complete rewrite of `src/pages/AboutUs.tsx` with all new content organized into distinct, well-separated sections with modern SaaS styling.

### Page Structure (10 sections)

1. **Hero** — SubpageHero with new title "About Heartbeat of South Bay" and subtitle "Modern Businesses Deserve Systems That Work as Hard as They Do"

2. **Intro paragraph** — Two short paragraphs introducing the firm, light background

3. **The Problem** — Dark navy section with four pain points displayed as icon cards in a 2x2 grid, plus the "don't need more tools, need better systems" callout

4. **A New Era** — Light background, four bullet benefits as icon cards in a row

5. **The Heartbeat Philosophy** — Navy background, three "Systems that..." statements as styled callout cards

6. **The Heartbeat AI Operating System™** — Reuse the existing `AIOperatingSystem` component (already has the 5-stage pipeline with scale-in animations)

7. **When Systems Work** — Light background, three outcome statements with a closing line

8. **Meet the Founder** — Card with existing photo + updated bio for "Avery Alexander Palmer"

9. **Credentials & Expertise** — Four credential cards with icons in a 2x2 grid

10. **Our Vision** — Simple centered text section

11. **CTA** — "Start Your AI Opportunity Assessment" with link to contact/consultation

### Technical approach

- Single file rewrite: `src/pages/AboutUs.tsx`
- Import and embed `AIOperatingSystem` component directly for the OS section
- Use `motion` from framer-motion with the standardized scale-in animation for cards (`initial={{ opacity: 0, scale: 0.9 }}`)
- Use slide-up (`y: 20`) for section headings
- Alternate between `bg-background` and `bg-navy` sections for visual separation
- Use existing Tailwind classes: `section-title`, `shadow-elegant`, `bg-card`, `bg-navy`, `text-navy-foreground`, etc.
- Icons from lucide-react for credential bullets and pain point cards
- Keep existing `averyAlexander` photo import
- Keep `ConnectSection` removed from bottom (replaced by new CTA linking to `/contact`)
- Retain `HeartbeatNavbar`, `HeartbeatFooter`, `SEOHead`

### Key design elements

- Pain point cards: `AlertTriangle`, `Clock`, `MessageSquareOff`, `Wrench` icons
- Credential cards: `Award`, `Lightbulb`, `Bot`, `Settings` icons
- Philosophy statements: styled as bordered quote cards on navy background
- "When Systems Work" outcomes: checkmark icon list
- CTA section: primary gradient background with prominent button

