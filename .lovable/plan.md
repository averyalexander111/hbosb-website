

## Match Connect Section Background to Site Flow

The FinalCTA section above uses `bg-gradient-to-br from-navy via-navy-light to-navy` with radial glow orbs and gradient overlays, while the Connect section uses a flat `backgroundColor: hsl(var(--connect-bg))`. This creates a visual mismatch between the two adjacent dark sections.

### Changes to `src/components/ConnectSection.tsx`

1. Replace the inline `style={{ backgroundColor }}` with the same gradient background classes used by FinalCTA: `bg-gradient-to-br from-navy via-navy-light to-navy`
2. Add `relative overflow-hidden` for positioning context
3. Add decorative glow orbs (radial blur elements) matching the FinalCTA pattern for visual continuity
4. Add a subtle `bg-gradient-to-br from-primary/5 via-transparent to-transparent` overlay

This creates a seamless visual transition from FinalCTA → Connect → Footer, all sharing the same dark navy gradient language.

