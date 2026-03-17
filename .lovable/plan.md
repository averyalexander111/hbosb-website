

## SEO Updates Needed in `index.html`

Yes — several updates are needed to align with your new copy and improve SEO. Here's what's currently mismatched and what to change:

### 1. Title Tag (line 8)
**Current:** `AI Revenue Systems, Automation & Lead Conversion | HBOSB`
**Proposed:** `AI Revenue Systems for Lead Conversion | Heartbeat of South Bay`
Rationale: Matches your OG title, uses full brand name for better recognition.

### 2. OG & Twitter Meta Tags (lines 236-242)
**Current:** Title says "HBOSB", description is fine, but missing `og:url`.
**Update to your provided values:**
- `og:title` → `AI Revenue Systems for Lead Conversion | Heartbeat of South Bay`
- `og:description` → keep current (already matches your provided text)
- Add `og:url` → `https://heartbeatofsouthbay.com`
- `twitter:title` → `AI Revenue Systems for Lead Conversion | Heartbeat of South Bay`
- `twitter:description` → `AI-powered systems that capture leads, automate follow-up, and convert more opportunities into customers.`

### 3. JSON-LD Structured Data (lines 31-58)
**Current:** Uses `LocalBusiness` type with outdated description and local-only `areaServed`.
**Update:**
- Change `@type` from `LocalBusiness` to `ProfessionalService`
- Update `description` to: `"AI revenue systems that capture leads, automate follow-up, and convert opportunities into customers."`
- Change `areaServed` from the local array to `"United States"`
- Add `serviceType` array: `["AI Lead Conversion Systems", "Automation Systems", "CRM Integration", "AI Voice Systems"]`
- Keep all other fields (address, telephone, knowsAbout) as-is

### 4. SEOHead.tsx
Update default `title` prop to match: `"AI Revenue Systems for Lead Conversion | Heartbeat of South Bay"`

### 5. Remove Duplicate OG Tags
Lines 236-242 duplicate the `og:image` on line 12. Consolidate all OG/Twitter tags in one location (lines 236-242 block) and remove the lone `og:image` from line 12.

### No Changes
- Keywords meta tag — already comprehensive
- FAQ structured data — already present and correct
- Service/pricing structured data — already present and correct

