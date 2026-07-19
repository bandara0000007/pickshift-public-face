import type { Testimonial } from "@/lib/types";
import { SafeImage } from "./SafeImage";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex gap-0.5 text-[15px] leading-none text-yellow" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { dark } = testimonial;

  return (
    <div
      className={`rounded-20 p-7 sm:p-8 ${dark ? "bg-navy" : "bg-white shadow-[0_2px_14px_rgba(0,0,0,.06)]"}`}
    >
      <StarRow rating={testimonial.rating} />
      <p className={`mb-5 font-inter text-sm leading-[1.75] ${dark ? "text-white/80" : "text-ink-444"}`}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <SafeImage src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <div className={`font-inter text-[13px] font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>
            {testimonial.name}
          </div>
          <div className={`font-inter text-xs ${dark ? "text-white/50" : "text-ink-999"}`}>
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}
