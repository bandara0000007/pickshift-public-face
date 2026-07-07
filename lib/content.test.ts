import {
  complianceStats,
  heroBadges,
  heroStats,
  industries,
  navLinks,
  pathCards,
  PLACEHOLDER_HREF,
  pricingPlans,
  testimonials,
} from "./content";

describe("content data shape invariants", () => {
  it("uses the placeholder href for every nav link", () => {
    expect(navLinks.length).toBeGreaterThan(0);
    navLinks.forEach((link) => expect(link.href).toBe(PLACEHOLDER_HREF));
  });

  it("has exactly two hero badges", () => {
    expect(heroBadges).toHaveLength(2);
  });

  it("has exactly 5 hero stats", () => {
    expect(heroStats).toHaveLength(5);
  });

  it("has exactly 2 path cards, each using the placeholder href", () => {
    expect(pathCards).toHaveLength(2);
    pathCards.forEach((card) => expect(card.ctaHref).toBe(PLACEHOLDER_HREF));
  });

  it("has 8 industry tiles with exactly one gradient-only (non-photo) tile", () => {
    expect(industries).toHaveLength(8);
    const gradientOnly = industries.filter((tile) => tile.gradientOnly);
    expect(gradientOnly).toHaveLength(1);
    expect(gradientOnly[0]?.id).toBe("drivers");
  });

  it("has exactly 4 compliance stats", () => {
    expect(complianceStats).toHaveLength(4);
  });

  it("has exactly one pricing plan marked as popular", () => {
    const popularPlans = pricingPlans.filter((plan) => plan.popular);
    expect(popularPlans).toHaveLength(1);
    expect(popularPlans[0]?.id).toBe("business");
  });

  it("has exactly one dark pricing plan", () => {
    const darkPlans = pricingPlans.filter((plan) => plan.dark);
    expect(darkPlans).toHaveLength(1);
    expect(darkPlans[0]?.id).toBe("agency");
  });

  it("has exactly 3 testimonials", () => {
    expect(testimonials).toHaveLength(3);
  });
});
