import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotification, escapeHtml } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    const html = `
      <h2>Nová kontaktná správa — HiterKredit</h2>
      <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Predmet:</strong> ${escapeHtml(subject || '—')}</p>
      <p><strong>Správa:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    await sendAdminNotification({
      subject: `[Kontakt] ${subject || 'Nová správa'} — ${name}`,
      htmlContent: html,
      replyTo: { email, name },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact route error', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
