import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotification, escapeHtml } from '@/lib/brevo';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, amount, duration, message, locale } = body;

    if (!firstName || !lastName || !email || !phone || !amount || !duration) {
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    const html = `
      <h2>Nová žiadosť o pôžičku — HiterKredit</h2>
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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('apply route error', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
