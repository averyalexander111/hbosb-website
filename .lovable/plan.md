

## Plan: Match BaySignalSection Background Color

The BaySignalSection uses `bg-background` (which resolves to `hsl(210, 100%, 90%)` = `#CCE5FF`), while the surrounding sections (TechnologyCarousel, TestimonialsSection) use an inline style of `backgroundColor: '#d1e8ff'`. This causes a visible color mismatch.

### Fix in `src/components/BaySignalSection.tsx`

Change line 60 from:
```
<section className="py-20 bg-background">
```
to:
```
<section className="py-20" style={{ backgroundColor: '#d1e8ff' }}>
```

Single line change.

