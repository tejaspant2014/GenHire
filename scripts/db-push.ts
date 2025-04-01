import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';
const { Pool } = pg;
import * as schema from "../shared/schema";

async function main() {
  console.log("Pushing schema to database...");
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  
  const db = drizzle(pool, { schema });
  
  try {
    // Push the schema to the database
    console.log("Creating tables if they don't exist...");
    
    // We're creating tables directly using SQL
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS waitlist_registrations (
        id SERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
      );
    `);
    
    console.log("Schema push completed successfully!");
  } catch (error) {
    console.error("Error pushing schema:", error);
    process.exit(1);
  }
  
  await pool.end();
}

main();