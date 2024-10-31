// utils/generatePdf.ts
import { PDFDocument, rgb } from 'pdf-lib';

export async function generatePdf(title: string, content: string) {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  console.log('pdf')
  // Add a page to the PDF
  const page = pdfDoc.addPage([600, 400]);

  // Set up fonts and text
  const { width, height } = page.getSize();
  page.drawText(title, {
    x: 50,
    y: height - 80,
    size: 24,
    color: rgb(0, 0, 0.8),
  });
  page.drawText(content, {
    x: 50,
    y: height - 120,
    size: 18,
    color: rgb(0.2, 0.2, 0.2),
  });

  // Serialize the PDF to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log(pdfBytes)
  console.log('utils generator')
  return pdfBytes;
}
