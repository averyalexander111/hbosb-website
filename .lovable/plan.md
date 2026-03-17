

## Update Navigation Bar Links

**File:** `src/components/HeartbeatNavbar.tsx`

### Changes

1. **Update `links` array** (lines ~19-26) to new order and labels:
   - `{ to: "/", label: "Home" }`
   - `{ to: "/leads", label: "Lead Conversion System" }`
   - `{ to: "/roi", label: "ROI Calculator" }`
   - `{ to: "/about", label: "About Us" }`
   - `{ to: "/contact", label: "Contact" }`
   - `{ to: "/blog", label: "Blog" }`

2. **CTA button text** — already says "Assessment", no change needed.

3. **CTA URL** — already points to `https://audit.heartbeatofsouthbay.com/`, no change needed.

No styling, layout, or design changes. Desktop and mobile menus both render from the same `links` array, so both update automatically.

