# LT Janitorial Launch Checklist

## Preview complete

1. Astro diagnostics pass.
2. Production build passes.
3. Site QA checks every HTML page, internal link, image reference, title, description, and city similarity score.
4. Production dependency audit reports zero vulnerabilities.
5. Mobile layouts pass at 320 and 375 pixels without horizontal overflow.
6. Mobile navigation changes its accessible name, closes with Escape, and returns focus to the menu button.
7. Quote validation and program selection behavior pass.
8. Contact API validation and email delivery are implemented and await client owned Resend and Vercel secrets.
9. Caddo Mills remains excluded from indexing.
10. Wix migration redirects are configured.

## Before production indexing

1. Complete the confirmations in `CLIENT_INPUTS.md`.
2. Correct and connect the Google Business Profile.
3. Connect `ltjanitorial.us` and `www.ltjanitorial.us` to the client owned Vercel project.
4. Replace preview canonical URLs with the production domain.
5. Recheck current ratings, reviews, contact information, service markets, and credentials.
6. Verify every migration redirect on the production domain.
7. Add Search Console and submit the sitemap.
8. Create the client owned Resend workspace, verify the sender domain, and set the Vercel email environment variables.
9. Send a direct notification test and one test through the production quote form.
