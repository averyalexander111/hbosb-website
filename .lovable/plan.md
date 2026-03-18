

## Update Privacy Policy for A2P 10DLC SMS Compliance

### Changes in `src/pages/PrivacyPolicy.tsx`

All edits stay within the existing `<div className="prose prose-lg max-w-none">` block. No layout/styling changes.

**1. Update intro paragraph (lines 34–36)**
Replace with: "Heartbeat of South Bay is a digital marketing and AI automation agency that provides services to businesses and individuals. We act as the data controller for any personal information collected through our website."

**2. Replace SMS Communication section (lines 80–86)**
Replace with expanded content covering:
- Explicit consent via website forms (with link to `/contact`)
- Message types (confirmations, reminders, follow-ups, updates)
- "Message frequency may vary. Message and data rates may apply."
- Opt-out (STOP) and help (HELP) instructions
- No sharing/selling of phone numbers or SMS opt-in data

**3. Add new "Consent to Receive Communications" section (after SMS, before "Links to Other Websites")**
New `<h2>` + two paragraphs:
- Consent given by providing phone number and checking consent box
- Consent is not a condition of purchase; opt-out available anytime

**4. Add `Link` import from react-router-dom**
Use `<Link to="/terms">` and `<Link to="/privacy">` in the Contact Information section footer area for consistent internal linking (matching existing styling with `text-primary hover:underline`).

### Files modified
- `src/pages/PrivacyPolicy.tsx`

