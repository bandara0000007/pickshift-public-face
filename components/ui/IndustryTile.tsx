import type { IndustryTileData } from "@/lib/types";
import { SafeImage } from "./SafeImage";

export function IndustryTile({ tile }: { tile: IndustryTileData }) {
  return (
    <div
      className={`relative h-[160px] overflow-hidden rounded-18 sm:h-[180px] lg:h-[200px] ${
        tile.featured ? "sm:col-span-2" : ""
      }`}
    >
      <SafeImage src={tile.image} alt={tile.imageAlt} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 to-transparent to-55%" />
      <div className="absolute bottom-3.5 left-4 right-4">
        <div className={`font-poppins font-bold text-white ${tile.featured ? "text-base" : "text-sm"}`}>
          {tile.label}
        </div>
        <div className={`font-inter text-white/80 ${tile.featured ? "text-xs" : "text-[11px]"}`}>
          {tile.subline}
        </div>
      </div>
    </div>
  );
}
