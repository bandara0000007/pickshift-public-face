import type {
  ComplianceStat,
  HowItWorksStep,
  IndustryTileData,
  NavLink,
  PricingPlan,
  Testimonial,
  TwoModelColumnData,
} from "./types";

// Every CTA in the source mockup pointed at a specific third-party app URL
// with hardcoded test IDs; replaced with a placeholder until real
// destinations are wired up, except where noted (scrolls to Book a Demo).
export const PLACEHOLDER_HREF = "#";

export const SECTION_IDS = {
  howItWorks: "how-it-works",
  forEmployers: "for-employers",
  forAgencies: "for-agencies",
  findWork: "find-work",
  pricing: "pricing",
  bookDemo: "book-a-demo",
} as const;

export const navLinks: NavLink[] = [
  { label: "How It Works", href: `#${SECTION_IDS.howItWorks}`, sectionId: SECTION_IDS.howItWorks },
  { label: "For Employers", href: `#${SECTION_IDS.forEmployers}`, sectionId: SECTION_IDS.forEmployers },
  { label: "For Agencies", href: `#${SECTION_IDS.forAgencies}`, sectionId: SECTION_IDS.forAgencies },
  { label: "Find Work", href: `#${SECTION_IDS.findWork}`, sectionId: SECTION_IDS.findWork },
  { label: "Pricing", href: `#${SECTION_IDS.pricing}`, sectionId: SECTION_IDS.pricing },
  { label: "Book a Demo", href: `#${SECTION_IDS.bookDemo}`, sectionId: SECTION_IDS.bookDemo },
];

export const heroBadges: readonly [string, string] = [
  "Marketplace of Verified Shiftees",
  "Labour Hire",
];

export const heroHeadline = {
  line1: "Real people.",
  line2: "Right fit.",
  highlighted: "Every shift.",
};

export const heroSubcopy =
  "PickShift is Australia's AI labour marketplace and labour hire platform — connecting verified local workers to employers using generative AI matching, built-in Fair Work compliance, and one-tap applications.";

export const heroPrimaryCta = { label: "Hire Staff Free →", href: PLACEHOLDER_HREF };
export const heroSecondaryCta = { label: "Find a Shift — Become a Shiftee", href: PLACEHOLDER_HREF };

export const heroFreeTierCallout = {
  bold: "Manage 5 of your shiftstaff fully for free",
  rest: " — no credit card required",
};

export const heroTrustAvatars = [
  "/images/avatar-worker-1.jpg",
  "/images/avatar-worker-2.jpg",
  "/images/avatar-worker-3.jpg",
];

export const heroTrustCaption = "Joined by 2,400+ verified workers across Australia";

export const orderBookCard = {
  eyebrowLabel: "PickShift Order Book",
  matchedBadge: "Matched to role · team · culture",
  rolePostedLabel: "Role Posted",
  verifiedShifteesLabel: "Verified Shiftees",
  footerNote: "Matched to your role, your team & your company culture — not just the CV",
  ctaLabel: "VIEW FULL ORDER BOOK →",
};

export const twoModelColumns: TwoModelColumnData[] = [
  {
    id: "employers",
    sectionId: SECTION_IDS.forEmployers,
    tone: "light",
    icon: "briefcase",
    heading: "For Employers",
    eyebrow: "Marketplace Subscription",
    description:
      "Post shifts, get AI-matched candidates with verified credentials, manage rosters and pay — all in one place. Free for up to 5 workers.",
    features: [
      { label: "AI generates the job description" },
      { label: "Candidates pre-verified before you see them" },
      { label: "Modern Award rates enforced automatically" },
      { label: "Roster management with compliance checks" },
    ],
    ctaLabel: "Post a Job Free →",
    ctaHref: PLACEHOLDER_HREF,
    ctaTone: "blue",
  },
  {
    id: "agency",
    sectionId: SECTION_IDS.forAgencies,
    tone: "dark",
    icon: "people",
    ribbonLabel: "LABOUR HIRE",
    heading: "PickShift Labour Hire",
    eyebrow: "Request Labour from PickShift",
    description:
      "Tell us what you need and PickShift delivers fully screened, verified local staff who fit your exact requirements — background checked, credentialled and ready to work.",
    features: [
      { label: "Fully screened & verified local staff — matched to your role" },
      { label: "Background checked, credentialled & compliant before placement" },
      { label: "PickShift handles payroll, super & Fair Work obligations" },
      { label: "One call — we find, place and manage your shiftstaff" },
    ],
    ctaLabel: "Request Labour →",
    ctaHref: PLACEHOLDER_HREF,
    ctaSectionId: SECTION_IDS.bookDemo,
    ctaTone: "yellow",
  },
  {
    id: "workers",
    sectionId: SECTION_IDS.findWork,
    tone: "light",
    icon: "person",
    heading: "For Workers",
    eyebrow: "Always Free",
    description:
      "Build your verified profile once, then apply to local shifts with one tap. AI learns your preferences and surfaces the roles that suit you best — at Fair Work-compliant rates.",
    features: [
      { label: "One-tap apply with your verified profile" },
      { label: "Upload licences & certs — AI extracts expiry dates" },
      { label: "Shifts matched to your schedule & location" },
      { label: "Never paid below Modern Award rate" },
    ],
    ctaLabel: "Browse Shifts →",
    ctaHref: PLACEHOLDER_HREF,
    ctaTone: "yellow",
  },
];

