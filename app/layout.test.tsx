import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it("renders children inside the providers", () => {
    render(
      <RootLayout>
        <div>page content</div>
      </RootLayout>,
    );
    expect(screen.getByText("page content")).toBeInTheDocument();
  });

  it("exports metadata with a title and description", () => {
    expect(metadata.title).toContain("PickShift");
    expect(metadata.description).toBeTruthy();
  });
});
