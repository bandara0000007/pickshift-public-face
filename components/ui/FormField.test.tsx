import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { FormField } from "./FormField";

function TextHarness({ error }: { error?: string }) {
  const [value, setValue] = useState("");
  return (
    <FormField
      type="text"
      label="Full name"
      name="fullName"
      required
      value={value}
      error={error}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

describe("FormField", () => {
  it("renders a text input with a label and required indicator", () => {
    render(<TextHarness />);
    expect(screen.getByLabelText(/Full name/)).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("updates value on change", () => {
    render(<TextHarness />);
    const input = screen.getByLabelText(/Full name/) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Jamie" } });
    expect(input.value).toBe("Jamie");
  });

  it("shows an inline error message and marks the field invalid", () => {
    render(<TextHarness error="Full name is required." />);
    expect(screen.getByText("Full name is required.")).toBeInTheDocument();
    expect(screen.getByLabelText(/Full name/)).toHaveAttribute("aria-invalid", "true");
  });

  it("renders a select field with options and a placeholder", () => {
    render(
      <FormField
        type="select"
        label="Company size"
        name="companySize"
        value=""
        placeholder="Select company size"
        options={[{ value: "1-10", label: "1-10 employees" }]}
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("Select company size")).toBeInTheDocument();
    expect(screen.getByText("1-10 employees")).toBeInTheDocument();
  });

  it("renders a textarea field", () => {
    render(
      <FormField type="textarea" label="Message" name="message" value="hello" onChange={() => {}} />,
    );
    expect(screen.getByLabelText("Message")).toHaveValue("hello");
  });
});
