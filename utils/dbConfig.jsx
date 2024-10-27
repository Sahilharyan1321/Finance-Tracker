import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://finan-smart_owner:YQB8DPfv4GnC@ep-solitary-smoke-a1k9wds1.ap-southeast-1.aws.neon.tech/finan-smart?sslmode=require"
);
export const db = drizzle(sql, { schema });
