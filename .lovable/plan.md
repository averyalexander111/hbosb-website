

## Remove Contact Form, Keep Contact Info on ROI Calculator Page

On the ROI Calculator page, remove the full `ConnectSection` (which includes the contact form + contact info) and replace it with a lightweight contact-info-only strip. The FinalCTASection stays as the primary conversion block.

### Changes

1. **Create `ContactInfoStrip` component** (`src/components/ContactInfoStrip.tsx`)
   - Extract just the "Get in Touch" contact info grid from `ConnectSection` (address, phone, email, hours, social links)
   - Same 5-column responsive grid layout, same styling
   - No form, no heading like "Connect with Us"

2. **Update `src/pages/ROICalculatorPage.tsx`**
   - Replace `ConnectSection` import/usage with `ContactInfoStrip`
   - Order: ROICalculator → FinalCTASection → ContactInfoStrip → Footer
   - Remove the unused `ConnectSection` lazy import

This keeps essential contact details accessible without duplicating conversion CTAs.

