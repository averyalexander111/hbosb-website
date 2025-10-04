-- Create function to trigger Airtable sync
CREATE OR REPLACE FUNCTION public.trigger_airtable_sync()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Call the edge function asynchronously
  SELECT net.http_post(
    url := 'https://gdmjszxcqqfwhkxxoqlp.supabase.co/functions/v1/sync-to-airtable',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkbWpzenhjcXFmd2hreHhvcWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5ODk0NDMsImV4cCI6MjA3MDU2NTQ0M30.xQMhUvWW3WeBpt0QHfJgOiYyc40hUTHlsxr6Yg9YxV8"}'::jsonb,
    body := json_build_object('record', row_to_json(NEW))::jsonb
  ) INTO request_id;
  
  RETURN NEW;
END;
$$;

-- Create trigger on contact form table
DROP TRIGGER IF EXISTS on_contact_form_insert ON public."HBOSB Contact Form";

CREATE TRIGGER on_contact_form_insert
  AFTER INSERT ON public."HBOSB Contact Form"
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_airtable_sync();

-- Enable pg_net extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;