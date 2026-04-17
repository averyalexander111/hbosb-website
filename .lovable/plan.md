

This finding is a false positive in our architecture. The scanner sees no INSERT policy on `HBOSB Contact Form` and assumes the form is broken — but the form intentionally does NOT insert directly. All submissions go through the `submit-contact-form` edge function, which uses the `SUPABASE_SERVICE_ROLE_KEY` and bypasses RLS entirely. This is exactly the hardening we did in the previous round (replacing the permissive `WITH CHECK true` policy that the scanner is now suggesting we re-add).

Adding an `anon` INSERT policy would:
- Re-introduce the `SUPA_rls_policy_always_true` vulnerability we just fixed
- Allow direct client-side inserts that skip server-side Zod validation, spam protection, and Airtable sync
- Let attackers bypass the edge function entirely

The correct action is to mark this finding as ignored with an explanation pointing at the edge-function architecture.

## Plan

1. Mark `contact_form_missing_insert_policy` as **ignored** via `security--manage_security_finding`, with a reason explaining that inserts are handled exclusively by the `submit-contact-form` edge function using the service role key, and that adding an anon INSERT policy would reintroduce a previously-fixed vulnerability.

## Files Touched

None — security platform action only.

