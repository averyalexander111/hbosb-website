

## Upgrade the "See If This System Is Right" CTA Section

Transform this from a plain white text-and-button section into an eye-catching navy card with visual polish, matching the premium aesthetic of the rest of the page.

### Changes in `src/pages/AILeadResponseSystem.tsx` (lines 341-369)

Replace the current flat `bg-background` section with a navy-themed card layout:

- **Navy gradient background** with blur orbs (consistent with other dark sections on the page)
- **Rounded card container** with subtle border and backdrop blur, giving it a floating "panel" feel
- **Decorative accent line** above the heading (a small primary-colored bar for visual interest)
- **Refined typography**: heading in `navy-foreground`, subtitle with lighter opacity
- **Button with arrow icon**: add `ArrowRight` icon to the CTA button for a clear action cue
- **Increased padding** inside the card for a spacious, premium feel

The section keeps `py-28` spacing but gains the navy treatment, creating a strong visual bookend before the footer.

