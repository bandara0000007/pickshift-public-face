import { render, screen } from "@testing-library/react";
import { complianceStats } from "@/lib/content";
import { ComplianceStrip } from "./ComplianceStrip";

describe("ComplianceStrip", () => {
  it("renders the heading and every compliance stat", () => {
    render(<ComplianceStrip />);
    expect(screen.getByText("Fair Work compliant by design.")).toBeInTheDocument();
    complianceStats.forEach((stat) => {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
      expect(screen.getByText(stat.value)).toBeInTheDocument();
    });
  });
});
