
The user is asking about the blog post system. Let me investigate.

Looking at the codebase:
- `src/App.tsx` references `Blog` page lazy-loaded from `./pages/Blog`
- The route `/blog` is configured and points to the Blog page
- `src/pages/Blog.tsx` exists and queries the `blog_posts` table from Supabase
- The query filters: `status = 'published'` AND `published_at <= now()` ordered by `published_at desc`
- The `blog_posts` table exists in Supabase with proper RLS allowing public to view published posts

Let me check the database to see what's actually there.
