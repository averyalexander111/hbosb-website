

## Apply Border Glow Animation to CTA Buttons Across Site

### Analysis

I've identified the following CTA buttons that should have the `border-glow-spin` animation applied for consistency:

1. **FinalCTASection.tsx** (line 51) — "Book Your AI Opportunity Assessment"
2. **AILeadResponseSection.tsx** (line 98) — "Learn How the AI Lead Response System Works"
3. **AboutUs.tsx** (line 310) — "Book a Consultation"

The ROICalculator.tsx CTA uses a custom wave animation button (`.roi-wave-button`) which already has visual interest, so I'll leave it as-is.

### Changes

**1. `src/components/FinalCTASection.tsx`** — Line 51:

```tsx
// Before
className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"

// After
className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
```

**2. `src/components/AILeadResponseSection.tsx`** — Line 98:

```tsx
// Before
className="inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"

// After
className="inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
```

**3. `src/pages/AboutUs.tsx`** — Line 310:

```tsx
// Before
className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"

// After
className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
```

All three buttons will now have the rotating white border glow animation with consistent hover effects.

