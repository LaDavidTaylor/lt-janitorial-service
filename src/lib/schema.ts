import { business } from "../data/business";

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, business.siteUrl).href,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema(name: string, description: string, areaServed?: string[], path = "/services") {
  const url = new URL(path, business.siteUrl).href;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    url,
    name,
    description,
    provider: {
      "@id": `${business.siteUrl}/#organization`,
      "@type": "Organization",
      name: business.name,
      url: business.siteUrl,
      telephone: "+14695977230",
    },
    areaServed: (areaServed ?? [...business.counties]).map((area) => ({
      "@type": area.includes("County") ? "AdministrativeArea" : "City",
      name: area,
    })),
  };
}
