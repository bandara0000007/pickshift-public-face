import { render, screen } from "@testing-library/react";
import { testimonials } from "@/lib/content";
import { TestimonialsAndCta } from "./TestimonialsAndCta";

describe("TestimonialsAndCta", () => {
  it("renders the heading, every testimonial, and the final CTA banner", () => {
    render(<TestimonialsAndCta />);

    expect(screen.getByRole("heading", { name: "Real results for real businesses." })).toBeInTheDocument();
    testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
    });

    expect(screen.getByRole("heading", { name: "Ready to PickShift?" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Post a Job Free" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Find a Shift" })).toBeInTheDocument();
  });
});
