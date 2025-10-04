-- Remove the unreliable database trigger approach
DROP TRIGGER IF EXISTS on_contact_form_insert ON public."HBOSB Contact Form";

-- Drop the trigger function
DROP FUNCTION IF EXISTS public.trigger_airtable_sync();

-- Revoke pg_net permissions that are no longer needed
REVOKE USAGE ON SCHEMA net FROM postgres;
REVOKE EXECUTE ON ALL FUNCTIONS IN SCHEMA net FROM postgres;

-- Add a comment documenting the change
COMMENT ON TABLE public."HBOSB Contact Form" IS 
  'Contact form submissions. Airtable sync is now handled client-side via Edge Function.';