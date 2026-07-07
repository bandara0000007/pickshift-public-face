import { fireEvent, render, screen } from "@testing-library/react";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders the message and uses assertive aria-live for errors", () => {
    render(<Toast toast={{ id: "1", variant: "error", message: "Danger" }} onDismiss={() => {}} />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Danger");
    expect(alert).toHaveAttribute("aria-live", "assertive");
  });

  it("uses polite aria-live for non-error variants", () => {
    render(<Toast toast={{ id: "2", variant: "info", message: "FYI" }} onDismiss={() => {}} />);
    expect(screen.getByRole("alert")).toHaveAttribute("aria-live", "polite");
  });

  it("calls onDismiss with the toast id when closed", () => {
    const onDismiss = jest.fn();
    render(<Toast toast={{ id: "3", variant: "success", message: "Done" }} onDismiss={onDismiss} />);
    fireEvent.click(screen.getByLabelText("Dismiss notification"));
    expect(onDismiss).toHaveBeenCalledWith("3");
  });

  it.each(["error", "warning", "info", "success"] as const)(
    "renders the %s variant without crashing",
    (variant) => {
      render(<Toast toast={{ id: variant, variant, message: "msg" }} onDismiss={() => {}} />);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    },
  );
});
