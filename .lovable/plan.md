# Add Section-Specific CTA Card to "AI Systems We Build"

A subtle, additive enhancement only. No changes to existing cards, layout, spacing system, or page flow. The existing FinalCTASection on the homepage remains untouched.

## What gets added

One new full-width CTA card placed directly below the existing 3-column grid of system cards, inside the same `<AISystemsSection>` container so it inherits the section's vertical rhythm.

The card visually matches the existing "Let's Explore What AI Could Fix In Your Business" card (`FinalCTASection.tsx`):
- Dark navy background (`bg-navy`), rounded-3xl, border `border-navy-foreground/10`
- Soft primary blur orb behind content
- Same typography hierarchy (small primary eyebrow line optional, `text-3xl md:text-4xl` headline, muted body)
- Same primary button with `border-glow-spin`, arrow icon, hover scale
- Framer-motion scale-in entrance matching the existing pattern

## File changes

Single file edit: `src/components/AISystemsSection.tsx`

1. Add imports: `CheckCircle2` is not needed; add `ArrowRight` from `lucide-react`, `Link` from `react-router-dom`.
2. After the closing `</motion.div>` of the cards grid (line 57), before the closing `</div>` of the container, insert a new `motion.div` block (with `mt-12 md:mt-16` for natural section continuation):

```text
[existing services grid]
   ↓ mt-12 md:mt-16
[new navy CTA card — max-w-5xl mx-auto to match grid width]
```

## Card content

- Headline: "See Which System Fits Your Business"
- Body: "Every business has different gaps in lead capture, follow-up, and customer communication. If your website, forms, phone process, CRM, or review follow-up is causing leads to slip through the cracks, we help identify the weak point and build the right system around it."
- Supporting line (included, kept as smaller muted text so it doesn't crowd): "Depending on the business, this may include missed-call response, website form capture, CRM tracking, automated follow-up, customer updates, review request workflows, and reporting."
- Button: "Start AI Revenue System Assessment" → `<Link to="/assessment">` (same destination as the homepage final CTA per `FinalCTASection.tsx`).

## Technical details

- Card width: `max-w-5xl mx-auto` to align with the cards grid above (the FinalCTASection uses `max-w-3xl`; this one is wider since it sits inside the systems grid section).
- Padding: `p-8 md:p-12` (slightly tighter than the page-level final CTA's `p-10 md:p-14` so it reads as a section CTA, not a duplicate of the page-level CTA).
- Reuse exact button classes from FinalCTASection: `inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-lg text-base font-semibold border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300`.
- Entrance animation: `initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}` — same as FinalCTASection.
- Mobile: padding scales down, headline uses responsive `text-2xl md:text-4xl`, button stays full-width-friendly via `inline-flex` centered in a flex wrapper.

## What is NOT changed

- No edits to existing service cards, grid, headings, or the section's outer padding.
- No edits to `FinalCTASection.tsx` or `Index.tsx` page flow.
- No new files, no design tokens added.
