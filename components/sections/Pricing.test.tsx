import { render, screen } from "@testing-library/react";
import { pricingHeading, pricingPlans, SECTION_IDS } from "@/lib/content";
import { Pricing } from "./Pricing";

describe("Pricing", () => {
  it("renders the heading, section id and every pricing plan", () => {
    render(<Pricing />);
    expect(screen.getByRole("heading", { name: pricingHeading })).toBeInTheDocument();
    expect(document.getElementById(SECTION_IDS.pricing)).toBeInTheDocument();
    pricingPlans.forEach((plan) => {
      expect(screen.getByText(plan.name)).toBeInTheDocument();
      const expectedPriceText = `${plan.price}${plan.priceSuffix ?? ""}`;
      expect(
        screen.getByText((_, node) => node?.textContent === expectedPriceText),
      ).toBeInTheDocument();
    });
  });

  it("shows exactly one MOST POPULAR ribbon", () => {
    render(<Pricing />);
    expect(screen.getAllByText("MOST POPULAR")).toHaveLength(1);
  });
});
