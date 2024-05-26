import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(
  "postgresql://neondb_owner:Sjf2hNVBy1TQ@ep-dry-cherry-a5g49m69.us-east-2.aws.neon.tech/top-20-ideas?sslmode=require"
);
export const db = drizzle(sql);
