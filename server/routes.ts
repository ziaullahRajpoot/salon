import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

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
      console.log("Contact form submission:", data);
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
