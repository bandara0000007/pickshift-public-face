import { render, screen } from "@testing-library/react";
import { ToastViewport } from "./ToastViewport";

describe("ToastViewport", () => {
  it("renders nothing when there are no toasts", () => {
    render(<ToastViewport toasts={[]} onDismiss={() => {}} />);
    expect(screen.queryByTestId("toast-viewport")).not.toBeInTheDocument();
  });

  it("renders one entry per toast", () => {
    render(
      <ToastViewport
        toasts={[
          { id: "a", variant: "info", message: "first" },
          { id: "b", variant: "error", message: "second" },
        ]}
        onDismiss={() => {}}
      />,
    );

    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();
  });
});
