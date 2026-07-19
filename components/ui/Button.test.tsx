import { fireEvent, render, screen } from "@testing-library/react";
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

  it("calls the optional onClick handler when provided", () => {
    const onClick = jest.fn();
    render(
      <Button href="#book-a-demo" onClick={onClick}>
        Contact Us
      </Button>,
    );
    fireEvent.click(screen.getByRole("link", { name: "Contact Us" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("works without an onClick handler", () => {
    render(<Button href="#">No handler</Button>);
    expect(() => fireEvent.click(screen.getByRole("link", { name: "No handler" }))).not.toThrow();
  });
});
