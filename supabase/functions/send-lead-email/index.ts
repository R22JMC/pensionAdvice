import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface EmailPayload {
  name: string;
  email: string;
  phone?: string;
  formType?: string;
  pageSource?: string;
  formData?: Record<string, unknown>;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const SENDER_EMAIL = Deno.env.get("SENDER_EMAIL") || "hello@pensionadvice.ie";

    const { name, email, phone, formType, pageSource, formData }: EmailPayload = await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const phoneLine = phone
      ? `<p style="margin:0 0 16px;">The contact number we have for you is <strong>${phone}</strong></p>
<p style="margin:0 0 16px;">To ensure we answer your enquiry promptly, please let us know if there is a more suitable contact number for you.</p>`
      : `<p style="margin:0 0 16px;">To ensure we answer your enquiry promptly, please provide us with the best contact number to reach you.</p>`;

    const logoUrl = "https://eozmvfmexmdvsbbxmgkj.supabase.co/storage/v1/object/public/email-assets/logo-white.png";

    const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f5f7fa;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fa;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background-color:#1a3a5c;padding:24px 32px;text-align:center;">
            <img src="${logoUrl}" alt="Pension Advice" width="180" style="display:block;margin:0 auto;" />
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;color:#333;font-size:15px;line-height:1.7;">
            <p style="margin:0 0 16px;">Dear ${name},</p>
            <p style="margin:0 0 16px;">Many thanks for your Pension enquiry. One of our Qualified Pension Experts will be in touch shortly to discuss how we might be able to assist you.</p>
            <p style="margin:0 0 16px;">This will be a great opportunity to answer any questions you may have and for us to better understand how we can help.</p>
            ${phoneLine}
            <p style="margin:0 0 16px;">Also please let us know if there is an ideal time to call you and we will make sure to do so.</p>
            <p style="margin:0 0 16px;">You can reply to this email with any information that might be helpful for us in preparing for our call.</p>
            <p style="margin:0 0 24px;">We look forward to speaking with you soon.</p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background-color:#1a3a5c;padding:24px 32px;text-align:center;color:#ffffff;font-size:13px;line-height:1.6;">
            <p style="margin:0 0 8px;font-weight:bold;font-size:15px;">Pension Advice Team</p>
            <p style="margin:0;color:#c0d0e0;">If your call is urgent please do not hesitate to call us on<br/>
            <a href="tel:019125030" style="color:#ffffff;font-weight:bold;text-decoration:none;">01 912 5030</a> or email
            <a href="mailto:hello@pension-advice.ie" style="color:#ffffff;text-decoration:underline;">hello@pension-advice.ie</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Pension Advice <${SENDER_EMAIL}>`,
        to: [email],
        reply_to: "hello@pension-advice.ie",
        subject: "Thanks for Your Pension Enquiry – We'll Be in Touch Shortly",
        html: htmlBody,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Confirmation email sent to:", email);

    // --- Internal team notification ---
    const formDataRows = formData && Object.keys(formData).length > 0
      ? Object.entries(formData)
          .filter(([, v]) => v !== '' && v !== null && v !== undefined)
          .map(([k, v]) => `<tr><td style="padding:6px 12px;border:1px solid #e2e8f0;color:#666;font-size:13px;text-transform:capitalize;">${k.replace(/([A-Z])/g, ' $1').trim()}</td><td style="padding:6px 12px;border:1px solid #e2e8f0;font-size:13px;">${v}</td></tr>`)
          .join('')
      : '';

    const teamHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f5f7fa;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fa;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <tr>
          <td style="background-color:#1a3a5c;padding:20px 32px;text-align:center;">
            <img src="${logoUrl}" alt="Pension Advice" width="140" style="display:block;margin:0 auto;" />
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;color:#333;font-size:14px;line-height:1.6;">
            <h2 style="margin:0 0 20px;color:#1a3a5c;font-size:18px;">🔔 New Lead Received</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px;">
              <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:bold;width:140px;font-size:13px;">Name</td><td style="padding:8px 12px;border:1px solid #e2e8f0;font-size:13px;">${name}</td></tr>
              <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:bold;font-size:13px;">Email</td><td style="padding:8px 12px;border:1px solid #e2e8f0;font-size:13px;"><a href="mailto:${email}" style="color:#1a3a5c;">${email}</a></td></tr>
              <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:bold;font-size:13px;">Phone</td><td style="padding:8px 12px;border:1px solid #e2e8f0;font-size:13px;">${phone || 'Not provided'}</td></tr>
              <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:bold;font-size:13px;">Form Type</td><td style="padding:8px 12px;border:1px solid #e2e8f0;font-size:13px;">${formType || 'Unknown'}</td></tr>
              <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:bold;font-size:13px;">Page Source</td><td style="padding:8px 12px;border:1px solid #e2e8f0;font-size:13px;">${pageSource || 'Unknown'}</td></tr>
            </table>
            ${formDataRows ? `<h3 style="margin:0 0 12px;color:#1a3a5c;font-size:15px;">Additional Details</h3><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${formDataRows}</table>` : ''}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

    const teamRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Pension Advice Leads <${SENDER_EMAIL}>`,
        to: ["leads@pension-advice.ie"],
        subject: `New Lead: ${name} – ${formType || 'Enquiry'}`,
        html: teamHtml,
      }),
    });

    if (!teamRes.ok) {
      const teamErr = await teamRes.json();
      console.error("Team notification error:", JSON.stringify(teamErr));
    } else {
      console.log("Team notification sent for lead:", name);
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
