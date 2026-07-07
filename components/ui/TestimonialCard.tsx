import type { Testimonial } from "@/lib/types";
import { SafeImage } from "./SafeImage";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/[0.06] p-6 sm:p-7">
      <p className="mb-5 font-inter text-sm italic leading-[1.75] text-white/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-2.5">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <SafeImage src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <div className="font-inter text-[13px] font-semibold text-white">{testimonial.name}</div>
          <div className="font-inter text-[11px] text-white/40">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
