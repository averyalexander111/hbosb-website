

## Add Repeating Pulse Glow Animation to CTA Buttons

### Approach

Add a CSS `@keyframes` animation for a subtle pulsing glow effect on the button's box-shadow, then apply it to both CTA buttons. This creates an "attention pulse" that repeats infinitely while the button is visible.

### Changes

**1. `tailwind.config.ts`** — Add a `pulse-glow` keyframe and animation:

```ts
keyframes: {
  // existing...
  'pulse-glow': {
    '0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.2)' },
    '50%': { boxShadow: '0 0 35px hsl(var(--primary) / 0.45)' },
  },
},
animation: {
  // existing...
  'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
},
```

**2. `src/pages/AILeadResponseSystem.tsx`** — Add `animate-pulse-glow` to both CTA button classNames (lines 123 and 418), replacing the static `shadow-[0_0_30px_...]` with the animated version:

```tsx
className="group inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground animate-pulse-glow hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
```

The `transition` is narrowed to `transform` only so the hover scale animates smoothly without conflicting with the CSS keyframe glow. On hover, the shadow jumps to the brighter hover state; on mouse-out, the pulse resumes.

