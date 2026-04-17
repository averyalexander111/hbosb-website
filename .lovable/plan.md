

User confirms Postgres upgrade is done. Plan: re-run the security scan, then mark `SUPA_vulnerable_postgres_version` as fixed if it no longer appears (or note it if it still does). Both actions require default mode.

## Steps

1. Run `security--run_security_scan` to refresh findings against the upgraded Postgres instance.
2. If `SUPA_vulnerable_postgres_version` is no longer in the open findings, call `security--manage_security_finding` with `mark_as_fixed` and an explanation referencing the dashboard upgrade.
3. If it still appears, report back that the scanner still sees a pending patch (Supabase sometimes lags by a few minutes after upgrade) and suggest waiting briefly before retrying.

## Files Touched

None — security platform actions only.

