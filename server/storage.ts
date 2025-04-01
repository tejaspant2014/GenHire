import { users, type User, type InsertUser, waitlistRegistrations, type WaitlistRegistration, type InsertWaitlistRegistration } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist methods
  createWaitlistRegistration(registration: InsertWaitlistRegistration): Promise<WaitlistRegistration>;
  getWaitlistRegistrations(): Promise<WaitlistRegistration[]>;
  getWaitlistRegistrationByEmail(email: string): Promise<WaitlistRegistration | undefined>;
  getWaitlistCount(): Promise<number>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Waitlist methods
  async createWaitlistRegistration(insertRegistration: InsertWaitlistRegistration): Promise<WaitlistRegistration> {
    const [registration] = await db
      .insert(waitlistRegistrations)
      .values(insertRegistration)
      .returning();
    return registration;
  }

  async getWaitlistRegistrations(): Promise<WaitlistRegistration[]> {
    return await db.select().from(waitlistRegistrations);
  }

  async getWaitlistRegistrationByEmail(email: string): Promise<WaitlistRegistration | undefined> {
    const [registration] = await db
      .select()
      .from(waitlistRegistrations)
      .where(eq(waitlistRegistrations.email, email));
    return registration || undefined;
  }

  async getWaitlistCount(): Promise<number> {
    const result = await db.select().from(waitlistRegistrations);
    return result.length;
  }
}

export const storage = new DatabaseStorage();
