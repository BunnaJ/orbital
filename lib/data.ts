import type {
  Service,
  Project,
  Industry,
  Stat,
  Testimonial,
  NewsItem,
  ProcessStep,
  WhyItem,
  Career,
  NavItem,
} from "./types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "QHSE", href: "/qhse" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const servicesIntro =
  "We and our partners work together in synergy to provide the highest available value possible globally in the following services. However, our strongest offering to the industry is — innovation.";

export const services: Service[] = [
  {
    id: "consultancy",
    title: "Consultancy Services",
    description:
      "We provide specialized consulting services to the petroleum industry. Our oil and gas consulting services include equipment procurement and training / certification.",
    icon: "briefcase",
    image: "/orbit5.gif",
    features: [
      "Equipment Procurement",
      "Training & Certification",
      "Technical Advisory",
      "Regulatory Compliance",
      "Risk Assessment",
      "Asset Management",
    ],
    slug: "consultancy",
  },
  {
    id: "engineering",
    title: "Engineering Services",
    description:
      "ORL Engineering is a highly qualified solution provider in engineering services and can deliver turn key projects (EPCI) in co-operation with our foreign partners.",
    icon: "settings",
    image: "/orbit7.gif",
    features: [
      "EPCI Project Delivery",
      "Process Engineering",
      "Structural Integrity",
      "Project Management",
      "FEED Studies",
      "Commissioning Support",
    ],
    slug: "engineering",
  },
  {
    id: "marine",
    title: "Marine Services",
    description:
      "We are emerging as a leading provider of engineered marine solutions to the Nigerian oil and gas sector. We have an exceptional reputation for professional standards.",
    icon: "anchor",
    image: "/orbit8.gif",
    features: [
      "Offshore Vessel Support",
      "Marine Engineering",
      "Subsea Operations",
      "Port & Terminal Services",
      "Mooring Systems",
      "Vessel Management",
    ],
    slug: "marine",
  },
];

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
  { value: 6, suffix: "", label: "Major IOC Clients" },
];

export const clients = [
  "AGIP",
  "Shell",
  "Oando",
  "TotalEnergies",
  "Mobil",
  "NNPC",
];

export const industries: Industry[] = [
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: "flame",
    description:
      "Comprehensive upstream, midstream, and downstream solutions for leading international and national oil companies.",
  },
  {
    id: "marine-offshore",
    name: "Marine & Offshore",
    icon: "anchor",
    description:
      "Engineered marine solutions for offshore installations, vessel operations, and subsea systems.",
  },
  {
    id: "petrochemical",
    name: "Petrochemical",
    icon: "flask-conical",
    description:
      "Process engineering expertise for refineries, LNG facilities, and petrochemical plants.",
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: "building-2",
    description:
      "Civil and structural engineering for critical energy and industrial infrastructure projects.",
  },
  {
    id: "power-energy",
    name: "Power & Energy",
    icon: "zap",
    description:
      "Engineering solutions for power generation, transmission, and distribution across the energy sector.",
  },
  {
    id: "environment",
    name: "Environment & QHSE",
    icon: "leaf",
    description:
      "Environmental consulting, impact assessment, and QHSE management for sustainable operations.",
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Offshore Platform Structural Inspection",
    category: "Engineering",
    location: "Niger Delta, Nigeria",
    year: "2023",
    image: "/orbit15.gif",
    description:
      "Comprehensive structural integrity assessment of a deepwater production platform for a major international oil company.",
    slug: "offshore-platform-inspection",
  },
  {
    id: "p2",
    title: "Pipeline Rehabilitation & Integrity Management",
    category: "Consultancy",
    location: "Warri, Nigeria",
    year: "2023",
    image: "/orbit16.gif",
    description:
      "Full lifecycle rehabilitation and integrity management of a 40km onshore crude pipeline network.",
    slug: "pipeline-rehabilitation",
  },
  {
    id: "p3",
    title: "Marine Vessel Support — Deepwater Campaign",
    category: "Marine",
    location: "Lagos, Nigeria",
    year: "2022",
    image: "/orbit17.gif",
    description:
      "Provision of anchor-handling tug and supply vessel support services for a major deepwater drilling campaign.",
    slug: "marine-vessel-support",
  },
  {
    id: "p4",
    title: "Gas Processing Facility Commissioning",
    category: "Engineering",
    location: "Onne, Rivers State",
    year: "2022",
    image: "/orbit1.jpg",
    description:
      "Process engineering design and commissioning support for a new natural gas processing facility.",
    slug: "gas-processing-facility",
  },
  {
    id: "p5",
    title: "Subsea Umbilical & Flowline Installation",
    category: "Engineering",
    location: "OML 130, Nigeria",
    year: "2023",
    image: "/orbit3.jpg",
    description:
      "Engineering design and installation management for a subsea umbilical and flowline tie-back system on a deepwater oil field.",
    slug: "subsea-umbilical-installation",
  },
  {
    id: "p6",
    title: "FPSO Mooring System Upgrade",
    category: "Marine",
    location: "Bonga Field, Nigeria",
    year: "2021",
    image: "/orbit7.gif",
    description:
      "Engineering design and installation supervision for a major FPSO mooring system upgrade in deepwater.",
    slug: "fpso-mooring-system",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Emeka Okonkwo",
    role: "Project Director",
    company: "Shell Nigeria",
    quote:
      "Orbital Resources demonstrated exceptional technical competence throughout our offshore inspection project. Their team consistently delivered results that exceeded our expectations in safety and quality.",
  },
  {
    id: "t2",
    name: "Fatima Al-Hassan",
    role: "Operations Manager",
    company: "TotalEnergies Nigeria",
    quote:
      "A trusted engineering partner. ORL brings international standards to every project while deeply understanding the local operating environment — a rare and valuable combination.",
  },
  {
    id: "t3",
    name: "Charles Adeyemi",
    role: "VP Operations",
    company: "Oando PLC",
    quote:
      "The marine support services provided by ORL were critical to the success of our deepwater campaign. Professional, reliable, and truly world-class in every respect.",
  },
];

