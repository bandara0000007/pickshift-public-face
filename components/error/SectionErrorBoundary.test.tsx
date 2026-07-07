import { render, screen } from "@testing-library/react";
import { errorReporting } from "@/lib/errorReporting";
import { SectionErrorBoundary } from "./SectionErrorBoundary";

function Bomb(): JSX.Element {
  throw new Error("section boom");
}

describe("SectionErrorBoundary", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders children normally when nothing throws", () => {
    render(
      <SectionErrorBoundary name="Hero">
        <div>hero content</div>
      </SectionErrorBoundary>,
    );
    expect(screen.getByText("hero content")).toBeInTheDocument();
  });

  it("shows a named fallback and a retry button when a section throws", () => {
    render(
      <SectionErrorBoundary name="Pricing">
        <Bomb />
      </SectionErrorBoundary>,
    );

    expect(screen.getByText(/Pricing.*section couldn.t be displayed/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Try again" })).toBeInTheDocument();
  });
});
