
What I found

The post is already on the Blog page. It is the only published post and appears as the first card directly below:
1. the “The Pulse” hero
2. the search box
3. the tag chips row (“AI”, “Customer Segmentation”, etc.)

Post details:
- Title: Leveraging AI for Smarter Customer Segmentation
- Blog listing URL: `/blog`
- Direct post URL: `/blog/leveraging-ai-for-smarter-customer-segmentation`

Why it may seem missing

This does not look like a Supabase or routing problem:
- The `blog_posts` table contains the post with `status = published`
- The `/blog` page query returns it successfully
- I confirmed it renders on preview, published, and custom-domain versions of the site

Most likely issue:
- The blog page has a tall hero plus search/filter spacing above the cards
- On shorter viewports, the first post can sit low enough that it feels “not there” until you scroll

If you want this fixed so it is immediately obvious on the page, I would make this UI adjustment:
1. Reduce the vertical space above the post grid on `src/pages/Blog.tsx`
2. Pull the first card higher so it appears sooner on load
3. Optionally turn the latest post into a featured top card above the grid
4. Re-verify the page in the preview after the layout change
