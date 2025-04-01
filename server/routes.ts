import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { waitlistValidationSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // API route to handle waitlist registrations
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate request body
      const validationResult = waitlistValidationSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const errorMessage = fromZodError(validationResult.error).message;
        return res.status(400).json({ success: false, message: errorMessage });
      }

      const { fullName, email } = validationResult.data;

      // Check if email already exists
      const existingRegistration = await storage.getWaitlistRegistrationByEmail(email);
      if (existingRegistration) {
        return res.status(409).json({ 
          success: false, 
          message: "This email is already registered on our waitlist." 
        });
      }

      // Save registration to storage
      await storage.createWaitlistRegistration({ fullName, email });

      // Get updated count after registration
      const count = await storage.getWaitlistCount();

      res.status(201).json({ 
        success: true, 
        message: "Successfully added to the waitlist!",
        count
      });
    } catch (error) {
      console.error("Error registering for waitlist:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your registration." 
      });
    }
  });

  // API route to get waitlist count
  app.get("/api/waitlist/count", async (req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      res.json({ count });
    } catch (error) {
      console.error("Error fetching waitlist count:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch waitlist count" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
