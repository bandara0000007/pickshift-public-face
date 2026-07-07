import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import {
  finalCta,
  testimonials,
  testimonialsEyebrow,
  testimonialsHeading,
} from "@/lib/content";

export function TestimonialsAndCta() {
  return (
    <section className="bg-navy px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-[72px]">
      <div className="mb-10 grid grid-cols-1 items-center gap-6 sm:mb-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="mb-3 font-inter text-[11px] font-bold uppercase tracking-[2px] text-cyan">
            {testimonialsEyebrow}
          </p>
          <h2 className="font-poppins text-[28px] font-extrabold leading-tight tracking-[-0.7px] text-white sm:text-[32px] lg:text-[34px]">
            {testimonialsHeading}
          </h2>
        </div>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-5 sm:mb-12 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-6 rounded-[20px] bg-yellow px-6 py-10 sm:px-10 lg:flex-row lg:gap-8 lg:px-14">
        <div className="text-center lg:text-left">
          <h2 className="mb-2 font-poppins text-2xl font-extrabold tracking-[-0.8px] text-navy sm:text-3xl">
            {finalCta.heading}
          </h2>
          <p className="font-inter text-sm text-[#153B66]/80">{finalCta.subtext}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
          <Button
            href={finalCta.primaryHref}
            className="rounded-xl bg-navy px-9 py-4 text-[15px] text-white"
          >
            {finalCta.primaryLabel}
          </Button>
          <Button
            href={finalCta.secondaryHref}
            className="rounded-xl bg-white px-9 py-4 text-[15px] text-navy"
          >
            {finalCta.secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
