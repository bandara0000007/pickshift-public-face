import { COMPANY_SIZE_OPTIONS, validateDemoRequest } from "./validateDemoRequest";

const validPayload = {
  fullName: "Jamie Chen",
  workEmail: "jamie@example.com",
  companyName: "Acme Pty Ltd",
  companySize: "11-50" as const,
};

describe("validateDemoRequest", () => {
  it("accepts a fully valid payload", () => {
    const result = validateDemoRequest(validPayload);
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("accepts optional phone/message being omitted", () => {
    const result = validateDemoRequest({ ...validPayload, phone: undefined, message: undefined });
    expect(result.valid).toBe(true);
  });

  it("rejects a missing full name", () => {
    const result = validateDemoRequest({ ...validPayload, fullName: "" });
    expect(result.valid).toBe(false);
    expect(result.errors.fullName).toBeTruthy();
  });

  it("rejects a whitespace-only full name", () => {
    const result = validateDemoRequest({ ...validPayload, fullName: "   " });
    expect(result.valid).toBe(false);
    expect(result.errors.fullName).toBeTruthy();
  });

  it("rejects a missing work email", () => {
    const result = validateDemoRequest({ ...validPayload, workEmail: "" });
    expect(result.errors.workEmail).toBeTruthy();
  });

  it("rejects a malformed work email", () => {
    const result = validateDemoRequest({ ...validPayload, workEmail: "not-an-email" });
    expect(result.errors.workEmail).toBeTruthy();
  });

  it("rejects a missing company name", () => {
    const result = validateDemoRequest({ ...validPayload, companyName: "" });
    expect(result.errors.companyName).toBeTruthy();
  });

  it("rejects a missing company size", () => {
    const result = validateDemoRequest({ ...validPayload, companySize: "" });
    expect(result.errors.companySize).toBeTruthy();
  });

  it("rejects an invalid company size value", () => {
    const result = validateDemoRequest({
      ...validPayload,
      companySize: "9999" as unknown as typeof validPayload.companySize,
    });
    expect(result.errors.companySize).toBeTruthy();
  });

  it("accepts every option in COMPANY_SIZE_OPTIONS", () => {
    COMPANY_SIZE_OPTIONS.forEach((option) => {
      const result = validateDemoRequest({ ...validPayload, companySize: option.value });
      expect(result.valid).toBe(true);
    });
  });

  it("reports multiple field errors at once", () => {
    const result = validateDemoRequest({});
    expect(result.valid).toBe(false);
    expect(Object.keys(result.errors).sort()).toEqual(
      ["companyName", "companySize", "fullName", "workEmail"].sort(),
    );
  });
});
