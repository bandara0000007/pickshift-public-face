"use client";

import type { ToastData } from "@/lib/types";

const VARIANT_STYLES: Record<ToastData["variant"], string> = {
  error: "bg-red-600 text-white",
  warning: "bg-yellow text-navy",
  info: "bg-blue text-white",
  success: "bg-cyan text-navy",
};

export function Toast({
  toast,
  onDismiss,
}: {
  toast: ToastData;
  onDismiss: (id: string) => void;
}) {
  const isUrgent = toast.variant === "error";

  return (
    <div
      role="alert"
      aria-live={isUrgent ? "assertive" : "polite"}
      className={`flex items-start gap-3 rounded-xl px-4 py-3 shadow-lg ${VARIANT_STYLES[toast.variant]}`}
    >
      <p className="flex-1 font-inter text-sm font-medium leading-snug">{toast.message}</p>
      <button
        type="button"
        aria-label="Dismiss notification"
        onClick={() => onDismiss(toast.id)}
        className="shrink-0 rounded-md p-1 text-current/80 hover:text-current"
      >
        ✕
      </button>
    </div>
  );
}
