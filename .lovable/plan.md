

## Plan: Move SMS Consent Text Below Message Field & Remove Checkbox

### Changes in `src/pages/Contact.tsx`

1. **Remove** the checkbox block (lines 221-233) — the `<div>` with `<Checkbox>` and its `<Label>`.

2. **After the Message textarea** (after line 246), add a plain `<p>` with the SMS disclaimer text:
   ```
   By checking this box, you agree to receive SMS messages from Heartbeat of South Bay...
   ```
   Updated wording to remove "By checking this box, " since there's no checkbox — will read: *"By submitting this form, you agree to receive SMS messages..."*
   Styled as `text-xs text-muted-foreground leading-relaxed`. Keeps the linked Terms of Service and Privacy Policy.

3. **Remove `sms_consent` from state** and the validation check requiring it, since there's no checkbox. The consent is implied by form submission with the visible disclaimer.

4. **Remove** the `Checkbox` import since it's no longer used.

### Compliance note
The disclaimer text remains visible and includes opt-out instructions (STOP/HELP), Terms, and Privacy links — this satisfies TCPA implied consent for non-marketing messages.

