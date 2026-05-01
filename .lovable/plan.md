## Goal

Prevent four headlines from wrapping to a second line on tablet/desktop where they cleanly fit on one line. Mobile keeps wrapping (it must).

## Identified wrapping headlines (at ~833px tablet)

1. **FinalCTASection.tsx** — "Let's Explore What AI Could Fix In Your Business" (wraps "Business" to line 2)
2. **ImplementationSection.tsx** — "How We Build and Implement AI Systems" (wraps "Systems" to line 2)
3. **AIOperatingSystem.tsx** — "The Heartbeat AI Operating System" (wraps "System" to line 2)
4. **ProblemSection.tsx** — "Most Businesses Are Losing Opportunities Every Day" (likely wrapping; long line)

## Approach

Apply the same pattern already established for `AISystemsSection` and the previous `ImplementationSection` CTA fix:
- Reduce the tablet (`md:`) size one notch
- Restore desktop (`lg:`) size to a comfortable large value
- Add `md:whitespace-nowrap` so the headline stays on one line at tablet and desktop
- Mobile size unchanged (still wraps gracefully on phones)

## Changes

### 1. `src/components/FinalCTASection.tsx` (line 29)
Current:
```
className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4"
```
New:
```
className="text-3xl md:text-[2rem] lg:text-[2.5rem] font-bold text-navy-foreground mb-4 md:whitespace-nowrap"
```

### 2. `src/components/ImplementationSection.tsx` (lines 40–42)
Replace the `<h2 className="section-title text-foreground">` with an explicit class so we can control the tablet behavior on this specific headline (without changing the global `section-title` utility):
```
<h2 className="text-3xl md:text-[2rem] lg:text-5xl font-bold tracking-tight text-foreground md:whitespace-nowrap">
  How We Build and Implement AI Systems
</h2>
```

### 3. `src/components/AIOperatingSystem.tsx` (lines 50–52)
Same treatment, on a navy background:
```
<h2 className="text-3xl md:text-[2rem] lg:text-5xl font-bold tracking-tight text-navy-foreground md:whitespace-nowrap">
  The Heartbeat AI Operating System
</h2>
```

### 4. `src/components/ProblemSection.tsx` (lines 27–29)
```
<h2 className="text-3xl md:text-[2rem] lg:text-5xl font-bold tracking-tight text-foreground md:whitespace-nowrap">
  Most Businesses Are Losing Opportunities Every Day
</h2>
```

## Notes

- I am intentionally not modifying the global `section-title` class in `index.css` because other H2s on the site already fit cleanly. Per-section overrides are safer.
- Mobile (<768px) still wraps because `md:whitespace-nowrap` only activates from tablet up.
- No copy changes; layout-only.

Approve and I'll apply all four edits.