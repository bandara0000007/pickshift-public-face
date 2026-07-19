import { render, screen } from "@testing-library/react";
import { heroHeadline, heroTrustCaption } from "@/lib/content";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the headline, subcopy and both CTAs", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: new RegExp(heroHeadline.highlighted) }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Hire Staff Free →" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Find a Shift — Become a Shiftee" })).toBeInTheDocument();
  });

  it("renders the trust-faces caption", () => {
    render(<Hero />);
    expect(screen.getByText(heroTrustCaption)).toBeInTheDocument();
  });

  it("renders the live Order Book widget", () => {
    render(<Hero />);
    expect(screen.getByTestId("order-book-industry-label")).toBeInTheDocument();
  });
});
