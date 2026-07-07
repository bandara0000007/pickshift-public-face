import { fireEvent, render, screen } from "@testing-library/react";
import { errorReporting } from "@/lib/errorReporting";
import { SafeImage } from "./SafeImage";

describe("SafeImage", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the image by default", () => {
    render(<SafeImage src="/images/hero-background.jpg" alt="Team" fill />);
    expect(screen.getByRole("img", { name: "Team" })).toBeInTheDocument();
  });

  it("swaps to a fallback and reports the error when the image fails to load", () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    render(<SafeImage src="/images/broken.jpg" alt="Broken photo" fill />);

    const img = screen.getByRole("img", { name: "Broken photo" });
    fireEvent.error(img);

    expect(screen.getByTestId("safe-image-fallback")).toBeInTheDocument();
    expect(screen.getByLabelText("Broken photo")).toBeInTheDocument();
    expect(logSpy).toHaveBeenCalledWith(expect.any(Error), "SafeImage");
  });
});
