import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders every major section heading in top-to-bottom order", () => {
    render(<Home />);

    const headingTexts = screen.getAllByRole("heading").map((heading) => heading.textContent?.trim());

    const expectedOrder = [
      "Real people.Right fit.Every shift.",
      "For Employers",
      "PickShift Labour Hire",
      "For Workers",
      "Serving 8 industries across Australia",
      "From posting to confirmed — in under 2 hours",
      "Start free. Scale when you're ready.",
      "See PickShift in action",
      "Trusted by employers and workers across Australia",
      "Start free today.Scale when it matters.",
    ];

    expectedOrder.forEach((text) => {
      expect(headingTexts).toContain(text);
    });

    const indices = expectedOrder.map((text) => headingTexts.indexOf(text));
    for (let i = 1; i < indices.length; i += 1) {
      expect(indices[i]).toBeGreaterThan(indices[i - 1]!);
    }
  });

  it("renders the nav and all its section anchors on the page", () => {
    render(<Home />);
    expect(document.getElementById("how-it-works")).toBeInTheDocument();
    expect(document.getElementById("for-employers")).toBeInTheDocument();
    expect(document.getElementById("for-agencies")).toBeInTheDocument();
    expect(document.getElementById("find-work")).toBeInTheDocument();
    expect(document.getElementById("pricing")).toBeInTheDocument();
    expect(document.getElementById("book-a-demo")).toBeInTheDocument();
  });
});
