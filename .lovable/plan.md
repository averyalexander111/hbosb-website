

## Remove Address from Website

### Files to Modify

**1. `src/components/ConnectSection.tsx`**
- Remove the entire "Address" block (the `<div>` containing the MapPin icon, "Address" heading, and the street address text — approximately lines 47–57)
- Update the grid from `grid-cols-1 md:grid-cols-3 lg:grid-cols-5` to `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` to account for one fewer column

**2. `index.html`**
- Remove the `"address"` object from the structured data JSON-LD schema (the PostalAddress block)

### What Stays the Same
- Phone, Email, Hours, Social columns unchanged
- All styling and layout patterns preserved
- No other pages affected (address only appears in these two files)

