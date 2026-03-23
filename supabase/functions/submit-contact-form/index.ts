import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation schema
const contactFormSchema = z.object({
  full_name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email_address: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone_number: z.string().trim().max(20, 'Phone number must be less than 20 characters'),
  area_of_interest: z.string().trim().min(1, 'Area of interest is required').max(100, 'Area of interest must be less than 100 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
  sms_consent: z.boolean().optional().default(false),
});

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client with service role for database operations
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Parse and validate input
    const body = await req.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      console.log('Validation failed:', validationResult.error.issues);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid form data',
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      );
    }

    const formData = validationResult.data;

    // Insert into Supabase
    const { data: insertedRecord, error: insertError } = await supabase
      .from('HBOSB Contact Form')
      .insert([formData])
      .select()
      .single();

    if (insertError) {
      console.error('Database insertion error:', insertError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to submit contact form'
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      );
    }

    console.log('Contact form submitted successfully:', insertedRecord.id);

    // Sync to Airtable
    const airtableApiKey = Deno.env.get('AIRTABLE_API_KEY');
    const airtableBaseId = Deno.env.get('AIRTABLE_BASE_ID');
    const airtableTableId = Deno.env.get('AIRTABLE_TABLE_ID');

    if (airtableApiKey && airtableBaseId && airtableTableId) {
      try {
        const airtableRecord = {
          fields: {
            'Full Name': insertedRecord.full_name,
            'Email': insertedRecord.email_address,
            'Phone Number': insertedRecord.phone_number,
            'Area of Interest': insertedRecord.area_of_interest,
            'Message': insertedRecord.message,
            'Submitted At': insertedRecord.created_at,
            'Supabase ID': insertedRecord.id.toString(),
          },
        };

        const airtableUrl = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableId}`;
        
        const airtableResponse = await fetch(airtableUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${airtableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(airtableRecord),
        });

        if (airtableResponse.ok) {
          console.log('Successfully synced to Airtable');
        } else {
          console.error('Airtable sync failed:', airtableResponse.status);
        }
      } catch (airtableError) {
        // Log but don't fail the request if Airtable sync fails
        console.error('Error syncing to Airtable:', airtableError);
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Contact form submitted successfully'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'An unexpected error occurred'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
