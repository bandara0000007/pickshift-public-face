import { render, screen } from "@testing-library/react";
import type { PathCardData } from "@/lib/types";
import { PathCard } from "./PathCard";

const baseCard: PathCardData = {
  id: "test",
  image: "/images/path-marketplace.jpg",
  imageAlt: "Test image",
  tags: [
    { label: "Marketplace", variant: "cyan" },
    { label: "Subscription", variant: "yellow" },
  ],
  title: "For Employers & SMBs",
  description: "Some description",
  features: [{ label: "AI Avatar matching" }, { label: "Roster & scheduling" }],
  ctaLabel: "Post a Job Free →",
  ctaHref: "#",
  ctaTone: "blue",
  priceNote: "From $0/month",
};

describe("PathCard", () => {
  it("renders title, description, tags, features and CTA", () => {
    render(<PathCard card={baseCard} />);

    expect(screen.getByRole("heading", { name: "For Employers & SMBs" })).toBeInTheDocument();
    expect(screen.getByText("Some description")).toBeInTheDocument();
    expect(screen.getByText("Marketplace")).toBeInTheDocument();
    expect(screen.getByText("Subscription")).toBeInTheDocument();
    expect(screen.getByText("AI Avatar matching")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Post a Job Free →" })).toBeInTheDocument();
    expect(screen.getByText("From $0/month")).toBeInTheDocument();
  });

  it("renders the blue CTA tone", () => {
    render(<PathCard card={{ ...baseCard, ctaTone: "blue" }} />);
    const link = screen.getByRole("link", { name: "Post a Job Free →" });
    expect(link.className).toEqual(expect.stringContaining("bg-blue"));
  });

  it("renders the yellow CTA tone", () => {
    render(<PathCard card={{ ...baseCard, ctaTone: "yellow", ctaLabel: "Talk to Us →" }} />);
    const link = screen.getByRole("link", { name: "Talk to Us →" });
    expect(link.className).toEqual(expect.stringContaining("bg-yellow"));
  });
});
