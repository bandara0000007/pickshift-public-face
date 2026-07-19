import { render, screen } from "@testing-library/react";
import type { HowItWorksStep } from "@/lib/types";
import { StepCard } from "./StepCard";

const baseStep: HowItWorksStep = {
  id: "post-role",
  index: 1,
  circleColor: "#004AAD",
  shadowColor: "rgba(0,74,173,.25)",
  title: "Post Your Role",
  body: "Just speak or type naturally.",
};

describe("StepCard", () => {
  it("renders the numeral, title and body when no icon is set", () => {
    render(<StepCard step={baseStep} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Post Your Role")).toBeInTheDocument();
    expect(screen.getByText("Just speak or type naturally.")).toBeInTheDocument();
  });

  it("renders badges when provided", () => {
    render(
      <StepCard
        step={{
          ...baseStep,
          badges: [{ label: "Voice input", bg: "#EEF6FF", color: "#004AAD" }],
        }}
      />,
    );
    expect(screen.getByText("Voice input")).toBeInTheDocument();
  });

  it("renders no badges by default", () => {
    render(<StepCard step={baseStep} />);
    expect(screen.queryByText("Voice input")).not.toBeInTheDocument();
  });

  it("renders a star icon instead of a numeral when circleIcon is star", () => {
    render(<StepCard step={{ ...baseStep, circleIcon: "star" }} />);
    expect(screen.queryByText("1")).not.toBeInTheDocument();
  });

  it("renders a check icon instead of a numeral when circleIcon is check", () => {
    render(<StepCard step={{ ...baseStep, index: 5, circleIcon: "check" }} />);
    expect(screen.queryByText("5")).not.toBeInTheDocument();
  });
});
