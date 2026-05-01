# Make the two CTA buttons consistent with the rest of the site

Both target buttons already use the correct base style (`bg-primary`, `border-glow-spin`, glow shadow on hover, `hover:scale-[1.03]`). What's missing is the **sliding-arrow hover animation** that every other primary CTA on the site uses (e.g. `ImplementationSection`, hero buttons). The arrow currently sits static; on the canonical buttons it slides right on hover.

## Changes

### 1. `src/components/AISystemsSection.tsx` — "Start AI Revenue System Assessment"
- Add `group` to the `<Link>` className.
- Change the `ArrowRight` from `className="w-5 h-5"` to `className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"`.

### 2. `src/components/AILeadResponseSection.tsx` — "Learn How the AI Lead Conversion System Works"
- Add `group` to the `<Link>` className.
- Change the `ArrowRight` from `className="w-5 h-5"` to `className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"`.

## Untouched
- Button colors, sizing, padding, font weight, glow, border-glow-spin animation, scale-on-hover, layout, and surrounding card/section styling all stay exactly the same.
- No copy changes.
- No other components touched.

Approve to apply.