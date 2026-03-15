

## Elevate "See If This System Is Right" Section — High-End Refinement

Currently the section is a plain `bg-background` with a bordered card. To make it feel more premium while staying on a light background (distinct from the navy section above), we'll add subtle luxury details.

### Changes in `src/pages/AILeadResponseSystem.tsx` (lines 396–426)

1. **Dot-grid background pattern** — Add the radial dot-grid (`backgroundImage: radial-gradient(...)`) used elsewhere on the page for visual texture.

2. **Subtle radial glow** — Add a faint primary-tinted blur orb behind the card for depth, similar to how the FinalCTASection uses one.

3. **Card upgrade** — Add a subtle `shadow-elegant` or soft box-shadow glow (`shadow-[0_8px_40px_hsl(var(--primary)/0.06)]`), and replace the thin accent bar with a more refined top-border gradient effect using a pseudo-element approach (a small `div` with `bg-gradient-to-r from-transparent via-primary to-transparent`).

4. **"No obligation" reassurance line** — Add a small muted text line below the CTA button: `"No obligation · Free consultation"` to reduce friction and add polish.

5. **Keep everything else intact** — Same headline, body copy, button text, link, and ArrowRight icon.

### Specific implementation

```
Section wrapper:
- Keep bg-background, add dot-grid backgroundImage + backgroundSize
- Add absolute radial glow div (w-[400px] h-[400px] bg-primary/5 blur-3xl centered)

Card:
- Replace w-12 h-1 accent bar with w-20 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent
- Add shadow: shadow-[0_8px_40px_hsl(var(--primary)/0.06)]
- Keep border-border bg-card

After CTA button:
- Add: <p className="mt-4 text-sm text-muted-foreground/60">No obligation · Free consultation</p>
```

No other sections affected.

