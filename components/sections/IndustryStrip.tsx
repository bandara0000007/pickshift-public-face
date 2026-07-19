import { IndustryTile } from "@/components/ui/IndustryTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, industryStripHeading, industryStripSubtext } from "@/lib/content";

export function IndustryStrip() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-[72px]">
      <SectionHeading heading={industryStripHeading} subtext={industryStripSubtext} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((tile) => (
          <IndustryTile key={tile.id} tile={tile} />
        ))}
      </div>
    </section>
  );
}
