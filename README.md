# Dark Drives

Marketing and sales site for Dark Drives, published by Off Grid Sask.

First tour: `The Dark Side of Saskatoon`.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript strict
- Tailwind CSS v4 tokens in `src/app/globals.css`
- Stripe Checkout and webhook
- Supabase for waitlist, orders, and submissions
- Static decoy teaser map with scrambled pins only
- Vercel Analytics
- PostHog event hooks
- Email sequence copy in `src/data/email-sequence.ts`

## Local

```bash
npm install
npm run dev
```

Default local URL: `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill values when commerce and storage are ready.

The site defaults to pre-order mode. Use `NEXT_PUBLIC_COMMERCE_MODE=waitlist` to pause checkout.

Marketing consent is required for city vote emails and optional during checkout.
Before production sending, add unsubscribe and the business mailing address in
the email provider.

## Content Protection

This repo must never contain real stop names, real stop stories, prescribed rituals, real coordinates, full route data, GPS behavior, or an in-tour player. Public data is limited to marketing-safe tour records, category counts, broad neighbourhood hints, redacted teaser cards, and decoy map pins.

## Checks

```bash
npm run lint
npm run build
```
