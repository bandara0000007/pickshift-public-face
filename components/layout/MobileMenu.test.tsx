import { fireEvent, render, screen } from "@testing-library/react";
import { MobileMenu } from "./MobileMenu";

describe("MobileMenu", () => {
  it("renders all nav links and CTAs regardless of open state", () => {
    render(<MobileMenu open={false} onClose={() => {}} />);
    expect(screen.getByText("For Employers")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign In" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Start Free" })).toBeInTheDocument();
  });

  it("applies closed styling when open is false", () => {
    render(<MobileMenu open={false} onClose={() => {}} />);
    expect(document.getElementById("mobile-menu")?.className).toEqual(
      expect.stringContaining("max-h-0"),
    );
  });

  it("applies open styling and calls onClose when a link is clicked", () => {
    const onClose = jest.fn();
    render(<MobileMenu open onClose={onClose} />);

    expect(document.getElementById("mobile-menu")?.className).toEqual(
      expect.stringContaining("max-h-[480px]"),
    );

    fireEvent.click(screen.getByText("For Employers"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("smooth-scrolls to the target section when a link is clicked", () => {
    const target = document.createElement("div");
    target.id = "how-it-works";
    document.body.appendChild(target);
    const spy = jest.spyOn(target, "scrollIntoView").mockImplementation(() => {});

    render(<MobileMenu open onClose={() => {}} />);
    fireEvent.click(screen.getByText("How It Works"));

    expect(spy).toHaveBeenCalledWith({ behavior: "smooth" });
    document.body.removeChild(target);
  });
});
