-- Fix search_path security issue for trigger_airtable_sync function
CREATE OR REPLACE FUNCTION public.trigger_airtable_sync()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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