

## Global Contact Form Update — High-Converting, SMS Compliant

### Current State

There are **two separate form implementations**:
1. **`ConnectSection.tsx`** — shared component used on Homepage, Privacy, Terms, and AI Lead Response pages (4 places)
2. **`Contact.tsx`** — has its own inline duplicate form on the /contact page

Both have identical logic but are maintained separately. This update will create a single shared form component and apply all enhancements.

### Plan

#### Step 1: Create `src/components/ContactForm.tsx` — New Shared Form Component

Extract the form into a standalone, reusable component with these props:
- `areaOfInterest: string` (to distinguish submissions by page)
- `formIdPrefix: string` (unique HTML IDs to avoid conflicts)

The form will include all requested enhancements:

- **Headline**: "Prefer to Send a Message?"
- **Subheading**: "Tell us a bit about what you're looking for and we'll get back to you shortly."
- **Fields**: Name, Email, Phone, Message — with rounded inputs, soft shadows, smooth focus ring transitions
- **Consent container**: Visually distinct block with `bg-white/5 border border-white/10 rounded-xl p-4` wrapping the checkbox + label + legal links
- **Updated checkbox label** (exact text from requirements, including "Consent is not a condition of purchase")
- **Terms/Privacy links** below checkbox inside the consent container
- **Consent error state**: Shows inline "Consent is required to receive SMS communication." message on failed submit attempt without consent
- **Submit button**: Full-width, hover effect, disabled until consent checked
- **Microcopy below button**: "We typically respond within 24 hours."
- **Trust line**: "Secure. No spam. Your information is never shared." with a lock/shield icon

#### Step 2: Update `ConnectSection.tsx`

- Replace the inline form (lines 72-151) with `<ContactForm areaOfInterest="Homepage Inquiry" formIdPrefix="home" />`
- Keep the "Connect with Us" heading, description, and "Get in Touch" contact info grid unchanged

#### Step 3: Update `Contact.tsx`

- Replace the inline form (lines 170-253) with `<ContactForm areaOfInterest="Contact Page Inquiry" formIdPrefix="contact" />`
- Remove duplicated state/handler code (`formData`, `smsConsent`, `handleSubmit`)
- Keep Cal.com embed, trust points, and page structure unchanged

### Files Modified
- **New**: `src/components/ContactForm.tsx`
- **Edit**: `src/components/ConnectSection.tsx`
- **Edit**: `src/pages/Contact.tsx`

### Technical Details

- Checkbox unchecked by default (`useState(false)`)
- New `consentError` state shown inline when user tries to submit without checking
- Toast error also fires: "Consent is required to receive SMS communication."
- `formIdPrefix` prop ensures unique element IDs when multiple forms appear on the same page (unlikely but safe)
- All Tailwind classes stay within the existing navy/primary design system
- Mobile: single-column stacking, large tap targets (`min-h-[44px]` on checkbox area)

