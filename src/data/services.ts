export type SeoMetadata = {
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  lede: string;
  primaryCta: string;
  secondaryCta: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type PageFaq = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  label: string;
  href: string;
};

export type ImageMapping = {
  src: string;
  alt: string;
  focalPoint: string;
};

export type ServicePage = {
  slug: string;
  name: string;
  kind: "category" | "service";
  category: string;
  seo: SeoMetadata;
  hero: HeroContent;
  overview: [string, string];
  inclusions: string[];
  process: ProcessStep[];
  serviceContext: string;
  faqs: PageFaq[];
  relatedLinks: RelatedLink[];
  image: ImageMapping;
  schemaDescription: string;
};

export const services: ServicePage[] = [
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    kind: "category",
    category: "Commercial Cleaning",
    seo: {
      title: "Commercial Cleaning in Dallas and East DFW | LT Janitorial",
      description: "Commercial cleaning for offices, facilities, restaurants, medical spaces, and active workplaces across Dallas, Collin, and Rockwall counties.",
      primaryKeyword: "commercial cleaning Dallas",
      secondaryKeywords: ["commercial cleaners Dallas", "janitorial service Dallas", "business cleaning East DFW"],
    },
    hero: {
      eyebrow: "Commercial cleaning with a disciplined finish",
      title: "A cleaner facility starts with a plan built around the way you work",
      lede: "LT Janitorial helps North Texas businesses maintain professional spaces through recurring care, focused project cleaning, and floor programs shaped around each facility.",
      primaryCta: "Request a facility walk through",
      secondaryCta: "Call 469 597 7230",
    },
    overview: [
      "Commercial cleaning is not one checklist repeated in every building. An office with shared conference rooms, a restaurant closing after dinner, and a warehouse receiving trucks all create different soil patterns, access needs, and priorities. LT Janitorial begins with the facility and builds the scope from there.",
      "Service can focus on recurring upkeep, a deep reset, or a defined project. The goal is a clear scope that gives decision makers one practical plan for floors, restrooms, work areas, touchpoints, and the spaces visitors notice first.",
    ],
    inclusions: ["Facility specific cleaning scope", "Work areas and shared spaces", "Restrooms, floors, and waste points", "Recurring or project based scheduling"],
    process: [
      { title: "Walk the facility", description: "Review traffic, surfaces, operating hours, access, and the areas that shape first impressions." },
      { title: "Define the scope", description: "Match tasks and frequency to the facility instead of forcing the operation into a preset package." },
      { title: "Keep priorities visible", description: "Use the agreed scope as the working standard for routine care and future adjustments." },
    ],
    serviceContext: "A strong commercial cleaning program accounts for customer facing areas, employee spaces, floor condition, waste flow, and the time available for work. That context matters more than a generic room count.",
    faqs: [
      { question: "What types of commercial facilities do you clean?", answer: "LT Janitorial serves offices, warehouses, medical facilities, restaurants, retail spaces, and commercial sites after construction or renovation." },
      { question: "Can commercial cleaning be scheduled around operating hours?", answer: "Service timing is discussed during the facility walk through so the proposed plan can account for access, staff activity, and customer traffic." },
      { question: "Do you offer both recurring and one time service?", answer: "Yes. The current service menu includes recurring commercial care and defined one time projects." },
    ],
    relatedLinks: [{ label: "Explore office cleaning", href: "/services/office-cleaning" }, { label: "See floor maintenance", href: "/services/floor-maintenance" }, { label: "View service areas", href: "/service-areas" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Refined commercial lobby prepared for employees and visitors", focalPoint: "center" },
    schemaDescription: "Commercial cleaning services for offices, facilities, restaurants, medical spaces, warehouses, and project sites across Dallas, Collin, and Rockwall counties.",
  },
  {
    slug: "floor-maintenance",
    name: "Floor Maintenance",
    kind: "category",
    category: "Floor Maintenance",
    seo: {
      title: "Commercial Floor Maintenance in Dallas | LT Janitorial",
      description: "Commercial floor care planning for VCT, tile, concrete, and specialty surfaces across Dallas, Collin, and Rockwall counties.",
      primaryKeyword: "commercial floor maintenance Dallas",
      secondaryKeywords: ["commercial floor care Dallas", "floor cleaning service Dallas", "business floor maintenance"],
    },
    hero: {
      eyebrow: "Floor care planned for the full surface life",
      title: "Protect the first surface every customer and employee sees",
      lede: "From routine upkeep to restorative work, LT Janitorial builds commercial floor care around traffic, surface type, finish condition, and the appearance your facility needs to maintain.",
      primaryCta: "Plan a floor assessment",
      secondaryCta: "Explore floor services",
    },
    overview: [
      "Commercial floors collect the story of the building. Entry grit, cart paths, chair movement, grease, and daily foot traffic wear different surfaces in different ways. Effective maintenance starts by identifying the material and the condition already present.",
      "LT Janitorial offers preventive care, burnishing, strip and wax service, industrial sweeping, and annual restoration. These can stand alone or become part of a broader facility plan when cleaning and floor appearance need to move together.",
    ],
    inclusions: ["Surface and finish review", "Preventive floor care", "Restorative service planning", "Coordination with recurring cleaning"],
    process: [
      { title: "Identify the surface", description: "Review material, coating, traffic lanes, wear, and problem areas before selecting a method." },
      { title: "Choose the right level", description: "Separate routine care from interim improvement and full restoration." },
      { title: "Plan the next cycle", description: "Set a practical path for maintaining appearance after the initial service." },
    ],
    serviceContext: "VCT, tile, concrete, and specialty commercial surfaces respond differently to abrasion and finish care. The scope should reflect the actual floor instead of relying on one method for every material.",
    faqs: [
      { question: "Which commercial floors can you maintain?", answer: "The current service information names VCT, tile, concrete, and specialty surfaces. Final methods depend on the material and existing condition." },
      { question: "Is restoration the same as routine floor cleaning?", answer: "No. Routine cleaning manages daily soil. Restoration addresses worn finish, embedded buildup, and appearance that regular cleaning alone cannot correct." },
      { question: "Can floor care be included with janitorial service?", answer: "Yes. Floor care can be planned separately or coordinated with a recurring commercial cleaning program." },
    ],
    relatedLinks: [{ label: "Strip and wax service", href: "/services/strip-and-wax" }, { label: "Floor burnishing", href: "/services/floor-burnishing" }, { label: "Preventive floor care", href: "/services/preventive-floor-care" }],
    image: { src: "/images/generated/floor-care-hero.webp", alt: "Polished commercial floor with a clean reflective finish", focalPoint: "center bottom" },
    schemaDescription: "Commercial floor maintenance for VCT, tile, concrete, and specialty surfaces in Dallas, Collin, and Rockwall counties.",
  },
  {
    slug: "post-construction-cleaning",
    name: "Post Construction Cleaning",
    kind: "category",
    category: "Post Construction Cleaning",
    seo: {
      title: "Post Construction Cleaning in Dallas | LT Janitorial",
      description: "Detailed commercial post construction cleaning for dust, debris, fixtures, surfaces, and final site presentation across the Dallas area.",
      primaryKeyword: "post construction cleaning Dallas",
      secondaryKeywords: ["construction cleanup Dallas", "final construction cleaning", "commercial renovation cleanup"],
    },
    hero: {
      eyebrow: "The final phase before a space is ready",
      title: "Turn construction completion into a clean commercial handoff",
      lede: "LT Janitorial clears the dust, debris, residue, and detail work that remain after commercial construction and renovation crews finish their work.",
      primaryCta: "Discuss your project",
      secondaryCta: "Schedule a site walk",
    },
    overview: [
      "A project can be structurally complete and still feel unfinished. Fine dust settles on ledges and vents, protective materials remain near fixtures, and traffic carries construction soil across new floors. Post construction cleaning brings those details into one final presentation plan.",
      "The scope can address renovation zones, new commercial interiors, tenant improvements, and final site cleaning. Sequencing matters, so LT Janitorial reviews access, remaining trades, surface readiness, and the handoff date before defining the work.",
    ],
    inclusions: ["Loose debris and packaging removal", "Fine dust attention on accessible surfaces", "Fixture and finish detailing", "Final floor and presentation cleaning"],
    process: [
      { title: "Review project readiness", description: "Confirm which trades are complete, where work remains active, and which spaces are released for cleaning." },
      { title: "Clean from broad to detailed", description: "Address remaining debris and dust before moving into finish work on surfaces, fixtures, and floors." },
      { title: "Prepare the handoff", description: "Focus the final pass on the spaces and details that affect owner, tenant, or customer presentation." },
    ],
    serviceContext: "Construction cleaning works best when it is coordinated with the project schedule. Active punch work, delayed trades, and unsealed surfaces can quickly undo a final clean, so scope and timing should be agreed before crews arrive.",
    faqs: [
      { question: "Do you clean after both construction and renovation?", answer: "Yes. The current service list includes post construction cleaning, post renovation cleanup, debris and dust removal, and final site cleaning." },
      { question: "Can the work be divided into phases?", answer: "Phasing can be discussed during the site walk when different areas are released at different times." },
      { question: "What should be complete before final cleaning?", answer: "Major trade work should be finished in the released area, with access available and any surface restrictions clearly identified." },
    ],
    relatedLinks: [{ label: "Post renovation cleanup", href: "/services/post-renovation-cleanup" }, { label: "Debris and dust removal", href: "/services/debris-and-dust-removal" }, { label: "Final site cleaning", href: "/services/final-site-cleaning" }],
    image: { src: "/images/generated/post-construction-cleaning-hero.webp", alt: "Newly completed commercial interior receiving detailed final cleaning", focalPoint: "center" },
    schemaDescription: "Commercial post construction and renovation cleaning for dust, debris, fixtures, surfaces, and final site presentation across Dallas and East DFW.",
  },
  {
    slug: "medical-facility-cleaning",
    name: "Medical Facility Cleaning",
    kind: "category",
    category: "Medical Facility Cleaning",
    seo: {
      title: "Medical Facility Cleaning in Dallas | LT Janitorial",
      description: "Commercial cleaning for clinics, medical offices, patient rooms, waiting areas, and healthcare workspaces in Dallas and East DFW.",
      primaryKeyword: "medical facility cleaning Dallas",
      secondaryKeywords: ["medical office cleaning Dallas", "clinic cleaning service", "healthcare facility janitorial"],
    },
    hero: {
      eyebrow: "Focused care for patient facing environments",
      title: "A medical cleaning scope built around rooms, touchpoints, and daily use",
      lede: "LT Janitorial supports clinics, healthcare offices, and patient care spaces with planned cleaning for waiting areas, exam areas, restrooms, floors, and shared surfaces.",
      primaryCta: "Request a medical facility walk through",
      secondaryCta: "Call to discuss your space",
    },
    overview: [
      "Medical settings require more than a polished lobby. Patients move between waiting rooms and care areas, staff work across shared stations, and frequently touched surfaces deserve deliberate attention. The cleaning plan should follow that movement without disrupting the facility.",
      "LT Janitorial has public review evidence connected to hospital and animal hospital cleaning. The service scope can include general medical facility care, patient room sanitizing, disinfection work, floors, restrooms, and public areas based on the needs identified on site.",
    ],
    inclusions: ["Waiting and reception areas", "Patient and exam room surfaces", "Restrooms and common touchpoints", "Floors and staff work areas"],
    process: [
      { title: "Map the care environment", description: "Separate patient facing, staff, public, and support areas so each can receive an appropriate scope." },
      { title: "Confirm site requirements", description: "Review approved products, access limits, sensitive areas, and facility instructions before service begins." },
      { title: "Follow the agreed sequence", description: "Work through rooms and shared areas in the order established with the facility contact." },
    ],
    serviceContext: "Each medical client defines its required procedures, restricted areas, approved products, and site obligations. Any required credential should be confirmed during the facility review and documented in the final scope.",
    faqs: [
      { question: "Which medical spaces are included?", answer: "Current service information includes clinics, hospitals, healthcare offices, patient rooms, exam rooms, waiting areas, and shared spaces." },
      { question: "Can you follow our facility instructions?", answer: "Site requirements should be reviewed before work is proposed so they can be reflected in the scope and service plan." },
      { question: "How are healthcare credentials handled?", answer: "Share every credential and compliance requirement during the facility review so current documentation can be confirmed before service." },
    ],
    relatedLinks: [{ label: "Medical facility sanitation", href: "/services/medical-facility-sanitation" }, { label: "Patient room sanitizing", href: "/services/patient-room-sanitizing" }, { label: "Disinfection service", href: "/services/disinfection-and-sterilization" }],
    image: { src: "/images/generated/medical-cleaning-hero.webp", alt: "Bright medical office corridor prepared for patients and staff", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for clinics, medical offices, patient areas, waiting rooms, and healthcare workspaces across Dallas, Collin, and Rockwall counties.",
  },
  {
    slug: "warehouse-cleaning",
    name: "Warehouse Cleaning",
    kind: "category",
    category: "Warehouse Cleaning",
    seo: {
      title: "Warehouse Cleaning in Dallas and East DFW | LT Janitorial",
      description: "Warehouse cleaning for floors, aisles, loading docks, break rooms, high dust areas, and active support spaces across Dallas and East DFW.",
      primaryKeyword: "warehouse cleaning Dallas",
      secondaryKeywords: ["industrial cleaning Dallas", "distribution center cleaning", "warehouse floor cleaning"],
    },
    hero: {
      eyebrow: "Cleaning built for active industrial space",
      title: "Keep warehouse floors, docks, and support areas ready for the next shift",
      lede: "LT Janitorial plans warehouse cleaning around traffic lanes, receiving activity, overhead dust, break areas, and the parts of the operation that cannot simply stop.",
      primaryCta: "Request a warehouse walk through",
      secondaryCta: "Review industrial services",
    },
    overview: [
      "Warehouse cleaning has to respect movement. Pallets, lifts, deliveries, packing activity, and shift changes all affect when an aisle or dock can be serviced. A useful plan begins with the operating pattern, not a generic square footage estimate.",
      "Available services include industrial floor sweeping, loading dock cleaning, high dust attention, floor care, trash removal, and support space cleaning. The selected tasks can be organized around accessible zones and the facility schedule.",
    ],
    inclusions: ["Aisles and production support zones", "Warehouse floor sweeping", "Loading and receiving areas", "Break rooms, restrooms, and waste points"],
    process: [
      { title: "Trace traffic and access", description: "Identify equipment lanes, staging areas, dock activity, and safe windows for cleaning." },
      { title: "Prioritize soil sources", description: "Separate routine floor debris from overhead dust, waste points, and support area needs." },
      { title: "Coordinate the work", description: "Align the proposed sequence with facility access and operational restrictions." },
    ],
    serviceContext: "Industrial facilities vary widely. Product sensitivity, equipment movement, restricted zones, and site safety requirements must be shared during planning so the scope fits the operation.",
    faqs: [
      { question: "Can you clean while a warehouse is operating?", answer: "Access and operating conditions are reviewed first. The proposed service window and zone sequence must fit the facility instructions." },
      { question: "Do you clean loading docks and high areas?", answer: "Yes. Loading dock cleaning and high dust area cleaning are both part of the current service menu." },
      { question: "Is floor care available for warehouse spaces?", answer: "Yes. Industrial sweeping and other floor services can be discussed based on the surface and current condition." },
    ],
    relatedLinks: [{ label: "Warehouse cleaning services", href: "/services/warehouse-cleaning-services" }, { label: "Loading dock cleaning", href: "/services/loading-dock-cleaning" }, { label: "High dust cleaning", href: "/services/high-dust-area-cleaning" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Orderly warehouse aisle with clean concrete floors and active racking", focalPoint: "center" },
    schemaDescription: "Warehouse cleaning for industrial floors, aisles, loading docks, high dust areas, break rooms, and support spaces across Dallas and East DFW.",
  },
  {
    slug: "restaurant-cleaning",
    name: "Restaurant Cleaning",
    kind: "category",
    category: "Restaurant Cleaning",
    seo: {
      title: "Restaurant Cleaning in Dallas and East DFW | LT Janitorial",
      description: "Commercial restaurant cleaning for kitchens, dining areas, floors, counters, drains, and customer touchpoints across Dallas and East DFW.",
      primaryKeyword: "restaurant cleaning Dallas",
      secondaryKeywords: ["commercial kitchen cleaning Dallas", "dining room cleaning", "restaurant janitorial service"],
    },
    hero: {
      eyebrow: "A cleaner close for a stronger opening",
      title: "Detailed restaurant cleaning from the kitchen line to the dining room",
      lede: "LT Janitorial supports restaurant teams with focused cleaning for food preparation areas, dining spaces, floors, drains, restrooms, counters, and visible customer touchpoints.",
      primaryCta: "Request a restaurant walk through",
      secondaryCta: "Discuss service timing",
    },
    overview: [
      "Restaurants build soil quickly and in very different ways across the building. Grease and residue develop near preparation areas, spills and crumbs move across dining floors, and restrooms influence the guest experience long after the meal is served.",
      "LT Janitorial has public review evidence connected to restaurant work in Dallas, McKinney, and Frisco. The plan can focus on a deep project, recurring surface cleaning, dining area sanitizing, kitchen work, or coordinated floor care.",
    ],
    inclusions: ["Kitchen and preparation surfaces", "Dining floors and customer areas", "Restrooms and high touch points", "Grease, drain, and detail priorities"],
    process: [
      { title: "Separate front and back of house", description: "Review the soil, surfaces, and access requirements unique to customer and production areas." },
      { title: "Plan around the close", description: "Discuss a workable service window after food handling and guest activity are complete." },
      { title: "Build the detail list", description: "Prioritize the surfaces and presentation points that need deeper attention than routine staff closing tasks." },
    ],
    serviceContext: "Restaurant clients should communicate approved products, equipment restrictions, food handling boundaries, and any site procedures before service. The final scope should clearly distinguish janitorial cleaning from specialized equipment maintenance.",
    faqs: [
      { question: "Do you clean both kitchens and dining rooms?", answer: "Yes. The current menu includes kitchen deep cleaning, restaurant surface cleaning, and dining area sanitizing." },
      { question: "Can restaurant floor care be added?", answer: "Floor services can be evaluated based on the surface, finish, soil, and available service window." },
      { question: "Do you offer monthly deep cleaning?", answer: "A recurring deep cleaning schedule can be discussed during the facility walk through. Public reviews document prior monthly restaurant work." },
    ],
    relatedLinks: [{ label: "Kitchen deep cleaning", href: "/services/kitchen-deep-cleaning" }, { label: "Dining area sanitizing", href: "/services/dining-area-sanitizing" }, { label: "Restaurant surface cleaning", href: "/services/restaurant-surface-cleaning" }],
    image: { src: "/images/generated/restaurant-cleaning-hero.webp", alt: "Polished restaurant dining room prepared before opening", focalPoint: "center" },
    schemaDescription: "Commercial restaurant cleaning for kitchens, dining areas, floors, counters, drains, restrooms, and customer touchpoints across Dallas and East DFW.",
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    kind: "category",
    category: "Office Cleaning",
    seo: {
      title: "Office Cleaning in Dallas and East DFW | LT Janitorial",
      description: "Professional office cleaning for workspaces, conference rooms, reception areas, restrooms, floors, and shared touchpoints across Dallas and East DFW.",
      primaryKeyword: "office cleaning Dallas",
      secondaryKeywords: ["commercial office cleaners Dallas", "corporate office cleaning", "recurring office janitorial"],
    },
    hero: {
      eyebrow: "A professional standard for every workday",
      title: "Office cleaning that supports the people who use the space",
      lede: "LT Janitorial builds recurring and project cleaning plans for reception areas, workstations, conference rooms, restrooms, break areas, floors, and shared surfaces.",
      primaryCta: "Request an office walk through",
      secondaryCta: "Explore recurring care",
    },
    overview: [
      "An office does not need to look busy to accumulate dust, fingerprints, waste, and floor wear. Shared rooms and touchpoints can see more concentrated use than individual work areas, while reception and conference spaces carry the visual standard for the whole business.",
      "LT Janitorial can organize routine office cleaning, workspace sanitization, restroom care, trash removal, and periodic floor work into a scope that reflects attendance patterns and the way teams use the building.",
    ],
    inclusions: ["Reception and conference rooms", "Workstations and shared surfaces", "Break areas, restrooms, and waste", "Vacuuming and hard floor care"],
    process: [
      { title: "Understand the workday", description: "Review occupancy patterns, shared rooms, visitor flow, and suitable access times." },
      { title: "Set room priorities", description: "Define tasks for public, employee, restroom, and support areas." },
      { title: "Adjust with the office", description: "Revisit priorities when attendance, layouts, or facility use changes." },
    ],
    serviceContext: "Hybrid schedules can leave some areas lightly used and others consistently busy. A focused office plan should follow actual occupancy and shared space demand instead of treating every desk the same.",
    faqs: [
      { question: "How often can office cleaning be scheduled?", answer: "The current service menu supports recurring office care. Frequency is discussed after reviewing facility size, use, and priorities." },
      { question: "Can you include restrooms and trash removal?", answer: "Yes. Restroom cleaning and trash removal can be included within the office scope." },
      { question: "Do you offer office deep cleaning?", answer: "Yes. Daily deep cleaning and one time project options are available for a broader reset." },
    ],
    relatedLinks: [{ label: "Routine office cleaning", href: "/services/routine-office-cleaning" }, { label: "Workspace sanitization", href: "/services/workspace-sanitization" }, { label: "Trash removal", href: "/services/trash-removal-services" }],
    image: { src: "/images/generated/office-cleaning-hero.webp", alt: "Modern office reception and work area with clean finished surfaces", focalPoint: "center" },
    schemaDescription: "Commercial office cleaning for workspaces, reception areas, conference rooms, restrooms, floors, and shared touchpoints across Dallas and East DFW.",
  },
  {
    slug: "routine-office-cleaning",
    name: "Routine Office Cleaning",
    kind: "service",
    category: "Office Cleaning",
    seo: {
      title: "Routine Office Cleaning in Dallas | LT Janitorial",
      description: "Recurring office cleaning for reception areas, workspaces, conference rooms, restrooms, waste, and floors in Dallas and East DFW.",
      primaryKeyword: "routine office cleaning Dallas",
      secondaryKeywords: ["recurring office cleaning Dallas", "weekly office cleaning", "business janitorial service"],
    },
    hero: {
      eyebrow: "Recurring care without the generic checklist",
      title: "Keep the office ready for the people arriving tomorrow",
      lede: "Routine office cleaning brings the repeated details into one dependable scope, from reception and conference rooms to waste points, restrooms, and floors.",
      primaryCta: "Build a recurring plan",
      secondaryCta: "Schedule a walk through",
    },
    overview: [
      "Routine service is the foundation of office appearance. It manages the fingerprints, paper waste, tracked soil, restroom use, and shared room activity that return every workday. The right frequency depends on occupancy and where employees gather.",
      "LT Janitorial reviews the office as a working environment. Public areas can receive presentation focused attention, while employee spaces are planned around actual use, privacy boundaries, and accessible service windows.",
    ],
    inclusions: ["Reception and meeting room care", "Accessible workspace surfaces", "Restroom cleaning and waste removal", "Vacuuming and hard floor cleaning"],
    process: [
      { title: "Set the routine", description: "Identify recurring tasks and the office areas that need attention on each visit." },
      { title: "Clarify boundaries", description: "Document private offices, desks, equipment, and items that should not be moved." },
      { title: "Review changing needs", description: "Update the plan as staffing patterns, events, or layouts change." },
    ],
    serviceContext: "Routine office cleaning is best for facilities that need ongoing upkeep rather than a single reset. Periodic floor projects or deep cleaning can be scheduled separately when the regular scope is not intended to address restoration.",
    faqs: [
      { question: "What frequency is available for routine office cleaning?", answer: "Frequency is proposed after the facility walk through and can reflect weekly or more frequent needs identified for the space." },
      { question: "Will cleaners move papers or personal items?", answer: "Workspace boundaries should be agreed before service so staff know which accessible surfaces can be cleaned and which items remain untouched." },
      { question: "Can periodic floor work be added?", answer: "Yes. Floor maintenance can be planned alongside the recurring office scope." },
    ],
    relatedLinks: [{ label: "Office cleaning overview", href: "/services/office-cleaning" }, { label: "Workspace sanitization", href: "/services/workspace-sanitization" }, { label: "Floor maintenance", href: "/services/floor-maintenance" }],
    image: { src: "/images/generated/office-cleaning-hero.webp", alt: "Clean conference room and shared office prepared for the next workday", focalPoint: "center" },
    schemaDescription: "Recurring office cleaning for reception areas, workspaces, conference rooms, restrooms, waste points, and floors across Dallas and East DFW.",
  },
  {
    slug: "daily-deep-cleaning",
    name: "Daily Deep Cleaning",
    kind: "service",
    category: "Commercial Cleaning",
    seo: {
      title: "Daily Deep Cleaning for Dallas Businesses | LT Janitorial",
      description: "Detailed daily commercial cleaning for high use facilities that need more than light upkeep across Dallas, Collin, and Rockwall counties.",
      primaryKeyword: "daily deep cleaning Dallas",
      secondaryKeywords: ["daily commercial cleaning", "deep janitorial service Dallas", "high traffic facility cleaning"],
    },
    hero: {
      eyebrow: "Deeper attention on a recurring schedule",
      title: "Daily cleaning for facilities where surface level care is not enough",
      lede: "This program gives high use areas, restrooms, floors, touchpoints, and shared spaces a more detailed recurring scope than basic tidy up service.",
      primaryCta: "Discuss daily service",
      secondaryCta: "Compare service programs",
    },
    overview: [
      "Some buildings build visible soil within a single shift. Busy entrances, shared restrooms, food areas, patient traffic, and production support spaces can need deliberate daily attention rather than occasional deep projects.",
      "Daily deep cleaning is intended for recurring intensity. The scope should define what receives detailed care on every visit, which tasks rotate, and which restorative work remains a separate floor or project service.",
    ],
    inclusions: ["High use room priorities", "Detailed restroom and touchpoint care", "Daily floor and waste attention", "Rotating detail tasks where appropriate"],
    process: [
      { title: "Measure daily demand", description: "Review traffic, use patterns, and where conditions decline between service visits." },
      { title: "Separate daily and periodic tasks", description: "Build a realistic recurring scope while reserving restoration for planned projects." },
      { title: "Align with operations", description: "Choose a service window that accounts for closing, shift, or access requirements." },
    ],
    serviceContext: "Daily deep cleaning is different from a one time deep clean. It is a recurring program for facilities with sustained activity and should be priced from the actual building scope, not from a residential style room count.",
    faqs: [
      { question: "How is daily deep cleaning different from routine cleaning?", answer: "It assigns more detailed recurring attention to high use areas and surfaces rather than relying primarily on basic upkeep tasks." },
      { question: "Does every task happen every day?", answer: "The proposal should identify daily tasks and any rotating detail work so expectations remain clear." },
      { question: "Is floor restoration included?", answer: "Restorative floor work is normally scoped separately unless it is specifically included in the selected program." },
    ],
    relatedLinks: [{ label: "Commercial cleaning", href: "/services/commercial-cleaning" }, { label: "Restroom cleaning", href: "/services/restroom-cleaning" }, { label: "Service programs", href: "/programs" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "High use commercial interior after detailed daily cleaning", focalPoint: "center" },
    schemaDescription: "Detailed daily commercial cleaning for high use facilities across Dallas, Collin, and Rockwall counties.",
  },
  {
    slug: "workspace-sanitization",
    name: "Workspace Sanitization",
    kind: "service",
    category: "Office Cleaning",
    seo: {
      title: "Workspace Sanitization in Dallas Offices | LT Janitorial",
      description: "Workspace sanitization for accessible desks, shared rooms, break areas, and frequently touched office surfaces in Dallas and East DFW.",
      primaryKeyword: "workspace sanitization Dallas",
      secondaryKeywords: ["office surface sanitizing", "shared workspace cleaning", "office touchpoint sanitization"],
    },
    hero: {
      eyebrow: "Focused attention where teams share space",
      title: "Sanitizing for the desks, rooms, and touchpoints used throughout the day",
      lede: "Workspace sanitization adds a deliberate surface care plan for accessible work areas, shared equipment zones, conference rooms, break areas, and frequently handled touchpoints.",
      primaryCta: "Request a workspace review",
      secondaryCta: "See office cleaning",
    },
    overview: [
      "Modern offices concentrate use in shared spaces. Conference room tables, door hardware, break room counters, and common work areas may receive more contact than individual desks, especially when attendance changes through the week.",
      "LT Janitorial uses the facility walk through to identify accessible surfaces and privacy boundaries. The result is a defined sanitization scope that can support routine office cleaning without implying that sensitive electronics or personal items will be moved.",
    ],
    inclusions: ["Shared work surfaces", "Conference and collaboration rooms", "Break area touchpoints", "Frequently handled accessible surfaces"],
    process: [
      { title: "Identify shared use", description: "Map the rooms and surfaces touched by multiple people during a normal workday." },
      { title: "Confirm product and surface fit", description: "Review material needs and any client approved product requirements." },
      { title: "Set access boundaries", description: "Document personal items, electronics, and restricted areas before work begins." },
    ],
    serviceContext: "Sanitization is a targeted cleaning service. It does not replace a facility health program or represent a promise that a workspace will remain free of microorganisms after people return.",
    faqs: [
      { question: "Which surfaces can be included?", answer: "Accessible shared desks, tables, counters, door hardware, and other agreed touchpoints can be considered during scoping." },
      { question: "Will personal work items be moved?", answer: "The scope should establish clear boundaries. Personal papers, devices, and sensitive equipment are not assumed to be movable." },
      { question: "Can this be added to routine office cleaning?", answer: "Yes. Workspace sanitization can be incorporated as a focused part of a broader office plan." },
    ],
    relatedLinks: [{ label: "Routine office cleaning", href: "/services/routine-office-cleaning" }, { label: "Disinfection service", href: "/services/disinfection-and-sterilization" }, { label: "Request a quote", href: "/quote" }],
    image: { src: "/images/generated/office-cleaning-hero.webp", alt: "Shared office table and touchpoints ready for sanitizing service", focalPoint: "right center" },
    schemaDescription: "Workspace sanitization for shared office rooms, accessible work surfaces, break areas, and frequently handled touchpoints across Dallas and East DFW.",
  },
  {
    slug: "restroom-cleaning",
    name: "Restroom Cleaning",
    kind: "service",
    category: "Commercial Cleaning",
    seo: {
      title: "Commercial Restroom Cleaning in Dallas | LT Janitorial",
      description: "Commercial restroom cleaning for fixtures, partitions, counters, touchpoints, floors, and waste across Dallas and East DFW facilities.",
      primaryKeyword: "commercial restroom cleaning Dallas",
      secondaryKeywords: ["business restroom cleaning", "facility bathroom cleaning", "restroom janitorial service"],
    },
    hero: {
      eyebrow: "One room that shapes the whole facility impression",
      title: "Restroom cleaning centered on fixtures, floors, touchpoints, and presentation",
      lede: "LT Janitorial brings recurring attention to the commercial restrooms used by customers, employees, patients, and visitors throughout the day.",
      primaryCta: "Add restroom care",
      secondaryCta: "Build a facility scope",
    },
    overview: [
      "Restrooms combine moisture, touchpoints, consumable waste, and repeated traffic in a compact space. When details slip, the condition becomes noticeable quickly and can influence how people judge the rest of the building.",
      "A defined restroom scope can cover fixtures, partitions, counters, mirrors, floors, touchpoints, and waste. Consumable restocking should be discussed separately so the proposal clearly states what the client supplies and what the service includes.",
    ],
    inclusions: ["Fixtures and accessible partitions", "Counters, mirrors, and touchpoints", "Floors and visible edges", "Waste removal within the agreed scope"],
    process: [
      { title: "Review volume and condition", description: "Consider user traffic, fixture count, current buildup, and the hours available for service." },
      { title: "Define the complete room", description: "List surfaces, floor details, waste points, and any consumable responsibilities." },
      { title: "Match frequency to use", description: "Propose service timing based on actual restroom demand within the facility." },
    ],
    serviceContext: "Restroom cleaning can be part of office, restaurant, warehouse, medical, or general commercial service. The frequency should follow use levels rather than defaulting to the schedule of other rooms.",
    faqs: [
      { question: "Are supplies such as paper products included?", answer: "Consumable purchasing and restocking responsibilities should be confirmed in the proposal because they are not automatically included." },
      { question: "Can restroom cleaning be a standalone service?", answer: "A focused project can be discussed, though restroom care is often most useful within a broader facility plan." },
      { question: "How is frequency determined?", answer: "User volume, fixture count, operating hours, and current condition are reviewed during the walk through." },
    ],
    relatedLinks: [{ label: "Commercial cleaning", href: "/services/commercial-cleaning" }, { label: "Daily deep cleaning", href: "/services/daily-deep-cleaning" }, { label: "Restaurant cleaning", href: "/services/restaurant-cleaning" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Modern commercial restroom with clean fixtures and finished floors", focalPoint: "center" },
    schemaDescription: "Commercial restroom cleaning for fixtures, partitions, counters, mirrors, touchpoints, floors, and waste across Dallas and East DFW.",
  },
  {
    slug: "trash-removal-services",
    name: "Trash Removal Services",
    kind: "service",
    category: "Commercial Cleaning",
    seo: {
      title: "Commercial Trash Removal Service in Dallas | LT Janitorial",
      description: "Interior commercial trash collection and movement to designated disposal points as part of janitorial service in Dallas and East DFW.",
      primaryKeyword: "commercial trash removal Dallas",
      secondaryKeywords: ["office trash collection", "janitorial waste removal", "business bin emptying service"],
    },
    hero: {
      eyebrow: "A practical part of a complete cleaning route",
      title: "Keep interior waste points from becoming the detail everyone notices",
      lede: "LT Janitorial can collect routine interior waste and move it to the facility designated disposal point as part of an agreed commercial cleaning scope.",
      primaryCta: "Add waste service",
      secondaryCta: "Plan recurring cleaning",
    },
    overview: [
      "Waste accumulates at different rates across a facility. Break areas, reception points, restrooms, production support rooms, and individual offices each need a clear collection plan so containers do not overflow or create avoidable odors.",
      "This service is interior janitorial waste handling, not hauling or regulated waste transport. The facility should identify approved disposal locations, separation requirements, liners, and any materials the cleaning team must not handle.",
    ],
    inclusions: ["Agreed interior waste containers", "Liner replacement when supplied or included", "Movement to a designated onsite point", "Visible waste area tidying"],
    process: [
      { title: "Map waste points", description: "List containers, higher volume zones, and the approved onsite disposal location." },
      { title: "Confirm exclusions", description: "Identify regulated, hazardous, sharp, liquid, or unusual materials outside standard janitorial waste." },
      { title: "Set the collection route", description: "Coordinate removal with the broader cleaning sequence and facility access." },
    ],
    serviceContext: "Standard janitorial trash removal does not include regulated medical waste, construction hauling, hazardous materials, or offsite disposal unless a separate written scope specifically states otherwise.",
    faqs: [
      { question: "Is this a junk hauling service?", answer: "No. This service covers routine interior waste collection within a commercial janitorial scope." },
      { question: "Do you handle medical or hazardous waste?", answer: "Regulated and hazardous materials are not included in standard trash service and must be handled under the facility procedures." },
      { question: "Who provides liners?", answer: "That responsibility should be listed in the proposal so the client and cleaning team share the same expectation." },
    ],
    relatedLinks: [{ label: "Routine office cleaning", href: "/services/routine-office-cleaning" }, { label: "Warehouse cleaning", href: "/services/warehouse-cleaning" }, { label: "Commercial cleaning", href: "/services/commercial-cleaning" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Commercial support area organized for routine interior waste collection", focalPoint: "left center" },
    schemaDescription: "Routine interior commercial waste collection and movement to facility designated disposal points as part of janitorial service across Dallas and East DFW.",
  },
  {
    slug: "one-and-done-cleaning",
    name: "One and Done Cleaning",
    kind: "service",
    category: "Commercial Cleaning",
    seo: {
      title: "One Time Commercial Cleaning in Dallas | LT Janitorial",
      description: "A single visit commercial cleaning reset for facilities that need focused attention without starting a recurring program in Dallas and East DFW.",
      primaryKeyword: "one time commercial cleaning Dallas",
      secondaryKeywords: ["single visit business cleaning", "commercial deep clean Dallas", "one off janitorial cleaning"],
    },
    hero: {
      eyebrow: "One visit with a clearly defined finish line",
      title: "Reset the facility without committing to recurring service",
      lede: "One and Done Cleaning is a single visit option for businesses that need a general commercial reset before an event, inspection, return to use, or schedule change.",
      primaryCta: "Request a one time clean",
      secondaryCta: "Describe your facility",
    },
    overview: [
      "Not every cleaning need repeats. A facility may need focused attention after a busy season, before leadership arrives, following a tenant change, or simply because routine upkeep has fallen behind.",
      "One and Done Cleaning is positioned as a broad single visit reset. It differs from One Time Project Cleaning, which is intended for a more specialized or tightly defined scope such as an event, turnover, or unusual facility task.",
    ],
    inclusions: ["Single scheduled visit", "General commercial reset priorities", "Agreed floors, restrooms, and shared areas", "Clear exclusions for specialized work"],
    process: [
      { title: "Describe the reset", description: "Identify why the visit is needed and what a successful finished condition looks like." },
      { title: "Confirm the reachable scope", description: "Prioritize tasks that fit the visit, facility size, access, and current condition." },
      { title: "Complete the defined service", description: "Work against the agreed list without creating an assumed recurring commitment." },
    ],
    serviceContext: "A single visit cannot always correct long term floor wear, heavy construction residue, or specialized kitchen buildup. Those needs may require a dedicated project or restoration service after evaluation.",
    faqs: [
      { question: "Do I have to sign up for recurring service?", answer: "No. One and Done Cleaning is designed as a single visit option." },
      { question: "Is this the same as post construction cleaning?", answer: "No. Construction residue and final handoff work have a separate service scope." },
      { question: "Can the visit lead to a recurring proposal later?", answer: "Yes. A recurring plan can be discussed separately if the facility needs ongoing care after the reset." },
    ],
    relatedLinks: [{ label: "One time project cleaning", href: "/services/one-time-project-cleaning" }, { label: "Daily deep cleaning", href: "/services/daily-deep-cleaning" }, { label: "Request a quote", href: "/quote" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Commercial lobby after a focused single visit cleaning reset", focalPoint: "center" },
    schemaDescription: "Single visit commercial cleaning resets for offices and facilities across Dallas, Collin, and Rockwall counties.",
  },
  {
    slug: "strip-and-wax",
    name: "Strip and Wax",
    kind: "service",
    category: "Floor Maintenance",
    seo: {
      title: "Commercial Strip and Wax in Dallas | LT Janitorial",
      description: "Commercial strip and wax service for compatible resilient floors that need old finish removed and a new protective finish applied in Dallas and East DFW.",
      primaryKeyword: "strip and wax Dallas",
      secondaryKeywords: ["commercial floor stripping Dallas", "VCT waxing service", "floor finish restoration"],
    },
    hero: {
      eyebrow: "A full reset for worn floor finish",
      title: "Remove tired finish and rebuild a clean protective surface",
      lede: "LT Janitorial evaluates compatible commercial floors for stripping, preparation, and fresh finish when routine cleaning and burnishing can no longer restore the appearance.",
      primaryCta: "Request a floor assessment",
      secondaryCta: "See restoration options",
    },
    overview: [
      "Layers of worn finish can become dull, uneven, scratched, or discolored in traffic lanes. Adding more product does not correct a compromised base. Strip and wax service removes the old finish so the floor can be prepared for a new coating system.",
      "The method is surface dependent. LT Janitorial reviews the material, existing finish, edge buildup, furniture movement, cure window, and return to traffic before proposing the work.",
    ],
    inclusions: ["Existing finish condition review", "Removal of compatible old floor finish", "Floor preparation before coating", "Application of an agreed new finish"],
    process: [
      { title: "Assess compatibility", description: "Confirm the floor and existing coating are suitable for a strip and wax process." },
      { title: "Remove and prepare", description: "Strip the worn finish, recover residue, and prepare the surface for recoating." },
      { title: "Apply and protect", description: "Build the new finish and respect the required cure time before normal traffic returns." },
    ],
    serviceContext: "Strip and wax is not appropriate for every floor. Surface identification and a controlled service window are essential because furniture, moisture, foot traffic, and cure time affect the result.",
    faqs: [
      { question: "Which floors can be stripped and waxed?", answer: "VCT and some compatible resilient commercial floors may qualify. The surface must be evaluated before the method is selected." },
      { question: "How long must the area remain closed?", answer: "The service and cure window depends on the floor, coating system, area size, and site conditions, so timing is set in the project scope." },
      { question: "Can burnishing replace stripping?", answer: "Burnishing can improve a maintained finish, but it cannot correct every worn or failing coating. The assessment determines the appropriate level." },
    ],
    relatedLinks: [{ label: "Floor maintenance", href: "/services/floor-maintenance" }, { label: "Floor burnishing", href: "/services/floor-burnishing" }, { label: "Annual floor restoration", href: "/services/annual-floor-restoration" }],
    image: { src: "/images/generated/floor-care-hero.webp", alt: "Commercial resilient floor receiving a fresh protective finish", focalPoint: "center bottom" },
    schemaDescription: "Commercial strip and wax service for compatible resilient floors across Dallas, Collin, and Rockwall counties.",
  },
  {
    slug: "floor-burnishing",
    name: "Floor Burnishing",
    kind: "service",
    category: "Floor Maintenance",
    seo: {
      title: "Commercial Floor Burnishing in Dallas | LT Janitorial",
      description: "High speed commercial floor burnishing to improve the appearance of maintained finished floors across Dallas and East DFW.",
      primaryKeyword: "floor burnishing Dallas",
      secondaryKeywords: ["commercial floor buffing Dallas", "high speed burnishing", "finished floor polishing"],
    },
    hero: {
      eyebrow: "Interim care for a stronger finished appearance",
      title: "Bring maintained commercial floor finish back to a cleaner shine",
      lede: "Floor burnishing uses high speed equipment on compatible finished surfaces to improve appearance between larger restoration cycles.",
      primaryCta: "Evaluate your floor finish",
      secondaryCta: "Compare floor services",
    },
    overview: [
      "A finished floor can lose visual clarity as traffic creates fine abrasion and a dull path through the building. Burnishing addresses the existing finish rather than removing it, making the service useful between deeper restoration cycles when the coating remains sound.",
      "Preparation is important. Soil should be removed before high speed work, and the existing finish must be compatible with the process. LT Janitorial reviews both condition and traffic patterns before recommending a service interval.",
    ],
    inclusions: ["Finished floor condition review", "Precleaning of the service area", "High speed burnishing on compatible finish", "Traffic lane and edge appearance review"],
    process: [
      { title: "Inspect the finish", description: "Determine whether the coating can respond to burnishing or requires a deeper restoration." },
      { title: "Clean before polishing", description: "Remove loose soil and surface residue so it is not worked into the finish." },
      { title: "Burnish the planned area", description: "Use high speed equipment to improve the maintained finish and review visible traffic lanes." },
    ],
    serviceContext: "Burnishing is maintenance for a compatible coating. It is not the same as grinding concrete, polishing stone, or stripping a failed finish, and those needs should be scoped separately.",
    faqs: [
      { question: "Is burnishing the same as strip and wax?", answer: "No. Burnishing works with an existing maintained finish, while strip and wax removes and rebuilds the coating." },
      { question: "How often should a floor be burnished?", answer: "Traffic, finish type, cleaning practices, and appearance expectations determine the useful interval." },
      { question: "Can every hard floor be burnished?", answer: "No. The floor and coating must be suitable for high speed burnishing." },
    ],
    relatedLinks: [{ label: "Preventive floor care", href: "/services/preventive-floor-care" }, { label: "Strip and wax", href: "/services/strip-and-wax" }, { label: "Floor maintenance", href: "/services/floor-maintenance" }],
    image: { src: "/images/generated/floor-care-hero.webp", alt: "High speed floor burnishing on a finished commercial corridor", focalPoint: "center bottom" },
    schemaDescription: "High speed burnishing for compatible maintained commercial floor finishes across Dallas and East DFW.",
  },
  {
    slug: "annual-floor-restoration",
    name: "Annual Floor Restoration",
    kind: "service",
    category: "Floor Maintenance",
    seo: {
      title: "Commercial Floor Restoration in Dallas | LT Janitorial",
      description: "Planned annual commercial floor restoration for facilities that need a deeper reset beyond routine maintenance in Dallas and East DFW.",
      primaryKeyword: "annual floor restoration Dallas",
      secondaryKeywords: ["commercial floor restoration", "yearly floor care service", "facility floor reset"],
    },
    hero: {
      eyebrow: "A planned reset before wear becomes the standard",
      title: "Give commercial floors a deeper restoration cycle each year",
      lede: "Annual floor restoration addresses accumulated wear, tired finish, edge buildup, and presentation needs that daily cleaning cannot resolve alone.",
      primaryCta: "Plan an annual floor cycle",
      secondaryCta: "Request an assessment",
    },
    overview: [
      "Routine floor care manages the week. Annual restoration looks at what has accumulated across the year, including worn traffic lanes, layered finish, seasonal grit, and areas that receive less frequent detail attention.",
      "The word annual describes planning, not a universal method. One facility may need a finish rebuild, while another needs focused machine cleaning and corrective detail work. LT Janitorial determines the project from surface and condition.",
    ],
    inclusions: ["Yearly floor condition review", "Traffic lane and edge assessment", "Appropriate restorative method selection", "Maintenance recommendation after service"],
    process: [
      { title: "Review the maintenance history", description: "Consider prior finish work, routine methods, traffic, and problem areas." },
      { title: "Choose the restoration scope", description: "Match the service to material and condition rather than assuming every floor needs stripping." },
      { title: "Set the next maintenance path", description: "Use the completed reset as the starting point for preventive care." },
    ],
    serviceContext: "Annual restoration is useful when a facility wants to budget for predictable deeper floor work. Timing can be coordinated with holidays, shutdowns, tenant transitions, or other lower traffic periods.",
    faqs: [
      { question: "Does annual restoration always include strip and wax?", answer: "No. The appropriate method depends on surface type, existing finish, and condition." },
      { question: "Can the project be scheduled during a shutdown?", answer: "A lower traffic window can be discussed during planning, subject to crew availability and site access." },
      { question: "What happens after restoration?", answer: "Preventive maintenance can be proposed to protect the restored appearance between larger projects." },
    ],
    relatedLinks: [{ label: "Strip and wax", href: "/services/strip-and-wax" }, { label: "Preventive floor care", href: "/services/preventive-floor-care" }, { label: "Service programs", href: "/programs" }],
    image: { src: "/images/generated/floor-care-hero.webp", alt: "Restored commercial floor with even finish after annual care", focalPoint: "center" },
    schemaDescription: "Planned annual commercial floor restoration based on surface type, finish condition, and facility traffic across Dallas and East DFW.",
  },
  {
    slug: "preventive-floor-care",
    name: "Preventive Floor Care",
    kind: "service",
    category: "Floor Maintenance",
    seo: {
      title: "Preventive Commercial Floor Care in Dallas | LT Janitorial",
      description: "Preventive floor care planning that manages soil, traffic wear, and finish condition before commercial floors require major restoration.",
      primaryKeyword: "preventive floor care Dallas",
      secondaryKeywords: ["commercial floor maintenance plan", "scheduled floor care Dallas", "floor finish maintenance"],
    },
    hero: {
      eyebrow: "Protect appearance before restoration becomes urgent",
      title: "Build floor care around traffic, soil, and finish condition",
      lede: "Preventive floor care connects routine cleaning, periodic machine work, and planned restoration into a practical maintenance path for the facility.",
      primaryCta: "Build a floor care plan",
      secondaryCta: "See the Silver program",
    },
    overview: [
      "Floors rarely fail all at once. Entry soil abrades the finish, moisture affects doorways, carts create repeated paths, and missed detail work builds along edges. Preventive care looks for those patterns early.",
      "LT Janitorial can plan floor attention independently from daily cleaning, which is the purpose of its Silver service program. Facilities can also coordinate floor care with broader recurring work when one combined scope makes more sense.",
    ],
    inclusions: ["Traffic and soil pattern review", "Routine and periodic care recommendations", "Burnishing or corrective service planning", "Future restoration timing"],
    process: [
      { title: "Establish the baseline", description: "Document floor material, finish condition, entries, and primary wear lanes." },
      { title: "Assign maintenance levels", description: "Separate daily soil removal, interim care, and restorative projects." },
      { title: "Reassess condition", description: "Use visible wear and facility changes to adjust timing before damage becomes harder to correct." },
    ],
    serviceContext: "Preventive care does not promise that a floor will never need restoration. It creates a deliberate schedule so major work is planned instead of delayed until presentation has already declined.",
    faqs: [
      { question: "Can I buy floor care without daily janitorial service?", answer: "Yes. The current Silver program is described as annual and preventive floor care without daily cleaning." },
      { question: "What determines the schedule?", answer: "Surface type, entry soil, traffic volume, finish condition, and appearance expectations all affect timing." },
      { question: "Can the plan include burnishing?", answer: "Yes, when the existing finish is suitable for the process." },
    ],
    relatedLinks: [{ label: "Floor maintenance", href: "/services/floor-maintenance" }, { label: "Floor burnishing", href: "/services/floor-burnishing" }, { label: "Programs", href: "/programs" }],
    image: { src: "/images/generated/floor-care-hero.webp", alt: "Commercial floor entry and traffic lane maintained through preventive care", focalPoint: "left bottom" },
    schemaDescription: "Preventive commercial floor care planning for soil control, traffic wear, finish maintenance, and future restoration across Dallas and East DFW.",
  },
  {
    slug: "industrial-floor-sweeping",
    name: "Industrial Floor Sweeping",
    kind: "service",
    category: "Floor Maintenance",
    seo: {
      title: "Industrial Floor Sweeping in Dallas | LT Janitorial",
      description: "Industrial floor sweeping for accessible warehouse aisles, production support areas, and large commercial floors across Dallas and East DFW.",
      primaryKeyword: "industrial floor sweeping Dallas",
      secondaryKeywords: ["warehouse floor sweeping", "industrial floor cleaning Dallas", "large facility sweeping"],
    },
    hero: {
      eyebrow: "Large floor care for active operating space",
      title: "Remove loose soil from warehouse and industrial traffic lanes",
      lede: "Industrial floor sweeping targets dust, grit, and loose debris across accessible aisles and operating zones before it spreads through the rest of the facility.",
      primaryCta: "Request an industrial assessment",
      secondaryCta: "Explore warehouse cleaning",
    },
    overview: [
      "Warehouse and industrial floors receive soil from dock doors, pallets, tires, packaging, and outdoor traffic. That loose material migrates into break rooms, offices, and customer areas when the main floor is not addressed consistently.",
      "LT Janitorial reviews floor area, aisle access, equipment movement, debris type, and shutdown windows before proposing sweeping. The service can stand alone or support a larger warehouse cleaning plan.",
    ],
    inclusions: ["Accessible warehouse aisles", "Production support floor zones", "Loose dust and debris pickup", "Coordination around equipment lanes"],
    process: [
      { title: "Map accessible floor area", description: "Identify aisles, staging zones, parked equipment, and areas that must stay active." },
      { title: "Confirm debris conditions", description: "Review material type and exclude liquids, hazardous waste, and items requiring specialized handling." },
      { title: "Sweep in coordinated zones", description: "Work through released sections without assuming unrestricted access to the full operation." },
    ],
    serviceContext: "Industrial sweeping addresses loose dry soil on suitable accessible floors. Spill response, hazardous material handling, and specialized production sanitation require separate evaluation.",
    faqs: [
      { question: "Can sweeping be completed around warehouse activity?", answer: "The service sequence depends on safe access, equipment movement, and facility instructions." },
      { question: "Does sweeping include liquid spills?", answer: "No. Liquid or unknown material response requires separate identification and approval." },
      { question: "Can loading docks be included?", answer: "Yes. Loading dock cleaning is available as a related service with its own scope." },
    ],
    relatedLinks: [{ label: "Warehouse cleaning", href: "/services/warehouse-cleaning" }, { label: "Loading dock cleaning", href: "/services/loading-dock-cleaning" }, { label: "High dust area cleaning", href: "/services/high-dust-area-cleaning" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Industrial warehouse floor prepared for machine sweeping", focalPoint: "center bottom" },
    schemaDescription: "Industrial floor sweeping for accessible warehouse aisles, production support zones, and large commercial floors across Dallas and East DFW.",
  },
  {
    slug: "warehouse-cleaning-services",
    name: "Warehouse Cleaning Services",
    kind: "service",
    category: "Warehouse Cleaning",
    seo: {
      title: "Warehouse Cleaning Services in Dallas | LT Janitorial",
      description: "Scoped warehouse cleaning for aisles, floors, docks, break rooms, restrooms, waste points, and accessible overhead areas in Dallas and East DFW.",
      primaryKeyword: "warehouse cleaning services Dallas",
      secondaryKeywords: ["distribution center cleaners", "industrial janitorial Dallas", "warehouse deep cleaning"],
    },
    hero: {
      eyebrow: "A defined scope for the whole warehouse environment",
      title: "Coordinate floors, docks, support rooms, and high areas in one plan",
      lede: "Warehouse Cleaning Services brings multiple industrial cleaning needs together for facilities that want more than a single floor or dock task.",
      primaryCta: "Walk the warehouse",
      secondaryCta: "Choose service priorities",
    },
    overview: [
      "This service is the working package within the broader Warehouse Cleaning category. It can combine accessible floor sweeping, loading dock attention, high dust work, break rooms, restrooms, waste points, and other released support areas.",
      "The plan is built by zone because large facilities rarely offer full access at one time. LT Janitorial reviews operational restrictions, safe service windows, soil sources, and which areas create the greatest impact before organizing the route.",
    ],
    inclusions: ["Warehouse aisle and floor priorities", "Dock and receiving support", "Employee break and restroom areas", "Accessible high dust zones by agreement"],
    process: [
      { title: "Divide the building into zones", description: "Separate receiving, storage, operating, employee, and public areas for practical scoping." },
      { title: "Match tasks to each zone", description: "Assign floor, dust, waste, restroom, and detail needs where they actually occur." },
      { title: "Coordinate the route", description: "Plan work around released areas, shifts, and facility safety instructions." },
    ],
    serviceContext: "Warehouse Cleaning Services is a combined facility scope. Specialized production equipment, hazardous materials, inaccessible elevated areas, and regulated processes are outside the standard assumption and require separate review.",
    faqs: [
      { question: "Can we choose only certain warehouse zones?", answer: "Yes. The scope can focus on released priority areas instead of assuming the entire building is included." },
      { question: "Are break rooms and restrooms available?", answer: "Yes. Employee support spaces can be incorporated into the warehouse service plan." },
      { question: "Do you clean production equipment?", answer: "Equipment cleaning is not assumed. Any specialized asset must be reviewed and specifically approved in writing." },
    ],
    relatedLinks: [{ label: "Warehouse cleaning overview", href: "/services/warehouse-cleaning" }, { label: "Industrial floor sweeping", href: "/services/industrial-floor-sweeping" }, { label: "Loading dock cleaning", href: "/services/loading-dock-cleaning" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Warehouse operating zones organized for a coordinated cleaning route", focalPoint: "center" },
    schemaDescription: "Coordinated warehouse cleaning for floors, aisles, docks, break rooms, restrooms, waste points, and accessible high areas across Dallas and East DFW.",
  },
  {
    slug: "loading-dock-cleaning",
    name: "Loading Dock Cleaning",
    kind: "service",
    category: "Warehouse Cleaning",
    seo: {
      title: "Loading Dock Cleaning in Dallas | LT Janitorial",
      description: "Commercial loading dock cleaning for loose debris, dust, floor soil, edges, and designated receiving areas across Dallas and East DFW.",
      primaryKeyword: "loading dock cleaning Dallas",
      secondaryKeywords: ["warehouse dock cleaning", "receiving area cleaning", "industrial dock floor service"],
    },
    hero: {
      eyebrow: "Control soil where the outside meets the operation",
      title: "Clean the dock before debris travels into the warehouse",
      lede: "Loading dock cleaning targets loose packaging, tracked soil, dust, edges, and accessible receiving areas during a service window coordinated with facility traffic.",
      primaryCta: "Review your dock schedule",
      secondaryCta: "Explore warehouse service",
    },
    overview: [
      "Dock areas are transfer points for more than freight. Outdoor grit, damaged packaging, pallet fragments, and tire soil enter through receiving and can spread along warehouse travel paths if they remain at the source.",
      "LT Janitorial scopes the dock around delivery schedules, trailer activity, compactors, waste zones, and equipment lanes. Service is limited to areas the facility can release safely for cleaning.",
    ],
    inclusions: ["Loose debris in released dock zones", "Accessible dock floor sweeping", "Edges and designated staging points", "Coordination with receiving activity"],
    process: [
      { title: "Review dock movement", description: "Identify delivery peaks, trailer positions, equipment traffic, and workable access windows." },
      { title: "Separate standard and restricted material", description: "Confirm which debris is ordinary and which requires facility controlled handling." },
      { title: "Clean released sections", description: "Address accessible floors and edges without entering active loading lanes." },
    ],
    serviceContext: "Dock cleaning does not include moving freight, operating client equipment, entering trailers, or handling unknown spills unless those items are separately approved and properly supported.",
    faqs: [
      { question: "Can the dock be cleaned while trucks are arriving?", answer: "A safe service window and released sections must be established with the facility before work begins." },
      { question: "Do you remove pallets or freight?", answer: "No. Moving freight and operational materials is not assumed within standard dock cleaning." },
      { question: "Can dock cleaning be paired with warehouse sweeping?", answer: "Yes. Pairing the source area with interior traffic lanes can create a more complete floor plan." },
    ],
    relatedLinks: [{ label: "Industrial floor sweeping", href: "/services/industrial-floor-sweeping" }, { label: "Warehouse cleaning services", href: "/services/warehouse-cleaning-services" }, { label: "Trash removal services", href: "/services/trash-removal-services" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Commercial loading dock floor and receiving edge ready for cleaning", focalPoint: "left center" },
    schemaDescription: "Loading dock cleaning for loose debris, dust, floor soil, edges, and designated receiving zones across Dallas and East DFW.",
  },
  {
    slug: "high-dust-area-cleaning",
    name: "High Dust Area Cleaning",
    kind: "service",
    category: "Warehouse Cleaning",
    seo: {
      title: "High Dust Area Cleaning in Dallas | LT Janitorial",
      description: "Planned cleaning for accessible overhead ledges, beams, rafters, ducts, fixtures, and high warehouse surfaces in Dallas and East DFW.",
      primaryKeyword: "high dust cleaning Dallas",
      secondaryKeywords: ["warehouse high dust cleaning", "overhead industrial cleaning", "rafter and beam dusting"],
    },
    hero: {
      eyebrow: "Attention above the normal cleaning line",
      title: "Address overhead dust before it settles back into active space",
      lede: "High Dust Area Cleaning focuses on approved accessible ledges, beams, rafters, ducts, sprinkler surroundings, and light fixtures that routine floor level service does not reach.",
      primaryCta: "Request a high area review",
      secondaryCta: "Discuss access requirements",
    },
    overview: [
      "Dust does not remain overhead forever. Air movement, vibration, and facility activity can return buildup from beams and ledges to products, equipment zones, and floors below. These surfaces need their own project plan because height changes both access and sequencing.",
      "LT Janitorial reviews ceiling height, surface accessibility, lift restrictions, sensitive areas below, and facility safety procedures before defining the work. Only approved and safely reachable areas belong in the final scope.",
    ],
    inclusions: ["Approved overhead ledges", "Accessible beams and rafters", "Selected ducts and fixture exteriors", "Protection and sequencing for areas below"],
    process: [
      { title: "Survey overhead conditions", description: "Identify height, access obstacles, buildup, and the operational area beneath each surface." },
      { title: "Approve the access plan", description: "Confirm equipment, clearance, facility rules, and which components must remain untouched." },
      { title: "Work from high to low", description: "Coordinate overhead dust removal with cleanup of released surfaces and floors below." },
    ],
    serviceContext: "High area cleaning is subject to safe access and site approval. Electrical components, active machinery, inaccessible structures, and regulated environments require additional evaluation and may be excluded.",
    faqs: [
      { question: "Which high surfaces can be cleaned?", answer: "Potential areas include accessible ledges, beams, rafters, ducts, sprinkler surroundings, and fixture exteriors after site review." },
      { question: "Is lift access included automatically?", answer: "No. Access equipment and facility approval must be addressed in the specific project proposal." },
      { question: "Should floor cleaning follow high dust work?", answer: "Usually the sequence should account for material that may settle below, so related floor cleanup is discussed during scoping." },
    ],
    relatedLinks: [{ label: "Warehouse cleaning", href: "/services/warehouse-cleaning" }, { label: "Warehouse cleaning services", href: "/services/warehouse-cleaning-services" }, { label: "Industrial floor sweeping", href: "/services/industrial-floor-sweeping" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Warehouse beams and overhead ledges reviewed for high dust cleaning", focalPoint: "center top" },
    schemaDescription: "High dust area cleaning for approved accessible ledges, beams, rafters, ducts, and fixture exteriors across Dallas and East DFW.",
  },
  {
    slug: "medical-facility-sanitation",
    name: "Medical Facility Sanitation",
    kind: "service",
    category: "Medical Facility Cleaning",
    seo: {
      title: "Medical Facility Sanitation in Dallas | LT Janitorial",
      description: "Planned sanitation service for clinics, medical offices, waiting rooms, exam areas, floors, and shared surfaces in Dallas and East DFW.",
      primaryKeyword: "medical facility sanitation Dallas",
      secondaryKeywords: ["clinic sanitation service", "medical office sanitizing", "healthcare workspace cleaning"],
    },
    hero: {
      eyebrow: "A sanitation scope shaped by the facility",
      title: "Support patient and staff spaces with deliberate surface care",
      lede: "Medical Facility Sanitation organizes agreed cleaning and sanitizing tasks for public, patient, staff, and support areas while respecting site instructions.",
      primaryCta: "Schedule a facility review",
      secondaryCta: "Discuss site requirements",
    },
    overview: [
      "Sanitation needs differ between a reception room, an exam area, a staff station, and a public restroom. A useful plan separates those spaces so cleaning sequences and product instructions can follow the way the facility operates.",
      "LT Janitorial builds the proposed scope from the client requirements communicated during the walk through. The final plan documents cleaning tasks, facility instructions, approved products, and the limits of the janitorial work.",
    ],
    inclusions: ["Waiting and reception surfaces", "Agreed exam and patient areas", "Staff and shared touchpoints", "Restrooms and compatible floors"],
    process: [
      { title: "Classify the spaces", description: "Separate public, patient, staff, and support zones before assigning tasks." },
      { title: "Review facility instructions", description: "Confirm approved products, restricted items, access, and required sequences." },
      { title: "Document the agreed scope", description: "Keep included areas and client responsibilities clear before service starts." },
    ],
    serviceContext: "Medical facilities must communicate applicable procedures, restrictions, and credential requirements. Cleaning and sanitizing support does not replace the facility's clinical, privacy, or infection control responsibilities.",
    faqs: [
      { question: "Is this service available for clinics and medical offices?", answer: "Yes. The current service information names clinics, healthcare offices, waiting areas, exam rooms, and patient spaces." },
      { question: "Will you use our approved products?", answer: "Product requirements should be reviewed during scoping and listed in the final proposal." },
      { question: "Does this service guarantee a clinical outcome?", answer: "No. The service follows the agreed cleaning and sanitizing scope, while clinical outcomes remain outside janitorial control." },
    ],
    relatedLinks: [{ label: "Medical facility cleaning", href: "/services/medical-facility-cleaning" }, { label: "Patient room sanitizing", href: "/services/patient-room-sanitizing" }, { label: "Cleaning and surface disinfection", href: "/services/disinfection-and-sterilization" }],
    image: { src: "/images/generated/medical-cleaning-hero.webp", alt: "Medical reception and patient area prepared for sanitation service", focalPoint: "center" },
    schemaDescription: "Planned sanitation service for clinics, medical offices, waiting rooms, patient areas, restrooms, floors, and shared surfaces across Dallas and East DFW.",
  },
  {
    slug: "patient-room-sanitizing",
    name: "Patient Room Sanitizing",
    kind: "service",
    category: "Medical Facility Cleaning",
    seo: {
      title: "Patient Room Sanitizing in Dallas | LT Janitorial",
      description: "Patient room sanitizing for agreed accessible surfaces, fixtures, floors, and touchpoints under facility direction in Dallas and East DFW.",
      primaryKeyword: "patient room sanitizing Dallas",
      secondaryKeywords: ["exam room cleaning Dallas", "patient area sanitizing", "medical room cleaning service"],
    },
    hero: {
      eyebrow: "Room level attention guided by the care environment",
      title: "Sanitize agreed patient room surfaces with a clear sequence",
      lede: "LT Janitorial follows the facility approved scope for accessible touchpoints, fixtures, surfaces, and floors within patient or exam rooms released for service.",
      primaryCta: "Review patient room needs",
      secondaryCta: "Explore medical cleaning",
    },
    overview: [
      "Patient rooms combine frequently handled surfaces with equipment and materials that may have strict boundaries. The cleaning team needs to know what is released, what remains in place, and what the facility expects before entering the room.",
      "This service focuses on agreed accessible room components and the sequence supplied by the facility. Clinical equipment, sharps, regulated waste, and restricted surfaces are not assumed within standard janitorial work.",
    ],
    inclusions: ["Released accessible room surfaces", "Agreed fixtures and touchpoints", "Compatible patient room floors", "Room reset tasks listed in the scope"],
    process: [
      { title: "Confirm room release", description: "Verify that the room is available and any regulated materials have been handled by facility staff." },
      { title: "Follow the approved sequence", description: "Work through the accessible surfaces and floor according to the documented room plan." },
      { title: "Respect every boundary", description: "Leave clinical equipment and restricted materials untouched unless specifically authorized." },
    ],
    serviceContext: "Patient room work requires clear facility direction. Regulated medical waste, clinical equipment, and restricted surfaces remain under the facility's approved procedures unless a written scope states otherwise.",
    faqs: [
      { question: "Do you handle sharps or regulated medical waste?", answer: "No. Those materials must be managed through facility approved procedures and are outside the standard janitorial scope." },
      { question: "Can exam rooms be included?", answer: "Yes. Released exam and patient rooms can be reviewed for an agreed accessible surface scope." },
      { question: "Who defines restricted equipment?", answer: "The medical facility should identify equipment, materials, and surfaces the cleaning team must not touch." },
    ],
    relatedLinks: [{ label: "Medical facility sanitation", href: "/services/medical-facility-sanitation" }, { label: "Medical facility cleaning", href: "/services/medical-facility-cleaning" }, { label: "Request a quote", href: "/quote" }],
    image: { src: "/images/generated/medical-cleaning-hero.webp", alt: "Prepared patient room with accessible surfaces ready for sanitizing", focalPoint: "right center" },
    schemaDescription: "Patient room and exam room sanitizing for agreed accessible surfaces, fixtures, floors, and touchpoints under facility direction across Dallas and East DFW.",
  },
  {
    slug: "disinfection-and-sterilization",
    name: "Cleaning and Surface Disinfection",
    kind: "service",
    category: "Medical Facility Cleaning",
    seo: {
      title: "Commercial Disinfection Service in Dallas | LT Janitorial",
      description: "Targeted commercial surface disinfection using an agreed product and contact time plan for eligible facility areas in Dallas and East DFW.",
      primaryKeyword: "commercial disinfection service Dallas",
      secondaryKeywords: ["facility surface disinfection", "office disinfection Dallas", "medical surface disinfection"],
    },
    hero: {
      eyebrow: "Targeted surface treatment with clear limits",
      title: "Plan disinfection around the surface, product, and required contact time",
      lede: "LT Janitorial can scope targeted disinfection for eligible accessible surfaces after cleaning, using products and instructions agreed with the facility.",
      primaryCta: "Discuss disinfection needs",
      secondaryCta: "Review service limits",
    },
    overview: [
      "Disinfection is not simply spraying a room. Effective product use depends on prior soil removal, surface compatibility, label directions, coverage, and contact time. The facility and provider need a shared understanding of each of those steps.",
      "This service is limited to agreed cleaning and surface disinfection. Instrument sterilization, sterile processing, and clinical procedures remain outside the janitorial scope and require qualified medical processes.",
    ],
    inclusions: ["Eligible accessible surface review", "Cleaning before disinfection where included", "Agreed product and label direction use", "Defined treatment zones and exclusions"],
    process: [
      { title: "Identify eligible surfaces", description: "Confirm materials, access, sensitive equipment, and the reason the service is requested." },
      { title: "Clean before treatment", description: "Remove visible soil where the scope calls for cleaning prior to disinfectant application." },
      { title: "Follow product directions", description: "Apply the agreed product according to its label, including the stated contact time." },
    ],
    serviceContext: "Commercial surface disinfection supports an agreed facility plan. It does not include medical instrument sterilization, sterile processing, or a guaranteed clinical outcome after occupants return.",
    faqs: [
      { question: "Is cleaning the same as disinfecting?", answer: "No. Cleaning removes soil, while disinfection uses an appropriate product on an eligible surface after the required preparation." },
      { question: "Do you sterilize medical instruments?", answer: "No. Medical instrument sterilization and sterile processing are outside this janitorial service." },
      { question: "Can a facility specify approved products?", answer: "Yes. Product requirements and surface restrictions should be discussed before the proposal is finalized." },
    ],
    relatedLinks: [{ label: "Medical facility sanitation", href: "/services/medical-facility-sanitation" }, { label: "Workspace sanitization", href: "/services/workspace-sanitization" }, { label: "Commercial cleaning", href: "/services/commercial-cleaning" }],
    image: { src: "/images/generated/medical-cleaning-hero.webp", alt: "Commercial touchpoint prepared for targeted surface disinfection", focalPoint: "center" },
    schemaDescription: "Targeted commercial surface disinfection using an agreed product and contact time plan for eligible accessible facility areas across Dallas and East DFW.",
  },
  {
    slug: "restaurant-surface-cleaning",
    name: "Restaurant Surface Cleaning",
    kind: "service",
    category: "Restaurant Cleaning",
    seo: {
      title: "Restaurant Surface Cleaning in Dallas | LT Janitorial",
      description: "Commercial restaurant surface cleaning for counters, accessible preparation areas, service points, fixtures, and customer touchpoints in Dallas and East DFW.",
      primaryKeyword: "restaurant surface cleaning Dallas",
      secondaryKeywords: ["restaurant counter cleaning", "commercial food service cleaning", "restaurant touchpoint cleaning"],
    },
    hero: {
      eyebrow: "Detail work across front and back of house",
      title: "Clean the restaurant surfaces that collect a full day of service",
      lede: "Restaurant Surface Cleaning focuses on agreed counters, service points, accessible preparation surfaces, fixtures, and guest touchpoints after operations are ready for cleaning.",
      primaryCta: "Review restaurant surfaces",
      secondaryCta: "Plan a service window",
    },
    overview: [
      "Restaurant surfaces collect different residues depending on their role. Guest counters show fingerprints and spills, service stations see repeated handling, and preparation areas can hold film that requires more focused attention after food operations end.",
      "LT Janitorial separates eligible surfaces from equipment interiors and food handling items. The restaurant should provide approved product guidance and release each area before janitorial work begins.",
    ],
    inclusions: ["Agreed counters and service points", "Accessible preparation surfaces", "Fixture exteriors and touchpoints", "Surface appropriate soil removal"],
    process: [
      { title: "Map surface types", description: "Identify stainless steel, laminate, glass, tile, and other materials within the requested area." },
      { title: "Confirm operating boundaries", description: "Ensure food handling is complete and restricted items are removed or identified." },
      { title: "Clean by material and use", description: "Apply the agreed method to each eligible surface and finish visible presentation areas." },
    ],
    serviceContext: "Surface cleaning does not include dismantling kitchen equipment, internal appliance maintenance, exhaust systems, or regulated food safety certification unless separately evaluated.",
    faqs: [
      { question: "Do you clean inside restaurant equipment?", answer: "Equipment interiors are not assumed. Any specialized request must be reviewed and written into the scope." },
      { question: "Can the restaurant specify cleaning products?", answer: "Yes. Approved product requirements should be communicated before service." },
      { question: "Can dining room surfaces be included?", answer: "Yes. Dining area sanitizing is available as a related service." },
    ],
    relatedLinks: [{ label: "Restaurant cleaning", href: "/services/restaurant-cleaning" }, { label: "Kitchen deep cleaning", href: "/services/kitchen-deep-cleaning" }, { label: "Dining area sanitizing", href: "/services/dining-area-sanitizing" }],
    image: { src: "/images/generated/restaurant-cleaning-hero.webp", alt: "Restaurant counter and service surfaces prepared for detailed cleaning", focalPoint: "left center" },
    schemaDescription: "Commercial restaurant surface cleaning for counters, accessible preparation areas, service points, fixtures, and customer touchpoints across Dallas and East DFW.",
  },
  {
    slug: "dining-area-sanitizing",
    name: "Dining Area Sanitizing",
    kind: "service",
    category: "Restaurant Cleaning",
    seo: {
      title: "Dining Area Sanitizing in Dallas | LT Janitorial",
      description: "Dining area sanitizing for tables, seating touchpoints, service stations, entry surfaces, and compatible floors across Dallas and East DFW.",
      primaryKeyword: "dining area sanitizing Dallas",
      secondaryKeywords: ["restaurant dining room cleaning", "table and seating sanitizing", "front of house cleaning"],
    },
    hero: {
      eyebrow: "Front of house care for the guest experience",
      title: "Prepare dining spaces for the next room of guests",
      lede: "Dining Area Sanitizing gives focused attention to tables, seating touchpoints, service stations, entry surfaces, and other agreed front of house areas.",
      primaryCta: "Plan front of house care",
      secondaryCta: "See restaurant cleaning",
    },
    overview: [
      "The dining room is where cleanliness becomes visible to every guest. Crumbs gather along seating edges, fingerprints remain on dividers and doors, and floor soil becomes especially noticeable under open lighting.",
      "This service extends beyond quick table turnover by organizing a broader front of house scope after guest activity ends. It can be paired with kitchen work or recurring restaurant cleaning for one coordinated close.",
    ],
    inclusions: ["Tables and agreed seating touchpoints", "Host and service station surfaces", "Entry and door touchpoints", "Compatible dining floors and visible edges"],
    process: [
      { title: "Review the room layout", description: "Identify seating types, service stations, entry points, and movement needed for access." },
      { title: "Release the dining area", description: "Confirm guest service has ended and restaurant items are cleared according to site procedures." },
      { title: "Work from surfaces to floor", description: "Complete agreed touchpoints and fixtures before finishing the dining floor." },
    ],
    serviceContext: "Dining area sanitizing is front of house janitorial work. Staff turnover tasks, tableware handling, and food service responsibilities remain with the restaurant unless specifically stated otherwise.",
    faqs: [
      { question: "Does this include tables and chairs?", answer: "Agreed table surfaces and accessible seating touchpoints can be included after the restaurant releases the area." },
      { question: "Can floor care be added?", answer: "Yes. The appropriate floor service depends on surface type and condition." },
      { question: "Can this be coordinated with kitchen cleaning?", answer: "Yes. Front and back of house work can be organized under one planned service window." },
    ],
    relatedLinks: [{ label: "Restaurant cleaning", href: "/services/restaurant-cleaning" }, { label: "Restaurant surface cleaning", href: "/services/restaurant-surface-cleaning" }, { label: "Floor maintenance", href: "/services/floor-maintenance" }],
    image: { src: "/images/generated/restaurant-cleaning-hero.webp", alt: "Restaurant dining room tables and seating ready for sanitizing", focalPoint: "center" },
    schemaDescription: "LT Janitorial sanitizes agreed dining room tables, seating touchpoints, service stations, entry surfaces, and compatible floors across Dallas and East DFW.",
  },
  {
    slug: "kitchen-deep-cleaning",
    name: "Kitchen Deep Cleaning",
    kind: "service",
    category: "Restaurant Cleaning",
    seo: {
      title: "Commercial Kitchen Deep Cleaning in Dallas | LT Janitorial",
      description: "Detailed commercial kitchen cleaning for agreed preparation surfaces, counters, floors, drains, and accessible exterior areas in Dallas and East DFW.",
      primaryKeyword: "commercial kitchen deep cleaning Dallas",
      secondaryKeywords: ["restaurant kitchen cleaning", "kitchen floor and drain cleaning", "back of house deep clean"],
    },
    hero: {
      eyebrow: "A deeper reset for the back of house",
      title: "Address grease, floor soil, drains, and accessible kitchen surfaces",
      lede: "Kitchen Deep Cleaning focuses on the agreed back of house areas that need more detailed attention than routine staff closing work.",
      primaryCta: "Request a kitchen review",
      secondaryCta: "Define the project scope",
    },
    overview: [
      "Commercial kitchens build layered soil through heat, moisture, grease, foot traffic, and repeated production. Floors and edges can require different methods from counters and stainless surfaces, so a useful deep clean is divided by material and access.",
      "LT Janitorial reviews preparation areas, accessible equipment exteriors, drains, floors, counters, and closing procedures. Exhaust systems, internal equipment, and specialized hood work are not assumed within the standard service.",
    ],
    inclusions: ["Agreed preparation and counter surfaces", "Accessible equipment exteriors", "Kitchen floors, edges, and selected drains", "Focused grease and residue attention"],
    process: [
      { title: "Inspect after production", description: "Review soil conditions when the kitchen is shut down and released for cleaning." },
      { title: "Separate surfaces and restrictions", description: "Identify approved methods, equipment boundaries, and food handling exclusions." },
      { title: "Clean in a controlled sequence", description: "Address higher and working surfaces before completing the floor and drain scope." },
    ],
    serviceContext: "Kitchen deep cleaning is a defined janitorial project. Hood exhaust service, fire suppression components, internal machinery, and maintenance work require specialized providers unless separately confirmed.",
    faqs: [
      { question: "Is hood cleaning included?", answer: "No. Specialized hood and exhaust system work is not assumed within this janitorial service." },
      { question: "Can drains be included?", answer: "Selected accessible drains can be reviewed, but plumbing service and deep line maintenance are separate." },
      { question: "Do you clean during food preparation?", answer: "The service should be scheduled after production stops and the restaurant releases the area." },
    ],
    relatedLinks: [{ label: "Restaurant surface cleaning", href: "/services/restaurant-surface-cleaning" }, { label: "Dining area sanitizing", href: "/services/dining-area-sanitizing" }, { label: "Restaurant cleaning", href: "/services/restaurant-cleaning" }],
    image: { src: "/images/generated/restaurant-cleaning-hero.webp", alt: "Commercial restaurant kitchen ready for a detailed after hours cleaning", focalPoint: "right center" },
    schemaDescription: "Commercial kitchen deep cleaning for agreed preparation surfaces, accessible equipment exteriors, floors, edges, and selected drains across Dallas and East DFW.",
  },
  {
    slug: "post-renovation-cleanup",
    name: "Post Renovation Cleanup",
    kind: "service",
    category: "Post Construction Cleaning",
    seo: {
      title: "Post Renovation Cleanup in Dallas | LT Janitorial",
      description: "Commercial post renovation cleanup for dust, residue, fixtures, surfaces, floors, and reopened work areas across Dallas and East DFW.",
      primaryKeyword: "post renovation cleanup Dallas",
      secondaryKeywords: ["commercial remodel cleanup", "tenant improvement cleaning", "office renovation cleaning"],
    },
    hero: {
      eyebrow: "Bring occupied space back from the renovation zone",
      title: "Clear the dust and detail work left after commercial improvements",
      lede: "Post Renovation Cleanup helps offices, restaurants, retail spaces, and facilities move from completed improvement work back toward normal use.",
      primaryCta: "Discuss your renovation",
      secondaryCta: "Schedule a site walk",
    },
    overview: [
      "Renovation dust travels beyond the immediate work zone. Fine particles settle on existing furniture, ledges, vents, and adjacent floors, while labels, film, and material residue remain on newly installed features.",
      "Unlike new construction cleaning, renovation work often happens beside occupied or retained space. LT Janitorial reviews separation boundaries, protected items, remaining trade activity, and the order in which rooms will return to use.",
    ],
    inclusions: ["Released renovation zone cleanup", "Fine dust on agreed accessible surfaces", "Fixture and finish detail attention", "Adjacent floor and transition area cleaning"],
    process: [
      { title: "Define the renovation boundary", description: "Identify completed rooms, occupied areas, protected contents, and any space still controlled by trades." },
      { title: "Remove broad soil first", description: "Address released debris and dust before detailed work on retained surfaces and new finishes." },
      { title: "Prepare rooms for return", description: "Finish the agreed touchpoints, floors, and presentation areas before the space reopens." },
    ],
    serviceContext: "Renovation cleanup should begin after the relevant trade work is complete. New dust or residue created by later punch work may require an additional visit and should be handled in the project schedule.",
    faqs: [
      { question: "Can you clean around occupied parts of a building?", answer: "The site walk can define released renovation zones and occupied boundaries. Safe access and separation must be maintained." },
      { question: "Do you remove construction debris?", answer: "Loose debris and packaging can be discussed. Large haul off, dumpsters, and trade waste are not assumed." },
      { question: "When should cleanup be scheduled?", answer: "After the work area is released by the contractor and major dust producing activity is complete." },
    ],
    relatedLinks: [{ label: "Post construction cleaning", href: "/services/post-construction-cleaning" }, { label: "Debris and dust removal", href: "/services/debris-and-dust-removal" }, { label: "Final site cleaning", href: "/services/final-site-cleaning" }],
    image: { src: "/images/generated/post-construction-cleaning-hero.webp", alt: "Renovated commercial interior receiving final dust and surface cleanup", focalPoint: "center" },
    schemaDescription: "LT Janitorial cleans released commercial renovation areas, including accessible dust, residue, fixtures, surfaces, and floors across Dallas and East DFW.",
  },
  {
    slug: "debris-and-dust-removal",
    name: "Debris and Dust Removal",
    kind: "service",
    category: "Post Construction Cleaning",
    seo: {
      title: "Construction Dust Removal in Dallas | LT Janitorial",
      description: "Commercial construction dust and light debris removal from released interior work zones, accessible surfaces, and floors across Dallas and East DFW.",
      primaryKeyword: "construction dust removal Dallas",
      secondaryKeywords: ["light construction debris cleanup", "commercial dust cleanup", "post build interior cleaning"],
    },
    hero: {
      eyebrow: "The broad cleanup before finish detailing begins",
      title: "Remove loose debris and settled construction dust from released space",
      lede: "Debris and Dust Removal addresses the material, packaging, and fine particulate left across commercial interiors after active trade work ends.",
      primaryCta: "Review the released area",
      secondaryCta: "Plan final cleaning",
    },
    overview: [
      "Construction creates both obvious and nearly invisible residue. Packaging and offcuts collect at floor level, while fine dust settles on horizontal surfaces, vents, fixtures, sills, and newly installed materials.",
      "This service focuses on manageable interior debris and accessible dust within a released work zone. Heavy demolition material, dumpsters, hazardous substances, and trade controlled disposal remain outside the standard assumption.",
    ],
    inclusions: ["Light loose interior debris", "Packaging and manageable offcuts by agreement", "Settled dust on accessible surfaces", "Released floor and ledge cleanup"],
    process: [
      { title: "Confirm material responsibility", description: "Separate standard cleanup material from contractor haul off, hazardous waste, and items that remain in use." },
      { title: "Clear the broad debris", description: "Remove approved loose material before dust detail work begins." },
      { title: "Capture remaining dust", description: "Work through accessible surfaces and floors in a high to low sequence." },
    ],
    serviceContext: "The project should have an approved disposal point and clearly defined material limits. Unknown substances, sharp hazards, and heavy construction waste require contractor direction or a specialized provider.",
    faqs: [
      { question: "Do you provide a construction dumpster?", answer: "No. Dumpster service and offsite hauling are outside the standard scope. Disposal arrangements must be confirmed for the project." },
      { question: "Can fine dust be removed from vents and ledges?", answer: "Accessible vent exteriors, ledges, and surfaces can be reviewed for inclusion." },
      { question: "Is this the final cleaning step?", answer: "It is often an early cleanup phase. Final site cleaning adds presentation focused detail after broad debris and dust are controlled." },
    ],
    relatedLinks: [{ label: "Final site cleaning", href: "/services/final-site-cleaning" }, { label: "Post renovation cleanup", href: "/services/post-renovation-cleanup" }, { label: "Post construction cleaning", href: "/services/post-construction-cleaning" }],
    image: { src: "/images/generated/post-construction-cleaning-hero.webp", alt: "Released commercial construction area with dust and light debris ready for removal", focalPoint: "left center" },
    schemaDescription: "Commercial construction dust and light interior debris removal for released work zones, accessible surfaces, and floors across Dallas and East DFW.",
  },
  {
    slug: "final-site-cleaning",
    name: "Final Site Cleaning",
    kind: "service",
    category: "Post Construction Cleaning",
    seo: {
      title: "Final Site Cleaning in Dallas | LT Janitorial",
      description: "Presentation focused final cleaning for completed commercial interiors before owner handoff, tenant opening, or return to use in Dallas and East DFW.",
      primaryKeyword: "final site cleaning Dallas",
      secondaryKeywords: ["final construction clean Dallas", "commercial handoff cleaning", "tenant opening cleanup"],
    },
    hero: {
      eyebrow: "The presentation pass before handoff",
      title: "Finish the commercial space for owners, tenants, and opening day",
      lede: "Final Site Cleaning focuses on completed rooms, visible surfaces, fixtures, floors, glass, and details that shape the last project impression.",
      primaryCta: "Plan the final clean",
      secondaryCta: "Share the handoff date",
    },
    overview: [
      "Final cleaning begins after broad debris is gone and construction activity has settled. At this stage, the work shifts toward presentation, including fingerprints on fixtures, residue on surfaces, floor condition, accessible glass, and details visible during the handoff walk.",
      "LT Janitorial coordinates the clean with the released area and target date. If trades return after service, the proposal should explain whether a touchup visit is included or handled as additional work.",
    ],
    inclusions: ["Completed room presentation cleaning", "Fixture and finish detail work", "Accessible interior glass by agreement", "Final floor care for the released space"],
    process: [
      { title: "Confirm final readiness", description: "Verify that the rooms are complete, utilities are available, and dust producing work has ended." },
      { title: "Detail the visible finish", description: "Clean agreed surfaces, fixtures, glass, edges, and touchpoints from high to low." },
      { title: "Complete the floor pass", description: "Finish floors after upper surfaces so the released space is ready for presentation." },
    ],
    serviceContext: "Final Site Cleaning is designed for handoff quality presentation, but it does not replace contractor punch work, repairs, paint correction, or removal of materials still owned by active trades.",
    faqs: [
      { question: "What must be complete before final cleaning?", answer: "Major construction and dust producing work should be complete in the released area, with utilities and access available." },
      { question: "Can interior glass be included?", answer: "Accessible interior glass can be considered. Exterior, elevated, or specialty glass requires separate review." },
      { question: "What if a trade returns after the clean?", answer: "The proposal should state whether a later touchup is included or would be additional work." },
    ],
    relatedLinks: [{ label: "Debris and dust removal", href: "/services/debris-and-dust-removal" }, { label: "Post construction cleaning", href: "/services/post-construction-cleaning" }, { label: "One time project cleaning", href: "/services/one-time-project-cleaning" }],
    image: { src: "/images/generated/post-construction-cleaning-hero.webp", alt: "Completed commercial interior polished for owner and tenant handoff", focalPoint: "right center" },
    schemaDescription: "Presentation focused final cleaning for completed commercial interiors before owner handoff, tenant opening, or return to use across Dallas and East DFW.",
  },
  {
    slug: "one-time-project-cleaning",
    name: "One Time Project Cleaning",
    kind: "service",
    category: "Commercial Cleaning",
    seo: {
      title: "One Time Project Cleaning in Dallas | LT Janitorial",
      description: "Scoped commercial project cleaning for events, turnovers, after hours sanitation, and unusual facility needs across Dallas and East DFW.",
      primaryKeyword: "one time project cleaning Dallas",
      secondaryKeywords: ["commercial project cleaning", "facility turnover cleaning", "after event business cleaning"],
    },
    hero: {
      eyebrow: "A custom scope for a need outside the routine",
      title: "Plan a commercial cleaning project around one defined outcome",
      lede: "One Time Project Cleaning is built for special events, turnovers, after hours needs, and focused facility work that does not fit a recurring checklist.",
      primaryCta: "Describe your project",
      secondaryCta: "Request a site walk",
    },
    overview: [
      "A project clean begins with the outcome. The business may need a room returned to use, a facility prepared before an event, a turnover completed between occupants, or a specific area addressed outside its normal schedule.",
      "This service differs from One and Done Cleaning because the scope is specialized and project led rather than a broad general reset. LT Janitorial defines the areas, tasks, access, timing, and exclusions before the work is scheduled.",
    ],
    inclusions: ["Event or turnover priorities", "Defined rooms and task list", "After hours service planning where available", "Project specific completion criteria"],
    process: [
      { title: "Name the outcome", description: "Clarify what must be ready, for whom, and by what date." },
      { title: "Build the project scope", description: "List included areas, surfaces, access, disposal needs, and tasks requiring separate expertise." },
      { title: "Coordinate completion", description: "Schedule the work around facility availability and the target use of the space." },
    ],
    serviceContext: "One time projects vary too much for an automatic package. A facility walk through or detailed project discussion is the best way to establish a realistic scope and completion standard.",
    faqs: [
      { question: "What kinds of projects can be discussed?", answer: "Current service information mentions special events, turnovers, after hours sanitation, renovation cleanup, and other defined facility needs." },
      { question: "Is recurring service required?", answer: "No. This is a standalone project option." },
      { question: "Can a project include floor care?", answer: "Yes. Appropriate floor work can be evaluated and listed as part of the project scope." },
    ],
    relatedLinks: [{ label: "One and Done Cleaning", href: "/services/one-and-done-cleaning" }, { label: "Post renovation cleanup", href: "/services/post-renovation-cleanup" }, { label: "Request a quote", href: "/quote" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Commercial facility prepared for a clearly scoped one time cleaning project", focalPoint: "center" },
    schemaDescription: "Scoped commercial project cleaning for events, turnovers, after hours needs, and unusual facility work across Dallas, Collin, and Rockwall counties.",
  },
];

export const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

export const serviceCategories = services.filter((service) => service.kind === "category");

export const bookableServices = services.filter((service) => service.kind === "service");
