-- Blogs bucket: public read, admin write
create policy "Public can read Blogs"
on storage.objects for select to public
using (bucket_id = 'Blogs');

create policy "Admins can upload to Blogs"
on storage.objects for insert to authenticated
with check (bucket_id = 'Blogs' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can update Blogs"
on storage.objects for update to authenticated
using (bucket_id = 'Blogs' and public.has_role(auth.uid(), 'admin'))
with check (bucket_id = 'Blogs' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete from Blogs"
on storage.objects for delete to authenticated
using (bucket_id = 'Blogs' and public.has_role(auth.uid(), 'admin'));

-- Photos bucket: admin-only across all operations
create policy "Admins can read Photos"
on storage.objects for select to authenticated
using (bucket_id = 'Photos' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can upload to Photos"
on storage.objects for insert to authenticated
with check (bucket_id = 'Photos' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can update Photos"
on storage.objects for update to authenticated
using (bucket_id = 'Photos' and public.has_role(auth.uid(), 'admin'))
with check (bucket_id = 'Photos' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete from Photos"
on storage.objects for delete to authenticated
using (bucket_id = 'Photos' and public.has_role(auth.uid(), 'admin'));