import { PathCard } from "@/components/ui/PathCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pathCards } from "@/lib/content";

export function TwoPaths() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-[72px]">
      <SectionHeading heading="Two ways to use PickShift" />
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-6 md:grid-cols-2">
        {pathCards.map((card) => (
          <PathCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
