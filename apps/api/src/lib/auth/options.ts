import type { Env } from "@/env";
import type { BetterAuthOptions } from "better-auth";

export const betterAuthOptions = (env: Env): BetterAuthOptions => ({
  appName: "api.kiru.cc",
  basePath: "/v1/auth",
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
});
