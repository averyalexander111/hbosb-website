

## Plan: Redesign Contact Page with Cal.com Embed

### Overview
Rewrite `src/pages/Contact.tsx` to match the specified 5-section layout: Hero, Calendar Booking (Cal.com embed), Contact Form, Trust Section, and Footer links. The page will be a clean, modern SaaS-style design with a light background, generous spacing, and max-width ~1100px.

### Changes

**1. Rewrite `src/pages/Contact.tsx`**

The entire page will be restructured into 5 sections:

- **Section 1 — Hero**: New headline ("Schedule a Consultation with Heartbeat of South Bay"), subheading about booking a call, and supporting line about 24-hour booking. Centered text, clean typography.

- **Section 2 — Calendar Booking**: Title "Book a 15-Minute Consultation". Use a `useEffect` hook to dynamically inject the Cal.com embed script on mount and clean it up on unmount. The embed targets a `div#my-cal-inline-15min` with full-width layout inside the content container. The script initializes Cal.com with the `month_view` layout and brand color `#4a91c4`.

- **Section 3 — Contact Form**: A horizontal divider separates this from the calendar. Title "Prefer to Send a Message?". Reuses the existing form logic (state, validation, Supabase insert to "HBOSB Contact Form" table). Fields: Name, Email, Phone Number, Message. SMS consent checkbox placed below the phone field with the updated compliance text mentioning "consultations, project updates, and service communication". "Send Message" button.

- **Section 4 — Trust Section**: Title "Why Work With Heartbeat of South Bay" with four bullet points (AI automation, CRM/workflow, digital marketing, custom infrastructure) in a clean grid or list layout.

- **Section 5 — Footer**: Simple centered footer with links to Privacy Policy (`/privacy`) and Terms & Conditions (`/terms`).

**Key technical details:**
- Cal.com embed script is injected via `useEffect` with proper cleanup to avoid duplicate script loads on re-renders
- Light background (`#f8fafc` or similar) instead of the current `#d1e8ff`
- Max-width container ~1100px for content sections
- Existing Supabase form submission logic preserved
- `ConnectSection` and `HeartbeatFooter` removed from this page (replaced by the custom trust + footer sections)
- `HeartbeatNavbar` kept at top
- Fully responsive with mobile-friendly spacing

