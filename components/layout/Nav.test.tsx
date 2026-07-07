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
});
