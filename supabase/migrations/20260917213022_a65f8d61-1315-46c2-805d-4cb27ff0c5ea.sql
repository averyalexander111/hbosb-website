DROP POLICY IF EXISTS "Allow anon to view heartbeats" ON public.heartbeat;
REVOKE SELECT ON public.heartbeat FROM anon;

DROP POLICY IF EXISTS "Public can read Blogs" ON storage.objects;
CREATE POLICY "Admins can read Blogs"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'Blogs' AND public.has_role(auth.uid(), 'admin'));