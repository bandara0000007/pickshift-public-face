import type { PricingPlan } from "@/lib/types";
import { Button } from "./Button";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const containerClasses = plan.dark
    ? "border-2 border-surface-e8eaf0 bg-navy"
    : plan.popular
      ? "border-2 border-blue bg-[#F5F8FF]"
      : "border-2 border-surface-e8eaf0 bg-white";

  const eyebrowClasses = plan.dark ? "text-yellow" : plan.popular ? "text-blue" : "text-ink-999";
  const priceClasses = plan.dark ? "text-white" : "text-navy";
  const subtextClasses = plan.dark ? "text-white/45" : "text-ink-aaa";
  const descriptionClasses = plan.dark ? "text-white/70" : "text-ink-555";

  const ctaClasses = plan.dark
    ? "bg-yellow text-navy"
    : plan.popular
      ? "bg-yellow text-navy"
      : plan.id === "starter"
        ? "bg-blue text-white"
        : "border-2 border-[#DDD] text-ink-444";

  return (
    <div className={`relative rounded-[18px] px-6 py-8 text-center ${containerClasses}`}>
      {plan.popular && (
        <div className="absolute left-1/2 top-[-14px] -translate-x-1/2 whitespace-nowrap rounded-full bg-blue px-4 py-1 font-inter text-[10px] font-bold tracking-[0.6px] text-white">
          MOST POPULAR
        </div>
      )}
      <div className={`mb-2 font-inter text-[11px] font-bold uppercase tracking-[1px] ${eyebrowClasses}`}>
        {plan.name}
      </div>
      <div className={`mb-1.5 font-poppins text-[32px] font-extrabold sm:text-[36px] ${priceClasses}`}>
        {plan.price}
        {plan.priceSuffix && (
          <span className="text-sm font-medium text-ink-aaa">{plan.priceSuffix}</span>
        )}
      </div>
      <div className={`mb-4.5 font-inter text-[13px] ${subtextClasses}`}>{plan.subtext}</div>
      <div className={`mb-5 font-inter text-[13px] leading-[1.7] ${descriptionClasses}`}>
        {plan.description}
      </div>
      <Button href={plan.ctaHref} className={`block w-full rounded-[9px] py-2.5 text-[13px] ${ctaClasses}`}>
        {plan.ctaLabel}
      </Button>
    </div>
  );
}
