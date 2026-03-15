

## Add Scale + Glow Animation to Arrow Icons on CTA Buttons

### Changes in `src/pages/AILeadResponseSystem.tsx`

**Lines 126 and 421** — Update the `ArrowRight` className on both CTA buttons:

```tsx
// Before
<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

// After
<ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary-foreground)/0.6)]" />
```

This adds:
- `group-hover:scale-110` — subtle size increase on hover
- `group-hover:drop-shadow-[0_0_6px_...]` — soft glow effect around the arrow
- `transition-all duration-300` — smooth animation for all properties

Two lines changed, same edit applied to both buttons.

