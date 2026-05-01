## Problem

Tablet (~768–1024px) shows horizontal scroll because several headlines and kickers were given `md:whitespace-nowrap`, forcing long text onto one line at a width where it doesn't fit. Tailwind's `md:` starts at 768px (tablet), but these strings only fit cleanly at `lg:` (≥1024px, desktop).

## Fix

Change every recently added `md:whitespace-nowrap` to `lg:whitespace-nowrap`. Tablet will be allowed to wrap to a second line (which is fine per your note); desktop keeps the clean single line.

Also revert the paired tablet font-size shrinking (e.g. `md:!text-4xl`, `md:text-3xl`) where it was added solely to support nowrap on tablet — tablet can now use its natural size.

## Files & changes

**`src/components/AIOperatingSystem.tsx`**
- Kicker (line 47): `md:whitespace-nowrap` → `lg:whitespace-nowrap`
- H2 (line 50): `md:!text-4xl lg:!text-5xl md:whitespace-nowrap` → `lg:whitespace-nowrap` (drop forced size overrides; let `section-title` scale normally)
- Subtitle (line 53): `md:max-w-none md:whitespace-nowrap` → `lg:max-w-none lg:whitespace-nowrap`

**`src/components/ImplementationSection.tsx`**
- Wrapper (line 38): `max-w-3xl md:max-w-5xl` → `max-w-3xl lg:max-w-5xl`
- H2 (line 40): `md:!text-4xl lg:!text-5xl md:whitespace-nowrap` → `lg:whitespace-nowrap`
- Inner card H3 (line 80): `md:whitespace-nowrap` → `lg:whitespace-nowrap`

**`src/components/AISystemsSection.tsx`**
- H3 (line 69): `md:whitespace-nowrap` → `lg:whitespace-nowrap`

**`src/components/FinalCTASection.tsx`**
- Wrapper (line 24): `max-w-3xl md:max-w-5xl` → `max-w-3xl lg:max-w-5xl`
- H2 (line 29): `md:whitespace-nowrap` → `lg:whitespace-nowrap`

**`src/components/ProblemSection.tsx`**
- Kicker (line 24): `md:whitespace-nowrap` → `lg:whitespace-nowrap` (and keep the smaller font scale so it stays one line on desktop)

## Out of scope

- The `whitespace-nowrap` usages on `HeartbeatFooter`, `ConnectSection`, `AboutUs`, and the shadcn `tabs`/`button` primitives are short strings (brand name, phone) that aren't causing overflow — leaving them as-is.

## Memory update

Update `mem://style/copy-voice` and the index Core line to clarify: "Don't wrap headlines on **desktop** when they cleanly fit one line. Use `lg:whitespace-nowrap`, not `md:`, since tablet (768–1024px) is too narrow for most headlines."
