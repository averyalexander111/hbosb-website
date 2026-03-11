

## Plan: Dark Background for Technology Carousel

The Implementation section (light) → Technology Carousel (light) → Testimonials (light) breaks the alternating rhythm. Changing the Technology Carousel to a dark navy background restores the pattern.

### Change in `src/components/TechnologyCarousel.tsx`

- Section background: `bg-background` → dark navy (`bg-[#0a1628]`)
- Title text: `text-foreground` → `text-white`
- Subtitle text: `text-muted-foreground` → `text-gray-400`
- Icon opacity: increase base opacity and add a subtle glow/brightness on hover since icons are on dark background

Single file edit, ~4 lines changed.

