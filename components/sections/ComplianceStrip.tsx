import { StatItem } from "@/components/ui/StatItem";
import { complianceHeading, complianceStats } from "@/lib/content";

export function ComplianceStrip() {
  return (
    <section className="bg-navy px-5 py-9 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-[280px] text-center font-poppins text-lg font-bold text-white sm:text-xl lg:text-left">
          {complianceHeading}
        </div>
        <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 lg:gap-10">
          {complianceStats.map((stat) => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