export const industryStripHeading = "Serving 8 industries across Australia";
export const industryStripSubtext =
  "Healthcare · Nursing · Personal Care · Construction · Warehouse · Hospitality · Retail · Drivers";

export const industries: IndustryTileData[] = [
  {
    id: "healthcare",
    label: "Healthcare & Nursing",
    subline: "AHPRA verified · NDIS checks · Aged care",
    image: "/images/industry-strip-healthcare.jpg",
    imageAlt: "Healthcare worker",
    featured: true,
  },
  {
    id: "construction",
    label: "Construction",
    subline: "White Card · High Risk licences",
    image: "/images/industry-strip-construction.jpg",
    imageAlt: "Construction worker",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    subline: "Hotels · Restaurants · Events",
    image: "/images/industry-strip-hospitality.jpg",
    imageAlt: "Hospitality worker",
  },
  {
    id: "warehouse",
    label: "Warehouse & Logistics",
    subline: "Forklift licence verified",
    image: "/images/industry-strip-warehouse-logistics.jpg",
    imageAlt: "Warehouse worker",
  },
  {
    id: "retail",
    label: "Retail",
    subline: "Stores · Pop-ups · Merch",
    image: "/images/industry-strip-retail.jpg",
    imageAlt: "Retail worker",
  },
  {
    id: "accommodation",
    label: "Accommodation",
    subline: "Hotels · Resorts · B&B",
    image: "/images/industry-strip-accommodation.jpg",
    imageAlt: "Accommodation worker",
  },
];

export const complianceHeading = "Fair Work compliant by design.";

export const complianceStats: ComplianceStat[] = [
  { label: "Award rates", value: "Enforced at posting" },
  { label: "Credentials", value: "AHPRA · White Card · NDIS" },
  { label: "ABN verification", value: "ATO API validated" },
  { label: "Privacy", value: "Privacy Act 1988 compliant" },
  { label: "Super guarantee", value: "12% from July 2025" },
];

export const howItWorksEyebrow = "How it works";
export const howItWorksHeading = "From posting to confirmed — in under 2 hours";
export const howItWorksSubtext = "A simple process designed to get the right person on site, fast.";

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "post-role",
    index: 1,
    circleColor: "#004AAD",
    shadowColor: "rgba(0,74,173,.25)",
    title: "Post Your Role",
    boldFragment: '"I need a forklift operator in Altona Monday morning"',
    body: 'Just speak or type naturally — "I need a forklift operator in Altona Monday morning" is all it takes. Voice input and natural language are fully supported.',
    badges: [
      { label: "Voice input", bg: "#EEF6FF", color: "#004AAD" },
      { label: "Natural language", bg: "#E6FBFC", color: "#007A85" },
      { label: "AI writes the JD", bg: "#FFFCE6", color: "#856800" },
      { label: "Award rate validated", bg: "#E8FFF3", color: "#0E7A4B" },
    ],
  },
  {
    id: "ai-avatar",
    index: 2,
    circleColor: "#00227C",
    shadowColor: "rgba(0,34,124,.25)",
    circleIcon: "star",
    title: "AI Builds Avatar",
    body: "GenAI creates a candidate Avatar from your team profile — capturing role fit, team culture and company values, not just qualifications.",
  },
  {
    id: "order-book-fills",
    index: 3,
    circleColor: "#00C2D1",
    shadowColor: "rgba(0,194,209,.25)",
    title: "Order Book Fills",
    body: "Verified local Shiftees are scored and ranked — skill fit 40%, culture 20%, availability 20%, credentials 20%. Only compliant workers appear.",
  },
  {
    id: "you-confirm",
    index: 4,
    circleColor: "#153B66",
    shadowColor: "rgba(21,59,102,.25)",
    title: "You Confirm",
    body: "Review your shortlist and select your hire in one click. The Shiftee accepts via one tap and receives automated shift reminders.",
  },
  {
    id: "shift-filled",
    index: 5,
    circleColor: "#FEE202",
    shadowColor: "rgba(254,226,2,.3)",
    circleIcon: "check",
    title: "Shift Filled",
    body: "Your Shiftee arrives verified and ready. Pay securely through the platform — no invoices, no agency calls, no surprises.",
  },
];

