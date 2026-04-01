import { supabase } from '@/integrations/supabase/client';

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  formType: string;
  pageSource?: string;
  formData?: Record<string, unknown>;
  skipEmail?: boolean;
}

// Capture GCLID from URL on page load
function getGclid(): string | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    if (gclid) {
      // Store in sessionStorage so it persists across page navigations
      sessionStorage.setItem('gclid', gclid);
      return gclid;
    }
    return sessionStorage.getItem('gclid');
  } catch {
    return null;
  }
}

async function forwardToMonday(data: LeadData): Promise<void> {
  try {
    const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
    if (!projectId) return;

    const formData = (data.formData || {}) as Record<string, string>;
    const gclid = getGclid();

    const payload: Record<string, unknown> = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      formType: data.formType,
      pageSource: data.pageSource || window.location.pathname,
      gclid: gclid || '',
      // Flatten common form_data fields
      age: formData.age || '',
      pensionValue: formData.pensionValue || '',
      enquiryType: formData.enquiryType || '',
      additionalInfo: formData.additionalInfo || '',
      bestTimeToCall: formData.bestTimeToCall || '',
      resultSummary: formData.resultSummary || '',
      directorNotes: formData.directorNotes || '',
    };

    const url = `https://${projectId}.supabase.co/functions/v1/monday-lead`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Monday.com forward error:', text);
    } else {
      console.log('Lead forwarded to Monday.com');
    }
  } catch (err) {
    console.error('Monday.com forward failed:', err);
  }
}

async function sendConfirmationEmail(data: LeadData): Promise<void> {
  try {
    const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
    if (!projectId) return;

    const url = `https://${projectId}.supabase.co/functions/v1/send-lead-email`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        formType: data.formType,
        pageSource: data.pageSource || window.location.pathname,
        formData: data.formData || {},
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Confirmation email error:', text);
    } else {
      console.log('Confirmation email sent');
    }
  } catch (err) {
    console.error('Confirmation email failed:', err);
  }
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase not configured - lead submission skipped');
    return { success: true };
  }

  try {
    const { error } = await supabase
      .from('leads')
      .insert([{
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        form_type: data.formType,
        page_source: data.pageSource || window.location.pathname,
        form_data: (data.formData || {}) as any,
      }]);

    if (error) {
      console.error('Error submitting lead:', error);
    }

    // Forward to Monday.com and send confirmation email (fire-and-forget)
    forwardToMonday(data);
    if (!data.skipEmail) {
      sendConfirmationEmail(data);
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected error submitting lead:', err);
    // Still forward to Monday.com and send email even if DB fails
    forwardToMonday(data);
    if (!data.skipEmail) {
      sendConfirmationEmail(data);
    }
    return { success: true };
  }
}
