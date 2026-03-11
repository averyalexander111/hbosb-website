

## Plan: Reorder Sections on Homepage

Swap the order of `TechnologyCarousel` and `TestimonialsSection` in `src/pages/Index.tsx` so the technology carousel appears directly above Customer Reviews.

### Change in `src/pages/Index.tsx`

Move the `TechnologyCarousel` block (currently above `BaySignalSection`) to just before `TestimonialsSection`:

```
HeartbeatHero
BaySignalSection
TechnologyCarousel    ← moved here
TestimonialsSection
FAQSection
ConnectSection
```

Single file edit, ~6 lines moved.

