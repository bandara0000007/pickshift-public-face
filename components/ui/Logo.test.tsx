import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders the PICK and SHIFT wordmark segments", () => {
    render(<Logo />);
    expect(screen.getByText("PICK")).toBeInTheDocument();
    expect(screen.getByText("SHIFT")).toBeInTheDocument();
  });
});
