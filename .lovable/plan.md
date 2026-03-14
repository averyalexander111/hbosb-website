

## Elevate "Never Miss Another Lead" Section

Upgrade the section to feel more premium and polished while keeping it on the light background. Changes to `src/components/AILeadResponseSection.tsx` only:

### Visual Enhancements

1. **Subtle badge above headline** — Add a small pill/badge ("AI-Powered Lead Recovery") above the h2 with a primary tint, similar to premium SaaS patterns.

2. **Richer background texture** — Add a second decorative glow orb (offset, different size) and a faint dot-grid pattern using a CSS background-image for depth.

3. **Enhanced feature cards** — Add a subtle gradient border effect on hover (using a wrapper technique or `ring` + glow), increase icon container size slightly (w-14 h-14), and add a faint top-border accent line (`border-t-2 border-t-primary/20` on hover).

4. **Numbered step indicators** — Add a small step number (01, 02, 03, 04) in the top-right corner of each card in muted text for visual hierarchy.

5. **Refined CTA** — Add a subtle arrow icon (`ArrowRight` from lucide) to the button for a more actionable feel.

6. **Typography polish** — Make the headline use `font-display` for a slightly more distinctive feel, and add a gradient text effect on the keyword "Lead" using `bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70`.

### No changes to other sections or files.

