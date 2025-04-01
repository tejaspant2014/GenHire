import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';
const { Pool } = pg;
import * as schema from "@shared/schema";

// Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create Drizzle instance
export const db = drizzle(pool, { schema });