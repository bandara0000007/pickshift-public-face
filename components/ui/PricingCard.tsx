"use client";

import type { PricingPlan } from "@/lib/types";
import { scrollToSection } from "@/lib/scrollToSection";
import { Button } from "./Button";
import { FeatureChecklist } from "./FeatureChecklist";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const containerClasses = plan.dark
    ? "border-2 border-surface-e8eaf0 bg-navy"
    : plan.popular
      ? "border-2 border-blue bg-[#F5F8FF]"
      : "border-2 border-surface-e8eaf0 bg-white";

  const eyebrowClasses = plan.dark ? "text-yellow" : plan.popular ? "text-blue" : "text-ink-999";
  const priceClasses = plan.dark ? "text-white" : "text-navy";
  const subtextClasses = plan.dark ? "text-white/45" : "text-ink-aaa";
  const checkClassName = plan.dark ? "text-yellow" : "text-cyan";
  const featureTextClassName = plan.dark ? "text-white/80" : "text-ink-444";

  const ctaClasses = plan.dark
    ? "bg-yellow text-navy"
    : plan.popular
      ? "bg-yellow text-navy"
      : plan.id === "starter"
        ? "bg-blue text-white"
        : "border-2 border-[#E0E0E0] text-ink-444";

  return (
    <div className={`relative rounded-20 px-7 py-9 text-center ${containerClasses}`}>
      {plan.popular && (
        <div className="absolute -top-px left-7 whitespace-nowrap rounded-b-lg bg-blue px-3.5 py-1 font-inter text-[10px] font-bold tracking-[0.8px] text-white">
          MOST POPULAR
        </div>
      )}
      <div className={`mb-2 font-inter text-[11px] font-bold uppercase tracking-[1px] ${eyebrowClasses}`}>
        {plan.name}
      </div>
      <div className={`mb-1.5 font-poppins text-[40px] font-extrabold ${priceClasses}`}>
        {plan.price}
        {plan.priceSuffix && (
          <span className="text-base font-semibold text-ink-aaa">{plan.priceSuffix}</span>
        )}
      </div>
      <div className={`mb-5 font-inter text-[13px] ${subtextClasses}`}>{plan.subtext}</div>
      <div className="border-t border-[#F0F0F0] pt-5 text-left">
        <FeatureChecklist
          features={plan.features}
          checkClassName={checkClassName}
          textClassName={featureTextClassName}
        />
      </div>
      <Button
        href={plan.ctaHref}
        onClick={
          plan.ctaSectionId
            ? (event) => {
                event.preventDefault();
                scrollToSection(plan.ctaSectionId as string);
              }
            : undefined
        }
        className={`block w-full rounded-[10px] py-3 text-[13px] ${ctaClasses}`}
      >
        {plan.ctaLabel}
      </Button>
    </div>
  );
}
