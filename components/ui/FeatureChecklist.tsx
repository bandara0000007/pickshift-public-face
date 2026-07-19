import type { FeatureBullet } from "@/lib/types";

export function FeatureChecklist({
  features,
  checkClassName = "text-cyan",
  textClassName = "text-ink-444",
}: {
  features: FeatureBullet[];
  checkClassName?: string;
  textClassName?: string;
}) {
  return (
    <ul className="mb-6 flex list-none flex-col gap-2.5 p-0">
      {features.map((feature) => {
        const included = feature.included !== false;
        return (
          <li
            key={feature.label}
            className={`flex items-start gap-2 font-inter text-[13px] ${included ? textClassName : "text-ink-aaa"}`}
          >
            <span className={`shrink-0 font-bold ${included ? checkClassName : "text-ink-aaa"}`}>
              {included ? "✓" : "–"}
            </span>
            {feature.label}
          </li>
        );
      })}
    </ul>
  );
}
