import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ToastProvider } from "@/components/notifications/ToastProvider";
import { errorReporting } from "@/lib/errorReporting";
import { BookDemo } from "./BookDemo";

function renderBookDemo() {
  return render(
    <ToastProvider>
      <BookDemo />
    </ToastProvider>,
  );
}

function fillValidForm() {
  fireEvent.change(screen.getByLabelText(/Full name/), { target: { value: "Jamie Chen" } });
  fireEvent.change(screen.getByLabelText(/Work email/), { target: { value: "jamie@example.com" } });
  fireEvent.change(screen.getByLabelText(/Company name/), { target: { value: "Acme Pty Ltd" } });
  fireEvent.change(screen.getByLabelText(/Company size/), { target: { value: "11-50" } });
}

describe("BookDemo", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("blocks submission and shows inline errors when required fields are empty", () => {
    const fetchSpy = jest.spyOn(global, "fetch");
    renderBookDemo();

    fireEvent.click(screen.getByRole("button", { name: "Request a Demo" }));

    expect(screen.getByText("Full name is required.")).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("submits successfully and shows the persistent success state", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    } as Response);

    renderBookDemo();
    fillValidForm();
    fireEvent.click(screen.getByRole("button", { name: "Request a Demo" }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent("Thanks — we'll be in touch shortly.");
    });
    expect(screen.queryByRole("button", { name: "Request a Demo" })).not.toBeInTheDocument();
  });

  it("stays on the form and shows field errors when the server reports validation failure", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      json: async () => ({
        ok: false,
        error: "Please fix the highlighted fields.",
        fieldErrors: { workEmail: "Enter a valid email address." },
      }),
    } as Response);

    renderBookDemo();
    fillValidForm();
    fireEvent.click(screen.getByRole("button", { name: "Request a Demo" }));

    await waitFor(() => {
      expect(screen.getByText("Enter a valid email address.")).toBeInTheDocument();
    });
    expect(screen.getByRole("button", { name: "Request a Demo" })).toBeInTheDocument();
  });

  it("reports network failures through errorReporting and keeps the form usable", async () => {
    const logSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    jest.spyOn(global, "fetch").mockRejectedValue(new Error("network down"));

    renderBookDemo();
    fillValidForm();
    fireEvent.click(screen.getByRole("button", { name: "Request a Demo" }));

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith(expect.any(Error), "BookDemo:submit");
    });
    expect(screen.getByRole("button", { name: "Request a Demo" })).not.toBeDisabled();
  });
});
