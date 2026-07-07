import { render, screen } from "@testing-library/react";
import { FeatureChecklist } from "./FeatureChecklist";

describe("FeatureChecklist", () => {
  it("renders one row per feature", () => {
    render(
      <FeatureChecklist
        features={[{ label: "AI Avatar matching" }, { label: "Credential verification" }]}
      />,
    );
    expect(screen.getByText("AI Avatar matching")).toBeInTheDocument();
    expect(screen.getByText("Credential verification")).toBeInTheDocument();
  });

  it("gives emphasized bullets a distinct checkmark style", () => {
    render(<FeatureChecklist features={[{ label: "50 sub-recruiters", emphasized: true }]} />);
    const check = screen.getByText("✓");
    expect(check.className).toEqual(expect.stringContaining("bg-navy"));
  });

  it("uses the default cyan checkmark for non-emphasized bullets", () => {
    render(<FeatureChecklist features={[{ label: "Multi-site clients" }]} />);
    const check = screen.getByText("✓");
    expect(check.className).toEqual(expect.stringContaining("text-cyan"));
  });
});
