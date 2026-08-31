import type { HeroContent, ImageMapping, PageFaq, RelatedLink, SeoMetadata } from "./services";

export type LocationServiceFocus = {
  name: string;
  why: string;
  href: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  type: "city" | "county";
  county: string;
  launchStatus: "ready" | "owner_confirmation_required";
  seo: SeoMetadata;
  hero: HeroContent;
  overview: [string, string];
  facilityPriorities: string[];
  localContext: string;
  serviceFocus: LocationServiceFocus[];
  faqs: PageFaq[];
  relatedLinks: RelatedLink[];
  image: ImageMapping;
  schemaDescription: string;
};

export const locations: LocationPage[] = [
  {
    slug: "dallas",
    name: "Dallas",
    type: "city",
    county: "Dallas County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in Dallas, TX | LT Janitorial",
      description: "Commercial cleaning and floor care for Dallas offices, medical spaces, restaurants, retail facilities, warehouses, and project sites.",
      primaryKeyword: "commercial cleaning Dallas TX",
      secondaryKeywords: ["Dallas janitorial service", "office cleaning Dallas", "commercial floor care Dallas"],
    },
    hero: {
      eyebrow: "Commercial cleaning in Dallas, Texas",
      title: "Facility care built for the pace and variety of Dallas business",
      lede: "LT Janitorial serves Dallas commercial spaces with recurring cleaning, floor care, restaurant and medical facility support, warehouse service, and post construction project cleaning.",
      primaryCta: "Request a Dallas facility walk through",
      secondaryCta: "Call 469 597 7230",
    },
    overview: [
      "Dallas facilities range from high visibility offices and medical spaces to distribution buildings, restaurants, retail floors, and renovated commercial interiors. Each environment has a different operating rhythm, so the cleaning plan should begin with use, traffic, surfaces, and access.",
      "LT Janitorial supports the city with recurring janitorial care and focused projects. Public reviews connect the company to Dallas restaurant work, commercial offices, retail restoration, and hospital cleaning, showing how the service can adapt to very different local facilities.",
    ],
    facilityPriorities: ["Reception, office, and conference presentation", "Restaurant kitchens, dining areas, and restrooms", "Medical waiting, patient, and staff spaces", "Warehouse floors, docks, and construction handoffs"],
    localContext: "Dallas has a broad commercial base that includes corporate offices, healthcare and research institutions, professional services, logistics, restaurants, retail, and advanced industry. The service plan should reflect the specific building instead of assuming that downtown offices and industrial corridors need the same work.",
    serviceFocus: [
      { name: "Commercial Cleaning", why: "A flexible starting point for mixed use offices and facilities with public and employee areas.", href: "/services/commercial-cleaning" },
      { name: "Restaurant Cleaning", why: "Relevant to Dallas dining spaces that need coordinated front and back of house attention.", href: "/services/restaurant-cleaning" },
      { name: "Post Construction Cleaning", why: "Supports tenant improvements, renovations, and new commercial handoffs.", href: "/services/post-construction-cleaning" },
    ],
    faqs: [
      { question: "Which parts of Dallas do you serve?", answer: "Dallas is within the core Dallas County service territory. Exact availability is confirmed after reviewing the facility location and service window." },
      { question: "Can Dallas businesses request recurring cleaning and floor care together?", answer: "Yes. A combined plan can be proposed after the facility and floor condition are reviewed." },
      { question: "Is there proof of prior Dallas work?", answer: "Public Google reviews connect LT Janitorial to restaurant, office, retail, and hospital cleaning in the Dallas market." },
    ],
    relatedLinks: [{ label: "Dallas County cleaning", href: "/service-areas/dallas-county" }, { label: "Commercial cleaning", href: "/services/commercial-cleaning" }, { label: "Request a quote", href: "/quote" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Refined Dallas commercial interior prepared for staff and visitors", focalPoint: "center" },
    schemaDescription: "Commercial cleaning, floor care, restaurant, medical, warehouse, and post construction cleaning services for facilities in Dallas, Texas.",
  },
  {
    slug: "garland",
    name: "Garland",
    type: "city",
    county: "Dallas County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in Garland, TX | LT Janitorial",
      description: "Commercial and industrial cleaning for Garland manufacturers, warehouses, offices, retail facilities, restaurants, and shared workspaces.",
      primaryKeyword: "commercial cleaning Garland TX",
      secondaryKeywords: ["Garland janitorial service", "industrial cleaning Garland", "warehouse cleaning Garland"],
    },
    hero: {
      eyebrow: "Commercial cleaning in Garland, Texas",
      title: "Cleaning support for Garland offices, industry, retail, and active facilities",
      lede: "LT Janitorial brings commercial cleaning, industrial floor care, warehouse service, and detailed project work to Garland facilities across Dallas County.",
      primaryCta: "Request a Garland walk through",
      secondaryCta: "Explore industrial cleaning",
    },
    overview: [
      "Garland combines established industrial buildings with offices, commercial centers, retail corridors, and restaurants. Facilities in older and newer properties can face very different floor conditions, loading patterns, and presentation expectations.",
      "A Garland plan can focus on the areas that drive the operation, from warehouse aisles and receiving zones to employee restrooms, office entrances, and customer facing floors. The scope is built after LT Janitorial sees how the site moves through a normal workday.",
    ],
    facilityPriorities: ["Manufacturing and industrial support areas", "Warehouse aisles and receiving zones", "Established commercial floor restoration", "Office, retail, and employee spaces"],
    localContext: "Garland has a substantial industrial, commercial, and retail footprint. That mix makes zone planning important because the soil entering a production or receiving area should not be treated like the presentation needs of a front office or customer entrance.",
    serviceFocus: [
      { name: "Warehouse Cleaning", why: "Organizes aisles, docks, support rooms, waste, and high dust needs around facility movement.", href: "/services/warehouse-cleaning" },
      { name: "Industrial Floor Sweeping", why: "Targets loose grit and debris across accessible operating floors.", href: "/services/industrial-floor-sweeping" },
      { name: "Floor Maintenance", why: "Creates a path for worn finishes and commercial entry floors that need more than daily cleaning.", href: "/services/floor-maintenance" },
    ],
    faqs: [
      { question: "Does LT Janitorial serve Garland?", answer: "Yes. Garland is within the current Dallas County service territory. Scheduling depends on the facility address, service window, and requested work." },
      { question: "Can warehouse and office areas be included together?", answer: "Yes. The site can be divided into industrial, employee, and public zones with different tasks for each." },
      { question: "Is floor restoration available for older commercial surfaces?", answer: "Floor condition and material can be evaluated for preventive care, burnishing, strip and wax, or another appropriate service." },
    ],
    relatedLinks: [{ label: "Dallas County service area", href: "/service-areas/dallas-county" }, { label: "Warehouse cleaning", href: "/services/warehouse-cleaning" }, { label: "Floor maintenance", href: "/services/floor-maintenance" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Garland industrial facility with clean warehouse floor and organized work zones", focalPoint: "center" },
    schemaDescription: "Commercial and industrial cleaning for Garland manufacturers, warehouses, offices, retail facilities, and restaurants in Dallas County, Texas.",
  },
  {
    slug: "mesquite",
    name: "Mesquite",
    type: "city",
    county: "Dallas County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in Mesquite, TX | LT Janitorial",
      description: "Commercial cleaning for Mesquite logistics facilities, warehouses, retail centers, offices, medical spaces, and restaurants.",
      primaryKeyword: "commercial cleaning Mesquite TX",
      secondaryKeywords: ["Mesquite janitorial service", "warehouse cleaning Mesquite", "office cleaners Mesquite"],
    },
    hero: {
      eyebrow: "Commercial cleaning in Mesquite, Texas",
      title: "Facility cleaning for a city built around logistics, retail, and local business",
      lede: "LT Janitorial supports Mesquite facilities with warehouse cleaning, floor care, office janitorial work, restaurant cleaning, and focused commercial projects.",
      primaryCta: "Request a Mesquite walk through",
      secondaryCta: "Build a facility scope",
    },
    overview: [
      "Mesquite has a strong logistics and industrial presence near major transportation routes, alongside retail, hospitality, healthcare, offices, and long established neighborhood businesses. That mix creates cleaning needs ranging from dock soil and warehouse dust to customer ready floors and restrooms.",
      "LT Janitorial can divide a Mesquite facility by function and service window. A distribution operation may prioritize sweeping and docks, while a retail or medical space may place more weight on touchpoints, floors, waiting areas, and visible detail work.",
    ],
    facilityPriorities: ["Logistics and distribution floor soil", "Loading, receiving, and warehouse support areas", "Retail and restaurant presentation", "Medical, office, and public restrooms"],
    localContext: "City planning and economic development records identify manufacturing, industrial, logistics, retail, commercial, office, hospitality, and medical activity in Mesquite. The range makes this a strong market for both industrial service and customer facing janitorial care.",
    serviceFocus: [
      { name: "Loading Dock Cleaning", why: "Helps control soil where deliveries and exterior traffic enter the building.", href: "/services/loading-dock-cleaning" },
      { name: "Commercial Cleaning", why: "Builds one facility plan across offices, restrooms, floors, and shared areas.", href: "/services/commercial-cleaning" },
      { name: "Restaurant Cleaning", why: "Supports Mesquite dining spaces with distinct front and back of house scopes.", href: "/services/restaurant-cleaning" },
    ],
    faqs: [
      { question: "Is Mesquite within the current service territory?", answer: "Yes. Mesquite is within the core Dallas County service territory. Final availability depends on the facility and schedule." },
      { question: "Can logistics facilities request dock and floor work together?", answer: "Yes. Dock cleaning and industrial sweeping can be coordinated after access and traffic patterns are reviewed." },
      { question: "Do you clean retail and medical spaces in Mesquite?", answer: "Those facility types fit the current commercial and medical service menu, subject to a site specific proposal." },
    ],
    relatedLinks: [{ label: "Dallas County cleaning", href: "/service-areas/dallas-county" }, { label: "Loading dock cleaning", href: "/services/loading-dock-cleaning" }, { label: "Commercial cleaning", href: "/services/commercial-cleaning" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Mesquite logistics facility with clean receiving and warehouse floors", focalPoint: "left center" },
    schemaDescription: "Commercial cleaning for Mesquite logistics facilities, warehouses, retail centers, offices, medical spaces, and restaurants in Dallas County, Texas.",
  },
  {
    slug: "rockwall",
    name: "Rockwall",
    type: "city",
    county: "Rockwall County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in Rockwall, TX | LT Janitorial",
      description: "Commercial cleaning and floor care for Rockwall offices, medical spaces, hospitality businesses, restaurants, retail, and industrial facilities.",
      primaryKeyword: "commercial cleaning Rockwall TX",
      secondaryKeywords: ["Rockwall janitorial service", "office cleaning Rockwall", "floor care Rockwall"],
    },
    hero: {
      eyebrow: "Commercial cleaning in Rockwall, Texas",
      title: "Local facility care for Rockwall business, hospitality, and industry",
      lede: "LT Janitorial serves Rockwall facilities with commercial cleaning, floor care, restaurant and medical support, industrial service, and project cleaning.",
      primaryCta: "Request a Rockwall walk through",
      secondaryCta: "Call the local team",
    },
    overview: [
      "Rockwall brings together local offices, healthcare services, hospitality, restaurants, construction, retail, and advanced manufacturing. Facilities near high traffic commercial areas face customer presentation needs, while industrial buildings require a different approach to floors, dust, and receiving zones.",
      "LT Janitorial can build either a recurring care plan or a focused project around the facility. Rockwall also sits near Heath and Royse City, allowing nearby businesses to discuss route availability and coordinated facility needs.",
    ],
    facilityPriorities: ["Hospitality and restaurant presentation", "Medical and professional office cleaning", "Retail floors and customer touchpoints", "Advanced manufacturing and industrial support"],
    localContext: "Rockwall economic development research identifies hospitality, health services, construction, advanced manufacturing, corporate employers, and local commercial services as meaningful parts of the economy. That diversity supports a service menu broader than office cleaning alone.",
    serviceFocus: [
      { name: "Medical Facility Cleaning", why: "Supports patient facing, staff, waiting, and shared medical spaces through a defined scope.", href: "/services/medical-facility-cleaning" },
      { name: "Restaurant Cleaning", why: "Addresses kitchens, dining areas, restrooms, floors, and visible guest surfaces.", href: "/services/restaurant-cleaning" },
      { name: "Floor Maintenance", why: "Helps customer facing and industrial facilities plan routine and restorative floor work.", href: "/services/floor-maintenance" },
    ],
    faqs: [
      { question: "Does LT Janitorial serve Rockwall?", answer: "Yes. Rockwall is within the current Rockwall County service territory." },
      { question: "Can restaurants and medical facilities request specialized scopes?", answer: "Yes. Both are supported by the current service menu and receive separate planning based on how the space operates." },
      { question: "Are one time floor projects available?", answer: "Yes. Floor projects can be evaluated independently from recurring janitorial service." },
    ],
    relatedLinks: [{ label: "Rockwall County service area", href: "/service-areas/rockwall-county" }, { label: "Heath commercial cleaning", href: "/service-areas/heath" }, { label: "Royse City commercial cleaning", href: "/service-areas/royse-city" }],
    image: { src: "/images/generated/restaurant-cleaning-hero.webp", alt: "Rockwall commercial hospitality interior with polished floors and clean guest areas", focalPoint: "center" },
    schemaDescription: "LT Janitorial provides commercial cleaning and floor care for Rockwall offices, medical spaces, hospitality businesses, restaurants, retail, and industrial facilities.",
  },
  {
    slug: "royse-city",
    name: "Royse City",
    type: "city",
    county: "Rockwall County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in Royse City, TX | LT Janitorial",
      description: "Commercial cleaning for Royse City offices, medical facilities, growing retail, restaurants, new construction, and established downtown businesses.",
      primaryKeyword: "commercial cleaning Royse City TX",
      secondaryKeywords: ["Royse City janitorial service", "office cleaning Royse City", "post construction cleaning Royse City"],
    },
    hero: {
      eyebrow: "Commercial cleaning in Royse City, Texas",
      title: "Cleaning for a growing city without losing sight of local business",
      lede: "LT Janitorial supports Royse City facilities from established Main Street spaces to new medical, retail, office, and commercial construction projects.",
      primaryCta: "Request a Royse City walk through",
      secondaryCta: "Discuss a new facility",
    },
    overview: [
      "Royse City combines a nationally recognized historic Main Street district with sustained residential growth, new commercial interest, medical development, shopping areas, and restaurants. Cleaning needs can shift quickly as new spaces open and existing businesses welcome more traffic.",
      "LT Janitorial can help an established office protect its daily presentation or prepare a newly improved facility for opening. Post construction cleaning, floor restoration, and recurring commercial care each solve a different stage of that growth.",
    ],
    facilityPriorities: ["New commercial and medical openings", "Main Street shops, offices, and restaurants", "Post renovation and construction handoff", "Recurring care as customer traffic grows"],
    localContext: "City records describe consistent growth, increasing commercial interest, medical office demand, evolving retail, and an active historic downtown. Royse City therefore needs both opening focused project cleaning and ongoing local facility care.",
    serviceFocus: [
      { name: "Post Construction Cleaning", why: "Prepares new and improved commercial rooms for tenant or owner handoff.", href: "/services/post-construction-cleaning" },
      { name: "Routine Office Cleaning", why: "Supports established professional spaces with a recurring plan.", href: "/services/routine-office-cleaning" },
      { name: "Restaurant Cleaning", why: "Fits downtown and growth corridor dining spaces with front and back of house needs.", href: "/services/restaurant-cleaning" },
    ],
    faqs: [
      { question: "Is Royse City a confirmed service market?", answer: "Yes. Royse City is within the current Rockwall County service territory. Exact availability is confirmed from the facility address and schedule." },
      { question: "Can you clean a new business before opening?", answer: "Post construction, post renovation, debris and dust removal, and final site cleaning can be evaluated for completed commercial space." },
      { question: "Do you work with smaller downtown businesses?", answer: "The proposal can be sized around the actual office, shop, restaurant, or shared facility rather than requiring a large building format." },
    ],
    relatedLinks: [{ label: "Rockwall County cleaning", href: "/service-areas/rockwall-county" }, { label: "Post construction cleaning", href: "/services/post-construction-cleaning" }, { label: "Rockwall commercial cleaning", href: "/service-areas/rockwall" }],
    image: { src: "/images/generated/post-construction-cleaning-hero.webp", alt: "New Royse City commercial space receiving final opening preparation", focalPoint: "center" },
    schemaDescription: "Commercial cleaning for Royse City offices, medical facilities, retail, restaurants, new construction, and established downtown businesses.",
  },
  {
    slug: "heath",
    name: "Heath",
    type: "city",
    county: "Rockwall County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in Heath, TX | LT Janitorial",
      description: "Commercial cleaning for Heath professional offices, medical and dental spaces, retail, dining, and carefully planned new commercial facilities.",
      primaryKeyword: "commercial cleaning Heath TX",
      secondaryKeywords: ["Heath janitorial service", "office cleaning Heath Texas", "medical office cleaning Heath"],
    },
    hero: {
      eyebrow: "Commercial cleaning in Heath, Texas",
      title: "Refined facility care for Heath offices and customer facing spaces",
      lede: "LT Janitorial brings commercial cleaning, floor care, medical office service, restaurant support, and final project cleaning to Heath facilities in Rockwall County.",
      primaryCta: "Request a Heath walk through",
      secondaryCta: "Plan a polished opening",
    },
    overview: [
      "Heath is planning commercial growth with close attention to community character, especially around its Towne Center vision. Professional offices, medical and dental spaces, retail, dining, and future mixed commercial uses benefit from cleaning that treats presentation as part of the customer experience.",
      "A smaller facility can still require a precise scope. LT Janitorial can plan touchpoints, floors, restrooms, reception areas, and periodic deep work without importing an industrial checklist into a client facing environment.",
    ],
    facilityPriorities: ["Professional reception and office presentation", "Medical and dental patient spaces", "Retail and dining touchpoints", "New commercial opening and floor care"],
    localContext: "Heath planning documents emphasize thoughtful commercial development and a concentrated Towne Center with dining and future business uses while maintaining local character. Service here should feel careful, discreet, and proportionate to the facility.",
    serviceFocus: [
      { name: "Office Cleaning", why: "Supports smaller professional environments with clear privacy and access boundaries.", href: "/services/office-cleaning" },
      { name: "Medical Facility Cleaning", why: "Organizes patient, waiting, staff, and restroom areas according to site instructions.", href: "/services/medical-facility-cleaning" },
      { name: "Floor Maintenance", why: "Protects the appearance of customer facing entries and commercial floors.", href: "/services/floor-maintenance" },
    ],
    faqs: [
      { question: "Does LT Janitorial currently serve Heath?", answer: "Yes. Heath is within the current Rockwall County service territory. Scheduling depends on the facility and requested work." },
      { question: "Can a small professional office request service?", answer: "Yes. The scope is based on the facility and its actual needs, not only on large square footage." },
      { question: "Can new retail or dining space receive final cleaning?", answer: "Completed commercial construction and renovation areas can be reviewed for final site cleaning before opening." },
    ],
    relatedLinks: [{ label: "Rockwall County cleaning", href: "/service-areas/rockwall-county" }, { label: "Office cleaning", href: "/services/office-cleaning" }, { label: "Medical facility cleaning", href: "/services/medical-facility-cleaning" }],
    image: { src: "/images/generated/medical-cleaning-hero.webp", alt: "Refined Heath professional and medical reception area with clean finishes", focalPoint: "center" },
    schemaDescription: "LT Janitorial serves Heath professional offices, medical and dental spaces, retail, dining, and new commercial facilities with scoped commercial cleaning.",
  },
  {
    slug: "caddo-mills",
    name: "Caddo Mills",
    type: "city",
    county: "Hunt County",
    launchStatus: "owner_confirmation_required",
    seo: {
      title: "Commercial Cleaning Near Caddo Mills, TX | LT Janitorial",
      description: "Ask about commercial cleaning availability for Caddo Mills offices, schools, local businesses, warehouses, and growing facilities near Interstate 30.",
      primaryKeyword: "commercial cleaning Caddo Mills TX",
      secondaryKeywords: ["Caddo Mills janitorial service", "office cleaning Caddo Mills", "warehouse cleaning Caddo Mills"],
    },
    hero: {
      eyebrow: "Ask about Caddo Mills service availability",
      title: "Commercial cleaning planned around the facility and travel route",
      lede: "Caddo Mills has appeared in LT Janitorial's public service area information. Because it sits outside the three core counties, availability should be confirmed for each facility before scheduling.",
      primaryCta: "Confirm service availability",
      secondaryCta: "Describe your facility",
    },
    overview: [
      "Caddo Mills is a smaller Hunt County community with local offices, schools, service businesses, aviation activity, and growth near Interstate 30. Facilities here may need a practical combination of routine janitorial work, floor care, or project cleaning without a large urban building package.",
      "LT Janitorial has publicly listed Caddo Mills, while its primary territory statement names Dallas, Collin, and Rockwall counties. For that reason, the team confirms the address, service window, and current travel availability before proposing recurring work in Hunt County.",
    ],
    facilityPriorities: ["Route and service window confirmation", "Local office and small business cleaning", "School and activity space planning", "Warehouse or new commercial project scope"],
    localContext: "Caddo Mills requires a conservative approach because the public city list and county list do not fully agree. Every inquiry should begin with availability confirmation rather than a promise of routine coverage throughout Hunt County.",
    serviceFocus: [
      { name: "Commercial Cleaning", why: "Allows the scope to fit a smaller office, local business, or mixed facility.", href: "/services/commercial-cleaning" },
      { name: "Floor Maintenance", why: "Provides standalone preventive or restorative care when recurring service is not needed.", href: "/services/floor-maintenance" },
      { name: "One Time Project Cleaning", why: "Works for a defined need when ongoing route availability is not the right fit.", href: "/services/one-time-project-cleaning" },
    ],
    faqs: [
      { question: "Is Caddo Mills definitely in the active service area?", answer: "It is listed on the current Facebook page, but Hunt County is not part of the three county website statement. Direct confirmation is required." },
      { question: "Why is availability confirmed before quoting?", answer: "Caddo Mills is outside the three core counties, so route capacity, address, and service window need to be reviewed first." },
      { question: "Can a one time project still be requested?", answer: "A project can be discussed, but availability and travel must be confirmed before service is promised." },
    ],
    relatedLinks: [{ label: "Rockwall County cleaning", href: "/service-areas/rockwall-county" }, { label: "Royse City cleaning", href: "/service-areas/royse-city" }, { label: "Ask about availability", href: "/contact" }],
    image: { src: "/images/generated/warehouse-cleaning-hero.webp", alt: "Small commercial and warehouse facility representative of Caddo Mills service inquiries", focalPoint: "center" },
    schemaDescription: "Commercial cleaning availability inquiries for offices, local businesses, schools, warehouses, and project sites in Caddo Mills, Texas.",
  },
  {
    slug: "plano",
    name: "Plano",
    type: "city",
    county: "Collin County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in Plano, TX | LT Janitorial",
      description: "Commercial cleaning for Plano corporate offices, professional services, medical spaces, technology facilities, restaurants, and commercial floors.",
      primaryKeyword: "commercial cleaning Plano TX",
      secondaryKeywords: ["Plano janitorial service", "corporate office cleaning Plano", "medical office cleaning Plano"],
    },
    hero: {
      eyebrow: "Commercial cleaning in Plano, Texas",
      title: "Office and facility care for Plano corporate and professional environments",
      lede: "LT Janitorial supports Plano headquarters, regional offices, medical spaces, professional services, restaurants, and mixed commercial facilities with carefully scoped cleaning and floor care.",
      primaryCta: "Request a Plano walk through",
      secondaryCta: "Build an office plan",
    },
    overview: [
      "Plano is known for headquarters, regional offices, financial services, technology, professional businesses, life sciences, healthcare, and specialized manufacturing. Those facilities often combine polished public spaces with dense employee work areas and rooms that receive very different levels of daily use.",
      "LT Janitorial can organize reception, conference, restroom, break area, workspace, and floor priorities without treating every square foot alike. Periodic restoration can be separated from routine care so floor projects do not disappear inside the daily checklist.",
    ],
    facilityPriorities: ["Corporate lobby and conference presentation", "Hybrid workspace and shared room use", "Medical and professional office touchpoints", "Periodic care for high visibility floors"],
    localContext: "Plano economic development sources identify corporate headquarters, financial services, technology, medical and health, life sciences, professional services, and manufacturing as key parts of the city economy. A Plano page should lead with office sophistication while still supporting clinical and specialty facility needs.",
    serviceFocus: [
      { name: "Office Cleaning", why: "Builds a room by room program for reception, work, meeting, restroom, and break spaces.", href: "/services/office-cleaning" },
      { name: "Workspace Sanitization", why: "Targets shared rooms and frequently handled accessible surfaces in flexible offices.", href: "/services/workspace-sanitization" },
      { name: "Floor Maintenance", why: "Supports corporate presentation with preventive and restorative care.", href: "/services/floor-maintenance" },
    ],
    faqs: [
      { question: "Is Plano in the current service area?", answer: "Yes. Plano is within Collin County, one of the three core service counties." },
      { question: "Can corporate offices set privacy boundaries?", answer: "Yes. Sensitive rooms, desks, devices, and documents should be identified during the walk through and reflected in the scope." },
      { question: "Can floor maintenance be scheduled independently?", answer: "Yes. Preventive and annual floor care can be planned separately from daily janitorial service." },
    ],
    relatedLinks: [{ label: "Collin County cleaning", href: "/service-areas/collin-county" }, { label: "Office cleaning", href: "/services/office-cleaning" }, { label: "Floor maintenance", href: "/services/floor-maintenance" }],
    image: { src: "/images/generated/office-cleaning-hero.webp", alt: "Plano corporate office lobby and workspace with polished commercial finishes", focalPoint: "center" },
    schemaDescription: "LT Janitorial provides scoped commercial cleaning for Plano corporate offices, professional services, medical spaces, technology facilities, restaurants, and floors.",
  },
  {
    slug: "mckinney",
    name: "McKinney",
    type: "city",
    county: "Collin County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in McKinney, TX | LT Janitorial",
      description: "Commercial cleaning for McKinney medical spaces, offices, restaurants, retail, manufacturing, new construction, and growing business districts.",
      primaryKeyword: "commercial cleaning McKinney TX",
      secondaryKeywords: ["McKinney janitorial service", "restaurant cleaning McKinney", "medical office cleaning McKinney"],
    },
    hero: {
      eyebrow: "Commercial cleaning in McKinney, Texas",
      title: "Facility cleaning for McKinney growth, healthcare, offices, and local destinations",
      lede: "LT Janitorial brings documented restaurant experience and a broad commercial service menu to McKinney offices, medical spaces, retail, industrial facilities, and project sites.",
      primaryCta: "Request a McKinney walk through",
      secondaryCta: "Explore restaurant service",
    },
    overview: [
      "McKinney balances a historic downtown with new commercial construction, restaurants, hotels, offices, healthcare, manufacturing, aviation, and major employers. Existing buildings and newly delivered spaces call for different care, from sensitive floor restoration to final dust removal before opening.",
      "A public Google review specifically connects LT Janitorial to monthly deep cleaning for a McKinney restaurant. That local proof supports restaurant work here, while the broader service menu allows offices, medical facilities, and new commercial projects to receive their own distinct scopes.",
    ],
    facilityPriorities: ["Restaurant kitchen and dining detail work", "Medical and office facility cleaning", "Historic and specialty retail floor care", "New commercial construction handoff"],
    localContext: "McKinney reporting shows substantial commercial construction and a business base spanning corporate offices, healthcare, manufacturing, retail, restaurants, hotels, and aviation. Cleaning plans need to connect established local character with the maintenance demands of continuing growth.",
    serviceFocus: [
      { name: "Restaurant Cleaning", why: "Supported by public review evidence for monthly deep cleaning in McKinney.", href: "/services/restaurant-cleaning" },
      { name: "Post Construction Cleaning", why: "Relevant to the city commercial building and tenant improvement pipeline.", href: "/services/post-construction-cleaning" },
      { name: "Medical Facility Cleaning", why: "Fits patient facing and professional care environments with site directed scopes.", href: "/services/medical-facility-cleaning" },
    ],
    faqs: [
      { question: "Does LT Janitorial serve McKinney?", answer: "Yes. McKinney is within the current Collin County service territory." },
      { question: "Is there evidence of McKinney restaurant experience?", answer: "Yes. A public review references prior monthly deep cleaning for a restaurant location in McKinney." },
      { question: "Can new commercial spaces receive final cleaning?", answer: "Yes. Released construction and renovation spaces can be reviewed for debris, dust, detail, and final presentation work." },
    ],
    relatedLinks: [{ label: "Collin County cleaning", href: "/service-areas/collin-county" }, { label: "Restaurant cleaning", href: "/services/restaurant-cleaning" }, { label: "Post construction cleaning", href: "/services/post-construction-cleaning" }],
    image: { src: "/images/generated/restaurant-cleaning-hero.webp", alt: "McKinney restaurant and hospitality interior with clean dining surfaces", focalPoint: "center" },
    schemaDescription: "LT Janitorial serves McKinney medical spaces, offices, restaurants, retail, manufacturing support areas, and completed commercial project sites.",
  },
  {
    slug: "frisco",
    name: "Frisco",
    type: "city",
    county: "Collin County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning in Frisco, TX | LT Janitorial",
      description: "Commercial cleaning for Frisco corporate offices, sports and entertainment facilities, hospitality, restaurants, medical spaces, and mixed use properties.",
      primaryKeyword: "commercial cleaning Frisco TX",
      secondaryKeywords: ["Frisco janitorial service", "office cleaning Frisco", "restaurant cleaning Frisco"],
    },
    hero: {
      eyebrow: "Commercial cleaning in Frisco, Texas",
      title: "Facility care for Frisco offices, hospitality, sports, and fast moving venues",
      lede: "LT Janitorial serves Frisco facilities with office cleaning, restaurant deep cleaning, floor care, medical support, and project service for active commercial spaces.",
      primaryCta: "Request a Frisco walk through",
      secondaryCta: "Plan high traffic care",
    },
    overview: [
      "Frisco combines corporate campuses, professional offices, sports and entertainment destinations, healthcare, hotels, restaurants, retail, and mixed use districts. Events and guest traffic can place concentrated demand on entrances, dining rooms, restrooms, floors, and shared public areas.",
      "A public review connects LT Janitorial to monthly restaurant deep cleaning in Frisco. Beyond dining, the service menu can support corporate workspaces and medical facilities with a distinct plan for each environment.",
    ],
    facilityPriorities: ["Event and guest traffic recovery", "Corporate and regional office presentation", "Restaurant and hospitality deep cleaning", "Medical, wellness, and mixed use facilities"],
    localContext: "Frisco economic development sources emphasize corporate headquarters, healthcare and life sciences, sports, innovation, hospitality, logistics, and large mixed use developments. Cleaning plans should account for both daily professional use and the intense peaks created by events and guest activity.",
    serviceFocus: [
      { name: "Restaurant Cleaning", why: "Supported by public review evidence for recurring deep cleaning at a Frisco restaurant.", href: "/services/restaurant-cleaning" },
      { name: "Daily Deep Cleaning", why: "Fits facilities where high visitor or employee volume creates a faster reset cycle.", href: "/services/daily-deep-cleaning" },
      { name: "Office Cleaning", why: "Supports corporate campuses and professional spaces with room specific priorities.", href: "/services/office-cleaning" },
    ],
    faqs: [
      { question: "Is Frisco part of the service area?", answer: "Yes. Frisco is within the current Collin County service territory." },
      { question: "Can cleaning be planned around event traffic?", answer: "The service window and scope can be discussed around known high use periods and facility access." },
      { question: "Does LT Janitorial have Frisco restaurant experience?", answer: "A public Google review documents prior monthly deep cleaning for a restaurant location in Frisco." },
    ],
    relatedLinks: [{ label: "Collin County cleaning", href: "/service-areas/collin-county" }, { label: "Restaurant cleaning", href: "/services/restaurant-cleaning" }, { label: "Office cleaning", href: "/services/office-cleaning" }],
    image: { src: "/images/generated/restaurant-cleaning-hero.webp", alt: "Frisco hospitality and corporate dining interior prepared for guests", focalPoint: "center" },
    schemaDescription: "LT Janitorial provides commercial cleaning for Frisco corporate offices, hospitality, restaurants, medical spaces, and mixed use facilities.",
  },
  {
    slug: "dallas-county",
    name: "Dallas County",
    type: "county",
    county: "Dallas County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning Across Dallas County | LT Janitorial",
      description: "Commercial cleaning and floor care across Dallas County for offices, medical facilities, restaurants, retail, logistics, warehouses, and project sites.",
      primaryKeyword: "commercial cleaning Dallas County",
      secondaryKeywords: ["Dallas County janitorial service", "business cleaning Dallas County", "commercial floor care Dallas County"],
    },
    hero: {
      eyebrow: "Core service territory in Dallas County",
      title: "Commercial cleaning across one of North Texas most varied business markets",
      lede: "LT Janitorial serves Dallas County facilities with recurring janitorial care, floor maintenance, warehouse and restaurant service, medical cleaning, and post construction projects.",
      primaryCta: "Check your Dallas County facility",
      secondaryCta: "View listed cities",
    },
    overview: [
      "Dallas County includes dense business districts, established industrial corridors, medical and research institutions, restaurants, retail centers, corporate offices, and major distribution activity. One county level cleaning package would be too broad to serve those buildings well.",
      "LT Janitorial uses the walk through to narrow the plan to the facility. Dallas, Garland, and Mesquite are established service cities, while availability elsewhere in the county is confirmed from the address, service window, and project needs.",
    ],
    facilityPriorities: ["Corporate, professional, and research settings", "Medical and patient facing facilities", "Industrial, logistics, and distribution buildings", "Restaurant, retail, and hospitality presentation"],
    localContext: "Dallas County public economic development information identifies major corporate headquarters, research institutions, financial operations, distribution centers, restaurants, shops, and small businesses. This variety supports both specialized service pages and a broad county overview.",
    serviceFocus: [
      { name: "Commercial Cleaning", why: "Creates a facility specific plan across the county diverse commercial building types.", href: "/services/commercial-cleaning" },
      { name: "Floor Maintenance", why: "Supports public entries, offices, retail floors, and industrial surfaces with appropriate care levels.", href: "/services/floor-maintenance" },
      { name: "Warehouse Cleaning", why: "Addresses logistics and distribution demand in major industrial corridors.", href: "/services/warehouse-cleaning" },
    ],
    faqs: [
      { question: "Is all of Dallas County available?", answer: "Dallas County is part of the core service territory. Scheduling still depends on the facility address and scope." },
      { question: "Which Dallas County cities have dedicated service pages?", answer: "Dallas, Garland, and Mesquite each have a local service profile." },
      { question: "Can a county facility request one time project work?", answer: "Yes. One time cleaning, floor projects, and construction cleanup can be discussed separately from recurring service." },
    ],
    relatedLinks: [{ label: "Dallas commercial cleaning", href: "/service-areas/dallas" }, { label: "Garland commercial cleaning", href: "/service-areas/garland" }, { label: "Mesquite commercial cleaning", href: "/service-areas/mesquite" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Dallas County commercial facilities represented by a polished business interior", focalPoint: "center" },
    schemaDescription: "LT Janitorial serves Dallas County offices, medical facilities, restaurants, retail, logistics, warehouses, and project sites with commercial cleaning and floor care.",
  },
  {
    slug: "collin-county",
    name: "Collin County",
    type: "county",
    county: "Collin County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning Across Collin County | LT Janitorial",
      description: "Commercial cleaning for Collin County corporate offices, medical spaces, restaurants, hospitality, retail, manufacturing, and growing project sites.",
      primaryKeyword: "commercial cleaning Collin County",
      secondaryKeywords: ["Collin County janitorial service", "office cleaning Collin County", "commercial cleaners North Dallas"],
    },
    hero: {
      eyebrow: "Core service territory in Collin County",
      title: "Cleaning for corporate campuses, growing business districts, and local destinations",
      lede: "LT Janitorial serves Collin County with office janitorial work, restaurant cleaning, medical facility support, floor care, and project cleaning shaped around each property.",
      primaryCta: "Request a Collin County walk through",
      secondaryCta: "Explore listed cities",
    },
    overview: [
      "Collin County contains major corporate and technology campuses, healthcare, hospitality, restaurants, manufacturing, aviation, historic districts, and rapid commercial development. Facility expectations can change from polished headquarters to busy dining rooms and newly completed tenant space within a short drive.",
      "Plano, McKinney, and Frisco are established service cities. Public reviews also connect LT Janitorial to restaurant work in McKinney and Frisco, while the broader service menu supports offices, medical spaces, floor care, and project work.",
    ],
    facilityPriorities: ["Corporate and technology workplace presentation", "Restaurant, hospitality, and event traffic", "Medical office and patient area cleaning", "New construction and mixed use growth"],
    localContext: "The Collin County service cities each have a distinct commercial profile. Plano leads with corporate and professional space, McKinney balances growth with established destinations, and Frisco adds sports, hospitality, and high traffic mixed use facilities.",
    serviceFocus: [
      { name: "Office Cleaning", why: "Relevant to the county concentration of headquarters, regional offices, and professional services.", href: "/services/office-cleaning" },
      { name: "Restaurant Cleaning", why: "Supported by public review evidence in both McKinney and Frisco.", href: "/services/restaurant-cleaning" },
      { name: "Post Construction Cleaning", why: "Supports commercial build out and turnover across growing districts.", href: "/services/post-construction-cleaning" },
    ],
    faqs: [
      { question: "Is Collin County part of the service area?", answer: "Yes. Collin County is one of the three core service counties." },
      { question: "Which Collin County cities have dedicated service pages?", answer: "Plano, McKinney, and Frisco each have a local service profile." },
      { question: "Can restaurant and office service use different schedules?", answer: "Yes. Each facility receives a scope based on its operating hours and access requirements." },
    ],
    relatedLinks: [{ label: "Plano commercial cleaning", href: "/service-areas/plano" }, { label: "McKinney commercial cleaning", href: "/service-areas/mckinney" }, { label: "Frisco commercial cleaning", href: "/service-areas/frisco" }],
    image: { src: "/images/generated/office-cleaning-hero.webp", alt: "Collin County corporate and professional facility with clean shared spaces", focalPoint: "center" },
    schemaDescription: "LT Janitorial provides commercial cleaning across Collin County for corporate offices, medical spaces, restaurants, hospitality, retail, manufacturing support, and project sites.",
  },
  {
    slug: "rockwall-county",
    name: "Rockwall County",
    type: "county",
    county: "Rockwall County",
    launchStatus: "ready",
    seo: {
      title: "Commercial Cleaning Across Rockwall County | LT Janitorial",
      description: "Commercial cleaning for Rockwall County offices, healthcare, hospitality, restaurants, retail, construction, and industrial facilities.",
      primaryKeyword: "commercial cleaning Rockwall County",
      secondaryKeywords: ["Rockwall County janitorial service", "business cleaning Rockwall County", "commercial floor care Rockwall"],
    },
    hero: {
      eyebrow: "Core service territory in Rockwall County",
      title: "Commercial facility care rooted in the eastern side of DFW",
      lede: "LT Janitorial serves Rockwall County businesses with recurring cleaning, floor maintenance, restaurant and medical support, industrial service, and project work.",
      primaryCta: "Request a Rockwall County walk through",
      secondaryCta: "View local cities",
    },
    overview: [
      "Rockwall County is the most locally concentrated part of the service territory. Rockwall, Royse City, and Heath connect the route to commercial corridors, growing districts, professional offices, healthcare, hospitality, and local industry.",
      "The service strategy can match that range without pretending every city is identical. Rockwall supports a broad facility mix, Royse City emphasizes growth and construction turnover, and Heath favors carefully presented professional and customer facing spaces.",
    ],
    facilityPriorities: ["Local professional and medical spaces", "Hospitality, restaurants, and customer areas", "Commercial growth and construction handoff", "Manufacturing and industrial floor needs"],
    localContext: "Rockwall research identifies hospitality, health services, construction, education, retail, local commercial services, advanced manufacturing, and corporate employers. That blend supports both recurring janitorial work and specialized floor or project cleaning.",
    serviceFocus: [
      { name: "Commercial Cleaning", why: "Offers a flexible foundation across local offices, retail, hospitality, and employee spaces.", href: "/services/commercial-cleaning" },
      { name: "Medical Facility Cleaning", why: "Supports the county healthcare and patient facing environments with site directed planning.", href: "/services/medical-facility-cleaning" },
      { name: "Floor Maintenance", why: "Provides both preventive care and deeper restoration for public and industrial surfaces.", href: "/services/floor-maintenance" },
    ],
    faqs: [
      { question: "Is Rockwall County part of the service area?", answer: "Yes. Rockwall County is one of the three core service counties." },
      { question: "Which cities have dedicated Rockwall County service pages?", answer: "Rockwall, Royse City, and Heath each have a local service profile." },
      { question: "Can floor care be booked without daily cleaning?", answer: "Yes. The current service programs include preventive and annual floor care as a standalone option." },
    ],
    relatedLinks: [{ label: "Rockwall commercial cleaning", href: "/service-areas/rockwall" }, { label: "Royse City commercial cleaning", href: "/service-areas/royse-city" }, { label: "Heath commercial cleaning", href: "/service-areas/heath" }],
    image: { src: "/images/generated/commercial-cleaning-hero.webp", alt: "Rockwall County commercial facility with polished customer and employee areas", focalPoint: "center" },
    schemaDescription: "LT Janitorial serves Rockwall County offices, healthcare spaces, hospitality, restaurants, retail, completed construction areas, and industrial facilities.",
  },
];

export const locationBySlug = new Map(locations.map((location) => [location.slug, location]));

export const launchReadyLocations = locations.filter((location) => location.launchStatus === "ready");

export const cityLocations = locations.filter((location) => location.type === "city");

export const countyLocations = locations.filter((location) => location.type === "county");
