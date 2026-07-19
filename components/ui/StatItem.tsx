export function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center sm:text-left lg:text-center">
      <div className="mb-1 font-inter text-xs text-white/50">{label}</div>
      <div className="font-poppins text-sm font-bold text-cyan">{value}</div>
    </div>
  );
}
