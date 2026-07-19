"use client";

import { useState, type FormEvent } from "react";
import { useToast } from "@/components/notifications/ToastProvider";
import { FormField } from "@/components/ui/FormField";
import { bookDemo, SECTION_IDS } from "@/lib/content";
import { errorReporting } from "@/lib/errorReporting";
import type { CompanySize, DemoFormErrors, DemoRequestPayload } from "@/lib/types";
import { COMPANY_SIZE_OPTIONS, validateDemoRequest } from "@/lib/validateDemoRequest";

const INITIAL_VALUES: DemoRequestPayload = {
  fullName: "",
  workEmail: "",
  companyName: "",
  phone: "",
  companySize: "",
  message: "",
};

type Status = "idle" | "submitting" | "success";

export function BookDemo() {
  const [values, setValues] = useState<DemoRequestPayload>(INITIAL_VALUES);
  const [errors, setErrors] = useState<DemoFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const { push } = useToast();

  function updateField<K extends keyof DemoRequestPayload>(field: K, value: DemoRequestPayload[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { valid, errors: validationErrors } = validateDemoRequest(values);
    if (!valid) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await response.json();

      if (!response.ok || !json.ok) {
        setStatus("idle");
        if (json.fieldErrors) setErrors(json.fieldErrors);
        push("error", json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      push("success", "Thanks — we'll be in touch shortly.");
    } catch (error) {
      errorReporting.logError(error, "BookDemo:submit");
      setStatus("idle");
      push("error", "Something went wrong. Please try again.");
    }
  }

  return (
    <section id={SECTION_IDS.bookDemo} className="bg-surface-f5f7fb px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-[640px] text-center">
        <p className="mb-2.5 font-inter text-[11px] font-bold uppercase tracking-[2px] text-cyan">
          {bookDemo.eyebrow}
        </p>
        <h2 className="mb-3 font-poppins text-[32px] font-extrabold text-navy sm:text-[36px]">
          {bookDemo.heading}
        </h2>
        <p className="mb-10 font-inter text-[15px] text-ink-999">{bookDemo.subtext}</p>
      </div>

      <div className="mx-auto max-w-[640px] rounded-20 bg-white p-6 shadow-[0_2px_14px_rgba(0,0,0,.06)] sm:p-10">
        {status === "success" ? (
          <div className="py-6 text-center" role="status">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan/10">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#00C2D1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="9" stroke="#00C2D1" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="mb-2 font-poppins text-xl font-bold text-navy">{bookDemo.successHeading}</h3>
            <p className="font-inter text-sm text-ink-666">{bookDemo.successBody}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              type="text"
              label="Full name"
              name="fullName"
              required
              value={values.fullName}
              error={errors.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
            />
            <FormField
              type="email"
              label="Work email"
              name="workEmail"
              required
              value={values.workEmail}
              error={errors.workEmail}
              onChange={(event) => updateField("workEmail", event.target.value)}
            />
            <FormField
              type="text"
              label="Company name"
              name="companyName"
              required
              value={values.companyName}
              error={errors.companyName}
              onChange={(event) => updateField("companyName", event.target.value)}
            />
            <FormField
              type="tel"
              label="Phone (optional)"
              name="phone"
              value={values.phone ?? ""}
              error={errors.phone}
              onChange={(event) => updateField("phone", event.target.value)}
            />
            <div className="sm:col-span-2">
              <FormField
                type="select"
                label="Company size"
                name="companySize"
                required
                value={values.companySize}
                error={errors.companySize}
                options={COMPANY_SIZE_OPTIONS}
                placeholder="Select company size"
                onChange={(event) => updateField("companySize", event.target.value as CompanySize | "")}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                type="textarea"
                label="Message (optional)"
                name="message"
                value={values.message ?? ""}
                error={errors.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-xl bg-blue px-8 py-4 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting…" : "Request a Demo"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
