export interface GuidePage {
  slug: string;
  title: string;
  category: string;
  seoTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  image: string;
  imageAlt: string;
  answer: string;
  sections: {
    title: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { label: string; href: string }[];
}

export const guides: GuidePage[] = [
  {
    slug: "commercial-cleaning-cost-factors-dallas",
    title: "Commercial cleaning cost factors in Dallas",
    category: "Planning",
    seoTitle: "Commercial Cleaning Cost Factors in Dallas",
    metaDescription:
      "Understand the building, schedule, floor, access, and scope details that shape a commercial cleaning quote in Dallas.",
    heroTitle: "What shapes a commercial cleaning quote in Dallas?",
    heroIntro:
      "A useful quote starts with the building, not a flat number. These are the details a facility manager should prepare before a walk through.",
    image: "/images/generated/commercial-cleaning-hero.webp",
    imageAlt: "Refined commercial lobby with polished hard floors",
    answer:
      "Commercial cleaning cost is usually shaped by usable square footage, facility type, service frequency, floor materials, restroom count, occupancy, access rules, supply responsibilities, and the condition at the start of service.",
    sections: [
      {
        title: "Square footage is only the opening measurement",
        paragraphs: [
          "Two facilities with the same square footage can require very different scopes. An open office with low evening traffic is not the same assignment as a restaurant, medical office, or warehouse with multiple soil sources.",
          "A walk through gives the contractor a chance to examine restrooms, entrances, break areas, floor materials, waste volume, touchpoints, and any areas that need controlled access.",
        ],
      },
      {
        title: "Frequency changes the work behind each visit",
        paragraphs: [
          "A daily program can prevent buildup and distribute work across the week. A less frequent schedule may require more work during each visit. The right frequency depends on traffic, customer visibility, employee use, food activity, and the standard the facility needs to maintain.",
        ],
        checklist: [
          "Approximate usable square footage",
          "Number of restrooms and break areas",
          "Floor materials and current condition",
          "Preferred service days and access window",
          "Waste volume and disposal location",
          "High priority rooms or public areas",
          "Consumable supply responsibility",
        ],
      },
      {
        title: "Floor care should be scoped separately",
        paragraphs: [
          "Routine cleaning protects appearance, but restorative floor work has its own labor, equipment, and scheduling needs. Strip and wax, burnishing, concrete care, and annual restoration should be discussed as a planned maintenance cycle instead of buried inside a vague janitorial line item.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a commercial cleaning quote be prepared without a walk through?",
        answer:
          "A preliminary conversation can establish fit, but a walk through usually produces a more accurate scope because the contractor can see floor conditions, access, traffic patterns, and specialized spaces.",
      },
      {
        question: "Does a lower service frequency always cost less?",
        answer:
          "Not automatically. Fewer visits can mean more buildup and longer visits. The useful comparison is the total scope and expected condition, not frequency by itself.",
      },
    ],
    relatedServices: [
      { label: "Commercial cleaning", href: "/services/commercial-cleaning" },
      { label: "Preventive floor care", href: "/services/preventive-floor-care" },
      { label: "Request a facility quote", href: "/quote" },
    ],
  },
  {
    slug: "choose-a-commercial-janitorial-service",
    title: "How to choose a commercial janitorial service",
    category: "Procurement",
    seoTitle: "Choosing a Commercial Janitorial Service",
    metaDescription:
      "Use a practical facility focused checklist to compare commercial janitorial companies, proposals, communication, and floor care planning.",
    heroTitle: "Choose a janitorial partner by the operating plan.",
    heroIntro:
      "The best proposal should explain what happens after the first clean, how the scope is managed, and how building priorities stay visible.",
    image: "/images/generated/office-cleaning-hero.webp",
    imageAlt: "Orderly commercial office prepared for the workday",
    answer:
      "Compare janitorial providers by scope clarity, relevant facility experience, communication, access planning, floor care knowledge, quality review, insurance documentation, and the process for correcting missed work.",
    sections: [
      {
        title: "Ask for a room level scope",
        paragraphs: [
          "A proposal should do more than promise a clean building. It should identify the spaces covered, core tasks, frequency, service window, exclusions, and any work priced separately.",
          "Room level detail gives both sides a shared reference. It also makes future changes easier when occupancy, traffic, or facility use changes.",
        ],
      },
      {
        title: "Discuss communication before service begins",
        paragraphs: [
          "Facility teams should know who receives a concern, how priorities are documented, and how follow up is handled. A polished sales meeting is useful, but the ongoing communication path is what protects the account.",
        ],
        checklist: [
          "Written scope and frequencies",
          "Named contact for service concerns",
          "Access and alarm procedures",
          "Insurance documentation",
          "Floor care schedule",
          "Supply and equipment responsibilities",
          "Process for scope changes",
        ],
      },
      {
        title: "Match experience to the building",
        paragraphs: [
          "An office, warehouse, restaurant, and medical facility do not share the same risks or cleaning rhythm. Ask the provider to explain how the proposed work changes for your actual environment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should the lowest janitorial bid win?",
        answer:
          "Price matters, but an incomplete scope can make a low bid difficult to compare. Review the included tasks, visit frequency, staffing assumptions, floor work, supplies, and issue response before comparing totals.",
      },
      {
        question: "What should happen during a facility walk through?",
        answer:
          "The provider should review traffic, surfaces, restrooms, break areas, waste flow, access, storage, floor condition, specialized rooms, and the results the facility expects.",
      },
    ],
    relatedServices: [
      { label: "Routine office cleaning", href: "/services/routine-office-cleaning" },
      { label: "Floor maintenance", href: "/services/floor-maintenance" },
      { label: "Schedule a walk through", href: "/quote" },
    ],
  },
  {
    slug: "office-cleaning-frequency-guide",
    title: "Office cleaning frequency guide",
    category: "Office operations",
    seoTitle: "Office Cleaning Frequency Guide",
    metaDescription:
      "Plan office cleaning frequency around occupancy, restrooms, break areas, public traffic, floor materials, and service windows.",
    heroTitle: "How often should an office be cleaned?",
    heroIntro:
      "Frequency should follow how the office is used. A practical program gives busy areas more attention without over servicing quiet rooms.",
    image: "/images/generated/office-cleaning-hero.webp",
    imageAlt: "Modern office corridor with clean glass and hard floors",
    answer:
      "Busy offices often need daily attention for restrooms, trash, break areas, entrances, and touchpoints. Lower traffic offices may use a customized weekly schedule, while floor and detail work can follow separate maintenance cycles.",
    sections: [
      {
        title: "Start with the spaces people share",
        paragraphs: [
          "Restrooms, break rooms, entrances, conference rooms, and shared touchpoints usually drive frequency. These spaces collect visible soil and affect how employees and visitors experience the facility.",
          "Private offices and low use rooms may need a different rhythm. A room by room scope can separate daily priorities from rotating detail work.",
        ],
      },
      {
        title: "Account for occupancy and schedule",
        paragraphs: [
          "Hybrid work can create uneven traffic across the week. A facility may need heavier service after peak attendance days and lighter attention when fewer people are present.",
        ],
        checklist: [
          "Daily restroom condition",
          "Break area food activity",
          "Visitor volume",
          "Trash and recycling volume",
          "Hard floor and carpet traffic",
          "Conference room use",
          "Preferred evening or daytime access",
        ],
      },
      {
        title: "Keep restorative work on its own calendar",
        paragraphs: [
          "Carpet detail, hard floor burnishing, strip and wax work, high dust removal, and annual restoration are not substitutes for routine cleaning. A complete program places each task on the interval that protects the surface and the building standard.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an office use cleaning service only once a week?",
        answer:
          "Some small, low traffic offices can. Restroom use, food activity, trash volume, and visitor expectations should determine whether that schedule is sufficient.",
      },
      {
        question: "Should floor care be included with routine office cleaning?",
        answer:
          "Daily floor tasks may be included, while burnishing, carpet detail, strip and wax work, or restoration may need their own planned scope.",
      },
    ],
    relatedServices: [
      { label: "Office cleaning", href: "/services/office-cleaning" },
      { label: "Workspace sanitization", href: "/services/workspace-sanitization" },
      { label: "Restroom cleaning", href: "/services/restroom-cleaning" },
    ],
  },
  {
    slug: "strip-and-wax-versus-burnishing",
    title: "Strip and wax versus burnishing",
    category: "Floor care",
    seoTitle: "Strip and Wax Versus Floor Burnishing",
    metaDescription:
      "Learn the difference between strip and wax service, floor burnishing, and preventive maintenance for commercial resilient flooring.",
    heroTitle: "Strip and wax or burnish? The floor tells you.",
    heroIntro:
      "Both services improve appearance, but they address different conditions. The existing finish and wear pattern determine the right next step.",
    image: "/images/generated/floor-care-hero.webp",
    imageAlt: "Commercial resilient floor with a controlled polished finish",
    answer:
      "Burnishing refines and restores gloss in an existing finish that is still serviceable. Strip and wax removes worn finish and rebuilds the protective system when routine maintenance can no longer produce an even result.",
    sections: [
      {
        title: "Burnishing works with the finish already in place",
        paragraphs: [
          "High speed burnishing can improve clarity and gloss when the finish has enough integrity to respond. It belongs inside a preventive program that also includes cleaning, spot care, and attention to traffic lanes.",
          "Burnishing cannot repair every condition. Deep wear, embedded soil, failed finish, and uneven buildup may require a restorative approach.",
        ],
      },
      {
        title: "Strip and wax resets a worn finish system",
        paragraphs: [
          "Strip and wax service removes old finish, prepares the surface, and applies new finish in controlled coats. It requires more planning, drying time, access control, and protection from traffic during the work.",
        ],
        checklist: [
          "Current finish condition",
          "Traffic lane wear",
          "Embedded soil and discoloration",
          "Available closure window",
          "Floor material confirmation",
          "Furniture and equipment movement",
          "Desired appearance and maintenance plan",
        ],
      },
      {
        title: "Prevention extends the restoration cycle",
        paragraphs: [
          "Entrance soil control, correct daily chemistry, timely spot care, and planned burnishing can help protect the finish. The goal is not constant gloss at any cost. It is a stable surface that supports appearance, serviceability, and the facility schedule.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can every commercial floor be stripped and waxed?",
        answer:
          "No. The floor material and manufacturer guidance must be identified first. Some resilient floors use finish systems, while other surfaces require a different maintenance method.",
      },
      {
        question: "How do I know whether burnishing is enough?",
        answer:
          "A floor care walk through can test whether the existing finish responds evenly and whether wear, buildup, or damage requires a deeper restoration.",
      },
    ],
    relatedServices: [
      { label: "Strip and wax", href: "/services/strip-and-wax" },
      { label: "Floor burnishing", href: "/services/floor-burnishing" },
      { label: "Annual floor restoration", href: "/services/annual-floor-restoration" },
    ],
  },
  {
    slug: "post-construction-cleaning-checklist",
    title: "Post construction cleaning checklist",
    category: "Construction closeout",
    seoTitle: "Post Construction Cleaning Checklist",
    metaDescription:
      "Prepare a commercial build out or renovation for turnover with a practical post construction cleaning and final site checklist.",
    heroTitle: "A cleaner handoff starts before the final walk.",
    heroIntro:
      "Post construction cleaning should move from bulk debris and settled dust toward detailed surfaces and presentation ready rooms.",
    image: "/images/generated/post-construction-cleaning-hero.webp",
    imageAlt: "Completed commercial interior prepared for final construction cleanup",
    answer:
      "A commercial post construction clean typically progresses through debris control, high and horizontal dust removal, fixture and surface detail, floor preparation, glass detail, restroom cleaning, and a final review based on the turnover standard.",
    sections: [
      {
        title: "Confirm the site is ready for cleaning",
        paragraphs: [
          "Cleaning becomes less efficient when active trades are still producing dust, cutting materials, or moving through completed rooms. The project team should identify which zones are released, which punch items remain, and when utilities and lighting will be available.",
          "The cleaning scope should also clarify who removes construction debris, pallets, hazardous materials, and trade specific waste.",
        ],
      },
      {
        title: "Work from airborne dust toward finished detail",
        paragraphs: [
          "High surfaces, ledges, vents, frames, and fixtures can release dust onto lower work. A deliberate sequence reduces repeat labor and helps protect recently completed surfaces.",
        ],
        checklist: [
          "Released work zones",
          "Debris responsibility",
          "High dust surfaces",
          "Cabinets, ledges, and fixtures",
          "Interior glass and frames",
          "Restrooms and break areas",
          "Floor material and required finish",
          "Final presentation review",
        ],
      },
      {
        title: "Define what final means",
        paragraphs: [
          "A contractor handoff, tenant opening, health inspection, and owner presentation may each require a different level of detail. The final walk should use the agreed standard and identify any new trade dust or damage outside the cleaning scope.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should post construction cleaning begin?",
        answer:
          "It can begin by released zone, but detailed final cleaning is most effective after dust producing trade work is complete and the space has reliable light, water, and access.",
      },
      {
        question: "Does post construction cleaning include hauling construction waste?",
        answer:
          "That responsibility must be defined in the scope. General cleaning debris and bulk construction disposal are not automatically the same service.",
      },
    ],
    relatedServices: [
      { label: "Post construction cleaning", href: "/services/post-construction-cleaning" },
      { label: "Final site cleaning", href: "/services/final-site-cleaning" },
      { label: "Debris and dust removal", href: "/services/debris-and-dust-removal" },
    ],
  },
  {
    slug: "warehouse-cleaning-plan",
    title: "How to plan warehouse cleaning",
    category: "Industrial facilities",
    seoTitle: "Warehouse Cleaning Plan",
    metaDescription:
      "Build a warehouse cleaning scope around traffic, dust, docks, break areas, production zones, floor equipment, and safe access.",
    heroTitle: "Plan warehouse cleaning around movement and soil.",
    heroIntro:
      "Warehouse cleaning is an operating plan. The scope should follow where material, people, equipment, and dust move through the facility.",
    image: "/images/generated/warehouse-cleaning-hero.webp",
    imageAlt: "Organized warehouse aisle with clean concrete floor",
    answer:
      "A warehouse cleaning plan should map aisles, docks, staging areas, production or storage zones, overhead dust, employee spaces, waste flow, floor equipment, access windows, and any areas that require operational coordination.",
    sections: [
      {
        title: "Map the facility by operating zone",
        paragraphs: [
          "A loading dock collects different soil than a storage aisle, office enclosure, production area, or employee break room. Treating the warehouse as one undivided floor can hide the work that affects daily operations.",
          "The planning walk should identify forklift traffic, pedestrian routes, product sensitivity, equipment clearance, waste collection, and any zones that cannot be interrupted.",
        ],
      },
      {
        title: "Separate routine work from periodic detail",
        paragraphs: [
          "Sweeping, accessible floor cleaning, trash, restrooms, and break areas may follow a recurring schedule. High dust removal, dock detail, racking zones, annual floor projects, and turnover cleaning may need planned service windows.",
        ],
        checklist: [
          "Aisles and floor traffic",
          "Loading docks and staging",
          "Racking and overhead dust",
          "Production or packing zones",
          "Offices, restrooms, and break rooms",
          "Waste and recycling flow",
          "Equipment and charging areas",
          "Restricted access or shutdown windows",
        ],
      },
      {
        title: "Use the right equipment for the floor and access",
        paragraphs: [
          "Open floor area may support commercial sweeping or scrubbing equipment, while edges, congested areas, and sensitive zones require another method. Equipment choice should reflect the surface, soil, aisle width, and facility rules.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can warehouse cleaning happen while the facility operates?",
        answer:
          "Some tasks can be coordinated around operations, while others need a controlled service window. Traffic, equipment, access, and the cleaning method determine what is practical.",
      },
      {
        question: "Is high dust cleaning part of routine warehouse service?",
        answer:
          "It may be planned as a separate periodic scope because overhead access, falling dust control, equipment, and operating coordination differ from routine floor and employee area cleaning.",
      },
    ],
    relatedServices: [
      { label: "Warehouse cleaning", href: "/services/warehouse-cleaning" },
      { label: "Industrial floor sweeping", href: "/services/industrial-floor-sweeping" },
      { label: "High dust area cleaning", href: "/services/high-dust-area-cleaning" },
    ],
  },
  {
    slug: "medical-facility-cleaning-requirements",
    title: "Medical facility cleaning requirements and scope",
    category: "Medical facilities",
    seoTitle: "Medical Facility Cleaning Requirements",
    metaDescription:
      "Plan medical facility cleaning around room access, approved products, regulated waste, privacy boundaries, credentials, and site procedures.",
    heroTitle: "Define medical cleaning responsibilities before service begins.",
    heroIntro:
      "A useful medical facility scope separates janitorial work from clinical responsibilities, then documents the instructions that apply in every released room.",
    image: "/images/generated/medical-cleaning-hero.webp",
    imageAlt: "A commercial cleaner wipes an exam table in a modern outpatient room",
    answer:
      "A medical facility cleaning plan should document room access, approved products, surface restrictions, cleaning and disinfection sequences, regulated waste exclusions, patient privacy boundaries, required credentials, service windows, and the facility contact responsible for site instructions.",
    sections: [
      {
        title: "Separate janitorial work from clinical responsibility",
        paragraphs: [
          "The facility remains responsible for patient care procedures, clinical equipment, regulated materials, privacy requirements, and infection control direction. The cleaning provider needs a written boundary that identifies released surfaces and tasks.",
          "That boundary protects the facility and the cleaning team. It also keeps ordinary cleaning, surface sanitizing, and targeted disinfection from being confused with medical instrument sterilization or sterile processing.",
        ],
      },
      {
        title: "Document rooms, products, and exclusions",
        paragraphs: [
          "Waiting areas, exam rooms, staff stations, restrooms, and public corridors may require different sequences. Approved products, label contact time, surface compatibility, and restricted equipment should be reviewed before the proposal is finalized.",
        ],
        checklist: [
          "Rooms released for janitorial service",
          "Approved products and surface restrictions",
          "Cleaning and disinfection sequence",
          "Sharps and regulated waste responsibility",
          "Clinical equipment boundaries",
          "Patient information and privacy boundaries",
          "Required screenings, credentials, and insurance",
          "Facility contact for site instructions",
        ],
      },
      {
        title: "Verify requirements during procurement",
        paragraphs: [
          "A website cannot confirm that one scope fits every medical facility. Procurement teams should share current requirements and request supporting documentation before service begins.",
          "The final agreement should state included tasks, exclusions, products, frequencies, service windows, access procedures, and the process for reporting a concern.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does hiring a janitorial provider make a facility HIPAA compliant?",
        answer:
          "A cleaning website should not make that promise. The facility should define its privacy requirements, document access boundaries, and consult qualified compliance professionals about its obligations.",
      },
      {
        question: "Should regulated medical waste be part of the janitorial scope?",
        answer:
          "Not by default. Sharps and regulated medical waste should remain under the facility approved process unless a qualified provider and written agreement establish otherwise.",
      },
      {
        question: "Can a medical facility require specific products?",
        answer:
          "Yes. Product requirements, label directions, contact time, and surface compatibility should be reviewed and documented before work begins.",
      },
    ],
    relatedServices: [
      { label: "Medical facility cleaning", href: "/services/medical-facility-cleaning" },
      { label: "Medical facility sanitation", href: "/services/medical-facility-sanitation" },
      { label: "Cleaning and surface disinfection", href: "/services/disinfection-and-sterilization" },
    ],
  },
];
