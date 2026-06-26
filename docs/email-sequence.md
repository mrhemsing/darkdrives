# Dark Drives Email Sequence

Five templates cover the pre-order journey. Transactional emails lead with
clarity. Marketing emails require consent, unsubscribe, business name, and a
valid mailing address before they are sent.

Source templates live in `src/data/email-sequence.ts` so a future email service
integration can render the same approved copy.

## Flow

- City vote confirmation: send after `/cities` signup when express consent is
  captured.
- Pre-order confirmation: send after successful checkout.
- Pre-launch anticipation: send a few days before launch to consenting
  pre-orderers.
- Launch night delivery: send on launch night with access.
- Cart abandonment: send once, 1 to 4 hours after abandoned checkout, only when
  consent exists.

## Compliance Notes

- Marketing consent is captured on city vote forms.
- Checkout can record optional marketing consent in Stripe metadata.
- The database should retain consent text and consent timestamp.
- Add unsubscribe and physical mailing address in the email provider templates
  before production send.
