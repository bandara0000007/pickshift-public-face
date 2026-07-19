import {
  complianceStats,
  heroBadges,
  howItWorksSteps,
  industries,
  navLinks,
  PLACEHOLDER_HREF,
  pricingPlans,
  SECTION_IDS,
  testimonials,
  twoModelColumns,
} from "./content";

describe("content data shape invariants", () => {
  it("resolves every nav link to either a real section id or the placeholder href", () => {
    expect(navLinks.length).toBeGreaterThan(0);
    const sectionIdValues = Object.values(SECTION_IDS) as string[];
    navLinks.forEach((link) => {
      const isPlaceholder = link.href === PLACEHOLDER_HREF;
      const isRealAnchor = link.sectionId !== undefined && sectionIdValues.includes(link.sectionId);
      expect(isPlaceholder || isRealAnchor).toBe(true);
    });
  });

  it("includes a Book a Demo nav link", () => {
    expect(navLinks.some((link) => link.label === "Book a Demo")).toBe(true);
  });

  it("has exactly two hero badges", () => {
    expect(heroBadges).toHaveLength(2);
  });

  it("has exactly 3 two-model columns, with the agency column dark and scrolling to book-a-demo", () => {
    expect(twoModelColumns).toHaveLength(3);
    const agency = twoModelColumns.find((column) => column.id === "agency");
    expect(agency?.tone).toBe("dark");
    expect(agency?.ctaSectionId).toBe(SECTION_IDS.bookDemo);
  });

  it("has 6 industry tiles with exactly one featured tile", () => {
    expect(industries).toHaveLength(6);
    expect(industries.filter((tile) => tile.featured)).toHaveLength(1);
  });

  it("has exactly 5 compliance stats", () => {
    expect(complianceStats).toHaveLength(5);
  });

  it("has exactly 5 how-it-works steps in order 1-5", () => {
    expect(howItWorksSteps).toHaveLength(5);
    expect(howItWorksSteps.map((step) => step.index)).toEqual([1, 2, 3, 4, 5]);
  });

  it("has exactly one pricing plan marked popular and one dark, with the dark plan scrolling to book-a-demo", () => {
    const popularPlans = pricingPlans.filter((plan) => plan.popular);
    const darkPlans = pricingPlans.filter((plan) => plan.dark);
    expect(popularPlans).toHaveLength(1);
    expect(darkPlans).toHaveLength(1);
    expect(darkPlans[0]?.ctaSectionId).toBe(SECTION_IDS.bookDemo);
  });

  it("gives every pricing plan at least one excluded feature or none (no plan is empty)", () => {
    pricingPlans.forEach((plan) => {
      expect(plan.features.length).toBeGreaterThan(0);
    });
  });

  it("has exactly 3 testimonials with exactly one dark card", () => {
    expect(testimonials).toHaveLength(3);
    expect(testimonials.filter((testimonial) => testimonial.dark)).toHaveLength(1);
  });
});
