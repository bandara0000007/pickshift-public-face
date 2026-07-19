import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials, testimonialsHeading } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-surface-f5f7fb px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-[72px]">
      <h2 className="mx-auto mb-10 max-w-2xl text-center font-poppins text-[28px] font-extrabold leading-tight tracking-[-0.7px] text-navy sm:mb-12 sm:text-[32px] lg:text-[34px]">
        {testimonialsHeading}
      </h2>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
