import { render, screen } from "@testing-library/react";
import { industries, industryStripHeading } from "@/lib/content";
import { IndustryStrip } from "./IndustryStrip";

describe("IndustryStrip", () => {
  it("renders the heading and every industry tile label", () => {
    render(<IndustryStrip />);
    expect(screen.getByRole("heading", { name: industryStripHeading })).toBeInTheDocument();
    industries.forEach((tile) => {
      expect(screen.getByText(tile.label)).toBeInTheDocument();
    });
  });
});
