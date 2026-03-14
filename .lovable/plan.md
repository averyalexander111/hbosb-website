

## Match Connect Section Background to Site Flow

The Connect section uses a flat `backgroundColor: hsl(var(--connect-bg))` while the adjacent FinalCTA section uses `bg-gradient-to-br from-navy via-navy-light to-navy` with radial glow orbs, and the Footer uses `bg-navy`. This creates a visual mismatch.

### Changes to `src/components/ConnectSection.tsx`

1. **Replace background**: Remove `style={{ backgroundColor }}` inline style. Use `bg-gradient-to-br from-navy via-navy-light to-navy` + `relative overflow-hidden` to match FinalCTA.

2. **Add decorative glow orbs**: Two blurred radial elements (positioned differently from FinalCTA to avoid repetition) and a `from-primary/5` gradient overlay for visual depth.

3. **Update text colors**: Switch from hardcoded `text-white` / `text-gray-*` to `text-navy-foreground` / `text-navy-foreground/60` for consistency with FinalCTA and Footer tokens.

4. **Form container**: Keep `bg-white/10 backdrop-blur` glassmorphism style (already works on navy gradient).

Single file change. No structural modifications.

