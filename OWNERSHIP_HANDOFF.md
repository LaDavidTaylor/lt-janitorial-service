# LT Janitorial Ownership Handoff

Prepared September 15, 2026 for LaDavid Taylor.

## Project inventory

1. Business: LT Janitorial Service, LLC.
2. Production domain: `www.ltjanitorial.us`.
3. Root domain: `ltjanitorial.us`, which should redirect to the production domain.
4. Current preview: `https://ltjanitorial.vercel.app`.
5. Original source repository: `https://github.com/JxWayne890/lt-janitorial-service`.
6. Client owned repository: `https://github.com/LaDavidTaylor/lt-janitorial-service`.
7. Wix site identifier: `e9ae38d0-045b-444d-a2ec-5856ad9c1905`.
8. Wix account email: `clean@ltjs.info`.
9. Google account for client ownership: `ladavidbtaylor@gmail.com`.

## Domain state before cutover

The domain is managed by a third party and uses the Wix name servers `ns14.wixdns.net` and `ns15.wixdns.net`. The old Wix website remains live until the verified Vercel deployment is ready. The cutover should change only the web records requested by Vercel. Existing email records must remain intact.

## Contact form

The project contains a Vercel contact function at `api/contact.js`. It validates required fields, checks same origin requests, uses a hidden spam field, sends a structured Resend notification, and sets the visitor email as the reply address. It does not save submissions in a customer database.

The Vercel project needs these environment variable names:

1. `RESEND_API_KEY`
2. `RESEND_FROM_EMAIL`
3. `CONTACT_NOTIFICATION_EMAIL`

Secret values must stay in the service dashboards and must not be committed to GitHub.

## Remaining ownership steps

1. Push the main branch to the new client owned repository.
2. Create a client owned Vercel account through the new GitHub identity.
3. Import the client repository into Vercel.
4. Create a client owned Resend workspace, verify `ltjanitorial.us`, and create a restricted sending key.
5. Add the three contact form environment variables to Vercel and redeploy.
6. Add both production domains to Vercel.
7. Change the Wix hosted web records to the exact records Vercel supplies, while preserving email records.
8. Verify the site, redirects, form delivery, notification receipt, mobile layout, and TLS before closing the Wix website plan.
