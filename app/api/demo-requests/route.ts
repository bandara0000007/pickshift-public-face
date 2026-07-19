import { NextResponse } from "next/server";
import { errorReporting } from "@/lib/errorReporting";
import type { DemoRequestPayload } from "@/lib/types";
import { validateDemoRequest } from "@/lib/validateDemoRequest";

export async function POST(request: Request): Promise<Response> {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { valid, errors } = validateDemoRequest(payload as Partial<DemoRequestPayload>);
  if (!valid) {
    return NextResponse.json(
      { ok: false, error: "Please fix the highlighted fields.", fieldErrors: errors },
      { status: 400 },
    );
  }

  try {
    // Stub: no persistence/CRM integration yet — just log the submission.
    // eslint-disable-next-line no-console
    console.log("[demo-request]", payload);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    errorReporting.logError(error, "api:demo-requests");
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
