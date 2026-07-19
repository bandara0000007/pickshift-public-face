/** @jest-environment node */
import { errorReporting } from "@/lib/errorReporting";
import { POST } from "./route";

const validPayload = {
  fullName: "Jamie Chen",
  workEmail: "jamie@example.com",
  companyName: "Acme Pty Ltd",
  companySize: "11-50",
};

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/demo-requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("POST /api/demo-requests", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns 400 for a malformed JSON body", async () => {
    const response = await POST(makeRequest("{not json"));
    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.ok).toBe(false);
  });

  it("returns 400 with fieldErrors when validation fails", async () => {
    const response = await POST(makeRequest({ fullName: "" }));
    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.ok).toBe(false);
    expect(json.fieldErrors.fullName).toBeTruthy();
  });

  it("returns 200 for a valid payload", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const response = await POST(makeRequest(validPayload));
    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json.ok).toBe(true);
    expect(logSpy).toHaveBeenCalledWith("[demo-request]", validPayload);
  });

  it("returns 500 and logs via errorReporting when an unexpected error is thrown", async () => {
    const errorSpy = jest.spyOn(errorReporting, "logError").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {
      throw new Error("logging exploded");
    });

    const response = await POST(makeRequest(validPayload));

    expect(response.status).toBe(500);
    const json = await response.json();
    expect(json.ok).toBe(false);
    expect(errorSpy).toHaveBeenCalledWith(expect.any(Error), "api:demo-requests");
  });
});
