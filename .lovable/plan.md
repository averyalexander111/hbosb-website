

## Remove Gray Shading from Technology Icons

The icons currently have `opacity-70` applied by default, which creates a gray/faded appearance. The fix is to change this to `opacity-100` so icons display at full brightness at all times.

### Change
**File:** `src/components/TechnologyCarousel.tsx` (line 47)

Change the img class from:
```
opacity-70 group-hover:opacity-100 group-hover:scale-110
```
to:
```
opacity-100 group-hover:scale-110
```

This removes the reduced opacity that causes the gray overlay effect, keeping only the subtle scale-up on hover.

