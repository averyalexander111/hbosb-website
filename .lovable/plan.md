

## Unify Dark Section Styling Across All Pages

The homepage now uses consistent `bg-navy` backgrounds with semantic color tokens (`text-navy-foreground`, `text-navy-foreground/60`). Several subpages still use the old patterns.

### Issues Found

1. **Contact page** (`src/pages/Contact.tsx`, line 161) — Uses `style={{ backgroundColor: "hsl(var(--connect-bg))" }}` inline style plus hardcoded `text-white`, `text-gray-200`, `text-gray-400`, `text-blue-300`
2. **AI Lead Response page** (`src/pages/AILeadResponseSystem.tsx`, line 332) — CTA section uses diagonal `bg-gradient-to-br` instead of vertical `bg-gradient-to-b`
3. **Blog page** (`src/pages/Blog.tsx`) — Missing `HeartbeatFooter`

### Changes

**`src/pages/Contact.tsx`**
- Replace `style={{ backgroundColor: "hsl(var(--connect-bg))" }}` with `bg-navy relative overflow-hidden`
- Add decorative glow orbs + gradient overlay (matching ConnectSection on homepage)
- Replace `text-white` → `text-navy-foreground`, `text-gray-200` → `text-navy-foreground/70`, `text-gray-400` → `text-navy-foreground/40`, `text-blue-300` → `text-primary`
- Update form inputs from `text-white placeholder:text-gray-400` to `text-navy-foreground placeholder:text-navy-foreground/40`
- Update disclaimer links from `text-blue-300 hover:text-blue-200` to `text-primary/70 hover:text-navy-foreground`

**`src/pages/AILeadResponseSystem.tsx`**
- Line 332: Change `bg-gradient-to-br` to `bg-gradient-to-b` to match the homepage FinalCTA pattern

**`src/pages/Blog.tsx`**
- Add `HeartbeatFooter` at the bottom (currently missing entirely)

