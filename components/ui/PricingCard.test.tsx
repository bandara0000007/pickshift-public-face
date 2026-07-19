import { fireEvent, render, screen } from "@testing-library/react";
import type { PricingPlan } from "@/lib/types";
import { PricingCard } from "./PricingCard";

const basePlan: PricingPlan = {
  id: "starter",
  name: "Starter",
  price: "$49",
  priceSuffix: "/mo",
  subtext: "Up to 10 workers",
  description: "",
  features: [{ label: "Unlimited shifts" }, { label: "Multi-site", included: false }],
  ctaLabel: "Start Free Trial",
  ctaHref: "#",
};

describe("PricingCard", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders plan name, price and features", () => {
    render(<PricingCard plan={basePlan} />);
    expect(screen.getByText("Starter")).toBeInTheDocument();
    expect(screen.getByText((_, node) => node?.textContent === "$49/mo")).toBeInTheDocument();
    expect(screen.getByText("/mo")).toBeInTheDocument();
    expect(screen.getByText("Unlimited shifts")).toBeInTheDocument();
    expect(screen.getByText("Multi-site")).toBeInTheDocument();
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

  it("scrolls to the given ctaSectionId instead of navigating when set", () => {
    const spy = jest.spyOn(Element.prototype, "scrollIntoView").mockImplementation(() => {});
    const demoSection = document.createElement("div");
    demoSection.id = "book-a-demo";
    document.body.appendChild(demoSection);

    render(<PricingCard plan={{ ...basePlan, ctaHref: "#book-a-demo", ctaSectionId: "book-a-demo" }} />);
    fireEvent.click(screen.getByRole("link", { name: "Start Free Trial" }));

    expect(spy).toHaveBeenCalledWith({ behavior: "smooth" });
    document.body.removeChild(demoSection);
  });

  it("has no scroll behavior when ctaSectionId is absent", () => {
    const spy = jest.spyOn(Element.prototype, "scrollIntoView").mockImplementation(() => {});
    render(<PricingCard plan={basePlan} />);
    fireEvent.click(screen.getByRole("link", { name: "Start Free Trial" }));
    expect(spy).not.toHaveBeenCalled();
  });
});
