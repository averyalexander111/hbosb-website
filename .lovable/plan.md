

## Change Route from `/ai-lead-response-system` to `/leads`

Update all 4 references across 4 files:

1. **`src/App.tsx`** (line 73) — Change route path to `/leads`
2. **`src/components/AILeadResponseSection.tsx`** (line 97) — Update `Link to` to `/leads`
3. **`src/components/HeartbeatFooter.tsx`** (line 34) — Update link `to` to `/leads`
4. **`src/components/HeartbeatNavbar.tsx`** (line 22) — Update link `to` to `/leads`

No file renames needed. The page component name stays the same.

