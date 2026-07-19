import { render, screen } from "@testing-library/react";
import { testimonials, testimonialsHeading } from "@/lib/content";
import { Testimonials } from "./Testimonials";

describe("Testimonials", () => {
  it("renders the heading and every testimonial", () => {
    render(<Testimonials />);
    expect(screen.getByRole("heading", { name: testimonialsHeading })).toBeInTheDocument();
    testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
    });
  });
});
