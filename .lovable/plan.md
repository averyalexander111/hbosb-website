

The user wants two things:
1. Verify byline + tab titles on `/blog` and the post page (verification only — done previously, just needs hard refresh)
2. Fix the security finding: private `Photos` and `Blogs` buckets have no RLS policies on `storage.objects`

Item 1 is just a manual hard-refresh on the user's end — I can confirm what they should see.

Item 2 is the real work. The fix is to add RLS policies on `storage.objects` scoped to each bucket. Since `Blogs` holds blog featured images that need to render publicly on `/blog` and `/blog/:slug`, public SELECT is required (or the bucket should be flipped to public). `Photos` appears unused in code — I'll restrict it to admin-only across the board.

## Plan

### Part 1 — Verification (you do this)
Hard-refresh:
- `/blog` → byline should read "Heartbeat of South Bay Team", tab title "The Pulse — AI Revenue Insights | Heartbeat of South Bay"
- `/blog/leveraging-ai-for-smarter-customer-segmentation` → tab title ends with "| The Pulse — Heartbeat of South Bay"

### Part 2 — Lock down storage buckets (RLS migration)

Add policies on `storage.objects` for both buckets:

**Blogs bucket** (featured images displayed publicly on blog pages):
- SELECT: public (anyone can read — needed for `<img src>` to work)
- INSERT / UPDATE / DELETE: admin only via `has_role(auth.uid(), 'admin')`

**Photos bucket** (no public consumer in current code):
- SELECT / INSERT / UPDATE / DELETE: admin only

```sql
-- Blogs: public read, admin write
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

-- Photos: admin-only across all operations
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
```

### Why public SELECT on Blogs is safe
The bucket holds blog featured images that are already meant to be displayed to every visitor on `/blog`. Without public SELECT, signed URLs would be required for every `<img>` — invasive and unnecessary for content already public by design. Write operations remain admin-locked.

### Notes
- The bucket itself stays private (no anonymous listing of all objects); only direct object reads are allowed.
- If you'd rather make the `Blogs` bucket fully public instead, say so and I'll flip it via `update storage.buckets set public = true where id = 'Blogs'` instead of adding a SELECT policy.
- This will mark the `storage_no_rls_policies` finding as fixed.

### Files Touched
- New migration: storage RLS policies for `Blogs` and `Photos`

