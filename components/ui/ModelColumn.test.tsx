import { fireEvent, render, screen } from "@testing-library/react";
import type { TwoModelColumnData } from "@/lib/types";
import { ModelColumn } from "./ModelColumn";

const baseColumn: TwoModelColumnData = {
  id: "employers",
  sectionId: "for-employers",
  tone: "light",
  icon: "briefcase",
  heading: "For Employers",
  eyebrow: "Marketplace Subscription",
  description: "Post shifts and get matched.",
  features: [{ label: "AI generates the job description" }],
  ctaLabel: "Post a Job Free →",
  ctaHref: "#",
  ctaTone: "blue",
};

describe("ModelColumn", () => {
  it("renders heading, eyebrow, description, features and sets the section id", () => {
    render(<ModelColumn column={baseColumn} />);
    expect(screen.getByRole("heading", { name: "For Employers" })).toBeInTheDocument();
    expect(screen.getByText("Marketplace Subscription")).toBeInTheDocument();
    expect(screen.getByText("Post shifts and get matched.")).toBeInTheDocument();
    expect(screen.getByText("AI generates the job description")).toBeInTheDocument();
    expect(document.getElementById("for-employers")).toBeInTheDocument();
  });

  it("shows a ribbon label only when provided", () => {
    render(<ModelColumn column={{ ...baseColumn, ribbonLabel: "LABOUR HIRE" }} />);
    expect(screen.getByText("LABOUR HIRE")).toBeInTheDocument();
  });

  it("does not show a ribbon by default", () => {
    render(<ModelColumn column={baseColumn} />);
    expect(screen.queryByText("LABOUR HIRE")).not.toBeInTheDocument();
  });

  it("applies dark styling for the dark tone", () => {
    const { container } = render(<ModelColumn column={{ ...baseColumn, tone: "dark" }} />);
    expect(container.firstChild).toHaveClass("bg-navy");
  });

  it("scrolls to ctaSectionId when the CTA is clicked and it is set", () => {
    const target = document.createElement("div");
    target.id = "book-a-demo";
    document.body.appendChild(target);
    const spy = jest.spyOn(target, "scrollIntoView").mockImplementation(() => {});

    render(<ModelColumn column={{ ...baseColumn, ctaHref: "#book-a-demo", ctaSectionId: "book-a-demo" }} />);
    fireEvent.click(screen.getByRole("link", { name: "Post a Job Free →" }));

    expect(spy).toHaveBeenCalledWith({ behavior: "smooth" });
    document.body.removeChild(target);
  });

  it.each(["briefcase", "people", "person"] as const)("renders the %s icon variant", (icon) => {
    render(<ModelColumn column={{ ...baseColumn, icon }} />);
    expect(screen.getByRole("heading", { name: "For Employers" })).toBeInTheDocument();
  });
});
