import { render, screen } from "@testing-library/react";
import { pricingPlans } from "@/lib/content";
import { Pricing } from "./Pricing";

describe("Pricing", () => {
  it("renders the heading and every pricing plan", () => {
    render(<Pricing />);
    expect(screen.getByRole("heading", { name: "Simple. Transparent. Scalable." })).toBeInTheDocument();
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
