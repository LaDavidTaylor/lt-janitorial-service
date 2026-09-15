# LT Janitorial Ownership Handoff

Prepared and launched September 15, 2026 for LaDavid Taylor.

## Client owned stack

1. Business: LT Janitorial Service, LLC.
2. Production website: `https://www.ltjanitorial.us`.
3. Root domain: `https://ltjanitorial.us`, configured as a permanent redirect to the production website.
4. Client repository: `https://github.com/LaDavidTaylor/lt-janitorial-service`.
5. Client Vercel project: `https://lt-janitorial-service.vercel.app`.
6. Resend workspace: `ladavidbtaylor@gmail.com`.
7. Wix site identifier: `e9ae38d0-045b-444d-a2ec-5856ad9c1905`.
8. Wix account email: `clean@ltjs.info`.
9. Client Google account: `ladavidbtaylor@gmail.com`.

The original source repository remains available at `https://github.com/JxWayne890/lt-janitorial-service`. The previous preview remains available at `https://ltjanitorial.vercel.app` for historical reference.

## Production launch state

The project was copied into its own local client folder, committed to the client repository, imported into the client Vercel account, and redeployed with the production environment settings.

Vercel reports valid configuration for both `ltjanitorial.us` and `www.ltjanitorial.us`. Wix remains the authoritative DNS provider through `ns14.wixdns.net` and `ns15.wixdns.net`. The web records now use the exact values supplied by Vercel:

1. Root A record: `216.198.79.1`.
2. `www` CNAME record: `0205e07437611da3.vercel-dns-017.com`.

The Resend CNAME, DKIM, and DMARC records remain in Wix. Resend reports `ltjanitorial.us` as verified.

The `ltjanitorial.us` domain property is verified in Google Search Console under LaDavid Taylor's Google account. Google accepted and successfully fetched `https://www.ltjanitorial.us/sitemap-index.xml` on September 15, 2026.

The canonical `https://www.ltjanitorial.us` property is also verified in Bing Webmaster Tools under LaDavid Taylor's Google account. Bing can discover the production sitemap through the `Sitemap` directive in `robots.txt`. IndexNow accepted the initial batch of 71 canonical URLs for faster discovery across Bing, Copilot, and other participating search engines; run `npm run submit:indexnow` after material URL changes.

## Contact form

The Vercel function at `api/contact.js` validates required fields, checks same origin requests, uses a hidden spam field, sends a structured Resend notification, and sets the visitor email as the reply address. It does not save submissions in a customer database.

The production environment contains these secret and configuration names:

1. `RESEND_API_KEY`
2. `RESEND_FROM_EMAIL`
3. `CONTACT_NOTIFICATION_EMAIL`
4. `PUBLIC_SITE_URL`

Secret values remain in the service dashboards and are not committed to GitHub.

Production verification passed. The homepage returned HTTP 200, the root domain returned HTTP 308 to `www`, the contact endpoint returned HTTP 200, Resend accepted the request, and the notification was delivered to `clean@ltjs.info`.

## Operations notes

The Vercel team is currently on the Hobby plan. No paid upgrade was completed because the checkout required a payment method and disclosed a $20 monthly charge after the trial. Complete that billing decision in the Vercel account before relying on the project for ongoing commercial production.

The former Wix website remains in the Wix account as a rollback copy, but its web DNS no longer serves the production domain. Do not remove the Wix domain or its email related DNS records.
