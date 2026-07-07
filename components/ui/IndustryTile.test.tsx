import { render, screen } from "@testing-library/react";
import type { IndustryTileData } from "@/lib/types";
import { IndustryTile } from "./IndustryTile";

describe("IndustryTile", () => {
  it("renders a photo tile with its label", () => {
    const tile: IndustryTileData = {
      id: "healthcare",
      label: "Healthcare & Nursing",
      image: "/images/industry-healthcare.jpg",
      imageAlt: "Healthcare worker",
    };
    render(<IndustryTile tile={tile} />);
    expect(screen.getByText("Healthcare & Nursing")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Healthcare worker" })).toBeInTheDocument();
  });

  it("renders the gradient-only variant without an image", () => {
    const tile: IndustryTileData = {
      id: "drivers",
      label: "Drivers",
      gradientOnly: { heading: "+Drivers", subtext: "HC · MC · MR licence verified" },
    };
    render(<IndustryTile tile={tile} />);
    expect(screen.getByText("+Drivers")).toBeInTheDocument();
    expect(screen.getByText("HC · MC · MR licence verified")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
