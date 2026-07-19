import { render, screen } from "@testing-library/react";
import { footerCta } from "@/lib/content";
import { FooterCta } from "./FooterCta";

describe("FooterCta", () => {
  it("renders the headline, subtext and both CTAs", () => {
    render(<FooterCta />);
    expect(
      screen.getByRole("heading", { name: `${footerCta.headingLine1} ${footerCta.headingLine2}` }),
    ).toBeInTheDocument();
    expect(screen.getByText(footerCta.subtext)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: footerCta.primaryLabel })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: footerCta.secondaryLabel })).toBeInTheDocument();
  });
});
