

## Add "How the AI Lead Response System Works" Workflow Section

### Placement
Insert a new navy-themed section between "The Solution" (ends line 237) and "What the System Includes" (starts line 239).

### File: `src/pages/AILeadResponseSystem.tsx`

**Add new icons to imports**: `User`, `FileText`, `Bot`, `MailCheck`, `FolderKanban`, `Handshake`

**Add workflow steps data array** with 6 items:
1. Website Visitor
2. Lead Capture Form
3. Instant Automated Response
4. Automated Follow-Up
5. Lead Organized in CRM
6. Appointment Booking or Sale

**New section** (navy theme, matching existing navy sections):
- `bg-navy` with `NavySectionBg` blur orbs
- Headline: "How the AI Lead Response System Works"
- Description paragraph below headline
- Vertical workflow diagram: each step rendered as a card with an icon, connected by animated down-arrows using `ArrowDown` icons with primary color
- Cards styled as `bg-navy-light/50 border-navy-foreground/10 backdrop-blur-sm` (matching existing navy card pattern)
- Fade-up staggered animations on each step
- Two supporting paragraphs below the diagram in `text-navy-foreground/70`

No existing sections are modified — this is purely an insertion at line 238.

