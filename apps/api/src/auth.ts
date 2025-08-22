// NOTE: This auth client is just for betterAuth CLI purposes
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "./lib/db";

const db = getDb({ libsqlBinding: "file:db.sqlite" });

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
});
