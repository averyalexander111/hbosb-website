

## Move "Need Something More Advanced?" Section

Move the "Need Something More Advanced?" section (lines 417–476) from its current position (after Investment, before "Who This System Is For") to after the "See If This System Is Right" final CTA section (after line 561, before `<ConnectSection />`).

The section's background is `bg-navy` which will sit naturally before the ConnectSection. No other changes needed.

### File: `src/pages/AILeadResponseSystem.tsx`
- **Cut** lines 417–476 (the entire "Need Something More Advanced?" section)
- **Paste** between the closing `</section>` of the Final CTA (line 561) and `<ConnectSection />` (line 563)

