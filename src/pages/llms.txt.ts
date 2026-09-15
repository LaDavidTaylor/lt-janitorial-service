import type { APIRoute } from "astro";
import { business } from "../data/business";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { launchReadyLocations } from "../data/locations";
import { guides } from "../data/guides";

export const GET: APIRoute = () => {
  const serviceLines = services.map((service) => `${service.name}: ${business.siteUrl}/services/${service.slug}`);
  const industryLines = industries.map((industry) => `${industry.name}: ${business.siteUrl}/industries/${industry.slug}`);
  const locationLines = launchReadyLocations.map((location) => `${location.name}: ${business.siteUrl}/service-areas/${location.slug}`);
  const guideLines = guides.map((guide) => `${guide.title}: ${business.siteUrl}/resources/${guide.slug}`);

  const body = [
    `# ${business.name}`,
    "",
    "LT Janitorial Service, LLC is a veteran owned commercial cleaning, floor care, and project cleaning company founded in 2020. Its core service territory is Dallas County, Collin County, and Rockwall County in North Texas.",
    "",
    "## Direct contact",
    "",
    `Phone: ${business.phoneDisplay}`,
    `Email: ${business.email}`,
    `Facility walk through scheduling: ${business.calendly}`,
    `Website: ${business.siteUrl}`,
    "",
    "## Primary services",
    "",
    ...serviceLines,
    "",
    "## Facility types",
    "",
    ...industryLines,
    "",
    "## Confirmed service area pages",
    "",
    ...locationLines,
    "",
    "## Facility planning resources",
    "",
    ...guideLines,
    "",
    "## Important scope notes",
    "",
    "Residential house cleaning is not advertised.",
    "Medical facility work is site directed. Credentials, approved products, regulated waste exclusions, and facility procedures must be confirmed during scope review.",
    "The commercial surface disinfection service does not include medical instrument sterilization or sterile processing.",
    "Caddo Mills availability requires direct confirmation and its prepared page is excluded from search indexing.",
    "Website imagery is illustrative and does not depict LT Janitorial employees, client facilities, or completed projects.",
    "Google remains the source for current rating, review count, and complete customer wording.",
    "",
    "## Primary conversion pages",
    "",
    `Request a quote: ${business.siteUrl}/quote`,
    `Contact options: ${business.siteUrl}/contact`,
    `Frequently asked questions: ${business.siteUrl}/faq`,
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
