import { render, screen } from "@testing-library/react";
import { errorReporting } from "@/lib/errorReporting";
import { Providers } from "./providers";

describe("Providers", () => {
  it("renders children and wires up the global error handlers", () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});

    render(
      <Providers>
        <div>app content</div>
      </Providers>,
    );

    expect(screen.getByText("app content")).toBeInTheDocument();

    window.dispatchEvent(new ErrorEvent("error", { message: "boom", error: new Error("boom") }));
    expect(logSpy).toHaveBeenCalledWith(expect.any(Error), "window.onerror");

    logSpy.mockRestore();
  });
});
