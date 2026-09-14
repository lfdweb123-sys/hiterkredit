const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

const SENDER_EMAIL = process.env.MAIL_SENDER || 'gerardfreelancer123@gmail.com';
// MAIL_ADMIN can hold one or several addresses separated by commas
// (e.g. "a@fondslink.com,b@fondslink.com,c@fondslink.com") so every
// admin notification (contact form + loan applications) reaches all of them.
const ADMIN_EMAILS = (process.env.MAIL_ADMIN || 'gerardfreelancer123@gmail.com')
  .split(',')
  .map((e) => e.trim())
  .filter(Boolean);
const SENDER_NAME = 'FondsLink';

type Recipient = { email: string; name?: string };

type Attachment = {
  name: string;
  content: string; // base64-encoded
};

type SendEmailParams = {
  to: Recipient[];
  subject: string;
  htmlContent: string;
  replyTo?: Recipient;
  attachments?: Attachment[];
};

async function sendEmail({ to, subject, htmlContent, replyTo, attachments }: SendEmailParams) {
  const apiKey = process.env.BREVO_API_KEY;

  console.log('[brevo] sendEmail called', {
    hasApiKey: Boolean(apiKey),
    apiKeyPrefix: apiKey ? apiKey.slice(0, 6) + '...' : 'MISSING',
    sender: SENDER_EMAIL,
    to: to.map((r) => r.email),
    subject,
    attachmentCount: attachments?.length ?? 0,
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
        to,
        replyTo,
        subject,
        htmlContent,
        attachment: attachments?.map((a) => ({ name: a.name, content: a.content })),
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

export async function sendAdminNotification({
  subject,
  htmlContent,
  replyTo,
}: {
  subject: string;
  htmlContent: string;
  replyTo?: Recipient;
}) {
  return sendEmail({
    to: ADMIN_EMAILS.map((email) => ({ email, name: 'FondsLink Admin' })),
    subject,
    htmlContent,
    replyTo,
  });
}

export async function sendToRecipient({
  to,
  subject,
  htmlContent,
  attachments,
}: {
  to: Recipient;
  subject: string;
  htmlContent: string;
  attachments?: Attachment[];
}) {
  return sendEmail({
    to: [to],
    subject,
    htmlContent,
    attachments,
  });
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
