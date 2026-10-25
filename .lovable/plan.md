# Read-only release QA audit (HEAD 88b2cd6 vs published baseline 35ef361)

No code edits, commits, publishing, form submissions, bookings, setting changes, or outside side effects. The only file this plan creates is this plan file.

## Steps

1. **Revision gate**: read `git rev-parse HEAD` and `git status --porcelain` before and after all checks. Stop and report a blocker if HEAD is not `88b2cd67314f012be0378e94d630ee0f9815f720`, if the tree has changes, or if baseline `35ef361…` is missing from history.
2. **Live vs preview**: read the live site's `/` and `/leads` over HTTPS (read only) and the local preview. Compare the H1, whether the walkthrough is there, title/description/OG/Twitter/canonical tags, JSON-LD, keywords, and the carousel logo list. Report whether the live site still matches the 35ef baseline content. Matching content does not prove which git revision is deployed.
3. **Build and typecheck**: run `npm run build` with output sent to `/tmp` (`--outDir /tmp/qa-dist`) so the project's `dist` is untouched. Run the typecheck script if `package.json` has one, otherwise `tsc --noEmit -p tsconfig.app.json`. Capture the exact `leadValidation.ts` error. Use `git worktree`-free `git show 35ef:src/lib/leadValidation.ts` plus `git diff 35ef..HEAD -- src/lib/leadValidation.ts` to classify it as pre-existing or new. Vite does not typecheck, so a tsc failure does not block the build or runtime.
4. **Carousel assets**: check that the six PNGs exist (size and SHA256). In Playwright, record each network response status and the image's naturalWidth, rendered box, and alt text on `/`.
5. **Smoke test**: open `/`, `/leads`, `/assessment`, `/contact`, and `/roi` in Chromium and WebKit at 390 and 1280. Check the menu, that the CTA hrefs point to `/assessment`, that main content is present, and that there are no console or page errors, failed requests, or horizontal overflow. Outbound requests to n8n, Supabase functions, and Cal.com bookings are blocked by route abort. Nothing gets typed or submitted, and the assessment is not started. Check the reduced-motion hero (static, no Pause control) at 390 and 1280.
6. **Protected source**: run `git diff --stat` and a full diff of 35ef..HEAD on ContactForm.tsx, Audit.tsx, audit.ts, Contact.tsx, ConnectSection.tsx, App.tsx, and submit-contact-form/index.ts. Classify each change as copy/metadata or functional (handlers, endpoints, event names, payloads, scoring, consent, calendar). The production n8n and GHL workflows are outside the project, so they are not verified.
7. **Report**: a compact factual summary with blockers and mismatches, the head/metadata status, any hero runtime errors, the measured results, what was not tested, confirmation that no files changed, and confirmation that production was not touched. No publishing.

## Limits
- This is not device-level testing.
- Only the HTML and DOM of the live site are read.
- Core Web Vitals are not measured.
