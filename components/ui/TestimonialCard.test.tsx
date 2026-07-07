import { render, screen } from "@testing-library/react";
import type { Testimonial } from "@/lib/types";
import { TestimonialCard } from "./TestimonialCard";

const testimonial: Testimonial = {
  quote: "Great platform.",
  name: "Linda R.",
  role: "Facility Manager · Aged Care",
  avatar: "/images/testimonial-avatar-1.jpg",
};

describe("TestimonialCard", () => {
  it("renders the quote, name, role and avatar", () => {
    render(<TestimonialCard testimonial={testimonial} />);
    expect(screen.getByText(/Great platform\./)).toBeInTheDocument();
    expect(screen.getByText("Linda R.")).toBeInTheDocument();
    expect(screen.getByText("Facility Manager · Aged Care")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Linda R." })).toBeInTheDocument();
  });
});
