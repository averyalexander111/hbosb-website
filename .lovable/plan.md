

## Add SMS Terms of Service Section to Terms and Conditions Page

### Change in `src/pages/TermsAndConditions.tsx`

Insert a new "SMS Terms of Service" section **before the Disclaimer section** (before line 98), using the same `<h2>` and `<p>` styling as existing sections:

```tsx
<h2 className="text-2xl font-bold mb-4 text-primary">SMS Terms of Service</h2>
<p>By providing your phone number and opting in...</p>
<p>Message frequency may vary...</p>
<p>You can opt out at any time by replying STOP...</p>
<p>Your consent to receive SMS messages is not a condition of purchase.</p>
<p>Heartbeat of South Bay does not share, sell, rent, or disclose...</p>
```

All paragraphs use `text-base leading-relaxed mb-4` (last one `mb-8`) — identical to surrounding sections. No other changes.

### File modified
- `src/pages/TermsAndConditions.tsx`

