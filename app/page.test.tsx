import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders every section heading in top-to-bottom order", () => {
    render(<Home />);

    const headingTexts = screen
      .getAllByRole("heading")
      .map((heading) => heading.textContent?.trim());

    const expectedOrder = [
      "Good work starts withgood people.",
      "Two ways to use PickShift",
      "Built for the industries that keep Australia running",
      "For Employers & SMBs",
      "For Labour Hire Agencies",
      "Simple. Transparent. Scalable.",
      "Real results for real businesses.",
      "Ready to PickShift?",
    ];

    expectedOrder.forEach((text) => {
      expect(headingTexts).toContain(text);
    });

    // Two ways to use PickShift must come before Built for the industries…
    const twoPathsIndex = headingTexts.indexOf("Two ways to use PickShift");
    const industriesIndex = headingTexts.indexOf(
      "Built for the industries that keep Australia running",
    );
    const pricingIndex = headingTexts.indexOf("Simple. Transparent. Scalable.");
    const testimonialsIndex = headingTexts.indexOf("Real results for real businesses.");

    expect(twoPathsIndex).toBeLessThan(industriesIndex);
    expect(industriesIndex).toBeLessThan(pricingIndex);
    expect(pricingIndex).toBeLessThan(testimonialsIndex);
  });
});
