import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "@/components/ui/StepCard";
import {
  howItWorksCta,
  howItWorksEyebrow,
  howItWorksHeading,
  howItWorksSteps,
  howItWorksSubtext,
  SECTION_IDS,
} from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id={SECTION_IDS.howItWorks}
      className="bg-surface-f5f7fb px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-[72px]"
    >
      <SectionHeading eyebrow={howItWorksEyebrow} heading={howItWorksHeading} subtext={howItWorksSubtext} />

      <div className="relative mx-auto mb-12 max-w-[1160px]">
        <div className="absolute left-[10%] right-[10%] top-9 hidden h-0.5 bg-[linear-gradient(90deg,#004AAD,#00C2D1,#FEE202)] lg:block" />
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {howItWorksSteps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button href={howItWorksCta.href} className="rounded-xl bg-blue px-12 py-[18px] text-base text-white">
          {howItWorksCta.label}
        </Button>
        <p className="mt-3 font-inter text-xs text-ink-aaa">{howItWorksCta.finePrint}</p>
      </div>
    </section>
  );
}
