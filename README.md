# LT Janitorial Service, LLC

A standalone Astro website for LT Janitorial Service, LLC. The build preserves the existing black and gold identity while expanding the business into a premium, conversion focused commercial cleaning website for Dallas County, Collin County, and Rockwall County.

## Current build

1. Seventy three unique HTML pages.
2. Thirty one service pages, including seven primary service categories and twenty four focused services.
3. Thirteen prepared location pages, with Caddo Mills excluded from indexing until coverage is confirmed.
4. Eight facility and industry pages.
5. Seven long form planning resources.
6. Quote planner, Calendly path, direct phone links, and direct email links.
7. Organization, Service, FAQPage, BreadcrumbList, and Article structured data.
8. Canonical tags, unique metadata, XML sitemap, robots policy, and `llms.txt`.
9. Permanent redirects for the indexed routes from the existing Wix site.
10. Security headers and a mobile action bar.

## Local commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run qa:site
npm run preview
```

## Conversion behavior

The quote planner validates the facility fields, prepares a structured email, and opens the visitor's own email application. It does not send data to a database. The selected Silver, Gold, or Platinum program is carried into the planner through the URL and included in the prepared message.

The current contact paths are:

1. Phone: `(469) 597 7230`
2. Email: `clean@ltjs.info`
3. Calendly: `https://calendly.com/ltjanitorial/walk-thru`

## Visual assets

The live LT Janitorial logo and emblem are preserved in `public/brand`. Seven generated commercial cleaning scenes support the service families in `public/images/generated`.

All generated imagery is illustrative. It does not depict LT Janitorial employees, client properties, or completed projects. The website states this in the footer, and the review page adds an additional disclosure beside proof related content.

## Search and answer readiness

The site includes distinct city copy, distinct service copy, direct answer sections, page specific questions, contextual internal links, structured data, optimized image files, clean canonical URLs, crawler permissions, and an AI readable `llms.txt` summary.

The Google Business Profile should be corrected and connected before the production domain is indexed. Current profile issues and client confirmations are listed in `CLIENT_INPUTS.md`.

## Deployment targets

1. GitHub: `JxWayne890/lt-janitorial-service`
2. Vercel: `https://ltjanitorial.vercel.app`
3. Production domain: awaiting LaDavid's decision

## Project references

1. `CLIENT_BLUEPRINT.md` records scope, facts, exclusions, and original route planning.
2. `planning/SEO_CONTENT_MATRIX.md` records the page architecture and content differentiation.
3. `planning/VISUAL_DIRECTION.md` records the brand system, prompts, image mapping, and disclosure policy.
4. `CLIENT_INPUTS.md` records the items that still require LaDavid's confirmation.
