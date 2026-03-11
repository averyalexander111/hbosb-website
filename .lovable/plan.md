

## Plan: Match Contact Page Colorway to Homepage

The Contact page currently uses `bg-[hsl(210,40%,98%)]` (a very light gray) as its main background, with generic `text-foreground` and `bg-card` styling. The homepage uses the brand's light blue (`#d1e8ff` / `--background`) throughout, with the dark navy Connect section (`--connect-bg: #16324f`) and the HeartbeatFooter. The Contact page also has its own inline footer instead of reusing the shared `HeartbeatFooter`.

### Changes to `src/pages/Contact.tsx`

1. **Main background**: Replace `bg-[hsl(210,40%,98%)]` with `bg-background` so it picks up the brand light blue (`#d1e8ff`).

2. **Hero text**: Update heading to use `text-slate-800` and subtitle to `text-slate-600` (matching `HeartbeatHero` typography).

3. **Calendar card**: Keep `bg-card` (white) with shadow — already consistent.

4. **Contact form section**: Restyle as a dark navy section matching the Connect section on the homepage:
   - Wrap in `bg-[hsl(var(--connect-bg))]` with white text
   - Form card: `bg-white/10 backdrop-blur` container
   - Inputs: `bg-white/10 border-white/20 text-white placeholder:text-gray-400`
   - Labels: `text-gray-200`
   - Disclaimer: `text-gray-400` with `text-blue-300` links

5. **Trust section**: Also place inside the dark navy background (same section or continuation), with white text and `text-gray-200` check icons using `text-blue-300` instead of `text-primary`.

6. **Footer**: Replace the inline footer with the shared `<HeartbeatFooter />` component for consistency.

7. **Remove** the `Separator` import and usage (no longer needed with the dark section providing visual separation).

### Result
The page will flow: light blue hero → white calendar card → dark navy form + trust section → dark navy footer — matching the homepage's color rhythm exactly.

