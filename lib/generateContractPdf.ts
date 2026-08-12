import { PDFDocument, rgb, PDFFont, PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs';
import path from 'path';
import { ContractData, formatMoney, formatDate, formatPercent } from './contract';
import { CONTRACT_TEXT } from './contractText';

const SKY = rgb(0.18, 0.61, 0.94);
const SKY_DEEP = rgb(0.106, 0.435, 0.761);
const INK = rgb(0.059, 0.106, 0.176);
const INK_SOFT = rgb(0.29, 0.35, 0.44);
const LINE = rgb(0.86, 0.92, 0.98);

const PAGE_WIDTH = 595.28; // A4
const PAGE_HEIGHT = 841.89;
const MARGIN = 56;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

type Cursor = { page: PDFPage; y: number };

export async function generateContractPdf(data: ContractData): Promise<Uint8Array> {
  const t = CONTRACT_TEXT[data.locale] ?? CONTRACT_TEXT.en;
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const regularBytes = fs.readFileSync(path.join(process.cwd(), 'assets/fonts/DejaVuSans.ttf'));
  const boldBytes = fs.readFileSync(path.join(process.cwd(), 'assets/fonts/DejaVuSans-Bold.ttf'));
  const fontRegular = await doc.embedFont(regularBytes, { subset: true });
  const fontBold = await doc.embedFont(boldBytes, { subset: true });

  doc.setTitle(`${t.title} — ${data.reference}`);
  doc.setAuthor('Posojilnica');
  doc.setSubject(t.title);

  let cursor: Cursor = { page: doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]), y: PAGE_HEIGHT - MARGIN };

  const newPageIfNeeded = (neededHeight: number) => {
    if (cursor.y - neededHeight < MARGIN + 40) {
      cursor = { page: doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]), y: PAGE_HEIGHT - MARGIN };
    }
  };

  const wrapText = (text: string, font: PDFFont, size: number, maxWidth: number): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let current = '';
    for (const word of words) {
      const trial = current ? `${current} ${word}` : word;
      if (font.widthOfTextAtSize(trial, size) > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = trial;
      }
    }
    if (current) lines.push(current);
    return lines;
  };

  const drawParagraph = (text: string, opts?: { size?: number; color?: ReturnType<typeof rgb>; bold?: boolean; gap?: number }) => {
    const size = opts?.size ?? 10;
    const font = opts?.bold ? fontBold : fontRegular;
    const color = opts?.color ?? INK_SOFT;
    const lines = wrapText(text, font, size, CONTENT_WIDTH);
    const lineHeight = size * 1.45;
    newPageIfNeeded(lines.length * lineHeight);
    for (const line of lines) {
      cursor.page.drawText(line, { x: MARGIN, y: cursor.y, size, font, color });
      cursor.y -= lineHeight;
    }
    cursor.y -= opts?.gap ?? 6;
  };

  const drawSectionTitle = (text: string) => {
    newPageIfNeeded(30);
    cursor.y -= 6;
    cursor.page.drawText(text, { x: MARGIN, y: cursor.y, size: 12.5, font: fontBold, color: SKY_DEEP });
    cursor.y -= 8;
    cursor.page.drawLine({
      start: { x: MARGIN, y: cursor.y },
      end: { x: PAGE_WIDTH - MARGIN, y: cursor.y },
      thickness: 1,
      color: LINE,
    });
    cursor.y -= 16;
  };

  const drawKeyValueRow = (label: string, value: string) => {
    newPageIfNeeded(18);
    const size = 10;
    cursor.page.drawText(label, { x: MARGIN, y: cursor.y, size, font: fontRegular, color: INK_SOFT });
    const valueX = MARGIN + 240;
    const maxValueWidth = PAGE_WIDTH - MARGIN - valueX;
    const lines = wrapText(value, fontBold, size, maxValueWidth);
    cursor.page.drawText(lines[0] ?? '', { x: valueX, y: cursor.y, size, font: fontBold, color: INK });
    cursor.y -= size * 1.5;
    for (let i = 1; i < lines.length; i++) {
      newPageIfNeeded(size * 1.5);
      cursor.page.drawText(lines[i], { x: valueX, y: cursor.y, size, font: fontBold, color: INK });
      cursor.y -= size * 1.5;
    }
    cursor.y += 0;
  };

  // ---- Header ----
  cursor.page.drawRectangle({ x: 0, y: PAGE_HEIGHT - 70, width: PAGE_WIDTH, height: 70, color: SKY });
  cursor.page.drawText('Posojilnica', { x: MARGIN, y: PAGE_HEIGHT - 44, size: 20, font: fontBold, color: rgb(1, 1, 1) });
  cursor.page.drawText('posojilnica.com', { x: MARGIN, y: PAGE_HEIGHT - 60, size: 9, font: fontRegular, color: rgb(1, 1, 1) });
  cursor.y = PAGE_HEIGHT - 100;

  cursor.page.drawText(t.title, { x: MARGIN, y: cursor.y, size: 17, font: fontBold, color: INK });
  cursor.y -= 18;
  cursor.page.drawText(t.modelNote, { x: MARGIN, y: cursor.y, size: 9, font: fontRegular, color: INK_SOFT });
  cursor.y -= 22;

  drawKeyValueRow(t.refLabel, data.reference);
  drawKeyValueRow(t.dateLabel, formatDate(data.issueDate, data.locale));
  cursor.y -= 10;

  // ---- Section 1: Borrower ----
  drawSectionTitle(t.sec1Title);
  drawKeyValueRow(t.nameLabel, data.borrower.firstName);
  drawKeyValueRow(t.surnameLabel, data.borrower.lastName);
  drawKeyValueRow(t.emailLabel, data.borrower.email);
  drawKeyValueRow(t.phoneLabel, data.borrower.phone);
  cursor.y -= 10;

  // ---- Section 2: Loan characteristics ----
  drawSectionTitle(t.sec2Title);
  drawKeyValueRow(t.amountLabel, formatMoney(data.amount, data.locale));
  drawKeyValueRow(t.durationLabel, `${data.duration} ${t.monthsUnit}`);
  drawKeyValueRow(t.purposeLabel, t.purposeValue);
  cursor.y -= 4;
  drawParagraph(t.sec2Note, { size: 9 });
  cursor.y -= 6;

  // ---- Section 3: Financial conditions ----
  drawSectionTitle(t.sec3Title);
  drawKeyValueRow(t.amountLabel, formatMoney(data.amount, data.locale));
  drawKeyValueRow(t.nominalRateLabel, formatPercent(data.nominalRatePct));
  drawKeyValueRow(t.aprLabel, formatPercent(data.effectiveApr));
  drawKeyValueRow(t.feesLabel, t.feesValue);
  drawKeyValueRow(t.totalCostLabel, formatMoney(data.totalCost, data.locale));
  drawKeyValueRow(t.totalDueLabel, formatMoney(data.totalRepay, data.locale));
  drawKeyValueRow(t.installmentsCountLabel, String(data.duration));
  drawKeyValueRow(t.installmentAmountLabel, formatMoney(data.monthlyPayment, data.locale));
  drawKeyValueRow(t.frequencyLabel, t.frequencyValue);
  cursor.y -= 4;
  drawParagraph(t.sec3Note, { size: 9 });
  cursor.y -= 6;

  // ---- Section 4: Fees ----
  drawSectionTitle(t.sec4Title);
  drawParagraph(t.sec4Text);

  // ---- Section 5: Disbursement ----
  drawSectionTitle(t.sec5Title);
  drawParagraph(t.sec5Text);
  drawKeyValueRow(t.plannedAmountLabel, formatMoney(data.amount, data.locale));
  drawKeyValueRow(t.accountLabel, t.accountValue);
  cursor.y -= 6;

  // ---- Section 6: Repayment ----
  drawSectionTitle(t.sec6Title);
  drawParagraph(t.sec6Text);
  drawKeyValueRow(t.firstInstallmentLabel, formatDate(data.firstInstallmentDate, data.locale));
  drawKeyValueRow(t.lastInstallmentLabel, formatDate(data.lastInstallmentDate, data.locale));
  cursor.y -= 6;

  // ---- Section 7-10 ----
  drawSectionTitle(t.sec7Title);
  drawParagraph(t.sec7Text);
  drawSectionTitle(t.sec8Title);
  drawParagraph(t.sec8Text);
  drawSectionTitle(t.sec9Title);
  drawParagraph(t.sec9Text);
  drawSectionTitle(t.sec10Title);
  drawParagraph(t.sec10Text);

  // ---- Section 11: Acceptance ----
  drawSectionTitle(t.sec11Title);
  drawParagraph(t.sec11Text);
  cursor.y -= 8;
  drawKeyValueRow(t.borrowerNameLabel, data.borrower.fullName);
  drawKeyValueRow(t.dateLabel, formatDate(data.issueDate, data.locale));
  newPageIfNeeded(40);
  cursor.page.drawText(`${t.signatureLabel}: ______________________________`, {
    x: MARGIN,
    y: cursor.y,
    size: 10,
    font: fontRegular,
    color: INK_SOFT,
  });
  cursor.y -= 34;

  // ---- Lender block ----
  newPageIfNeeded(160);
  cursor.page.drawLine({
    start: { x: MARGIN, y: cursor.y },
    end: { x: PAGE_WIDTH - MARGIN, y: cursor.y },
    thickness: 1.4,
    color: SKY_DEEP,
  });
  cursor.y -= 20;
  cursor.page.drawText(t.lenderTitle, { x: MARGIN, y: cursor.y, size: 12.5, font: fontBold, color: SKY_DEEP });
  cursor.y -= 20;
  drawKeyValueRow(t.companyLabel, 'Posojilnica');
  drawKeyValueRow(t.websiteLabel, 'posojilnica.com');
  drawKeyValueRow(t.addressLabel, t.addressValue);
  drawKeyValueRow(t.regNumberLabel, t.regNumberValue);
  drawKeyValueRow(t.lenderEmailLabel, 'podpora@posojilnica.com');
  drawKeyValueRow(t.repLabel, t.repValue);
  cursor.y -= 14;
  cursor.page.drawText(`${t.signatureLabel}: ______________________________`, {
    x: MARGIN,
    y: cursor.y,
    size: 10,
    font: fontRegular,
    color: INK_SOFT,
  });

  return doc.save();
}
