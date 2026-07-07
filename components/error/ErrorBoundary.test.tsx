import { fireEvent, render, screen } from "@testing-library/react";
import { errorReporting } from "@/lib/errorReporting";
import { ErrorBoundary } from "./ErrorBoundary";

function Bomb({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("kaboom");
  }
  return <div>safe content</div>;
}

describe("ErrorBoundary", () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    // React logs the caught error to console too; silence that noise only.
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
    jest.restoreAllMocks();
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary fallback={() => <div>fallback</div>}>
        <Bomb shouldThrow={false} />
      </ErrorBoundary>,
    );

    expect(screen.getByText("safe content")).toBeInTheDocument();
  });

  it("renders the fallback and reports the error when a child throws", () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={() => <div>fallback ui</div>} context="test-boundary">
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    expect(screen.getByText("fallback ui")).toBeInTheDocument();
    expect(logSpy).toHaveBeenCalledWith(expect.any(Error), "test-boundary");
  });

  it("resets and re-renders children when reset() is invoked", () => {
    jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    let shouldThrow = true;

    const { rerender } = render(
      <ErrorBoundary fallback={(reset) => <button onClick={reset}>retry</button>}>
        <Bomb shouldThrow={shouldThrow} />
      </ErrorBoundary>,
    );

    expect(screen.getByText("retry")).toBeInTheDocument();

    // The boundary only re-renders its (already-updated) children once reset,
    // so the props must reflect the fix *before* reset() is triggered — the
    // fallback is still showing here because state, not props, drives it.
    shouldThrow = false;
    rerender(
      <ErrorBoundary fallback={(reset) => <button onClick={reset}>retry</button>}>
        <Bomb shouldThrow={shouldThrow} />
      </ErrorBoundary>,
    );
    expect(screen.getByText("retry")).toBeInTheDocument();

    fireEvent.click(screen.getByText("retry"));

    expect(screen.getByText("safe content")).toBeInTheDocument();
  });
});
