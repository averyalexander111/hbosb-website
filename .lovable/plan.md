

## Match ConnectSection Background to Homepage Light Blue

### Problem
The ConnectSection has decorative gradient overlays (`bg-gradient-to-br from-primary/5 via-transparent to-transparent`) and large blur orbs (`bg-primary/10`, `bg-primary/8`) that tint the background, making it appear slightly different from the pure `bg-background` light blue used elsewhere on the homepage.

### Changes in `src/components/ConnectSection.tsx`

1. **Remove the gradient overlay** — delete the `bg-gradient-to-br from-primary/5 via-transparent to-transparent` div
2. **Remove or reduce the glow orbs** — the two large blur orbs (`bg-primary/10` and `bg-primary/8`) add visible tinting; remove them to keep the background clean and consistent with other `bg-background` sections

These decorative elements aren't needed since the section already has the dark navy form card as its visual anchor, consistent with the "floating panel" pattern used elsewhere.

