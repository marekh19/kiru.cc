import type { Config } from "drizzle-kit";

export default {
  dialect: "sqlite",
  dbCredentials: { url: "file:./db.sqlite" },
  schema: "./src/lib/auth/schema.ts",
  verbose: true,
  out: "./drizzle",
} satisfies Config;
