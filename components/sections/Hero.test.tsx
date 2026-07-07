import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the headline, subcopy and both CTAs", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { name: /good people\./i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "I'm an Employer →" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "I'm a Worker →" })).toBeInTheDocument();
  });

  it("renders all 5 hero stats", () => {
    render(<Hero />);
    expect(screen.getByText("2,400+")).toBeInTheDocument();
    expect(screen.getByText("180+")).toBeInTheDocument();
    expect(screen.getByText("<2hrs")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getAllByText("Free").length).toBeGreaterThan(0);
  });

  it("includes the Nav", () => {
    render(<Hero />);
    expect(screen.getByRole("button", { name: "Toggle navigation menu" })).toBeInTheDocument();
  });
});
