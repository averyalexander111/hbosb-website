

The user wants me to test the contact form end-to-end on the live preview to confirm the edge function still works after the security hardening (no anon INSERT policy, all submissions routed through `submit-contact-form` edge function).

## Plan

1. Navigate to `/contact` in the preview sandbox.
2. Fill the contact form with clearly-marked test data:
   - Name: `Lovable Test`
   - Email: `lovable-test@example.com`
   - Phone: `555-000-0000`
   - Message: `Automated end-to-end test after security hardening — please ignore.`
   - Leave SMS consent unchecked
3. Submit the form.
4. Verify success by checking for the toast ("Thank you! Your message has been sent successfully.") and confirming form fields reset.
5. If anything fails, capture console logs + edge function logs (`supabase--edge_function_logs` for `submit-contact-form`) to diagnose.
6. Report results — including the fact that a real test row will land in the `HBOSB Contact Form` table and Airtable (you may want to delete it after).

## Files Touched

None — verification only.

