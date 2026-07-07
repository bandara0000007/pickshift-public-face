import type { FeatureBullet } from "@/lib/types";

export function FeatureChecklist({ features }: { features: FeatureBullet[] }) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {features.map((feature) => (
        <div key={feature.label} className="flex items-center gap-1.5 font-inter text-xs text-ink-444">
          <span
            className={
              feature.emphasized
                ? "rounded-[3px] bg-navy px-0.5 font-bold text-yellow"
                : "font-bold text-cyan"
            }
          >
            ✓
          </span>
          {feature.label}
        </div>
      ))}
    </div>
  );
}
