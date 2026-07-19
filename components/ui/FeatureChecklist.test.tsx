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

  it("renders a checkmark for included features using the default cyan color", () => {
    render(<FeatureChecklist features={[{ label: "Multi-site clients" }]} />);
    const check = screen.getByText("✓");
    expect(check.className).toEqual(expect.stringContaining("text-cyan"));
  });

  it("renders a dash for excluded features and mutes the text", () => {
    render(<FeatureChecklist features={[{ label: "Multi-site", included: false }]} />);
    const marker = screen.getByText("–");
    expect(marker.className).toEqual(expect.stringContaining("text-ink-aaa"));
    expect(screen.getByText("Multi-site").className).toEqual(expect.stringContaining("text-ink-aaa"));
  });

  it("accepts a custom checkmark and text color", () => {
    render(
      <FeatureChecklist
        features={[{ label: "Custom styled" }]}
        checkClassName="text-yellow"
        textClassName="text-white"
      />,
    );
    expect(screen.getByText("✓").className).toEqual(expect.stringContaining("text-yellow"));
    expect(screen.getByText("Custom styled").className).toEqual(expect.stringContaining("text-white"));
  });
});
