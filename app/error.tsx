"use client";

import { useEffect } from "react";
import { errorReporting } from "@/lib/errorReporting";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    errorReporting.logError(error, "app/error");
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-navy px-6 text-center">
      <h1 className="font-poppins text-2xl font-bold text-white">Something went wrong.</h1>
      <p className="max-w-md font-inter text-sm text-white/70">
        We hit an unexpected error loading this page. You can try again, or come back shortly.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-yellow px-6 py-3 font-inter text-sm font-bold text-navy"
      >
        Try again
      </button>
    </div>
  );
}
