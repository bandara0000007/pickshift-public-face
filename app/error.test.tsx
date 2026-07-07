import { fireEvent, render, screen } from "@testing-library/react";
import { errorReporting } from "@/lib/errorReporting";
import ErrorPage from "./error";

describe("app/error", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("reports the error and lets the user try again", () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    const reset = jest.fn();
    const error = Object.assign(new Error("route boom"), { digest: "abc123" });

    render(<ErrorPage error={error} reset={reset} />);

    expect(logSpy).toHaveBeenCalledWith(error, "app/error");
    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
