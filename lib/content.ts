import type {
  ComplianceStat,
  HeroStat,
  IndustryTileData,
  NavLink,
  PathCardData,
  PricingPlan,
  Testimonial,
} from "./types";

// All external CTA destinations in the source mockup pointed at a specific
// third-party app URL with hardcoded test IDs; replaced with placeholders per
// product decision until real destinations are wired up.
export const PLACEHOLDER_HREF = "#";

export const navLinks: NavLink[] = [
  { label: "For Employers", href: PLACEHOLDER_HREF },
  { label: "For Agencies", href: PLACEHOLDER_HREF },
  { label: "Find Work", href: PLACEHOLDER_HREF },
  { label: "Pricing", href: PLACEHOLDER_HREF },
];

export const heroBadges: readonly [string, string] = [
  "Marketplace of Verified Shiftees",
  "Labour Hire",
];

export const heroStats: HeroStat[] = [
  { value: "2,400+", label: "verified workers" },
  { value: "180+", label: "employers" },
  { value: "<2hrs", label: "avg. match time" },
  { value: "8", label: "industries" },
  { value: "Free", label: "up to 5 workers" },
];

export const pathCards: PathCardData[] = [
  {
    id: "employers",
    image: "/images/path-marketplace.jpg",
    imageAlt: "Employer reviewing candidates",
    tags: [
      { label: "Marketplace", variant: "cyan" },
      { label: "Subscription", variant: "yellow" },
    ],
    title: "For Employers & SMBs",
    description:
      "Post shifts, manage rosters, access AI-matched candidates. Free for up to 5 workers. Scales with your team on a simple monthly subscription.",
    features: [
      { label: "AI Avatar matching" },
      { label: "Credential verification" },
      { label: "Roster & scheduling" },
      { label: "Fair Work compliance" },
    ],
    ctaLabel: "Post a Job Free →",
    ctaHref: PLACEHOLDER_HREF,
    ctaTone: "blue",
    priceNote: "From $0/month",
  },
  {
    id: "agencies",
    image: "/images/path-labour-hire.jpg",
    imageAlt: "Labour hire agency staff",
    tags: [
      { label: "Labour Hire", variant: "yellow" },
      { label: "Agency Platform", variant: "outline" },
    ],
    title: "For Labour Hire Agencies",
    description:
      "Run your entire operation from one platform. Manage your candidate pool, place workers across multiple client sites, and bulk upload shifts via CSV or API.",
    features: [
      { label: "50 sub-recruiters", emphasized: true },
      { label: "CSV / API bulk upload" },
      { label: "Multi-site clients" },
      { label: "Licence compliance VIC/QLD/SA" },
    ],
    ctaLabel: "Talk to Us →",
    ctaHref: PLACEHOLDER_HREF,
    ctaTone: "yellow",
    priceNote: "Custom pricing",
  },
];

export const industries: IndustryTileData[] = [
  { id: "healthcare", label: "Healthcare & Nursing", image: "/images/industry-healthcare.jpg", imageAlt: "Healthcare worker" },
  { id: "warehouse", label: "Warehouse & Logistics", image: "/images/industry-warehouse-logistics.jpg", imageAlt: "Warehouse worker" },
  { id: "hospitality", label: "Hospitality", image: "/images/industry-hospitality.jpg", imageAlt: "Hospitality worker" },
  { id: "construction", label: "Construction", image: "/images/industry-construction.jpg", imageAlt: "Construction worker" },
  { id: "retail", label: "Retail", image: "/images/industry-retail.jpg", imageAlt: "Retail worker" },
  { id: "accommodation", label: "Accommodation", image: "/images/industry-accommodation.jpg", imageAlt: "Accommodation worker" },
  { id: "personal-care", label: "Personal Care", image: "/images/industry-personal-care.jpg", imageAlt: "Personal care worker" },
  {
    id: "drivers",
    label: "Drivers",
    gradientOnly: { heading: "+Drivers", subtext: "HC · MC · MR licence verified" },
  },
];

export const complianceHeading = "Fair Work compliant by design.";

export const complianceStats: ComplianceStat[] = [
  { label: "Award rates", value: "Enforced at posting" },
  { label: "Credentials", value: "AHPRA · White Card · NDIS" },
  { label: "ABN verification", value: "ATO API validated" },
  { label: "Privacy", value: "Privacy Act 1988 compliant" },
];

export const pricingEyebrow = "Pricing";
export const pricingHeading = "Simple. Transparent. Scalable.";
export const pricingSubtext =
  "Workers are always free. Employers start free — no credit card, no lock-in.";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    subtext: "Up to 5 workers · No credit card",
    description: "Perfect for small teams getting started with AI-matched casual labour.",
    ctaLabel: "Get Started",
    ctaHref: PLACEHOLDER_HREF,
  },
  {
    id: "starter",
    name: "Starter",
    price: "$49",
    priceSuffix: "/mo",
    subtext: "Up to 10 workers",
    description: "Unlimited shifts, AI matching, roster management and compliance tools.",
    ctaLabel: "Start Free Trial",
    ctaHref: PLACEHOLDER_HREF,
  },
  {
    id: "business",
    name: "Business",
    price: "$149",
    priceSuffix: "/mo",
    subtext: "Unlimited workers · Multi-site",
    description: "Full Avatar AI, auto-fill, hire manager invites, and priority support.",
    ctaLabel: "Start Free Trial",
    ctaHref: PLACEHOLDER_HREF,
    popular: true,
  },
  {
    id: "agency",
    name: "Agency",
    price: "Custom",
    subtext: "Labour hire · Enterprise",
    description: "50 sub-recruiters, CSV/API bulk upload, licence management, white-label.",
    ctaLabel: "Contact Sales",
    ctaHref: PLACEHOLDER_HREF,
    dark: true,
  },
];

export const testimonialsEyebrow = "What people say";
export const testimonialsHeading = "Real results for real businesses.";

export const testimonials: Testimonial[] = [
  {
    quote:
      "The AI Avatar feature is incredible — it actually captures the kind of person we want in our team, not just the qualifications.",
    name: "Linda R.",
    role: "Facility Manager · Aged Care",
    avatar: "/images/testimonial-avatar-1.jpg",
  },
  {
    quote:
      "I uploaded my AHPRA registration and White Card — within an hour I had three nursing shifts near Fitzroy matched to my exact availability.",
    name: "Emma P.",
    role: "Registered Nurse · Melbourne",
    avatar: "/images/testimonial-avatar-2.jpg",
  },
  {
    quote:
      "As a labour hire agency we place across 20+ clients. The CSV bulk upload and multi-site management has saved us 10+ hours per week.",
    name: "David S.",
    role: "Director · FastTrack Labour",
    avatar: "/images/testimonial-avatar-3.jpg",
  },
];

export const finalCta = {
  heading: "Ready to PickShift?",
  subtext: "Free for up to 5 workers. No credit card. No lock-in. Just local jobs, local staff.",
  primaryLabel: "Post a Job Free",
  primaryHref: PLACEHOLDER_HREF,
  secondaryLabel: "Find a Shift",
  secondaryHref: PLACEHOLDER_HREF,
};
