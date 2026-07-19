import type { ChangeEvent, ReactNode } from "react";

interface BaseProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
}

type FormFieldProps =
  | (BaseProps & {
      type: "text" | "email" | "tel";
      value: string;
      onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    })
  | (BaseProps & {
      type: "select";
      value: string;
      onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
      options: { value: string; label: string }[];
      placeholder?: string;
    })
  | (BaseProps & {
      type: "textarea";
      value: string;
      onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
      rows?: number;
    });

export function FormField(props: FormFieldProps) {
  const { label, name, error, required } = props;
  const inputId = `demo-${name}`;
  const errorId = `${inputId}-error`;

  const baseInputClasses = `w-full rounded-lg border bg-white px-3.5 py-2.5 font-inter text-sm text-ink-444 outline-none transition-colors focus:border-blue ${
    error ? "border-red-500" : "border-surface-e4e8f0"
  }`;

  let control: ReactNode;

  if (props.type === "select") {
    control = (
      <select
        id={inputId}
        name={name}
        value={props.value}
        onChange={props.onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={baseInputClasses}
      >
        <option value="">{props.placeholder ?? "Select..."}</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else if (props.type === "textarea") {
    control = (
      <textarea
        id={inputId}
        name={name}
        value={props.value}
        onChange={props.onChange}
        rows={props.rows ?? 4}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={baseInputClasses}
      />
    );
  } else {
    control = (
      <input
        id={inputId}
        name={name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={baseInputClasses}
      />
    );
  }

  return (
    <div>
      <label htmlFor={inputId} className="mb-1.5 block font-inter text-[13px] font-semibold text-navy">
        {label}
        {required && <span className="text-blue"> *</span>}
      </label>
      {control}
      {error && (
        <p id={errorId} className="mt-1 font-inter text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
