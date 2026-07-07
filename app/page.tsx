import { SectionErrorBoundary } from "@/components/error/SectionErrorBoundary";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Pricing } from "@/components/sections/Pricing";
import { TestimonialsAndCta } from "@/components/sections/TestimonialsAndCta";
import { TwoPaths } from "@/components/sections/TwoPaths";

export default function Home() {
  return (
    <main>
      <SectionErrorBoundary name="Hero">
        <Hero />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Two Paths">
        <TwoPaths />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Industries">
        <Industries />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Compliance">
        <ComplianceStrip />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Pricing">
        <Pricing />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Testimonials">
        <TestimonialsAndCta />
      </SectionErrorBoundary>
    </main>
  );
}
