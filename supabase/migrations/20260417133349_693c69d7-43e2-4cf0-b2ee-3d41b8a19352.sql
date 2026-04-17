-- Remove the overly-permissive public INSERT policy on the contact form table.
-- All inserts now go through the submit-contact-form edge function (service role),
-- which performs zod validation server-side.
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public."HBOSB Contact Form";