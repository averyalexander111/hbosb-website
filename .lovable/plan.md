

## Add "Leads" Link to Navigation

Add an "AI Lead Response" link pointing to `/ai-lead-response-system` in both the header navbar and footer navigation.

### Changes

**`src/components/HeartbeatNavbar.tsx`**
- Add `{ to: "/ai-lead-response-system", label: "Leads" }` to the `links` array (after "ROI Calculator")

**`src/components/HeartbeatFooter.tsx`**
- Add `{ to: "/ai-lead-response-system", label: "Leads" }` to the footer navigation links (after "ROI Calculator")

Two files, one-line addition each.

