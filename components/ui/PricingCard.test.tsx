import { render, screen } from "@testing-library/react";
import type { PricingPlan } from "@/lib/types";
import { PricingCard } from "./PricingCard";

const basePlan: PricingPlan = {
  id: "starter",
  name: "Starter",
  price: "$49",
  priceSuffix: "/mo",
  subtext: "Up to 10 workers",
  description: "Unlimited shifts.",
  ctaLabel: "Start Free Trial",
  ctaHref: "#",
};

describe("PricingCard", () => {
  it("renders plan name, price and description", () => {
    render(<PricingCard plan={basePlan} />);
    expect(screen.getByText("Starter")).toBeInTheDocument();
    expect(screen.getByText((_, node) => node?.textContent === "$49/mo")).toBeInTheDocument();
    expect(screen.getByText("/mo")).toBeInTheDocument();
    expect(screen.getByText("Unlimited shifts.")).toBeInTheDocument();
  });

  it("shows the MOST POPULAR ribbon only when popular", () => {
    render(<PricingCard plan={{ ...basePlan, popular: true }} />);
    expect(screen.getByText("MOST POPULAR")).toBeInTheDocument();
  });

  it("does not show the ribbon for a non-popular plan", () => {
    render(<PricingCard plan={basePlan} />);
    expect(screen.queryByText("MOST POPULAR")).not.toBeInTheDocument();
  });

  it("applies the dark variant styling for the agency plan", () => {
    render(<PricingCard plan={{ ...basePlan, id: "agency", name: "Agency", dark: true, price: "Custom" }} />);
    expect(screen.getByText("Custom")).toHaveClass("text-white");
  });
});
