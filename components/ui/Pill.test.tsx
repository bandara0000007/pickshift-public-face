import { render, screen } from "@testing-library/react";
import { Pill } from "./Pill";

describe("Pill", () => {
  it("renders the label text", () => {
    render(<Pill label="Labour Hire" />);
    expect(screen.getByText("Labour Hire")).toBeInTheDocument();
  });

  it.each(["cyan", "yellow", "outline"] as const)("applies the %s variant classes", (variant) => {
    render(<Pill label="Tag" variant={variant} />);
    expect(screen.getByText("Tag")).toBeInTheDocument();
  });

  it("renders without a variant when none is provided", () => {
    render(<Pill label="Plain" className="custom-class" />);
    expect(screen.getByText("Plain").className).toEqual(expect.stringContaining("custom-class"));
  });
});
