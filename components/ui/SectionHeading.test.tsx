import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders just the heading when no eyebrow/subtext are given", () => {
    render(<SectionHeading heading="Two ways to use PickShift" />);
    expect(screen.getByRole("heading", { name: "Two ways to use PickShift" })).toBeInTheDocument();
  });

  it("renders the eyebrow and subtext when provided", () => {
    render(<SectionHeading eyebrow="Pricing" heading="Simple." subtext="No lock-in." />);
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("No lock-in.")).toBeInTheDocument();
  });

  it("applies light-mode text colors when light is true", () => {
    render(<SectionHeading heading="Dark section heading" light />);
    const heading = screen.getByRole("heading", { name: "Dark section heading" });
    expect(heading.className).toEqual(expect.stringContaining("text-white"));
  });
});