export const news: NewsItem[] = [
  {
    id: "n1",
    title: "ORL Wins NIPEX Tender for Offshore Engineering Services",
    excerpt:
      "Orbital Resources secures a major contract through the Nigerian Petroleum Exchange for comprehensive offshore structural engineering services, reinforcing our position as a leading indigenous firm.",
    date: "2024-03-15",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    slug: "orl-wins-nipex-tender",
  },
  {
    id: "n2",
    title: "ORL Expands Marine Fleet with New Offshore Support Vessels",
    excerpt:
      "As part of our strategic growth plan, Orbital Resources has acquired additional offshore support vessels to strengthen our marine services capability across West Africa.",
    date: "2024-02-08",
    category: "Company News",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    slug: "orl-expands-marine-fleet",
  },
  {
    id: "n3",
    title: "Strategic Partnership with Global Engineering Group Announced",
    excerpt:
      "ORL formalizes a landmark strategic partnership with an international engineering group to deliver world-class EPCI projects across Nigeria and the West African sub-region.",
    date: "2024-01-20",
    category: "Partnerships",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    slug: "global-engineering-partnership",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a thorough discovery session to understand your project requirements, constraints, regulatory environment, and strategic objectives.",
  },
  {
    step: "02",
    title: "Technical Assessment",
    description:
      "Our engineers conduct detailed feasibility studies, risk analyses, and technical evaluations to define the optimal engineering approach for your project.",
  },
  {
    step: "03",
    title: "Solution Design",
    description:
      "We develop comprehensive engineering designs, procurement strategies, and project execution plans — all tailored precisely to your specific needs.",
  },
  {
    step: "04",
    title: "Execution & Delivery",
    description:
      "Our experienced project teams execute with rigorous quality control, strict safety management, and transparent progress reporting at every stage.",
  },
  {
    step: "05",
    title: "Commissioning & Handover",
    description:
      "We ensure a smooth commissioning process and provide full documentation, as-built drawings, and operational training for your teams.",
  },
];

export const whyChooseUs: WhyItem[] = [
  {
    icon: "globe",
    title: "Global Partnerships",
    description:
      "We leverage world-class international partnerships to bring the best technologies, methodologies, and expertise directly to Africa.",
  },
  {
    icon: "shield-check",
    title: "QHSE Excellence",
    description:
      "Our unwavering commitment to Quality, Health, Safety, and Environment underpins every project we undertake — no exceptions.",
  },
  {
    icon: "users",
    title: "Local Expertise",
    description:
      "Deep knowledge of the Nigerian and West African operating environment built over 15+ years of hands-on experience.",
  },
  {
    icon: "award",
    title: "Proven Track Record",
    description:
      "200+ successfully delivered projects for major IOCs and NOCs, with zero lost-time incidents in the past three years.",
  },
  {
    icon: "trending-up",
    title: "Innovation Driven",
    description:
      "We continuously adopt cutting-edge technologies and industry best practices to improve efficiency and reduce project costs.",
  },
  {
    icon: "clock",
    title: "On-Time & On-Budget",
    description:
      "We maintain strict project schedules and cost controls, delivering within budget and on time — every time.",
  },
];

export const careers: Career[] = [
  {
    id: "c1",
    title: "Senior Process Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    description:
      "We are seeking an experienced Process Engineer to lead complex oil and gas engineering projects and mentor junior engineers.",
    requirements: [
      "10+ years in oil & gas process engineering",
      "Professional Engineer (PE) certification preferred",
      "Experience in FEED and EPCI project delivery",
      "Proficiency in HYSYS / ASPEN Plus",
    ],
  },
  {
    id: "c2",
    title: "Marine Superintendent",
    department: "Marine Services",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    description:
      "Oversee all marine operations, vessel management activities, and ensure compliance with international maritime standards.",
    requirements: [
      "Marine engineering or nautical background",
      "OPITO / BOSIET certification required",
      "5+ years offshore operational experience",
      "Thorough knowledge of SOLAS and MARPOL",
    ],
  },
  {
    id: "c3",
    title: "HSE Manager",
    department: "QHSE",
    location: "Lagos / Field Locations",
    type: "Full-Time",
    description:
      "Lead the Health, Safety, and Environment function across all project sites and corporate offices.",
    requirements: [
      "NEBOSH International General Certificate (minimum)",
      "8+ years in oil & gas HSE management",
      "Proven incident investigation expertise",
      "ISO 45001 / ISO 14001 lead auditor qualified",
    ],
  },
  {
    id: "c4",
    title: "Project Controls Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    description:
      "Develop and maintain project schedules, cost reports, and risk registers for multiple concurrent engineering projects.",
    requirements: [
      "PMP or equivalent certification",
      "Proficiency in Primavera P6 and MS Project",
      "5+ years in oil & gas project controls",
      "Experience with Earned Value Management",
    ],
  },
];

export const contactInfo = {
  address: "11 Raymond Njoku Street, SW Ikoyi, Lagos, Nigeria",
  email: "info@orbital-ng.com",
  phones: ["+234 80 33489272", "+234 80 51234859"],
  hours: "Monday – Friday: 8:00 AM – 5:00 PM WAT",
};

export const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Facebook", href: "#", icon: "facebook" },
];
