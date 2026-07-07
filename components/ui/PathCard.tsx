import type { PathCardData } from "@/lib/types";
import { Button } from "./Button";
import { FeatureChecklist } from "./FeatureChecklist";
import { Pill } from "./Pill";
import { SafeImage } from "./SafeImage";

export function PathCard({ card }: { card: PathCardData }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-surface-e4e8f0">
      <div className="relative h-[160px] overflow-hidden sm:h-[190px] lg:h-[220px]">
        <SafeImage src={card.image} alt={card.imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent to-60%" />
        <div className="absolute bottom-4 left-5 flex gap-2">
          {card.tags.map((tag) => (
            <Pill key={tag.label} label={tag.label} variant={tag.variant} />
          ))}
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="mb-2.5 font-poppins text-lg font-bold text-navy sm:text-xl lg:text-[22px]">
          {card.title}
        </h3>
        <p className="mb-5 font-inter text-sm leading-[1.75] text-ink-666">{card.description}</p>
        <FeatureChecklist features={card.features} />
        <div className="flex flex-wrap items-center gap-3">
          <Button
            href={card.ctaHref}
            className={`rounded-[10px] px-6 py-3 text-[13px] ${
              card.ctaTone === "blue" ? "bg-blue text-white" : "bg-yellow text-navy"
            }`}
          >
            {card.ctaLabel}
          </Button>
          <span className="font-inter text-xs text-ink-aaa">{card.priceNote}</span>
        </div>
      </div>
    </div>
  );
}
