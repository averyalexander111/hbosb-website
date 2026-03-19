

## Standardize Legal Page Labels

### Changes Required

Four files have outdated labels that need updating:

**1. `src/components/ContactForm.tsx`** (line 212)
- Change `"Terms of Service"` → `"Terms and Conditions"`

**2. `src/components/HeartbeatFooter.tsx`** (lines 95, 98)
- Change `"Terms"` → `"Terms and Conditions"`
- Change `"Privacy"` → `"Privacy Policy"`

**3. `src/pages/PrivacyPolicy.tsx`** (line 126)
- Change `"Terms of Service"` → `"Terms and Conditions"` in the cross-link text

**4. `src/pages/TermsAndConditions.tsx`** (line 98)
- Change `"SMS Terms of Service"` → `"SMS Terms and Conditions"` in the section heading

### What stays the same
- All URLs already point to `/terms-and-conditions` and `/privacy-policy` (correct)
- No layout, spacing, or styling changes
- No other files contain outdated references

