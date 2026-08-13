import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotification, escapeHtml } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  console.log('[api/contact] incoming request');
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;
    console.log('[api/contact] payload received', { name, email, subject, hasMessage: Boolean(message) });

    if (!name || !email || !message) {
      console.warn('[api/contact] missing required fields', { name: !!name, email: !!email, message: !!message });
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn('[api/contact] invalid email format', { email });
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    const html = `
      <h2>Nová kontaktná správa — FondsLink</h2>
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

    console.log('[api/contact] email sent successfully');
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/contact] ERROR', {
      message: (err as Error)?.message,
      stack: (err as Error)?.stack,
    });
    return NextResponse.json(
      { ok: false, error: 'server_error', detail: (err as Error)?.message },
      { status: 500 }
    );
  }
}
