

## Update "Send Us a Message" Card to Dark Navy Theme

### Changes in `src/components/ConnectSection.tsx`

**Card container (line 70):**
- `bg-white/70 backdrop-blur-sm border border-white/20 shadow-elegant` → `bg-navy border border-navy-foreground/10`

**Card title (line 71):**
- `text-foreground` → `text-navy-foreground`

**Labels (lines 75, 88, 102, 115):**
- `text-muted-foreground` → `text-navy-foreground/70`

**Inputs (lines 84, 97, 111, 124):**
- `bg-white border-border text-foreground placeholder:text-muted-foreground` → `bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40`

**SMS disclaimer (line 127):**
- `text-muted-foreground` → `text-navy-foreground/40`
- Link colors: `text-primary hover:text-foreground` → `text-primary/70 hover:text-navy-foreground`

