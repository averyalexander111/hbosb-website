# GoHighLevel external-form capture + contact submission consolidation

Read-only findings, plus the minimal change to make when approved. Nothing was edited.

## 1) Does GHL tracking / external-form capture code exist?

Yes. One script, one location:

`index.html`, lines 171-174 (inside `<body>`):

```html
<script
  src="https://link.msgsndr.com/js/external-tracking.js"
  data-tracking-id="tk_deddbf0ee67747858c559b21d9fb9117">
</script>
```

`link.msgsndr.com` is GoHighLevel/LeadConnector. This is their external-form tracking script: it loads on every page of the site and watches native `<form>` submissions on non-GHL pages, creating a contact with `source = external_form` attributed to the page URL. Because the contact form is a React form whose fields are controlled and posted via `fetch` (not a native GHL form with mapped field names), GHL captures the submit event but not the field values. That matches the empty-name/email/phone contacts attributed to `https://heartbeatofsouthbay.com/contact`.

No other GHL/LeadConnector asset exists anywhere in the repo. Confirmed absent: chat widget, form/survey embed, funnel pixel, conversation widget, any other `msgsndr`/`leadconnector` reference in `src`, `public`, or config. The only other third-party scripts in `index.html` are Google Analytics (`gtag`, G-FJKZ8FP5YP) and the Lovable editor script. Cal.com embeds are injected per page in `Contact.tsx` and `Audit.tsx` and are unrelated.

## 2) Would removing it break any other GHL feature?

Nothing that exists in this repo. The script's only functions are external-form capture and page-visit attribution for contacts GHL already knows (cookie-based session attribution). Removing it means:

- The duplicate blank `external_form` contacts stop being created.
- GHL loses page-visit/source attribution for site visitors. The n8n path already sends its own source field, so contact source stays intact.
- No chat widget, no booking widget, no GHL form on the site depends on it.

Caveat outside the repo: if anything in the GHL account is configured against that tracking ID (a trigger on "external form submitted", a website-session-based workflow, or attribution reporting), it lives in GHL, not here, and should be checked in the account before removal.

## 3) Minimal ContactForm.tsx change for production

Current logic (`src/components/ContactForm.tsx`, lines 42-52 and 149-158):

- `shouldUseDirectContactWebhook()` returns true only when hostname is the production domain **and** `pathname === "/contact"`.
- When true: posts to the n8n webhook, then also fires the Supabase edge function (`submit-contact-form` -> Supabase table + Airtable) as a non-blocking secondary write.
- When false (homepage contact section, preview, local): posts only to the Supabase edge function, so homepage leads never reach n8n/GHL at all.

Minimal change, two edits, no UI/validation/payload changes:

1. Drop the pathname condition in `shouldUseDirectContactWebhook()` so it returns true for the production hostnames on any page. The homepage `ConnectSection` form and `/contact` then use the same n8n path.
2. In `handleSubmit`, remove the secondary `void submitToEdgeFunction(payload).catch(...)` call from the direct-webhook branch, so production makes exactly one submission.

The `else` branch stays as-is: non-production hosts (preview, localhost) continue to use the Supabase edge function, so testing never writes into the live GHL pipeline.

One detail to confirm: `submitToContactWebhook` hardcodes `source: "${origin}/contact"`. With the homepage form now on the same path, that label becomes inaccurate. Recommended within the same change: send the actual page URL, or keep `area_of_interest` as the distinguishing field (homepage passes its own value already). Tell me which you prefer; no n8n-side mapping is changed either way.

## 4) What can stay dormant without affecting live operations

All of the following can remain in the repo with zero production effect once the above change ships:

- `supabase/functions/submit-contact-form/index.ts` (Supabase insert + Airtable sync) — still deployed, reachable only from non-production hosts.
- The `HBOSB Contact Form` Supabase table and the Airtable env vars — receive nothing from production traffic.
- `submitToEdgeFunction` in `ContactForm.tsx` — kept as the non-production fallback branch.
- `VITE_CONTACT_WEBHOOK_URL` override support (currently unset; falls back to the hardcoded n8n URL).

Keeping them costs nothing and preserves a working local/preview test path. They only become live again if the hostname check changes.

## Proposed change set (on approval)

- `index.html`: remove the GHL external-tracking script block (lines 171-174).
- `src/components/ContactForm.tsx`: drop the pathname condition; remove the secondary edge-function call in the production branch; optionally correct the `source` value.
- Validate with TypeScript + production build; confirm no other file changed. Preview only, no publish.
