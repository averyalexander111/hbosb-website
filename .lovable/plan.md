

## Match Subpage Aesthetics to Homepage

The homepage uses a dark navy hero with gradient mesh background, framer-motion entrance animations, and a subtle grid overlay. The subpages (About Us, Contact, Privacy, Terms, Blog, ROI Calculator) all use flat light-blue (`#d1e8ff`) hero sections with no animations or visual depth -- they feel disconnected from the homepage's premium aesthetic.

### What changes

**1. Create a reusable `SubpageHero` component** (`src/components/SubpageHero.tsx`)
- Dark navy background with the same gradient mesh + blur orbs as `HeartbeatHero`
- Subtle grid pattern overlay (matching homepage)
- Bottom gradient fade into the next section
- Framer-motion fade-up animations on title and subtitle
- Props: `title`, `subtitle`

**2. Update all six subpages to use `SubpageHero`**

- **AboutUs.tsx**: Replace the light-blue hero with `SubpageHero`. Change the content section background from `#d1e8ff` to the theme's `bg-background` so it flows naturally from the dark hero fade.
- **Contact.tsx**: Replace the plain white hero with `SubpageHero`. Keep the calendar and dark form sections as-is (they already use navy).
- **PrivacyPolicy.tsx**: Replace light-blue hero. Switch content section to `bg-background`.
- **TermsAndConditions.tsx**: Same treatment as Privacy.
- **Blog.tsx**: Replace the light-blue hero. Switch the full-page `#d1e8ff` background to `bg-background`.
- **ROICalculatorPage.tsx / ROICalculator.tsx**: Add `SubpageHero` to the page. Remove the inline title/subtitle from inside `ROICalculator` and change its outer background from `#d1e8ff` to `bg-background`.

### Visual result

Every subpage will open with the same dark navy gradient mesh hero as the homepage, with smooth motion animations. Content sections below will use the standard light background, creating the same dark-to-light rhythm the homepage has.

### Files touched
- 1 new: `src/components/SubpageHero.tsx`
- 7 edited: `AboutUs.tsx`, `Contact.tsx`, `PrivacyPolicy.tsx`, `TermsAndConditions.tsx`, `Blog.tsx`, `ROICalculatorPage.tsx`, `ROICalculator.tsx`

