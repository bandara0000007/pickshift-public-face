"use client";

import type { ReactNode } from "react";
import { ToastProvider } from "@/components/notifications/ToastProvider";
import { useGlobalErrorHandlers } from "@/lib/useGlobalErrorHandlers";

function GlobalErrorListener() {
  useGlobalErrorHandlers();
  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <GlobalErrorListener />
      {children}
    </ToastProvider>
  );
}
