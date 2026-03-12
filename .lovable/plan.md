

## Standardize Card Animations to Match Results Section

The Results section uses a **scale-in** animation (`opacity: 0, scale: 0.9` → `opacity: 1, scale: 1`) while all other sections use a **slide-up** animation (`opacity: 0, y: 20` → `opacity: 1, y: 0`). This plan changes all card animations to match the Results pattern.

### Reference animation (ResultsSection)
```
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.4, delay: i * 0.1 }}
```

### Files to update

1. **ProblemSection.tsx** — Change card variants from `y: 20` to `scale: 0.9`
2. **AIOperatingSystem.tsx** — Change stage card initial/whileInView from `y: 20` to `scale: 0.9`
3. **AISystemsSection.tsx** — Change card variants from `y: 20` to `scale: 0.9`
4. **ImplementationSection.tsx** — Change step card animation from `y: 20` to `scale: 0.9`
5. **TestimonialsSection.tsx** — Change testimonial card animation from `y: 20` to `scale: 0.9`
6. **BaySignalSection.tsx** — Change stat cards, feature cards, steps, and result cards from `y: 30` to `scale: 0.9`

Section headings will keep their existing `y: 20` slide-up animation — only the cards/items change.

