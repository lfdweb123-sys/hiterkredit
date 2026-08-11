import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotification, escapeHtml } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  console.log('[api/apply] incoming request');
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, amount, duration, message, locale } = body;
    console.log('[api/apply] payload received', {
      firstName,
      lastName,
      email,
      phone,
      amount,
      duration,
      locale,
    });

    if (!firstName || !lastName || !email || !phone || !amount || !duration) {
      console.warn('[api/apply] missing required fields', {
        firstName: !!firstName,
        lastName: !!lastName,
        email: !!email,
        phone: !!phone,
        amount: !!amount,
        duration: !!duration,
      });
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn('[api/apply] invalid email format', { email });
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    const html = `
      <h2>Nová žiadosť o pôžičku — Posojilnica</h2>
      <p><strong>Meno a priezvisko:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefón:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Suma pôžičky:</strong> ${escapeHtml(String(amount))} €</p>
      <p><strong>Doba splácania:</strong> ${escapeHtml(String(duration))} mesiacov</p>
      <p><strong>Jazyk / krajina:</strong> ${escapeHtml(locale || '—')}</p>
      ${message ? `<p><strong>Správa:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>` : ''}
    `;

    await sendAdminNotification({
      subject: `[Žiadosť] ${firstName} ${lastName} — ${amount} € / ${duration} mes.`,
      htmlContent: html,
      replyTo: { email, name: `${firstName} ${lastName}` },
    });

    console.log('[api/apply] email sent successfully');
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/apply] ERROR', {
      message: (err as Error)?.message,
      stack: (err as Error)?.stack,
    });
    return NextResponse.json(
      { ok: false, error: 'server_error', detail: (err as Error)?.message },
      { status: 500 }
    );
  }
}
