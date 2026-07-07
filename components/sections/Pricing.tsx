import { PricingCard } from "@/components/ui/PricingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingEyebrow, pricingHeading, pricingPlans, pricingSubtext } from "@/lib/content";

export function Pricing() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
      <SectionHeading eyebrow={pricingEyebrow} heading={pricingHeading} subtext={pricingSubtext} />
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-4.5 sm:grid-cols-2 xl:grid-cols-4">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
