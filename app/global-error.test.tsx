import { fireEvent, render, screen } from "@testing-library/react";
import { errorReporting } from "@/lib/errorReporting";
import GlobalError from "./global-error";

describe("app/global-error", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("reports the error and lets the user try again", () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    const reset = jest.fn();
    const error = Object.assign(new Error("fatal boom"), { digest: "xyz" });

    render(<GlobalError error={error} reset={reset} />);

    expect(logSpy).toHaveBeenCalledWith(error, "app/global-error");
    expect(screen.getByText("PickShift is temporarily unavailable.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
