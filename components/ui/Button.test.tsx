import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders an anchor with the given href and label", () => {
    render(<Button href="#pricing">Click me</Button>);
    const link = screen.getByRole("link", { name: "Click me" });
    expect(link).toHaveAttribute("href", "#pricing");
  });

  it("merges custom className onto the base styles", () => {
    render(
      <Button href="#" className="bg-yellow text-navy">
        Styled
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Styled" });
    expect(link.className).toEqual(expect.stringContaining("bg-yellow"));
    expect(link.className).toEqual(expect.stringContaining("inline-flex"));
  });
});
