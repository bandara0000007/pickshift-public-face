export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface FeatureBullet {
  label: string;
  emphasized?: boolean;
}

export interface PathCardData {
  id: string;
  image: string;
  imageAlt: string;
  tags: { label: string; variant: "cyan" | "yellow" | "outline" }[];
  title: string;
  description: string;
  features: FeatureBullet[];
  ctaLabel: string;
  ctaHref: string;
  ctaTone: "blue" | "yellow";
  priceNote: string;
}

export interface IndustryTileData {
  id: string;
  label: string;
  image?: string;
  imageAlt?: string;
  gradientOnly?: {
    heading: string;
    subtext: string;
  };
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
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  dark?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export type ToastVariant = "error" | "warning" | "info" | "success";

export interface ToastData {
  id: string;
  variant: ToastVariant;
  message: string;
}
