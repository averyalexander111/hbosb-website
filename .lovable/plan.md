

## Update ConnectSection to Light Blue Background

The section currently uses `bg-navy` (dark navy). Switch it to the site's standard light blue `bg-background` and invert all text colors from `navy-foreground` to `foreground`/`muted-foreground` for legibility.

### Changes in `src/components/ConnectSection.tsx`

**Line 52** — Section background:
- `bg-navy` → `bg-background`

**Decorative orbs (lines 54-56):** Update glow colors from `bg-primary/6` and `bg-primary/4` to `bg-primary/10` and `bg-primary/8` for visibility on light bg.

**All text colors throughout (~15 occurrences):**
- `text-navy-foreground` → `text-foreground`
- `text-navy-foreground/60` → `text-muted-foreground`
- `text-navy-foreground/70` → `text-muted-foreground`
- `text-navy-foreground/40` → `text-muted-foreground`

**Form card (line 79):**
- `bg-white/10 backdrop-blur` → `bg-white/70 backdrop-blur-sm border border-white/20 shadow-elegant` (glass-card style matching site pattern)

**Form inputs:**
- `bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40` → `bg-white border-border text-foreground placeholder:text-muted-foreground`

**Social links & icons:**
- `text-primary hover:text-navy-foreground` → `text-primary hover:text-foreground`

**SMS disclaimer text:**
- `text-navy-foreground/40` → `text-muted-foreground`
- Link colors: `text-primary/70 hover:text-navy-foreground` → `text-primary hover:text-foreground`

