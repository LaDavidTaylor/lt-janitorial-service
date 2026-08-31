import type { HeroContent, ImageMapping, PageFaq, ProcessStep, RelatedLink, SeoMetadata } from "./services";

export type IndustryPage = {
  slug: string;
  name: string;
  seo: SeoMetadata;
  hero: HeroContent;
  overview: [string, string];
  facilityPriorities: string[];
  process: ProcessStep[];
  serviceContext: string;
  faqs: PageFaq[];
  relatedLinks: RelatedLink[];
  image: ImageMapping;
  schemaDescription: string;
};

export const industries: IndustryPage[] = [
  {
    slug: "offices-corporate-facilities",
    name: "Offices and Corporate Facilities",
    seo: {
      title: "Office and Corporate Facility Cleaning | LT Janitorial",
      description: "Commercial cleaning for corporate offices, professional firms, shared workspaces, reception areas, conference rooms, restrooms, and floors.",
      primaryKeyword: "corporate office cleaning Dallas",
      secondaryKeywords: ["professional office janitorial", "corporate facility cleaning", "shared workspace cleaning"],
    },
    hero: {
      eyebrow: "Cleaning for professional workplaces",
      title: "Protect the office experience from reception to the last shared room",
      lede: "LT Janitorial plans office care around occupancy, privacy, conference use, employee spaces, restrooms, waste, and the floors that carry people through the day.",
      primaryCta: "Request an office walk through",
      secondaryCta: "Explore office services",
    },
    overview: [
      "Corporate and professional offices need a balance of presentation and restraint. Reception and meeting rooms must stay visitor ready, while desks, devices, documents, and private rooms require clear boundaries.",
      "LT Janitorial separates public, employee, and restricted spaces before setting tasks and frequency. Workspace sanitization, routine cleaning, restrooms, waste, and periodic floor care can then operate as one coherent facility plan.",
    ],
    facilityPriorities: ["Reception and conference presentation", "Shared workspace touchpoints", "Break rooms, restrooms, and interior waste", "Carpet, resilient floor, and entry care"],
    process: [
      { title: "Map office use", description: "Review attendance patterns, visitor areas, private rooms, and shared resources." },
      { title: "Set access boundaries", description: "Document sensitive desks, devices, files, and rooms before service begins." },
      { title: "Build the rhythm", description: "Match recurring tasks and periodic floor work to actual office demand." },
    ],
    serviceContext: "Hybrid work can create uneven use, with quiet desk areas and consistently busy conference or break rooms. Frequency should follow those patterns instead of treating the entire office uniformly.",
    faqs: [
      { question: "Can private offices be excluded?", answer: "Yes. Included and restricted rooms should be documented during the walk through." },
      { question: "Can cleaning happen after employees leave?", answer: "A workable service window is discussed based on site access and current availability." },
      { question: "Can floors be managed separately?", answer: "Yes. Preventive and restorative floor care can be added as a separate schedule." },
    ],
    relatedLinks: [{ label: "Office cleaning", href: "/services/office-cleaning" }, { label: "Routine office cleaning", href: "/services/routine-office-cleaning" }, { label: "Plano commercial cleaning", href: "/service-areas/plano" }],
    image: { src: "/images/generated/office-cleaning-hero.webp", alt: "Corporate office with polished reception and shared work areas", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for corporate offices, professional firms, shared workspaces, reception areas, conference rooms, restrooms, and floors across Dallas and East DFW.",
  },
  {
    slug: "warehouses-distribution-centers",
    name: "Warehouses and Distribution Centers",
    seo: {
      title: "Warehouse and Distribution Center Cleaning | LT Janitorial",
      description: "Commercial cleaning for warehouse aisles, distribution floors, loading docks, high dust areas, break rooms, restrooms, and support offices.",
      primaryKeyword: "distribution center cleaning Dallas",
      secondaryKeywords: ["warehouse janitorial Dallas", "industrial facility cleaning", "loading dock cleaning"],
    },
    hero: {
      eyebrow: "Cleaning for active logistics operations",
      title: "Coordinate warehouse cleaning around freight, shifts, and safe access",
      lede: "LT Janitorial scopes industrial floors, loading zones, overhead dust, employee areas, waste points, and support rooms by the way the operation moves.",
      primaryCta: "Walk the facility",
      secondaryCta: "Review warehouse services",
    },
    overview: [
      "Distribution centers move people, vehicles, pallets, packaging, and products across large zones. Dock soil becomes aisle soil, high dust settles back to lower surfaces, and employee areas require a different standard from the operating floor.",
      "A useful warehouse plan divides the building into released zones and assigns a service window to each. LT Janitorial can combine sweeping, dock care, high dust work, restrooms, break rooms, and recurring support area cleaning.",
    ],
    facilityPriorities: ["Aisles and industrial floor soil", "Dock and receiving debris", "Accessible overhead dust", "Break rooms, restrooms, and offices"],
    process: [
      { title: "Trace facility movement", description: "Map shift activity, lift lanes, loading periods, staging, and areas that remain active." },
      { title: "Divide by soil and access", description: "Separate routine floor work, dock sources, high areas, and employee spaces." },
      { title: "Coordinate released zones", description: "Build the route around approved access and facility safety instructions." },
    ],
    serviceContext: "Product sensitivity, equipment movement, hazardous materials, and regulated production requirements must be disclosed. Specialized processes are not assumed within general warehouse janitorial work.",
    faqs: [
      { question: "Can you work in only part of the warehouse?", answer: "Yes. A zone based scope can focus on areas that the facility can release safely." },
      { question: "Are docks and high dust areas available?", answer: "Yes. Both are current listed services and require their own access review." },
      { question: "Do you clean production machinery?", answer: "Machinery cleaning is not assumed and must be separately evaluated if requested." },
    ],
    relatedLinks: [{ label: "Warehouse cleaning", href: "/services/warehouse-cleaning" }, { label: "Loading dock cleaning", href: "/services/loading-dock-cleaning" }, { label: "Mesquite commercial cleaning", href: "/service-areas/mesquite" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Distribution center aisle with clean floor and organized loading flow", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for warehouse aisles, distribution floors, loading docks, high dust areas, break rooms, restrooms, and support offices across Dallas and East DFW.",
  },
  {
    slug: "medical-offices-clinics",
    name: "Medical Offices and Clinics",
    seo: {
      title: "Medical Office and Clinic Cleaning | LT Janitorial",
      description: "Commercial cleaning for clinics, medical offices, waiting rooms, patient areas, staff spaces, restrooms, touchpoints, and floors.",
      primaryKeyword: "medical office cleaning Dallas",
      secondaryKeywords: ["clinic cleaning Dallas", "patient area janitorial", "healthcare office sanitation"],
    },
    hero: {
      eyebrow: "Cleaning for patient facing facilities",
      title: "Separate public, patient, staff, and support areas into one clear plan",
      lede: "LT Janitorial supports medical offices and clinics with site directed cleaning for waiting areas, patient rooms, restrooms, shared surfaces, staff work zones, and floors.",
      primaryCta: "Request a medical facility review",
      secondaryCta: "Discuss site instructions",
    },
    overview: [
      "Medical offices must manage the impression of the waiting room and the boundaries of the care environment at the same time. Patient rooms, staff stations, restrooms, and public touchpoints each require a deliberate sequence.",
      "The facility defines approved products, restricted equipment, regulated materials, and required procedures. LT Janitorial uses those instructions to build an accessible cleaning and sanitizing scope with clear responsibilities.",
    ],
    facilityPriorities: ["Waiting and reception areas", "Released patient and exam rooms", "Staff work and shared touchpoints", "Restrooms and compatible floors"],
    process: [
      { title: "Classify the rooms", description: "Separate public, patient, staff, and support areas before tasks are assigned." },
      { title: "Confirm restrictions", description: "Document products, equipment, waste, access, and surfaces the cleaning team must not touch." },
      { title: "Follow the site sequence", description: "Perform the agreed work within the released rooms and facility direction." },
    ],
    serviceContext: "Every medical office has its own site requirements. LT Janitorial follows approved products, access boundaries, room release instructions, and regulated waste exclusions. Confirm any required credentials during the scope review.",
    faqs: [
      { question: "Can patient rooms be included?", answer: "Yes. Released accessible patient or exam room surfaces can be scoped under facility direction." },
      { question: "Do you handle regulated medical waste?", answer: "No. The standard janitorial scope excludes regulated medical waste, which remains under the facility's approved process." },
      { question: "Can a clinic provide approved products?", answer: "Yes. Product and surface requirements should be reviewed before the proposal is finalized." },
    ],
    relatedLinks: [{ label: "Medical facility cleaning", href: "/services/medical-facility-cleaning" }, { label: "Patient room sanitizing", href: "/services/patient-room-sanitizing" }, { label: "Rockwall commercial cleaning", href: "/service-areas/rockwall" }],
    image: { src: "/images/generated/medical-cleaning-hero.webp", alt: "Medical clinic waiting and patient area prepared for cleaning", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for clinics, medical offices, waiting rooms, patient areas, staff spaces, restrooms, touchpoints, and floors across Dallas and East DFW.",
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants and Hospitality Spaces",
    seo: {
      title: "Restaurant and Hospitality Cleaning | LT Janitorial",
      description: "Commercial cleaning for restaurant kitchens, dining rooms, hotel public areas, hospitality floors, restrooms, counters, drains, and guest touchpoints.",
      primaryKeyword: "restaurant cleaning Dallas",
      secondaryKeywords: ["hospitality cleaning Dallas", "commercial kitchen cleaning", "dining room sanitation"],
    },
    hero: {
      eyebrow: "Cleaning for guest centered spaces",
      title: "Prepare kitchens, dining rooms, and public areas for the next opening",
      lede: "LT Janitorial supports restaurants and hospitality spaces with front and back of house scopes built around closing procedures, guest traffic, surfaces, and floors.",
      primaryCta: "Request a restaurant walk through",
      secondaryCta: "Plan closing service",
    },
    overview: [
      "Hospitality cleanliness is experienced in sequence. Guests see the entry and dining room, use the restroom, and notice floors and touchpoints, while the back of house manages grease, moisture, preparation residue, and a compressed closing window.",
      "LT Janitorial has public review evidence connected to restaurants in Dallas, McKinney, and Frisco. Services can include recurring deep work, kitchen surfaces, dining areas, restrooms, and floor care with clear equipment boundaries.",
    ],
    facilityPriorities: ["Kitchen floors, counters, and accessible exteriors", "Dining tables, seating, and service points", "Restrooms and customer touchpoints", "Closing windows and floor condition"],
    process: [
      { title: "Separate front and back of house", description: "Review the soil, access, and surface needs unique to guest and production areas." },
      { title: "Confirm the close", description: "Establish when food operations end and each room is released for janitorial work." },
      { title: "Coordinate surfaces and floors", description: "Sequence detail work before the final floor pass in each released zone." },
    ],
    serviceContext: "Hood exhaust systems, fire suppression components, internal machinery, food preparation responsibilities, and specialized equipment maintenance are not assumed within standard janitorial cleaning.",
    faqs: [
      { question: "Can kitchens and dining rooms be included together?", answer: "Yes. They can be coordinated in one proposal while retaining separate task lists." },
      { question: "Does LT Janitorial have restaurant experience?", answer: "Public Google reviews document restaurant cleaning in Dallas, McKinney, and Frisco." },
      { question: "Is specialized hood cleaning included?", answer: "No. Hood and exhaust system work is outside the standard janitorial service and should be assigned to an appropriate specialist." },
    ],
    relatedLinks: [{ label: "Restaurant cleaning", href: "/services/restaurant-cleaning" }, { label: "Kitchen deep cleaning", href: "/services/kitchen-deep-cleaning" }, { label: "Frisco commercial cleaning", href: "/service-areas/frisco" }],
    image: { src: "/images/generated/restaurant-cleaning-hero.webp", alt: "Restaurant and hospitality dining space prepared before opening", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for restaurant kitchens, dining rooms, hospitality public areas, floors, restrooms, counters, drains, and guest touchpoints across Dallas and East DFW.",
  },
  {
    slug: "retail-showrooms",
    name: "Retail and Showrooms",
    seo: {
      title: "Retail and Showroom Cleaning in Dallas | LT Janitorial",
      description: "Commercial cleaning for retail floors, showrooms, fitting areas, counters, glass, restrooms, employee spaces, and customer touchpoints.",
      primaryKeyword: "retail cleaning Dallas",
      secondaryKeywords: ["showroom cleaning Dallas", "store floor cleaning", "commercial retail janitorial"],
    },
    hero: {
      eyebrow: "Cleaning where presentation supports the sale",
      title: "Keep retail floors and customer surfaces ready for the next visit",
      lede: "LT Janitorial plans retail cleaning around entry soil, display areas, counters, fitting spaces, restrooms, employee rooms, and the floor finish that carries the visual standard.",
      primaryCta: "Request a retail walk through",
      secondaryCta: "Assess your floors",
    },
    overview: [
      "Retail spaces place floors and touchpoints under bright, continuous visibility. Entry grit follows every customer, display movement reveals hidden dust, and checkout counters collect repeated handling throughout the day.",
      "Public review evidence connects LT Janitorial to retail restoration work. A store or showroom can combine recurring presentation cleaning with periodic floor care, glass detail, restroom service, and focused resets after merchandising changes.",
    ],
    facilityPriorities: ["Entrances and customer traffic lanes", "Counters, displays, and fitting areas", "Interior glass and visible fixtures", "Restrooms, employee areas, and floor finish"],
    process: [
      { title: "Follow the customer path", description: "Review entrances, featured displays, fitting rooms, counters, and checkout areas." },
      { title: "Protect merchandise boundaries", description: "Document what can be moved, what remains untouched, and when the sales floor is available." },
      { title: "Separate daily and restorative work", description: "Keep routine presentation tasks distinct from deeper floor or project service." },
    ],
    serviceContext: "Merchandise handling, fixture relocation, exterior elevated glass, and specialized restoration are not automatically included. Each must be listed when relevant to the project.",
    faqs: [
      { question: "Can cleaning happen after store hours?", answer: "A suitable service window can be discussed based on access and current availability." },
      { question: "Can showroom floors receive restoration?", answer: "Yes. The material and condition can be evaluated for preventive care, burnishing, or a restorative process." },
      { question: "Will merchandise be moved?", answer: "Merchandise movement is not assumed and should be controlled by the store unless specifically agreed." },
    ],
    relatedLinks: [{ label: "Commercial cleaning", href: "/services/commercial-cleaning" }, { label: "Floor maintenance", href: "/services/floor-maintenance" }, { label: "Dallas commercial cleaning", href: "/service-areas/dallas" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Retail showroom with clean display surfaces and polished customer floor", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for retail floors, showrooms, fitting areas, counters, interior glass, restrooms, employee spaces, and customer touchpoints across Dallas and East DFW.",
  },
  {
    slug: "schools-activity-centers",
    name: "Schools and Activity Centers",
    seo: {
      title: "School and Activity Center Cleaning | LT Janitorial",
      description: "Commercial cleaning for classrooms, activity rooms, offices, shared touchpoints, restrooms, common areas, waste points, and floors.",
      primaryKeyword: "school cleaning Dallas",
      secondaryKeywords: ["activity center janitorial", "classroom cleaning service", "education facility floor care"],
    },
    hero: {
      eyebrow: "Cleaning for shared learning and activity spaces",
      title: "Plan facility care around classrooms, common areas, and busy schedules",
      lede: "LT Janitorial can scope commercial cleaning for education and activity facilities with attention to shared rooms, restrooms, offices, waste, floors, and scheduled events.",
      primaryCta: "Request a facility review",
      secondaryCta: "Discuss schedule needs",
    },
    overview: [
      "Schools and activity centers place many users in shared rooms throughout the day. Classrooms, studios, offices, corridors, multipurpose areas, and restrooms build different soil patterns and may only become available in narrow windows.",
      "The facility must define access, child safety boundaries, approved products, and restricted materials. LT Janitorial can then organize routine cleaning, workspace sanitization, restrooms, waste, and floor care around the site schedule.",
    ],
    facilityPriorities: ["Classrooms and shared activity surfaces", "Corridors, entries, and multipurpose floors", "Restrooms and interior waste", "Administrative rooms and event turnover"],
    process: [
      { title: "Review daily and event use", description: "Map room schedules, traffic peaks, programs, and the windows available for cleaning." },
      { title: "Confirm safety boundaries", description: "Document access, products, storage, and areas controlled by facility staff." },
      { title: "Build a room rotation", description: "Balance recurring essentials with periodic detail work across shared spaces." },
    ],
    serviceContext: "Schools and activity centers should share required screenings, credentials, access rules, product standards, and child safety boundaries before a proposal is accepted.",
    faqs: [
      { question: "Can activity rooms and offices be included together?", answer: "Yes. Rooms can receive different task lists within one facility proposal." },
      { question: "Can cleaning be scheduled around programs?", answer: "The walk through should identify room release times, events, and access limitations." },
      { question: "How are required screenings or credentials handled?", answer: "The facility should identify every requirement during review so current eligibility and documentation can be confirmed before service." },
    ],
    relatedLinks: [{ label: "Commercial cleaning", href: "/services/commercial-cleaning" }, { label: "Workspace sanitization", href: "/services/workspace-sanitization" }, { label: "Floor maintenance", href: "/services/floor-maintenance" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Shared education and activity room with clean floors and organized surfaces", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for classrooms, activity rooms, offices, shared touchpoints, restrooms, common areas, waste points, and floors across Dallas and East DFW.",
  },
  {
    slug: "manufacturing-industrial-facilities",
    name: "Manufacturing and Industrial Facilities",
    seo: {
      title: "Industrial Facility Cleaning | LT Janitorial",
      description: "Commercial cleaning for manufacturing support areas, industrial floors, warehouses, docks, high dust zones, offices, break rooms, and restrooms.",
      primaryKeyword: "industrial facility cleaning Dallas",
      secondaryKeywords: ["manufacturing cleaning Dallas", "industrial janitorial service", "production support area cleaning"],
    },
    hero: {
      eyebrow: "Cleaning for facilities that keep production moving",
      title: "Separate operating zones from the employee and customer spaces around them",
      lede: "LT Janitorial plans industrial cleaning around accessible floors, material flow, dust sources, docks, support offices, break rooms, and site safety requirements.",
      primaryCta: "Request an industrial walk through",
      secondaryCta: "Review floor services",
    },
    overview: [
      "Manufacturing facilities may contain production, staging, warehousing, receiving, quality, office, and employee zones under one roof. Each area has different soil sources and may operate under its own access rules.",
      "LT Janitorial focuses on approved commercial cleaning areas rather than assuming authority over production processes. Industrial sweeping, high dust work, dock cleaning, restrooms, waste, and support spaces can be combined after site conditions are reviewed.",
    ],
    facilityPriorities: ["Accessible production support floors", "Warehouse and staging areas", "Docks, overhead dust, and waste points", "Offices, break rooms, and employee restrooms"],
    process: [
      { title: "Learn the operating boundaries", description: "Review active equipment, restricted zones, materials, traffic, and client safety procedures." },
      { title: "Assign appropriate tasks", description: "Separate general janitorial needs from production sanitation and specialized equipment work." },
      { title: "Coordinate safe access", description: "Service only released areas under the site instructions and agreed schedule." },
    ],
    serviceContext: "The standard janitorial scope excludes production equipment, hazardous substances, regulated processes, food manufacturing sanitation, clean rooms, and specialized technical cleaning unless separately evaluated in writing.",
    faqs: [
      { question: "Do you clean manufacturing equipment?", answer: "Equipment cleaning is not assumed. Any request requires separate evaluation and written approval." },
      { question: "Can employee areas be included?", answer: "Yes. Offices, break rooms, restrooms, and support areas can be included in the facility plan." },
      { question: "Is high dust cleaning available?", answer: "Yes, for approved accessible areas after height, access, and site requirements are reviewed." },
    ],
    relatedLinks: [{ label: "Industrial floor sweeping", href: "/services/industrial-floor-sweeping" }, { label: "High dust area cleaning", href: "/services/high-dust-area-cleaning" }, { label: "Garland commercial cleaning", href: "/service-areas/garland" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Manufacturing support area with clean industrial floors and separated work zones", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for manufacturing support areas, industrial floors, warehouses, docks, high dust zones, offices, break rooms, and restrooms across Dallas and East DFW.",
  },
  {
    slug: "commercial-construction-tenant-improvements",
    name: "Commercial Construction and Tenant Improvements",
    seo: {
      title: "Tenant Improvement and Construction Cleaning | LT Janitorial",
      description: "Post construction and tenant improvement cleaning for dust, light debris, fixtures, finishes, floors, renovated rooms, and final handoff presentation.",
      primaryKeyword: "tenant improvement cleaning Dallas",
      secondaryKeywords: ["commercial construction cleanup Dallas", "final site cleaning", "post renovation janitorial"],
    },
    hero: {
      eyebrow: "Cleaning for the final project transition",
      title: "Move completed commercial work toward owner and tenant handoff",
      lede: "LT Janitorial addresses released construction and renovation zones through debris and dust removal, detail cleaning, floor care, and final presentation work.",
      primaryCta: "Discuss the project schedule",
      secondaryCta: "Request a site walk",
    },
    overview: [
      "Tenant improvements and commercial renovations often unfold in phases, with active trades near rooms that are almost ready. Cleaning too early invites new dust, while cleaning too late can put the handoff date under pressure.",
      "LT Janitorial reviews released areas, surface restrictions, utilities, remaining punch work, disposal arrangements, and the final use of the space. Broad debris work and final detail work can then be separated into a practical sequence.",
    ],
    facilityPriorities: ["Released work zone readiness", "Fine dust across accessible surfaces", "Fixture, finish, and interior glass detail", "Final floor and opening presentation"],
    process: [
      { title: "Confirm release by phase", description: "Identify rooms that are complete and areas where trade work will continue." },
      { title: "Move from broad to detailed", description: "Address approved debris and settled dust before finish and presentation work." },
      { title: "Coordinate handoff", description: "Align final cleaning with punch activity, owner review, tenant access, and opening dates." },
    ],
    serviceContext: "Contractor haul off, dumpsters, hazardous debris, repairs, paint correction, and active trade work are not assumed. The proposal should also explain any touchup needed after crews return.",
    faqs: [
      { question: "Can work be phased by room or floor?", answer: "Yes. Released zones can be scoped separately when the project schedule supports safe access." },
      { question: "Do you provide construction dumpsters?", answer: "No. Dumpster service and heavy haul off are outside the standard cleaning scope." },
      { question: "Can a final touchup be included?", answer: "The proposal should state whether a later touchup is included or priced separately." },
    ],
    relatedLinks: [{ label: "Post construction cleaning", href: "/services/post-construction-cleaning" }, { label: "Post renovation cleanup", href: "/services/post-renovation-cleanup" }, { label: "Final site cleaning", href: "/services/final-site-cleaning" }],
    image: { src: "/images/generated/post-construction-cleaning-hero.webp", alt: "Completed tenant improvement receiving final commercial cleaning", focalPoint: "center" },
    schemaDescription: "Post construction and tenant improvement cleaning for dust, light debris, fixtures, finishes, floors, renovated rooms, and final handoff presentation across Dallas and East DFW.",
  },
];

export const industryBySlug = new Map(industries.map((industry) => [industry.slug, industry]));
