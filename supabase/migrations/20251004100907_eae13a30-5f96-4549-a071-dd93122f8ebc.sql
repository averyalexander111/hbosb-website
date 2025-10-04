-- Drop existing trigger to recreate it
DROP TRIGGER IF EXISTS on_contact_form_insert ON public."HBOSB Contact Form";

-- Recreate the trigger function with enhanced error handling and service role key
CREATE OR REPLACE FUNCTION public.trigger_airtable_sync()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  request_id bigint;
  error_message text;
  http_response net.http_response_result;
BEGIN
  BEGIN
    -- Log the record being synced
    RAISE WARNING 'Starting Airtable sync for contact form submission ID: %, Name: %, Email: %', 
      NEW.id, NEW.full_name, NEW.email_address;
    
    -- Make the HTTP request and capture the response
    SELECT * FROM net.http_post(
      url := 'https://gdmjszxcqqfwhkxxoqlp.supabase.co/functions/v1/sync-to-airtable',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkbWpzenhjcXFmd2hreHhvcWxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDk4OTQ0MywiZXhwIjoyMDcwNTY1NDQzfQ.S4Ty6c4yomJaVhUG64hOzGKmT6xpDmTXUhNP0mFRq4s'
      ),
      body := jsonb_build_object(
        'record', jsonb_build_object(
          'id', NEW.id,
          'full_name', NEW.full_name,
          'email_address', NEW.email_address,
          'phone_number', NEW.phone_number,
          'area_of_interest', NEW.area_of_interest,
          'message', NEW.message,
          'created_at', NEW.created_at
        )
      ),
      timeout_milliseconds := 5000
    ) INTO http_response;
    
    -- Log the request details
    RAISE WARNING 'Airtable sync HTTP request completed. Request ID: %, Status: %', 
      http_response.id, http_response.status_code;
    
    -- Log if there was an error response
    IF http_response.status_code >= 400 THEN
      RAISE WARNING 'Airtable sync returned error status %. Response: %', 
        http_response.status_code, http_response.content;
    END IF;
    
  EXCEPTION WHEN OTHERS THEN
    -- Log detailed error information
    error_message := SQLERRM;
    RAISE WARNING 'Error in Airtable sync trigger for record ID %: %', NEW.id, error_message;
    RAISE WARNING 'Error details - SQLSTATE: %, Message: %', SQLSTATE, error_message;
    -- Don't fail the insert even if sync fails
  END;
  
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER on_contact_form_insert
  AFTER INSERT ON public."HBOSB Contact Form"
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_airtable_sync();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA net TO postgres;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA net TO postgres;

-- Add a comment to document the trigger
COMMENT ON TRIGGER on_contact_form_insert ON public."HBOSB Contact Form" IS 
  'Automatically syncs new contact form submissions to Airtable via edge function';