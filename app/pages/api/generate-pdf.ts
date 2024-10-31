// pages/api/generate-pdf.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { generatePdf } from '../../../utils/generatePdf';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.query;
  alert(title)
  console.log(title, content);
  // Validate input
  if (typeof title !== 'string' || typeof content !== 'string') {
    res.status(400).json({ error: 'Invalid input' });
    return;
  }

  // Generate the PDF
  const pdfBytes = await generatePdf(title, content);

  // Set response headers to allow PDF download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="document.pdf"');
  res.send(pdfBytes);
}



