const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

const SENDER_EMAIL = process.env.MAIL_SENDER || 'gerardfreelancer123@gmail.com';
const ADMIN_EMAIL = process.env.MAIL_ADMIN || 'gerardfreelancer123@gmail.com';
const SENDER_NAME = 'Posojilnica';

type BrevoEmailParams = {
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
};

export async function sendAdminNotification({ subject, htmlContent, replyTo }: BrevoEmailParams) {
  const apiKey = process.env.BREVO_API_KEY;

  console.log('[brevo] sendAdminNotification called', {
    hasApiKey: Boolean(apiKey),
    apiKeyPrefix: apiKey ? apiKey.slice(0, 6) + '...' : 'MISSING',
    sender: SENDER_EMAIL,
    admin: ADMIN_EMAIL,
    subject,
  });

  if (!apiKey) {
    console.error('[brevo] BREVO_API_KEY is not configured in environment variables');
    throw new Error('BREVO_API_KEY is not configured');
  }

  let res: Response;
  try {
    res = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [{ email: ADMIN_EMAIL, name: 'Posojilnica Admin' }],
        replyTo: replyTo,
        subject,
        htmlContent,
      }),
    });
  } catch (networkErr) {
    console.error('[brevo] network error while calling Brevo API', networkErr);
    throw new Error(`Brevo network error: ${(networkErr as Error).message}`);
  }

  const rawBody = await res.text();
  console.log('[brevo] Brevo API response', { status: res.status, ok: res.ok, body: rawBody });

  if (!res.ok) {
    console.error('[brevo] Brevo API returned an error', { status: res.status, body: rawBody });
    throw new Error(`Brevo API error (${res.status}): ${rawBody}`);
  }

  try {
    return JSON.parse(rawBody);
  } catch {
    return { raw: rawBody };
  }
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
