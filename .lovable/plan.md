

## Fix: Scroll-to-Top Button Overlapping Footer Links

The `ScrollToTopButton` is fixed at `bottom-6 right-6`, which overlaps the Terms/Privacy links in the footer's bottom

<lov-plan>

## Fix: Scroll-to-Top Button Overlapping Footer Links

The `ScrollToTopButton` is fixed at `bottom-6 right-6`, which overlaps the Terms/Privacy links in the footer's bottom-right area.

### Solution

Hide the scroll-to-top button when the user has scrolled to the bottom of the page (near the footer). Update the scroll handler in `ScrollToTopButton.tsx` to check if the user is near the bottom of the page and hide the button accordingly.

### Change in `src/components/ScrollToTopButton.tsx`

Update the `onScroll` handler to also hide the button when the user is within ~150px of the page bottom:

```ts
const onScroll = () => {
  const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 150;
  setVisible(window.scrollY > 600 && !nearBottom);
};
```

Single file, one line changed.

