import { render, screen } from "@testing-library/react";
import { twoModelColumns } from "@/lib/content";
import { TwoModel } from "./TwoModel";

describe("TwoModel", () => {
  it("renders one column per entry in content data with the right section ids", () => {
    render(<TwoModel />);
    twoModelColumns.forEach((column) => {
      expect(screen.getByRole("heading", { name: column.heading })).toBeInTheDocument();
      expect(document.getElementById(column.sectionId)).toBeInTheDocument();
    });
  });
});
