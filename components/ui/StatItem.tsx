export function StatItem({
  label,
  value,
  variant,
}: {
  label: string;
  value: string;
  variant: "hero" | "compliance";
}) {
  if (variant === "hero") {
    return (
      <div className="flex flex-1 items-baseline justify-center gap-2 whitespace-nowrap text-center">
        <span className="font-poppins text-lg font-extrabold text-yellow sm:text-[22px] lg:text-[26px]">
          {value}
        </span>
        <span className="font-inter text-[11px] text-white/60 sm:text-[13px]">{label}</span>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="mb-1 font-inter text-xs text-white/50">{label}</div>
      <div className="font-poppins text-sm font-bold text-cyan">{value}</div>
    </div>
  );
}
