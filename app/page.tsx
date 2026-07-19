import { SectionErrorBoundary } from "@/components/error/SectionErrorBoundary";
import { Nav } from "@/components/layout/Nav";
import { BookDemo } from "@/components/sections/BookDemo";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { FooterCta } from "@/components/sections/FooterCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { IndustryStrip } from "@/components/sections/IndustryStrip";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { TwoModel } from "@/components/sections/TwoModel";

export default function Home() {
  return (
    <main>
      <SectionErrorBoundary name="Nav">
        <Nav />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Hero">
        <Hero />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Two Model">
        <TwoModel />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Industry Strip">
        <IndustryStrip />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Compliance">
        <ComplianceStrip />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="How It Works">
        <HowItWorks />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Pricing">
        <Pricing />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Book a Demo">
        <BookDemo />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Testimonials">
        <Testimonials />
      </SectionErrorBoundary>
      <SectionErrorBoundary name="Footer CTA">
        <FooterCta />
      </SectionErrorBoundary>
    </main>
  );
}
