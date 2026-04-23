

## Security Finding Review: `user_roles_self_escalation`

### Verdict: Largely a false positive, with one real hardening opportunity

I reviewed the live RLS policies on `user_roles` against the warning. Here's what's actually true:

| Concern in finding | Actual status |
|---|---|
| "Non-admin can insert their own admin role" | **Not exploitable.** The INSERT policy's `WITH CHECK` is `has_role(auth.uid(), 'admin')`. Postgres evaluates this before the row is written. A non-admin's check returns `false` → insert is rejected. There is no race window — `WITH CHECK` is atomic per row. |
| "Race condition on has_role" | **Not exploitable.** `has_role` is `STABLE SECURITY DEFINER` and reads committed state. A user can't insert a row, then have that same row satisfy their own check — the check runs first. |
| "Enumeration of admin accounts" | **Not exploitable as stated.** The "Users can view their own roles" policy filters `user_id = auth.uid()`, so an authenticated user only ever sees their own rows. They cannot list other users' roles. |
| "Bootstrap: no admin can ever be created via the policy" | **True, but by design.** The first admin must be seeded via SQL migration (already done). |

The scanner is flagging a theoretical pattern (`has_role` reads the table it gates), but the current policy set closes the actual attack paths.

### What to do

**Recommended: mark the finding as resolved with an explanation** — no code changes needed. The policies as written are safe.

**Optional defense-in-depth (only if you want extra hardening):**

1. Make `has_role` explicitly skip rows authored in the same transaction by adding `SET row_security = off` (already implicit in `SECURITY DEFINER`, but documented intent). No functional change.
2. Add a redundant `WITH CHECK` clause on INSERT that also blocks self-promotion: `WITH CHECK (has_role(auth.uid(), 'admin') AND user_id <> auth.uid())`. This prevents an admin from accidentally adding the `admin` role to themselves a second time, but it also prevents the legitimate case of an admin granting another admin… which is fine since the seed admin is created via migration.

Honestly, neither is needed. The current model is the standard Supabase pattern recommended in your own system instructions.

### Plan

1. Call `security--manage_security_finding` with `operation: "mark_as_fixed"`, `internal_id: "user_roles_self_escalation"`, `scanner_name: "supabase_lov"`, and an explanation citing:
   - INSERT WITH CHECK blocks non-admin escalation atomically (no race).
   - SELECT policy `user_id = auth.uid()` prevents cross-user enumeration.
   - First admin is seeded via migration, not via the policy path.
2. No code or migration changes.

If you'd rather apply the optional hardening (option 2 above) before dismissing, say the word and I'll add a migration. Otherwise approving this plan dismisses the finding.

