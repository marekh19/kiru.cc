import { Hono } from "hono";
import type { Env } from "@/env";
import { makeAuth } from "@/lib/auth";

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.text(`Hello from ${c.env.DEFAULT_DOMAIN}`);
});

app.get("/health", (c) => {
  return c.json({ ok: true });
});

app.on(["GET", "POST"], "/v1/auth/*", (c) => {
  return makeAuth(c.env).handler(c.req.raw);
});

export default app;
