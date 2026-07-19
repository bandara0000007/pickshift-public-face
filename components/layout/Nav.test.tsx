import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders the logo and desktop links", () => {
    render(<Nav />);
    expect(screen.getByText("PICK")).toBeInTheDocument();
    expect(screen.getAllByText("Pricing").length).toBeGreaterThan(0);
  });

  it("toggles aria-expanded and opens the mobile menu on click", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    const toggle = screen.getByRole("button", { name: "Toggle navigation menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu when a link inside it is clicked", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    const toggle = screen.getByRole("button", { name: "Toggle navigation menu" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const mobileMenu = document.getElementById("mobile-menu")!;
    const { getByText } = within(mobileMenu);
    await user.click(getByText("Find Work"));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("smooth-scrolls to the matching section when a desktop nav link is clicked", () => {
    const target = document.createElement("div");
    target.id = "pricing";
    document.body.appendChild(target);
    const spy = jest.spyOn(target, "scrollIntoView").mockImplementation(() => {});

    render(<Nav />);
    const desktopNavLink = screen.getAllByText("Pricing")[0]!;
    desktopNavLink.click();

    expect(spy).toHaveBeenCalledWith({ behavior: "smooth" });
    document.body.removeChild(target);
  });

  it("does not scroll when Sign In or Start Free are clicked", () => {
    const spy = jest.spyOn(Element.prototype, "scrollIntoView").mockImplementation(() => {});
    render(<Nav />);
    screen.getAllByRole("link", { name: "Sign In" })[0]!.click();
    screen.getAllByRole("link", { name: "Start Free" })[0]!.click();
    expect(spy).not.toHaveBeenCalled();
  });
});
