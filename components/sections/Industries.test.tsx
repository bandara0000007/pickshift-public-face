import { render, screen } from "@testing-library/react";
import { industries } from "@/lib/content";
import { Industries } from "./Industries";

describe("Industries", () => {
  it("renders the heading and every industry tile label", () => {
    render(<Industries />);
    expect(
      screen.getByRole("heading", { name: "Built for the industries that keep Australia running" }),
    ).toBeInTheDocument();

    industries.forEach((tile) => {
      const label = tile.gradientOnly ? tile.gradientOnly.heading : tile.label;
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
