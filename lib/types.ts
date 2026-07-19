export interface NavLink {
  label: string;
  href: string;
  sectionId?: string;
}

export interface FeatureBullet {
  label: string;
  included?: boolean;
}

export interface IndustryTileData {
  id: string;
  label: string;
  subline: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface ComplianceStat {
  label: string;
  value: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceSuffix?: string;
  subtext: string;
  description: string;
  features: FeatureBullet[];
  ctaLabel: string;
  ctaHref: string;
  ctaSectionId?: string;
  popular?: boolean;
  dark?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  dark?: boolean;
}

export type ToastVariant = "error" | "warning" | "info" | "success";

export interface ToastData {
  id: string;
  variant: ToastVariant;
  message: string;
}

export type ModelIcon = "briefcase" | "people" | "person";

export interface TwoModelColumnData {
  id: string;
  sectionId: string;
  tone: "light" | "dark";
  icon: ModelIcon;
  ribbonLabel?: string;
  heading: string;
  eyebrow: string;
  description: string;
  features: FeatureBullet[];
  ctaLabel: string;
  ctaHref: string;
  ctaSectionId?: string;
  ctaTone: "blue" | "yellow";
}

export interface HowItWorksBadge {
  label: string;
  bg: string;
  color: string;
}

export interface HowItWorksStep {
  id: string;
  index: 1 | 2 | 3 | 4 | 5;
  circleColor: string;
  shadowColor: string;
  circleIcon?: "star" | "check";
  title: string;
  body: string;
  boldFragment?: string;
  badges?: HowItWorksBadge[];
}

export interface OrderBookWorker {
  name: string;
  cred: string;
  km: string;
  rating: string;
  score: number;
  face: string;
}

export interface OrderBookSlide {
  image: string;
  industry: string;
  role: string;
  location: string;
  req1: string;
  req2: string;
  req3: string;
  workers: OrderBookWorker[];
}

export type CompanySize = "1-10" | "11-50" | "51-200" | "200+";

export interface DemoRequestPayload {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone?: string;
  companySize: CompanySize | "";
  message?: string;
}

export type DemoFormErrors = Partial<Record<keyof DemoRequestPayload, string>>;
