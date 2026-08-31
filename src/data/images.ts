const imageAltByPath: Record<string, string> = {
  "/images/social/lt-janitorial-og.jpg": "LT Janitorial commercial cleaning and floor care across Dallas, Collin, and Rockwall counties",
  "/images/generated/commercial-cleaning-hero.webp": "Commercial cleaning professionals work in a modern office lobby after business hours",
  "/images/generated/office-cleaning-hero.webp": "A commercial cleaning professional wipes an empty workstation in a contemporary office",
  "/images/generated/floor-care-hero.webp": "A floor care technician operates a commercial burnisher in a modern corridor",
  "/images/generated/warehouse-cleaning-hero.webp": "A cleaning technician operates an industrial floor sweeper in a distribution warehouse",
  "/images/generated/medical-cleaning-hero.webp": "A commercial cleaner wipes an exam table in a modern outpatient room",
  "/images/generated/restaurant-cleaning-hero.webp": "Commercial cleaners detail a restaurant kitchen after closing",
  "/images/generated/post-construction-cleaning-hero.webp": "Commercial cleaners remove fine dust from a completed office interior",
};

export function getImageAlt(path: string, fallback = "Commercial cleaning service environment"): string {
  return imageAltByPath[path] ?? fallback;
}
