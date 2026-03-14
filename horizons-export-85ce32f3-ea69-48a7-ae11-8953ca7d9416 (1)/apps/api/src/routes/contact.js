import express from 'express';
import nodemailer from 'nodemailer';
import logger from '../utils/logger.js';

const router = express.Router();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Validate all required fields are present and non-empty
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({
      error: 'All fields (name, email, phone, service, message) are required',
    });
  }

  // Validate email format
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email format',
    });
  }

  // Create transporter with correct Gmail STARTTLS settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: false, // false for STARTTLS on port 587
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Create HTML email body
  const htmlBody = `
    <h2>New Inquiry from ${name}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  // Send email - throw error if it fails, don't catch
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: 'Wellbeautehomeservice@gmail.com',
    subject: `New Inquiry: ${service} from ${name}`,
    html: htmlBody,
  });

  logger.info(`Contact form email sent from ${email} for service: ${service}`);

  res.json({
    success: true,
    message: 'Email sent successfully',
  });
});

export default router;
