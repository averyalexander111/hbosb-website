

## Add Arrow Icon with Hover Animation to First CTA Button

### Change in `src/pages/AILeadResponseSystem.tsx`

**Line 123-126:** Add `gap-2` to the class, add `ArrowRight` icon with a `group` hover animation matching the second button, and add `group` class to the anchor:

```tsx
// Before
className="inline-flex items-center justify-center ..."
>
  Start AI Lead System Installation
</a>

// After
className="group inline-flex items-center gap-2 justify-center ..."
>
  Start AI Lead System Installation
  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
</a>
```

**Lines 417-420:** Add the same `group` class and hover animation to the second button's arrow:

```tsx
className="group inline-flex items-center gap-2 ..."
>
  Start AI Lead System Installation
  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
</a>
```

Both buttons will have the arrow icon that slides right on hover.

