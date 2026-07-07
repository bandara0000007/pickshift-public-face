import { IndustryTile } from "@/components/ui/IndustryTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="bg-surface-f5f7fb px-5 py-14 sm:px-8 sm:py-16 lg:px-16">
      <SectionHeading heading="Built for the industries that keep Australia running" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((tile) => (
          <IndustryTile key={tile.id} tile={tile} />
        ))}
      </div>
    </section>
  );
}
