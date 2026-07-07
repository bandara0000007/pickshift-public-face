import { errorReporting } from "./errorReporting";

describe("errorReporting.logError", () => {
  afterEach(() => {
    errorReporting.__clearErrorSubscribers();
    jest.restoreAllMocks();
  });

  it("always logs to the console with context", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    errorReporting.logError(new Error("boom"), "test-context");
    expect(spy).toHaveBeenCalledWith("[test-context]", expect.any(Error));
  });

  it("logs to the console without context", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    errorReporting.logError("plain message");
    expect(spy).toHaveBeenCalledWith("plain message");
  });

  it("notifies subscribers on every logError call", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const subscriber = jest.fn();
    errorReporting.subscribeToErrors(subscriber);

    errorReporting.logError(new Error("boom"), "ctx");

    expect(subscriber).toHaveBeenCalledWith(expect.any(Error), "ctx");
  });

  it("stops notifying after unsubscribing", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const subscriber = jest.fn();
    const unsubscribe = errorReporting.subscribeToErrors(subscriber);

    unsubscribe();
    errorReporting.logError("after unsubscribe");

    expect(subscriber).not.toHaveBeenCalled();
  });

  it("supports multiple independent subscribers", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const a = jest.fn();
    const b = jest.fn();
    errorReporting.subscribeToErrors(a);
    errorReporting.subscribeToErrors(b);

    errorReporting.logError("hello");

    expect(a).toHaveBeenCalledTimes(1);
    expect(b).toHaveBeenCalledTimes(1);
  });
});

describe("errorReporting.messageFromError", () => {
  it("extracts the message from an Error instance", () => {
    expect(errorReporting.messageFromError(new Error("oops"))).toBe("oops");
  });

  it("returns a string error as-is", () => {
    expect(errorReporting.messageFromError("just a string")).toBe("just a string");
  });

  it("falls back to a generic message for anything else", () => {
    expect(errorReporting.messageFromError({ weird: true })).toBe("Something went wrong.");
    expect(errorReporting.messageFromError(undefined)).toBe("Something went wrong.");
  });
});
