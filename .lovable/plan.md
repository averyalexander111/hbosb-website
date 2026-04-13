

## Embed External Tracking Script on Every Page

### File Modified
- `index.html`

### Change
Add the following script tag inside the `<body>` section (before the closing `</body>` tag, alongside the existing scripts):

```html
<script 
  src="https://link.msgsndr.com/js/external-tracking.js"
  data-tracking-id="tk_deddbf0ee67747858c559b21d9fb9117">
</script>
```

Since this is a single-page app, placing it in `index.html` ensures it loads on every route automatically.

