

## Add Required SMS Consent Checkbox to Both Contact Forms

### Summary
Replace the existing passive SMS disclaimer paragraph with an active opt-in checkbox in both `ConnectSection.tsx` (homepage) and `Contact.tsx` (contact page). No layout, color, or structural changes.

### Changes

**Both files** get the same functional update:

1. **Add `smsConsent` boolean state** (default `false`) to form state
2. **Replace the `<p>` disclaimer block** (lines 123-128 in ConnectSection, lines 225-230 in Contact) with:
   - A checkbox + label using the existing `Checkbox` component from `@/components/ui/checkbox`
   - Label text: "I agree to receive SMS messages from Heartbeat of South Bay regarding my inquiry, appointments, and services. Message and data rates may apply. Reply STOP to opt out or HELP for assistance."
   - A small text line below: "View our [Terms of Service](/terms) and [Privacy Policy](/privacy)"
3. **Add validation** in `handleSubmit` — if `!smsConsent`, show toast error and return
4. **Disable submit button** when `smsConsent` is false (via `disabled={isSubmitting || !smsConsent}`)
5. **Reset `smsConsent`** to `false` on successful submission
6. **Import** `Checkbox` from `@/components/ui/checkbox`

### Styling approach
- Checkbox container: `flex items-start gap-3` to align checkbox with multiline label
- Checkbox: existing component, styled with `border-white/20 data-[state=checked]:bg-primary` for dark bg
- Label text: `text-xs text-navy-foreground/60` matching existing disclaimer style
- Links line: `text-xs text-navy-foreground/40` with same link styling as current

### Files modified
- `src/components/ConnectSection.tsx`
- `src/pages/Contact.tsx`

