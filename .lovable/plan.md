

## Restructure Contact Page Layout

### What Changes

Reorder sections in `src/pages/Contact.tsx` so the contact form appears first (primary CTA), followed by the Cal.com booking widget (secondary option).

### New Section Order

1. **SubpageHero** — Update subtitle to reflect "send a message or schedule a call"
2. **Contact Form** (dark navy section) — Primary action, appears immediately after hero
3. **Trust Points** — Stays within the navy section below the form
4. **Visual Divider** — Subtle separator (horizontal rule with spacing)
5. **New "Prefer to Schedule a Call?" Section** — Heading + subtext introducing the calendar
6. **Cal.com Booking Widget** — Repositioned below the new heading

### File: `src/pages/Contact.tsx`

**Lines 89-141** will be restructured:

```
<main>
  <SubpageHero
    title="Get in Touch"
    subtitle="Send us a message or schedule a call..."
  />

  {/* PRIMARY: Dark navy section with Contact Form + Trust */}
  <section className="py-16 bg-navy ...">
    <ContactForm ... />
    {/* Trust Points */}
  </section>

  {/* Divider */}
  <div className="mx-auto max-w-[1100px] px-4 py-8">
    <Separator className="bg-slate-200" />
  </div>

  {/* SECONDARY: Cal.com booking */}
  <AnimatedSection>
    <section className="pb-16">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2>Prefer to Schedule a Call Instead?</h2>
        <p>Book a time that works best for you...</p>
        {/* Cal.com widget */}
      </div>
    </section>
  </AnimatedSection>
</main>
```

### What Stays the Same
- Cal.com embed script logic (useEffect) unchanged
- ContactForm component unchanged
- Trust points unchanged
- All styling/design system preserved
- SMS consent checkbox position within form unchanged

