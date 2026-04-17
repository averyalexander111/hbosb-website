

Same finding as before. This is a Supabase platform-level warning — the project's Postgres instance has pending security patches. There is no SQL, migration, or code change that can fix this. The upgrade must be performed by the project owner from the Supabase dashboard.

The scan results confirm this is the only remaining open finding (all in-codebase findings from the previous round — `sync_airtable_no_auth`, `edge_function_errors`, `SUPA_rls_policy_always_true`, `contact_form_no_server_validation` — were resolved in prior commits).

## What needs to happen

You upgrade Postgres from the Supabase dashboard:

1. Open Infrastructure settings for the project
2. Review the proposed Postgres version
3. Click **Upgrade project** and confirm
4. Wait for completion (a few minutes; brief downtime possible)

Direct link: `https://supabase.com/dashboard/project/gdmjszxcqqfwhkxxoqlp/settings/infrastructure`

Docs: https://supabase.com/docs/guides/platform/upgrading

## After the upgrade

Once you confirm it's done, I will:
- Re-run the security scan
- Mark `SUPA_vulnerable_postgres_version` as fixed if it clears

## Why I can't do this for you

Cluster-level operations like Postgres version upgrades are gated behind the Supabase dashboard and require the project owner's explicit confirmation because they involve a maintenance window. My tools can run SQL migrations and deploy edge functions, but not platform upgrades.

## Files Touched

None — this is a dashboard action.

