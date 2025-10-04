import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormRecord {
  id: number;
  full_name: string;
  email_address: string;
  phone_number: string;
  area_of_interest: string;
  message: string;
  created_at: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record } = await req.json() as { record: ContactFormRecord };
    
    console.log('Syncing contact form submission to Airtable:', record.id);

    // Get Airtable credentials from environment
    const airtableApiKey = Deno.env.get('AIRTABLE_API_KEY');
    const airtableBaseId = Deno.env.get('AIRTABLE_BASE_ID');
    const airtableTableId = Deno.env.get('AIRTABLE_TABLE_ID');

    if (!airtableApiKey || !airtableBaseId || !airtableTableId) {
      throw new Error('Missing Airtable configuration');
    }

    // Prepare Airtable record
    const airtableRecord = {
      fields: {
        'Full Name': record.full_name,
        'Email': record.email_address,
        'Phone Number': record.phone_number,
        'Area of Interest': record.area_of_interest,
        'Message': record.message,
        'Submitted At': record.created_at,
        'Supabase ID': record.id.toString(),
      },
    };

    // Send to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableId}`;
    
    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableRecord),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airtable API error:', errorText);
      throw new Error(`Airtable API error: ${response.status} - ${errorText}`);
    }

    const airtableResponse = await response.json();
    console.log('Successfully synced to Airtable:', airtableResponse.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        airtableId: airtableResponse.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error syncing to Airtable:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
