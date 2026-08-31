export const business = {
  name: "LT Janitorial Service, LLC",
  shortName: "LT Janitorial",
  founder: "LaDavid Taylor Sr.",
  phoneDisplay: "(469) 597 7230",
  phoneHref: "tel:+14695977230",
  email: "clean@ltjs.info",
  emailHref: "mailto:clean@ltjs.info",
  previewUrl: "https://ltjanitorial.vercel.app",
  currentUrl: "https://www.ltjanitorial.us",
  calendly: "https://calendly.com/ltjanitorial/walk-thru",
  googleProfile:
    "https://www.google.com/maps/search/?api=1&query=LT%20Janitorial%20Service%2C%20LLC&query_place_id=ChIJR7MpvNe1fAMRbx2oFnV87tk",
  facebook: "https://www.facebook.com/people/LT-Janitorial-Service-LLC/61558050278975/",
  instagram: "https://www.instagram.com/ladavidtaylor",
  counties: ["Dallas County", "Collin County", "Rockwall County"],
  cities: [
    "Dallas",
    "Garland",
    "Mesquite",
    "Rockwall",
    "Royse City",
    "Heath",
    "Caddo Mills",
    "Plano",
    "McKinney",
    "Frisco",
  ],
  founded: "2020",
  primaryMarket: "Dallas and East DFW",
  description:
    "Veteran owned commercial cleaning, floor care, and facility support across Dallas, Collin, and Rockwall counties.",
} as const;

export const primaryNav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
] as const;
