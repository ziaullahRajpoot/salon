import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Well Done Beauty Salon" <${process.env.EMAIL_USER}>`,
        to: "Wellbeautehomeservice@gmail.com",
        replyTo: data.email,
        subject: `New Booking Request – ${data.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h1 style="color: #c0a080; font-size: 24px; margin: 0;">Well Done Beauty Salon</h1>
              <p style="color: #888; font-size: 14px; margin: 4px 0 0;">New Booking Request</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; background: #f9f9f9; border-radius: 6px; font-weight: bold; width: 30%;">Name</td>
                <td style="padding: 10px;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Email</td>
                <td style="padding: 10px;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Phone</td>
                <td style="padding: 10px; background: #f9f9f9;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Service</td>
                <td style="padding: 10px;">${data.service}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Message</td>
                <td style="padding: 10px; background: #f9f9f9;">${data.message}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #fff8f0; border-radius: 8px; border-left: 4px solid #c0a080;">
              <p style="margin: 0; color: #888; font-size: 13px;">Reply directly to this email to respond to the customer.</p>
            </div>
          </div>
        `,
      });

      res.json({
        success: true,
        message: "Message received. We will contact you soon.",
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Please fill in all required fields correctly.",
        });
      }
      console.error("Contact route error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}