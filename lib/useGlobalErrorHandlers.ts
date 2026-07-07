"use client";

import { useEffect, useRef } from "react";
import { errorReporting } from "./errorReporting";

const DEDUPE_WINDOW_MS = 2000;

/**
 * Last-resort safety net for errors that escape React entirely (e.g. thrown
 * inside a setTimeout, or an unhandled promise rejection). De-dupes bursts of
 * identical messages so a repeating failure doesn't spam the toast stack.
 */
export function useGlobalErrorHandlers(): void {
  const lastMessageRef = useRef<string | null>(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const shouldReport = (message: string) => {
      const now = Date.now();
      if (lastMessageRef.current === message && now - lastTimeRef.current < DEDUPE_WINDOW_MS) {
        return false;
      }
      lastMessageRef.current = message;
      lastTimeRef.current = now;
      return true;
    };

    const handleError = (event: ErrorEvent) => {
      const message = event.message || "Unknown window error";
      if (shouldReport(message)) {
        errorReporting.logError(event.error ?? message, "window.onerror");
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      const message = String(event.reason ?? "Unhandled promise rejection");
      if (shouldReport(message)) {
        errorReporting.logError(event.reason ?? message, "unhandledrejection");
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);
}
