

## Plan: Add Terms & Privacy Links to SMS Consent Text

### Change
In `src/pages/Contact.tsx`, update the SMS consent label text to include inline links to `/terms` and `/privacy`.

### Detail
Replace the plain text with JSX containing two `<Link>` components:

> By checking this box, you agree to receive SMS messages from Heartbeat of South Bay related to consultations, project updates, and service communication. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. View our [Terms of Service](/terms) and [Privacy Policy](/privacy).

The links will be styled with `underline text-primary hover:text-primary/80` to stand out from the surrounding muted text.

### File
- **`src/pages/Contact.tsx`** — Update the `<Label>` for `sms_consent` (around line 165-168) to include linked text.

