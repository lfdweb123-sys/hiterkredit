const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

const SENDER_EMAIL = process.env.MAIL_SENDER || 'gerardfreelancer123@gmail.com';
const ADMIN_EMAIL = process.env.MAIL_ADMIN || 'gerardfreelancer123@gmail.com';
const SENDER_NAME = 'HiterKredit';

type BrevoEmailParams = {
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
};

export async function sendAdminNotification({ subject, htmlContent, replyTo }: BrevoEmailParams) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error('BREVO_API_KEY is not configured');
  }

  const res = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email: ADMIN_EMAIL, name: 'HiterKredit Admin' }],
      replyTo: replyTo,
      subject,
      htmlContent,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Brevo API error (${res.status}): ${errText}`);
  }

  return res.json();
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
