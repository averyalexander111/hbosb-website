-- Ensure pg_net extension is enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Add improved error logging to trigger_airtable_sync function
CREATE OR REPLACE FUNCTION public.trigger_airtable_sync()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  request_id bigint;
  error_message text;
BEGIN
  BEGIN
    -- Log that trigger is firing
    RAISE NOTICE 'Airtable sync trigger firing for record ID: %', NEW.id;
    
    -- Call the edge function asynchronously
    SELECT net.http_post(
      url := 'https://gdmjszxcqqfwhkxxoqlp.supabase.co/functions/v1/sync-to-airtable',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkbWpzenhjcXFmd2hreHhvcWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5ODk0NDMsImV4cCI6MjA3MDU2NTQ0M30.xQMhUvWW3WeBpt0QHfJgOiYyc40hUTHlsxr6Yg9YxV8"}'::jsonb,
      body := json_build_object('record', row_to_json(NEW))::jsonb
    ) INTO request_id;
    
    RAISE NOTICE 'Airtable sync HTTP request initiated with request_id: %', request_id;
    
  EXCEPTION WHEN OTHERS THEN
    -- Log the error but don't fail the insert
    error_message := SQLERRM;
    RAISE WARNING 'Error in Airtable sync trigger: %', error_message;
    RAISE NOTICE 'Error details: % - %', SQLSTATE, error_message;
  END;
  
  RETURN NEW;
END;
$$;