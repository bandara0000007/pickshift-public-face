import { render } from "@testing-library/react";
import { errorReporting } from "./errorReporting";
import { useGlobalErrorHandlers } from "./useGlobalErrorHandlers";

function TestHost() {
  useGlobalErrorHandlers();
  return null;
}

describe("useGlobalErrorHandlers", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("forwards window error events to logError", () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    render(<TestHost />);

    const error = new Error("window boom");
    window.dispatchEvent(new ErrorEvent("error", { message: "window boom", error }));

    expect(logSpy).toHaveBeenCalledWith(error, "window.onerror");
  });

  it("forwards unhandledrejection events to logError", () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    render(<TestHost />);

    const reason = new Error("rejected");
    const event = new window.PromiseRejectionEvent("unhandledrejection", {
      reason,
      promise: Promise.resolve(),
    });
    window.dispatchEvent(event);

    expect(logSpy).toHaveBeenCalledWith(reason, "unhandledrejection");
  });

  it("de-dupes identical messages fired in quick succession", () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    render(<TestHost />);

    window.dispatchEvent(new ErrorEvent("error", { message: "repeat", error: new Error("repeat") }));
    window.dispatchEvent(new ErrorEvent("error", { message: "repeat", error: new Error("repeat") }));

    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  it("removes listeners on unmount", () => {
    const removeSpy = jest.spyOn(window, "removeEventListener");
    const { unmount } = render(<TestHost />);

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("error", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("unhandledrejection", expect.any(Function));
  });
});
