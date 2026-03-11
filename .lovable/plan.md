

## Plan: Scroll-to-Top Button

Create a new `ScrollToTopButton.tsx` component and add it to `Index.tsx`.

### Component: `src/components/ScrollToTopButton.tsx`

- Floating button fixed to bottom-right corner (`fixed bottom-6 right-6`)
- Shows/hides based on scroll position (appears after ~600px scroll)
- Uses `framer-motion` AnimatePresence for smooth fade+slide animation
- Chevron-up icon from Lucide
- Dark navy background matching site theme, white icon
- Smooth scroll to top on click

### Edit: `src/pages/Index.tsx`

- Import and render `<ScrollToTopButton />` inside the page

Two files touched, one new component.

