"use client";

import type { ReactNode } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

export function SectionErrorBoundary({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <ErrorBoundary
      context={`section:${name}`}
      fallback={(reset) => (
        <div className="flex flex-col items-center gap-3 bg-surface-f5f7fb px-6 py-16 text-center">
          <p className="font-inter text-sm text-ink-666">
            The &ldquo;{name}&rdquo; section couldn&apos;t be displayed.
          </p>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border-2 border-blue px-4 py-2 font-inter text-sm font-semibold text-blue"
          >
            Try again
          </button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
