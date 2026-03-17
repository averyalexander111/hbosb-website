

## Remove Redundant AI Voice & Outbound Section

The standalone "AI Voice & Outbound Automation" section duplicates content now covered by the "AI Outbound & Lead Reactivation" card in "AI Systems We Build." It should be removed.

### Changes

1. **`src/pages/Index.tsx`** — Remove the lazy import for `AIVoiceOutboundSection` and its `<Suspense>` wrapper from the page.

2. **`src/components/AIVoiceOutboundSection.tsx`** — Delete the file.

No other files reference this component.

