import { render, screen } from "@testing-library/react";
import type { Testimonial } from "@/lib/types";
import { TestimonialCard } from "./TestimonialCard";

const testimonial: Testimonial = {
  quote: "Great platform.",
  name: "Linda R.",
  role: "Facility Manager · Aged Care",
  avatar: "/images/avatar-worker-1.jpg",
  rating: 5,
};

describe("TestimonialCard", () => {
  it("renders the quote, name, role and avatar", () => {
    render(<TestimonialCard testimonial={testimonial} />);
    expect(screen.getByText(/Great platform\./)).toBeInTheDocument();
    expect(screen.getByText("Linda R.")).toBeInTheDocument();
    expect(screen.getByText("Facility Manager · Aged Care")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Linda R." })).toBeInTheDocument();
  });

  it("renders a star row reflecting the rating", () => {
    render(<TestimonialCard testimonial={{ ...testimonial, rating: 3 }} />);
    expect(screen.getByLabelText("3 out of 5 stars")).toBeInTheDocument();
  });

  it("applies light card styling by default", () => {
    const { container } = render(<TestimonialCard testimonial={testimonial} />);
    expect(container.firstChild).toHaveClass("bg-white");
  });

  it("applies dark card styling when dark is true", () => {
    const { container } = render(<TestimonialCard testimonial={{ ...testimonial, dark: true }} />);
    expect(container.firstChild).toHaveClass("bg-navy");
  });
});
