import { render, screen } from "@testing-library/react";
import type { IndustryTileData } from "@/lib/types";
import { IndustryTile } from "./IndustryTile";

const baseTile: IndustryTileData = {
  id: "healthcare",
  label: "Healthcare & Nursing",
  subline: "AHPRA verified · NDIS checks · Aged care",
  image: "/images/industry-strip-healthcare.jpg",
  imageAlt: "Healthcare worker",
};

describe("IndustryTile", () => {
  it("renders the label, subline and image", () => {
    render(<IndustryTile tile={baseTile} />);
    expect(screen.getByText("Healthcare & Nursing")).toBeInTheDocument();
    expect(screen.getByText("AHPRA verified · NDIS checks · Aged care")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Healthcare worker" })).toBeInTheDocument();
  });

  it("applies the featured (2-col span) styling when featured is true", () => {
    const { container } = render(<IndustryTile tile={{ ...baseTile, featured: true }} />);
    expect(container.firstChild).toHaveClass("sm:col-span-2");
  });

  it("does not apply featured styling by default", () => {
    const { container } = render(<IndustryTile tile={baseTile} />);
    expect(container.firstChild).not.toHaveClass("sm:col-span-2");
  });
});
