"use client";

import { useEffect } from "react";
import { errorReporting } from "@/lib/errorReporting";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    errorReporting.logError(error, "app/global-error");
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            background: "#00227C",
            padding: "24px",
            textAlign: "center",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: 700, margin: 0 }}>
            PickShift is temporarily unavailable.
          </h1>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: "14px", maxWidth: "420px", margin: 0 }}>
            Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: "#FEE202",
              color: "#00227C",
              fontWeight: 700,
              fontSize: "14px",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
