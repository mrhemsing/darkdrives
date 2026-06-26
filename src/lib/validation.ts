import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email().max(160),
  city: z.string().min(2).max(80).transform((value) => value.toLowerCase()),
  source: z.string().min(2).max(80).default("site"),
});

export const checkoutSchema = z.object({
  tourId: z.string().min(2).max(120),
});

export const submitSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  city: z.string().min(2).max(80),
  report: z.string().min(20).max(2000),
});
