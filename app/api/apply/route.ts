import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotification, sendToRecipient, escapeHtml } from '@/lib/brevo';
import { buildContractData, formatMoney, formatDate } from '@/lib/contract';
import { generateContractPdf } from '@/lib/generateContractPdf';
import { getContractEmailText } from '@/lib/emailTranslations';
import { AMOUNT_MIN, AMOUNT_MAX, DURATION_MIN, DURATION_MAX } from '@/lib/loan';

function bufferToBase64(buf: Uint8Array): string {
  return Buffer.from(buf).toString('base64');
}

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

    const numAmount = Number(amount);
    const numDuration = Number(duration);
    if (
      !Number.isFinite(numAmount) ||
      !Number.isFinite(numDuration) ||
      numAmount < AMOUNT_MIN ||
      numAmount > AMOUNT_MAX ||
      numDuration < DURATION_MIN ||
      numDuration > DURATION_MAX
    ) {
      console.warn('[api/apply] amount or duration out of range', { numAmount, numDuration });
      return NextResponse.json({ ok: false, error: 'out_of_range' }, { status: 400 });
    }

    const safeLocale = ['sl', 'sk', 'lt', 'es', 'nl', 'en'].includes(locale) ? locale : 'sl';

    // --- Compute the contract deterministically from the applicant's data ---
    const contractData = buildContractData({
      firstName,
      lastName,
      email,
      phone,
      amount: numAmount,
      duration: numDuration,
      locale: safeLocale,
    });
    console.log('[api/apply] contract data computed', {
      reference: contractData.reference,
      monthlyPayment: contractData.monthlyPayment,
      totalRepay: contractData.totalRepay,
      effectiveApr: contractData.effectiveApr,
    });

    // --- Generate the PDF contract ---
    let pdfBytes: Uint8Array;
    try {
      pdfBytes = await generateContractPdf(contractData);
      console.log('[api/apply] PDF generated', { sizeBytes: pdfBytes.length });
    } catch (pdfErr) {
      console.error('[api/apply] PDF generation failed', {
        message: (pdfErr as Error)?.message,
        stack: (pdfErr as Error)?.stack,
      });
      throw new Error(`PDF generation failed: ${(pdfErr as Error)?.message}`);
    }
    const pdfBase64 = bufferToBase64(pdfBytes);
    const attachmentName = `Posojilnica-${contractData.reference}.pdf`;

    const emailText = getContractEmailText(safeLocale);

    const applicantHtml = `
      <p>${escapeHtml(emailText.greeting.replace('{name}', firstName))}</p>
      <p>${escapeHtml(emailText.intro)}</p>
      <h3>${escapeHtml(emailText.summaryTitle)}</h3>
      <p>
        <strong>${escapeHtml(emailText.amountLabel)}:</strong> ${escapeHtml(formatMoney(contractData.amount, safeLocale))}<br/>
        <strong>${escapeHtml(emailText.durationLabel)}:</strong> ${contractData.duration}<br/>
        <strong>${escapeHtml(emailText.monthlyLabel)}:</strong> ${escapeHtml(formatMoney(contractData.monthlyPayment, safeLocale))}
      </p>
      <p>${escapeHtml(emailText.instructions)}</p>
      <p style="white-space: pre-line">${escapeHtml(emailText.closing)}</p>
    `;

    // --- Send the contract to the applicant ---
    try {
      await sendToRecipient({
        to: { email, name: `${firstName} ${lastName}` },
        subject: emailText.subject.replace('{ref}', contractData.reference),
        htmlContent: applicantHtml,
        attachments: [{ name: attachmentName, content: pdfBase64 }],
      });
      console.log('[api/apply] contract email sent to applicant', { email });
    } catch (applicantMailErr) {
      console.error('[api/apply] FAILED to send contract email to applicant', {
        message: (applicantMailErr as Error)?.message,
      });
      throw applicantMailErr;
    }

    // --- Notify the admin, with the same contract attached for records ---
    const adminHtml = `
      <h2>Nová žiadosť o pôžičku — Posojilnica</h2>
      <p><strong>Referencia:</strong> ${escapeHtml(contractData.reference)}</p>
      <p><strong>Meno a priezvisko:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefón:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Suma pôžičky:</strong> ${escapeHtml(formatMoney(contractData.amount, safeLocale))}</p>
      <p><strong>Doba splácania:</strong> ${contractData.duration} mesiacov</p>
      <p><strong>Mesačná splátka:</strong> ${escapeHtml(formatMoney(contractData.monthlyPayment, safeLocale))}</p>
      <p><strong>Jazyk / krajina:</strong> ${escapeHtml(safeLocale)}</p>
      ${message ? `<p><strong>Správa:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>` : ''}
      <p>Zmluva bola automaticky vygenerovaná a odoslaná žiadateľovi (v prílohe tejto správy nájdete rovnaký dokument).</p>
    `;

    try {
      await sendAdminNotification({
        subject: `[Žiadosť] ${firstName} ${lastName} — ${formatMoney(contractData.amount, safeLocale)} / ${contractData.duration} mes. (${contractData.reference})`,
        htmlContent: adminHtml,
        replyTo: { email, name: `${firstName} ${lastName}` },
      });
      console.log('[api/apply] admin notification sent');
    } catch (adminMailErr) {
      // The applicant already received their contract successfully; log but
      // don't fail the whole request just because the internal copy failed.
      console.error('[api/apply] admin notification failed (applicant email already sent)', {
        message: (adminMailErr as Error)?.message,
      });
    }

    return NextResponse.json({ ok: true, reference: contractData.reference });
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
