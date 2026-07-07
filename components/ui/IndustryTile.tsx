import type { IndustryTileData } from "@/lib/types";
import { SafeImage } from "./SafeImage";

export function IndustryTile({ tile }: { tile: IndustryTileData }) {
  if (tile.gradientOnly) {
    return (
      <div className="flex h-[140px] flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blue to-navy sm:h-[160px] lg:h-[180px]">
        <div className="font-poppins text-2xl font-extrabold leading-none text-yellow">
          {tile.gradientOnly.heading}
        </div>
        <div className="font-inter text-xs text-white/70">{tile.gradientOnly.subtext}</div>
      </div>
    );
  }

  return (
    <div className="relative h-[140px] overflow-hidden rounded-2xl sm:h-[160px] lg:h-[180px]">
      <SafeImage src={tile.image ?? ""} alt={tile.imageAlt ?? tile.label} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 to-transparent to-55%" />
      <div className="absolute bottom-3.5 left-4">
        <div className="font-poppins text-sm font-bold text-white">{tile.label}</div>
      </div>
    </div>
  );
}
