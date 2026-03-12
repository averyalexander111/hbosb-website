

## Add Twilio and Airtable Logos to Technology Carousel

Add the two uploaded logos (Twilio and the colorful Airtable-style triangular logo) to the carousel.

### Changes
1. **Copy uploaded images** to `src/assets/`:
   - `user-uploads://twilio-logo-png-transparent.png` → `src/assets/twilio-logo.png`
   - `user-uploads://ChatGPT_Image_Mar_12_2026_07_09_42_AM.png` → `src/assets/airtable-logo.png`

2. **Update `TechnologyCarousel.tsx`**:
   - Import both logos
   - Add to the `technologies` array after "Google Antigravity"

