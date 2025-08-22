import type { Env } from "@/env";
import { betterAuth } from "better-auth";
import { betterAuthOptions } from "@/lib/auth/options";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "@/lib/db";
import * as authSchema from "@/lib/auth/schema";

export const makeAuth = (env: Env): ReturnType<typeof betterAuth> => {
  const db = getDb({ d1Binding: env.DB });

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema: authSchema,
    }),
    ...betterAuthOptions(env),
  });
};
