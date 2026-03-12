

## Remove Boxes and Text from Technology Carousel

### Problem
The Technology Carousel section currently has card backgrounds/boxes around each logo and shows text labels on hover. The user wants to revert to a cleaner style without these elements.

### Changes
Remove the card styling and text labels from the Technology Carousel:

- Remove `bg-navy-foreground/[0.04] border border-navy-foreground/[0.08]` card background classes
- Remove `hover:bg-navy-foreground/[0.08] hover:shadow-[0_0_20px_hsl(var(--navy-foreground)/0.05)]` hover effects on cards
- Remove the `<span>` element that shows the tech name on hover
- Keep the logos clean with just opacity hover effects (`opacity-70 group-hover:opacity-100`)

### File changed
- `src/components/TechnologyCarousel.tsx`

