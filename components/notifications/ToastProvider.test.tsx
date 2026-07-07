import { act, fireEvent, render, screen } from "@testing-library/react";
import { useEffect } from "react";
import { errorReporting } from "@/lib/errorReporting";
import { ToastProvider, useToast } from "./ToastProvider";

function Pusher({ variant = "info" as const, message = "hi" }: { variant?: "info" | "error"; message?: string }) {
  const { push } = useToast();
  useEffect(() => {
    push(variant, message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

describe("ToastProvider / useToast", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => jest.runOnlyPendingTimers());
    jest.useRealTimers();
    errorReporting.__clearErrorSubscribers();
  });

  it("push() adds a toast to the viewport", () => {
    render(
      <ToastProvider>
        <Pusher message="Something happened" />
      </ToastProvider>,
    );

    expect(screen.getByText("Something happened")).toBeInTheDocument();
  });

  it("auto-dismisses a toast after the timeout", () => {
    render(
      <ToastProvider>
        <Pusher message="Auto dismiss me" />
      </ToastProvider>,
    );

    expect(screen.getByText("Auto dismiss me")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(6500);
    });

    expect(screen.queryByText("Auto dismiss me")).not.toBeInTheDocument();
  });

  it("dismisses a toast manually via the close button", () => {
    render(
      <ToastProvider>
        <Pusher message="Dismiss me" />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByLabelText("Dismiss notification"));

    expect(screen.queryByText("Dismiss me")).not.toBeInTheDocument();
  });

  it("surfaces logError calls automatically via the error subscription", () => {
    render(
      <ToastProvider>
        <div />
      </ToastProvider>,
    );

    act(() => {
      errorReporting.logError(new Error("subscribed boom"), "some-context");
    });

    expect(screen.getByText("some-context: subscribed boom")).toBeInTheDocument();
  });

  it("useToast falls back to console logging when used outside a provider", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(<Pusher message="orphan" />);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
