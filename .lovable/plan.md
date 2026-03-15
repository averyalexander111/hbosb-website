

## Replace Pulse Glow with Circling Border Light Animation

Replace the current `animate-pulse-glow` (pulsing box-shadow) with a rotating white light that travels around the button's border continuously.

### Approach

Use a `conic-gradient` trick: wrap each button in a container with a spinning conic gradient (transparent → white → transparent), then overlay the actual button content on top with a slight inset, creating the illusion of a light circling the border.

Since these are `<a>` tags and we want to keep things simple, we'll use a CSS `@keyframes` rotation on a `::before` pseudo-element with a conic gradient, applied via a utility class in `src/index.css`.

### Changes

**1. `src/index.css`** — Add a `.border-glow-spin` utility class:

```css
.border-glow-spin {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.border-glow-spin::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    transparent 60%,
    rgba(255, 255, 255, 0.8) 75%,
    transparent 90%,
    transparent 100%
  );
  animation: border-spin 2.5s linear infinite;
  z-index: -2;
}

.border-glow-spin::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: inherit;
  background: hsl(var(--primary));
  z-index: -1;
}

@keyframes border-spin {
  to { transform: rotate(360deg); }
}
```

**2. `tailwind.config.ts`** — Remove the `pulse-glow` keyframe and animation (cleanup).

**3. `src/pages/AILeadResponseSystem.tsx`** — On both CTA buttons (lines 123 and 418):
- Remove `animate-pulse-glow`
- Add `border-glow-spin`

