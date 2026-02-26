import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const MONDAY_API_URL = "https://api.monday.com/v2";
const BOARD_ID = "2498015918";
const GROUP_ID = "new_group76520"; // Pension Leads

// Hardcoded column IDs from board discovery
const COL = {
  phone: "phone_1",
  email: "email",
  owner: "people",
  leadSource: "status_12",
  value: "value2",
  age: "age",
  typeOfLead: "type_of_lead",
  leadInfo1: "text1",
  leadInfo2: "text_mm0mx1gx",
  leadInfo3: "text_mm0mztz",
  leadInfo4: "text_mm0mf3kh",
  leadInfo5: "text_mm0mk7r1",
  bestTimeToCall: "text_mm0m1dam",
  notes: "text_mkzb5v08",
  additionalInfo: "text_mm0mvv4k",
  leadUrl: "text_mkzb2hz4",
  dateReceived: "date",
  gclid: "text16",
};

interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  formType: string;
  pageSource?: string;
  age?: string;
  pensionValue?: string;
  enquiryType?: string;
  additionalInfo?: string;
  bestTimeToCall?: string;
  resultSummary?: string;
  gclid?: string;
  directorNotes?: string;
  [key: string]: unknown;
}

async function mondayQuery(apiKey: string, query: string, variables?: Record<string, unknown>) {
  const res = await fetch(MONDAY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": apiKey,
      "API-Version": "2024-10",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Monday.com API error [${res.status}]: ${text}`);
  }

  return await res.json();
}

// Map formType codes to human-readable form names for Monday.com
function getReadableFormName(formType: string): string {
  // Remove _step1 suffix if present (same form, just first step)
  const base = formType.replace(/_step1$/, '');
  
  const formNameMap: Record<string, string> = {
    // Service page forms
    'service_transfer': 'Pension Transfer Enquiry',
    'service_directors': 'Directors Pension Enquiry',
    'service_reviews': 'Pension Review Enquiry',
    'service_ukTransfer': 'UK Pension Transfer Enquiry',
    'service_earlyRetirement': 'Early Retirement Enquiry',
    'service_redundancy': 'Redundancy Pension Enquiry',
    // Calculator forms
    'calculator_pensionTransfer': 'Pension Transfer Calculator',
    'calculator_directorsPension': 'Directors Pension Calculator',
    'calculator_pensionReview': 'Pension Review Calculator',
    'calculator_ukPensionTransfer': 'UK Pension Transfer Calculator',
    'calculator_earlyRetirement': 'Early Retirement Calculator',
    'calculator_redundancy': 'Redundancy Calculator',
    // Directors pension dedicated form
    'directors_pension': 'Directors Pension Quote Form',
    // Contact forms
    'contact_general': 'Contact Us Form',
    'contact_Pension Review': 'Contact Us - Pension Review',
    'contact_Pension Transfer': 'Contact Us - Pension Transfer',
    'contact_Directors Pension': 'Contact Us - Directors Pension',
    'contact_UK Pension Transfer': 'Contact Us - UK Pension Transfer',
    'contact_Redundancy': 'Contact Us - Redundancy',
    'contact_Early Retirement': 'Contact Us - Early Retirement',
    'contact_Other': 'Contact Us - Other',
  };

  return formNameMap[base] || base;
}

function buildColumnValues(lead: LeadPayload): Record<string, unknown> {
  const values: Record<string, unknown> = {};

  // Email (email type)
  values[COL.email] = { email: lead.email, text: lead.email };

  // Phone (phone type)
  if (lead.phone) {
    values[COL.phone] = { phone: lead.phone, countryShortName: "IE" };
  }

  // Lead Source (status type) - "Main PA lead"
  values[COL.leadSource] = { label: "Main PA Lead" };

  // Value
  if (lead.pensionValue) values[COL.value] = lead.pensionValue;

  // Age
  if (lead.age) values[COL.age] = lead.age;

  // Type of Lead - use readable form name
  values[COL.typeOfLead] = getReadableFormName(lead.formType);

  // Lead URL
  if (lead.pageSource) values[COL.leadUrl] = lead.pageSource;

  // GCLID
  if (lead.gclid) values[COL.gclid] = lead.gclid;

  // Best time to call
  if (lead.bestTimeToCall) values[COL.bestTimeToCall] = lead.bestTimeToCall;

  // Additional info
  if (lead.additionalInfo) values[COL.additionalInfo] = lead.additionalInfo;

  // Date received (today)
  const today = new Date().toISOString().split("T")[0];
  values[COL.dateReceived] = { date: today };

  // Notes (director pension form data dump)
  if (lead.directorNotes) values[COL.notes] = lead.directorNotes;

  // Lead Info 1-5: spread extra data
  const infoFields = [COL.leadInfo1, COL.leadInfo2, COL.leadInfo3, COL.leadInfo4, COL.leadInfo5];
  const extras: string[] = [];
  if (lead.resultSummary) extras.push(`Calculator: ${lead.resultSummary}`);
  if (lead.enquiryType) extras.push(`Enquiry: ${lead.enquiryType}`);

  for (let i = 0; i < infoFields.length && i < extras.length; i++) {
    values[infoFields[i]] = extras[i];
  }

  return values;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("MONDAY_API_KEY");
    if (!apiKey) {
      throw new Error("MONDAY_API_KEY is not configured");
    }

    const url = new URL(req.url);

    // Discovery endpoint
    if (req.method === "GET" && url.searchParams.get("action") === "columns") {
      const query = `query { boards(ids: [${BOARD_ID}]) { columns { id title type } groups { id title } } }`;
      const result = await mondayQuery(apiKey, query);
      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create lead
    if (req.method === "POST") {
      const lead: LeadPayload = await req.json();
      const columnValues = buildColumnValues(lead);

      console.log("Creating Monday.com lead:", lead.name, "columns:", JSON.stringify(columnValues));

      const mutation = `
        mutation ($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
          create_item(
            board_id: $boardId
            group_id: $groupId
            item_name: $itemName
            column_values: $columnValues
          ) {
            id
            name
          }
        }
      `;

      const result = await mondayQuery(apiKey, mutation, {
        boardId: BOARD_ID,
        groupId: GROUP_ID,
        itemName: lead.name,
        columnValues: JSON.stringify(columnValues),
      });

      if (result.errors) {
        throw new Error(`Monday.com errors: ${JSON.stringify(result.errors)}`);
      }

      console.log("Lead created:", JSON.stringify(result?.data?.create_item));

      return new Response(
        JSON.stringify({ success: true, item: result?.data?.create_item }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Monday.com error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
