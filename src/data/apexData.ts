export interface StrategicGoal {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface ProgramPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  image: string;
  statsLabel: string;
  statsValue: string;
}

export interface PriorityRegion {
  id: string;
  name: string;
  capital: string;
  description: string;
  focusInterventions: string[];
  humanitarianContext: string;
  entryPoints: string;
  isPriority: boolean;
  coordinates: { x: number; y: number }; // Relative SVG positioning
}

export interface CoreValue {
  name: string;
  description: string;
  icon: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export const APEX_INFO = {
  name: "APEX",
  fullName: "Action for People, Empowerment and Excellence",
  legalRegistration: "Legally registered with the Authority for Civil Society Organizations (ACSO), Registration No. 7880, in March 2026.",
  tagline: "Building Resilient and Self-Reliant Communities",
  subTagline: "A Trusted Partner Delivering Locally Led, Resilient Solutions for Long-Term Impact",
  heroDescription: "APEX partners with communities, government, and local organizations to deliver integrated humanitarian, development, and peacebuilding solutions that save lives, protect dignity, strengthen resilience, and create pathways toward sustainable self-reliance.",
  vision: "APEX aspires to a future where resilient and self-reliant communities thrive with dignity, equitable access to essential services and opportunities, and the capacity to shape their own sustainable development.",
  mission: "APEX partners with communities, government, local and international organizations to deliver integrated humanitarian, development, and peacebuilding programs that save lives, protect dignity, and expand access to essential services and opportunities. Through community-centered, locally led and innovative solutions, we support people and communities to recover from shocks, build resilience, improve well-being, and achieve sustainable self-reliance.",
  ambition2030: "By 2030, APEX aims to be a trusted national humanitarian and development organization in Ethiopia, recognized for delivering locally led and high-impact solutions that save lives, strengthen systems, and enable communities to build resilience and self-reliance. We will grow through strong partnerships, technical and organizational excellence, innovation, learning, and responsible resource mobilization while remaining responsive to evolving community needs.",
  governance: {
    boardDescription: "APEX is governed by a seven-member Board of Directors that serves as the highest governing body, providing strategic oversight, financial stewardship, risk management, and regulatory compliance. The Board holds ultimate approval over the organization’s annual work plan and budget, ensuring total operational accountability and mission alignment.",
    managementDescription: "Day-to-day management is led by the Executive Director, supported by a professional team responsible for program delivery, finance and operations, program quality, organizational development, and strategic partnerships."
  },
  contact: {
    email: "Contact@apex-et.org",
    phone: "+251958770277",
    address: "Addis Ababa, Lemi Kura Sub-city, Wereda 03, Around Hayat 49, opposite to Hayat kuter 05 condominium",
    city: "Addis Ababa, Ethiopia",
    socials: {
      facebook: "https://facebook.com/apexethiopia",
      twitter: "https://twitter.com/apexethiopia",
      linkedin: "https://linkedin.com/company/apex-ethiopia"
    }
  },
  finalMessage: {
    title: "A Trusted Partner Delivering Locally Led, Resilient Solutions for Long-Term Impact",
    body: "APEX works with communities and partners to connect humanitarian action, development, and peacebuilding—helping people move from crisis to recovery, vulnerability to resilience, and dependence toward sustainable self-reliance.",
    call: "Together, we can shape stronger futures."
  }
};

export const STRATEGIC_GOALS: StrategicGoal[] = [
  {
    id: "respond",
    number: "01",
    title: "RESPOND",
    tagline: "Crisis & Fragile Contexts",
    description: "People survive, recover, and build resilience in crisis and fragile contexts. APEX provides timely, integrated humanitarian assistance while supporting early recovery, preparedness, social cohesion, and resilience.",
    icon: "ShieldAlert"
  },
  {
    id: "well-being",
    number: "02",
    title: "WELL-BEING",
    tagline: "Health, Learning & Dignity",
    description: "People achieve improved health, learning, and overall well-being. APEX expands access to quality health, nutrition, and education services while strengthening community systems and promoting positive social and behavior change.",
    icon: "HeartPulse"
  },
  {
    id: "empower",
    number: "03",
    title: "EMPOWER",
    tagline: "Agency, Skills & Economic Opportunities",
    description: "People and communities gain agency, skills, and economic opportunities. APEX strengthens climate-resilient livelihoods, expands economic opportunities, equips youth and vulnerable groups with skills, and promotes gender equality and community leadership.",
    icon: "Users"
  },
  {
    id: "strengthen-systems",
    number: "04",
    title: "STRENGTHEN SYSTEMS",
    tagline: "Resilient & Accountable Services",
    description: "Systems are resilient, accountable, and capable of delivering sustainable quality services. APEX works with government, local organizations, and communities to strengthen institutional capacity, integrated service delivery, localization, accountability, data use, innovation, and partnerships.",
    icon: "Network"
  }
];

export const PROGRAM_PILLARS: ProgramPillar[] = [
  {
    id: "protection",
    title: "Protection and Social Empowerment",
    subtitle: "Safeguarding Dignity, Equality & Safety",
    description: "APEX strengthens protection systems and promotes safety, dignity, empowerment, and participation, particularly for women, children, youth, displaced populations, and vulnerable communities.",
    focusAreas: [
      "Protection systems",
      "GBV prevention and response",
      "Child protection",
      "Psychosocial support",
      "Community protection",
      "Social empowerment",
      "Community leadership"
    ],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
    statsLabel: "Community Protection Groups",
    statsValue: "45+ Networks"
  },
  {
    id: "health-nutrition",
    title: "Health and Nutrition",
    subtitle: "Equitable Care & Robust Community Systems",
    description: "APEX supports equitable access to quality and integrated health and nutrition services, particularly for underserved and crisis-affected communities.",
    focusAreas: [
      "Primary health care",
      "MNCAH (Maternal, Newborn, Child & Adolescent Health)",
      "Adolescent and SRH services",
      "Nutrition & Malnutrition screening",
      "Community health outreach",
      "Health promotion & WASH linkage",
      "Emergency health and nutrition",
      "Health systems strengthening"
    ],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80",
    statsLabel: "Target Beneficiary Health Access",
    statsValue: "120,000+"
  },
  {
    id: "education-youth",
    title: "Education and Youth Development",
    subtitle: "Safe Learning & Future-Ready Skills",
    description: "APEX promotes access to safe and quality education while equipping children and youth with skills, opportunities, and leadership capacities.",
    focusAreas: [
      "Formal and non-formal education",
      "Foundational learning support",
      "Accelerated learning programs",
      "Safe learning environments",
      "Psychosocial support in schools",
      "Life skills education",
      "Vocational skills training",
      "Youth leadership and entrepreneurship"
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    statsLabel: "Youth & Learners Engaged",
    statsValue: "35,000+"
  },
  {
    id: "livelihoods-economic",
    title: "Resilient Livelihoods and Economic Empowerment",
    subtitle: "Food Security & Sustainable Incomes",
    description: "APEX strengthens resilient livelihoods and food systems while expanding economic opportunities and financial inclusion for vulnerable households and communities.",
    focusAreas: [
      "Climate-smart agriculture",
      "Resilient livelihoods promotion",
      "Market and value chains",
      "Financial inclusion & micro-grants",
      "Village Savings and Loan Associations (VSLA)",
      "Micro-enterprise development",
      "Women's economic empowerment",
      "Youth economic empowerment"
    ],
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=80",
    statsLabel: "Households Supported",
    statsValue: "28,500+"
  }
];

export const PRIORITY_REGIONS: PriorityRegion[] = [
  {
    id: "afar",
    name: "Afar",
    capital: "Semera",
    description: "A vital lowland region where pastoralist communities encounter acute climate shocks, recurrent droughts, and pastoral resource shortages.",
    focusInterventions: [
      "Emergency livestock feed and water point rehabilitation",
      "Mobile primary healthcare and malnutrition stabilization",
      "Climate-resilient pastoral livelihood diversification",
      "Community conflict resolution and social cohesion"
    ],
    humanitarianContext: "Pastoralist vulnerabilities compounded by harsh climate extremes, requiring rapid response intertwined with sustainable borehole and water management.",
    entryPoints: "Local community elder structures, woreda health bureaus, and regional pastoral coordination platforms.",
    isPriority: true,
    coordinates: { x: 68, y: 35 }
  },
  {
    id: "amhara",
    name: "Amhara",
    capital: "Bahir Dar",
    description: "A highland region characterized by mixed farming communities where recovery from conflict and climate variability requires integrated support.",
    focusInterventions: [
      "Rehabilitation of damaged schools and health centers",
      "Emergency seed distribution and climate-smart agricultural training",
      "Psychosocial and trauma-informed protection services",
      "Youth vocational programs in peri-urban centers"
    ],
    humanitarianContext: "Transitional recovery needing deep investments in institutional capacity, peacebuilding dialogues, and agricultural value chain restoration.",
    entryPoints: "Agricultural extension networks, women associations, and regional recovery task forces.",
    isPriority: true,
    coordinates: { x: 42, y: 34 }
  },
  {
    id: "gambela",
    name: "Gambela",
    capital: "Gambela",
    description: "A western border region hosting refugee settlements and vulnerable host populations vulnerable to seasonal river flooding.",
    focusInterventions: [
      "Integrated health and nutrition for host and displaced populations",
      "Flood-resilient community infrastructure and early warning",
      "Peacebuilding and shared resource management dialogues",
      "Child protection and youth non-formal education programs"
    ],
    humanitarianContext: "Intersections of displacement, localized environmental hazards, and limited primary service infrastructure.",
    entryPoints: "Joint refugee-host community committees, district health offices, and local civil society coalitions.",
    isPriority: true,
    coordinates: { x: 18, y: 55 }
  },
  {
    id: "oromia",
    name: "Oromia",
    capital: "Addis Ababa / Finfinnee",
    description: "The largest region with diverse agro-ecological zones, confronting recurrent drought in southern lowlands and economic pressures in agricultural belts.",
    focusInterventions: [
      "Expansion of Village Savings and Loans Associations (VSLA)",
      "Primary health care and maternal-child health strengthening",
      "Climate-smart agriculture and agribusiness value addition",
      "Gender-based violence prevention and survivor support centers"
    ],
    humanitarianContext: "Large-scale community needs across both agrarian highlands and pastoralist southern zones requiring scalable systems interventions.",
    entryPoints: "Cooperative unions, community health extension workers, and regional ACSO coordination bodies.",
    isPriority: true,
    coordinates: { x: 45, y: 62 }
  },
  {
    id: "tigray",
    name: "Tigray",
    capital: "Mekelle",
    description: "Northern region currently undergoing post-crisis rehabilitation, requiring comprehensive service restoration and resilience rebuilding.",
    focusInterventions: [
      "Full restoration of primary healthcare units and medical supplies",
      "Emergency and accelerated education for out-of-school children",
      "Restoration of agricultural input supply chains and irrigation",
      "Mental health and psychosocial support (MHPSS) networks"
    ],
    humanitarianContext: "Critical recovery phase transitioning from emergency relief to long-term community empowerment and institutional rebuilding.",
    entryPoints: "Community health networks, local education boards, and recovery coordination forums.",
    isPriority: true,
    coordinates: { x: 44, y: 16 }
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    name: "Humanity",
    description: "We put people, dignity, safety, and well-being at the heart of our work.",
    icon: "Heart"
  },
  {
    name: "Integrity",
    description: "We act honestly, ethically, and transparently in all operations and partnerships.",
    icon: "ShieldCheck"
  },
  {
    name: "Accountability",
    description: "We take responsibility for our decisions, resources, commitments, and results.",
    icon: "CheckCircle2"
  },
  {
    name: "Excellence",
    description: "We pursue quality, professionalism, learning, and continuous improvement.",
    icon: "Award"
  },
  {
    name: "Connected",
    description: "We value collaboration, partnership, shared learning, and collective action.",
    icon: "Share2"
  }
];

export const PARTNERS_LIST = [
  { name: "ACSO Ethiopia", type: "Regulatory Authority", logo: "ACSO" },
  { name: "Ethiopian Civil Society Forum", type: "National Network", logo: "ECSF" },
  { name: "Ministry of Health Ethiopia", type: "Government Partner", logo: "MoH" },
  { name: "Disaster Risk Management Commission", type: "Government Partner", logo: "EDRMC" },
  { name: "Local Community Organizations Coalition", type: "Community Partner", logo: "LCOC" },
  { name: "Youth Empowerment Initiative Ethiopia", type: "Implementing Partner", logo: "YEIE" },
  { name: "Pastoralist Development Network", type: "Alliance Partner", logo: "PDN" },
  { name: "Women Entrepreneurs Association", type: "Strategic Partner", logo: "WEA" }
];

export const NEWS_STORIES: NewsArticle[] = [
  {
    id: "launch-2026",
    title: "APEX Officially Registered as National Humanitarian & Development Actor",
    excerpt: "With ACSO Registration No. 7880, APEX commences its mission to pioneer locally led resilience, development, and peacebuilding solutions across Ethiopia.",
    content: "Action for People, Empowerment and Excellence (APEX) has officially achieved legal registration under the Authority for Civil Society Organizations (ACSO) with Registration No. 7880 in March 2026. Founded by five committed Ethiopian professionals, APEX introduces an integrated nexus approach addressing humanitarian recovery, economic empowerment, and sustainable community resilience in high-need regions.",
    date: "March 18, 2026",
    author: "APEX Communications",
    category: "Organization",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "priority-regions-assessment",
    title: "Initial Entry Assessments Initiated Across Five Strategic Priority Regions",
    excerpt: "Teams conduct preliminary consultations in Afar, Amhara, Gambela, Oromia, and Tigray to align community needs with sustainable service delivery systems.",
    content: "To ensure that all interventions are locally led and firmly rooted in community realities, APEX program teams have embarked on strategic stakeholder consultations across the five initial target regions: Afar, Amhara, Gambela, Oromia, and Tigray. These engagements focus on identifying institutional capacity gaps, maternal-child health priorities, and climate-smart livelihood opportunities.",
    date: "April 02, 2026",
    author: "Program Quality Team",
    category: "Where We Work",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "nexus-approach-resilience",
    title: "Connecting Humanitarian Action and Long-Term Self-Reliance: The APEX Model",
    excerpt: "How bridging emergency relief with institutional capacity and economic agency delivers durable pathways out of dependency for Ethiopian families.",
    content: "Traditional approaches often isolate emergency relief from long-term development. APEX's strategic framework actively connects emergency response with immediate livelihood rehabilitation and system-strengthening. By strengthening woreda-level institutions and empowering community self-help groups, emergency assistance builds permanent community assets.",
    date: "April 15, 2026",
    author: "Executive Office",
    category: "Strategic Insights",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80"
  }
];
