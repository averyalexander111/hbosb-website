

This finding is a Supabase platform-level warning: the project's Postgres instance has pending security patches. This is **not something I can fix from code or migrations** — there is no SQL or file change that upgrades Postgres. The upgrade is performed in the Supabase dashboard by the project owner.

## What needs to happen

You upgrade Postgres from the Supabase dashboard:

1. Open the Infrastructure → Upgrades page for the project
2. Review the proposed Postgres version
3. Click **Upgrade project** and confirm
4. Wait for the upgrade to complete (a few minutes; brief downtime possible)

Direct link: `https://supabase.com/dashboard/project/gdmjszxcqqfwhkxxoqlp/settings/infrastructure`

Docs: https://supabase.com/docs/guides/platform/upgrading

## After the upgrade

Once you confirm the upgrade is complete, I can:
- Re-run the security scan to verify `SUPA_vulnerable_postgres_version` clears
- Mark the finding as fixed

## Why I can't do this for you

Lovable's tools can run SQL migrations, deploy edge functions, and modify storage policies — but cluster-level operations like Postgres major/minor version upgrades are gated behind the Supabase dashboard and require the project owner's explicit confirmation (since they involve a maintenance window).

## Recommended next step

After you trigger and confirm the upgrade, ping me and I'll verify + mark the finding fixed. While we're at it, the two remaining findings are both in-codebase fixes I can handle:

- `edge_function_errors` — sanitize error responses in `sync-to-airtable`
- `SUPA_rls_policy_always_true` — find and tighten the offending policy

Want me to tackle those in the same follow-up?

