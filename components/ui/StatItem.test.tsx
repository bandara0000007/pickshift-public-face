import { render, screen } from "@testing-library/react";
import { StatItem } from "./StatItem";

describe("StatItem", () => {
  it("renders the hero variant with value and label", () => {
    render(<StatItem variant="hero" value="2,400+" label="verified workers" />);
    expect(screen.getByText("2,400+")).toBeInTheDocument();
    expect(screen.getByText("verified workers")).toBeInTheDocument();
  });

  it("renders the compliance variant with value and label", () => {
    render(<StatItem variant="compliance" value="Enforced at posting" label="Award rates" />);
    expect(screen.getByText("Enforced at posting")).toBeInTheDocument();
    expect(screen.getByText("Award rates")).toBeInTheDocument();
  });
});
