

## Make SMS Consent Checkbox Optional

### Changes in `src/components/ContactForm.tsx`

Three targeted edits — no layout, styling, or structural changes:

**1. Add "Optional" text above checkbox (line 181)**
Insert a `<p>` with matching styling before the checkbox row:
```
<p className="text-xs text-navy-foreground/60 font-medium mb-2">
  Optional: Check this box to receive SMS updates regarding your inquiry.
</p>
```

**2. Remove consent validation block (lines 46–50)**
Delete the `if (!smsConsent)` check that blocks submission, so the form submits regardless of checkbox state.

**3. Remove submit button disabled condition (line 230)**
Change `disabled={isSubmitting || !smsConsent}` to `disabled={isSubmitting}` so the button is always active when not submitting.

**4. Remove consent error state and display (lines 200–203)**
Remove the `consentError` inline error message since consent is no longer required. The `consentError` state and `handleConsentChange` error-clearing logic can also be cleaned up.

### What stays the same
- Checkbox remains unchecked by default
- Existing consent label text unchanged
- Terms/Privacy links unchanged
- All input fields, button text, styling unchanged
- `smsConsent` value still stored and reset on submit

