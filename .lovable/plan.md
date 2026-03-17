

## Change AIOperatingSystem to Dark Navy Background & Remove ™

### Problem
The section currently uses `bg-background` (light) which breaks the homepage's dark-light rhythm. It should use the dark navy style consistent with other dark sections. The title also contains "™" which should be removed.

### Changes in `src/components/AIOperatingSystem.tsx`

1. **Section background**: `bg-background` → `bg-navy relative overflow-hidden`
2. **Title text colors**: `text-foreground` → `text-navy-foreground`, `text-muted-foreground` → `text-navy-foreground/60`
3. **Remove ™** from "The Heartbeat AI Operating System™"
4. **Card styling**: `border-border bg-card` → `border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm` to match dark section cards
5. **Card text**: Update `text-foreground` → `text-navy-foreground`, `text-muted-foreground` → `text-navy-foreground/60`
6. **Glow orb**: Adjust to match other navy sections

