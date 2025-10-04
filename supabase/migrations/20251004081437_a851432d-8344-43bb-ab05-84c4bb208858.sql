-- Drop existing overly permissive policies on blog_posts
DROP POLICY IF EXISTS "Authenticated users can create blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can view all blog posts" ON public.blog_posts;

-- Keep the public read policy for published posts (this one is fine)
-- "Anyone can view published blog posts" policy already exists

-- Create new admin-only policies for blog post management
CREATE POLICY "Only admins can view all blog posts including drafts"
ON public.blog_posts
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can create blog posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update blog posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete blog posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Note: The existing "Anyone can view published blog posts" policy remains
-- This ensures the public can still read published content while drafts are protected