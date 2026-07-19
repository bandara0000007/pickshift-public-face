import { render, screen } from "@testing-library/react";
import { StatItem } from "./StatItem";

describe("StatItem", () => {
  it("renders the label and value", () => {
    render(<StatItem value="Enforced at posting" label="Award rates" />);
    expect(screen.getByText("Enforced at posting")).toBeInTheDocument();
    expect(screen.getByText("Award rates")).toBeInTheDocument();
  });
});
