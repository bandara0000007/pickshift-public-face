import { render, screen } from "@testing-library/react";
import { pathCards } from "@/lib/content";
import { TwoPaths } from "./TwoPaths";

describe("TwoPaths", () => {
  it("renders the section heading and one card per entry in content data", () => {
    render(<TwoPaths />);
    expect(screen.getByRole("heading", { name: "Two ways to use PickShift" })).toBeInTheDocument();
    pathCards.forEach((card) => {
      expect(screen.getByRole("heading", { name: card.title })).toBeInTheDocument();
    });
  });
});
