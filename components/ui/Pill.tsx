const VARIANT_CLASSES = {
  cyan: "bg-cyan text-white",
  yellow: "bg-yellow text-navy",
  outline: "border border-white/30 bg-white/20 text-white",
} as const;

export type PillVariant = keyof typeof VARIANT_CLASSES;

export function Pill({
  label,
  variant,
  className = "",
}: {
  label: string;
  variant?: PillVariant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-inter text-[11px] font-bold leading-none ${
        variant ? VARIANT_CLASSES[variant] : ""
      } ${className}`}
    >
      {label}
    </span>
  );
}
