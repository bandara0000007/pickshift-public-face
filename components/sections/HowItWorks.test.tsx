import { render, screen } from "@testing-library/react";
import { howItWorksHeading, howItWorksSteps, SECTION_IDS } from "@/lib/content";
import { HowItWorks } from "./HowItWorks";

describe("HowItWorks", () => {
  it("renders the heading, section id and every step title", () => {
    render(<HowItWorks />);
    expect(screen.getByRole("heading", { name: howItWorksHeading })).toBeInTheDocument();
    expect(document.getElementById(SECTION_IDS.howItWorks)).toBeInTheDocument();
    howItWorksSteps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    });
  });

  it("renders the final CTA and fine print", () => {
    render(<HowItWorks />);
    expect(screen.getByRole("link", { name: "Post Your First Role — It's Free →" })).toBeInTheDocument();
  });
});
