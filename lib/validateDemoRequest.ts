import type { CompanySize, DemoFormErrors, DemoRequestPayload } from "./types";

export const COMPANY_SIZE_OPTIONS: { value: CompanySize; label: string }[] = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "200+", label: "200+ employees" },
];

const VALID_COMPANY_SIZES: CompanySize[] = COMPANY_SIZE_OPTIONS.map((option) => option.value);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ValidationResult {
  valid: boolean;
  errors: DemoFormErrors;
}

/**
 * Shared by both the client form and the API route so the two can never
 * silently drift apart on what counts as a valid submission.
 */
export function validateDemoRequest(payload: Partial<DemoRequestPayload>): ValidationResult {
  const errors: DemoFormErrors = {};

  if (!payload.fullName?.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!payload.workEmail?.trim()) {
    errors.workEmail = "Work email is required.";
  } else if (!EMAIL_PATTERN.test(payload.workEmail.trim())) {
    errors.workEmail = "Enter a valid email address.";
  }

  if (!payload.companyName?.trim()) {
    errors.companyName = "Company name is required.";
  }

  if (!payload.companySize || !VALID_COMPANY_SIZES.includes(payload.companySize as CompanySize)) {
    errors.companySize = "Select a company size.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