export const howItWorksCta = {
  label: "Post Your First Role — It's Free →",
  href: PLACEHOLDER_HREF,
  finePrint: "No credit card · Free up to 5 Shiftees · Fair Work compliant",
};

export const pricingEyebrow = "Simple pricing";
export const pricingHeading = "Start free. Scale when you're ready.";
export const pricingSubtext = "Workers always free. Employers free up to 5 workers — no credit card required.";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    subtext: "Forever free",
    description: "",
    features: [
      { label: "Up to 5 workers" },
      { label: "AI job description" },
      { label: "1 active shift posting" },
      { label: "Basic AI matching" },
      { label: "Roster management", included: false },
      { label: "Avatar AI matching", included: false },
    ],
    ctaLabel: "Get Started",
    ctaHref: PLACEHOLDER_HREF,
  },
  {
    id: "starter",
    name: "Starter",
    price: "$49",
    priceSuffix: "/mo",
    subtext: "Per location",
    description: "",
    features: [
      { label: "Up to 10 workers" },
      { label: "Unlimited shift postings" },
      { label: "AI Avatar matching" },
      { label: "Roster management" },
      { label: "Compliance automation" },
      { label: "Multi-site", included: false },
    ],
    ctaLabel: "Start Free Trial",
    ctaHref: PLACEHOLDER_HREF,
  },
  {
    id: "business",
    name: "Business",
    price: "$149",
    priceSuffix: "/mo",
    subtext: "Per organisation",
    description: "",
    features: [
      { label: "Unlimited workers" },
      { label: "Multi-site management" },
      { label: "Full Avatar AI + similarity scoring" },
      { label: "Auto-fill & gap alerts" },
      { label: "Hire manager invitations" },
      { label: "Priority support" },
    ],
    ctaLabel: "Start Free Trial",
    ctaHref: PLACEHOLDER_HREF,
    popular: true,
  },
  {
    id: "agency",
    name: "Agency / Enterprise",
    price: "Custom",
    subtext: "Volume pricing",
    description: "",
    features: [
      { label: "Up to 50 sub-recruiters" },
      { label: "Bulk CSV / API upload" },
      { label: "Labour hire licence management" },
      { label: "White-label options" },
      { label: "Dedicated account manager" },
      { label: "SLA + audit logs" },
    ],
    ctaLabel: "Contact Us",
    ctaHref: PLACEHOLDER_HREF,
    ctaSectionId: SECTION_IDS.bookDemo,
    dark: true,
  },
];

export const bookDemo = {
  eyebrow: "Book a Demo",
  heading: "See PickShift in action",
  subtext:
    "Tell us a bit about your team and we'll walk you through how AI matching, compliance automation and rostering work for your business.",
  successHeading: "Thanks — we'll be in touch shortly.",
  successBody: "A member of the PickShift team will reach out within one business day to schedule your demo.",
};

export const testimonialsHeading = "Trusted by employers and workers across Australia";

export const testimonials: Testimonial[] = [
  {
    quote:
      "We filled three ICU nursing shifts in a single afternoon. The AHPRA verification was already done — we just picked the best match and confirmed. It's changed how we handle last-minute call-outs.",
    name: "Linda R.",
    role: "Facility Manager · Sunrise Aged Care",
    avatar: "/images/avatar-worker-1.jpg",
    rating: 5,
  },
  {
    quote:
      "I uploaded my forklift licence and within an hour I had three warehouse shifts near me. The pay was above what I expected — and it showed me the award rate before I applied, which I really appreciated.",
    name: "Jason K.",
    role: "Forklift Operator · Dandenong VIC",
    avatar: "/images/avatar-worker-3.jpg",
    rating: 5,
    dark: true,
  },
  {
    quote:
      "As a labour hire agency, the bulk upload tool has saved us hours every week. We can now place workers across 20+ client sites and the system handles the compliance checks automatically.",
    name: "David S.",
    role: "Director · FastTrack Labour Solutions",
    avatar: "/images/avatar-worker-2.jpg",
    rating: 5,
  },
];

export const footerCta = {
  headingLine1: "Start free today.",
  headingLine2: "Scale when it matters.",
  subtext: "Marketplace subscription or labour hire — PickShift has a model that fits your business.",
  primaryLabel: "Post a Job — Free",
  primaryHref: PLACEHOLDER_HREF,
  secondaryLabel: "Find a Shift — Become a Shiftee",
  secondaryHref: PLACEHOLDER_HREF,
  finePrint: "Free up to 5 workers · No credit card · Fair Work compliant",
};
