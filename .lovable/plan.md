

## Move Technology Carousel Above Problem Section

Reorder the sections in `src/pages/Index.tsx` so that `TechnologyCarousel` renders immediately after `HeartbeatHero` and before `ProblemSection`.

**Change in `src/pages/Index.tsx`:**
- Remove the `<Suspense><TechnologyCarousel /></Suspense>` line from its current position (between ImplementationSection and TestimonialsSection)
- Insert it directly after `<HeartbeatHero />` and before `<ProblemSection />`

