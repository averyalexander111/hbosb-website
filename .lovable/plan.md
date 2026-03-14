

## Add "AI Lead Response System" Homepage Section

### New Files

1. **`src/components/AILeadResponseSection.tsx`** — New section component
   - Title: "Never Miss Another Lead"
   - Two paragraphs of description text matching the provided copy
   - 4 feature cards in a 2x2 / 4-col grid using the same card style as `AISystemsSection` (rounded-2xl, bg-card, border, hover shadow)
   - Icons: `Zap` (Instant Lead Response), `MessageSquare` (Automated SMS & Email Follow-Up), `BarChart3` (Lead Tracking Pipeline), `CalendarCheck` (Appointment Booking Integration)
   - CTA button linking to `/ai-lead-response-system` styled like existing primary buttons with glow effect
   - Uses `motion` from framer-motion with same viewport/stagger animation pattern
   - Navy gradient background (like FinalCTASection) to visually distinguish it from adjacent white sections

2. **`src/pages/AILeadResponseSystem.tsx`** — Placeholder subpage with navbar, SubpageHero, and footer so the route resolves

### Modified Files

3. **`src/pages/Index.tsx`**
   - Add lazy import for `AILeadResponseSection`
   - Place it after `FAQSection` and before `FinalCTASection` (after testimonials/FAQ, before final CTA)

4. **`src/App.tsx`**
   - Add route: `<Route path="/ai-lead-response-system" element={<AILeadResponseSystem />} />`

