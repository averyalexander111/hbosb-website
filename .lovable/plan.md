

## Plan: Add Contact Form to Homepage "Connect with Us" Section

### Overview
Embed the contact form from the `/contact` page into the homepage's `ConnectSection.tsx`, placed between the description text and the "Get in Touch" contact info grid. Style it to match the dark-themed section.

### Changes

**`src/components/ConnectSection.tsx`**

1. Add imports: `useState` from React, `Link` from react-router-dom, `supabase` client, `toast` from sonner, `Button`, `Input`, `Textarea`, `Label`.

2. Add form state (`full_name`, `email_address`, `phone_number`, `message`) and `isSubmitting` state, plus the `handleSubmit` logic (same as Contact page).

3. Insert a contact form block **after the description paragraph** (line 21) and **before the "Get in Touch" contact info grid** (line 25). Layout:
   - Centered card with `bg-white/10 backdrop-blur` rounded container (matches dark theme)
   - 2-column grid on desktop (name/email left, phone/message right), single column on mobile
   - Labels styled `text-gray-200`, inputs with `bg-white/10 border-white/20 text-white placeholder:text-gray-400`
   - SMS consent disclaimer in `text-xs text-gray-400` with linked Terms/Privacy
   - Submit button using primary brand color

4. Keep all existing contact info grid and social links unchanged below the form.

### Visual result
The section will flow: heading → description → embedded contact form → "Get in Touch" info grid, all within the existing dark background.

