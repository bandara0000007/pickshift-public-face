"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { errorReporting } from "@/lib/errorReporting";
import type { ToastData, ToastVariant } from "@/lib/types";
import { ToastViewport } from "./ToastViewport";

const AUTO_DISMISS_MS = 6000;
let idCounter = 0;

interface ToastContextValue {
  toasts: ToastData[];
  push: (variant: ToastVariant, message: string) => string;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const timers = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const push = useCallback(
    (variant: ToastVariant, message: string) => {
      idCounter += 1;
      const id = `toast-${idCounter}`;
      setToasts((prev) => [...prev, { id, variant, message }]);
      timers.current.set(
        id,
        setTimeout(() => dismiss(id), AUTO_DISMISS_MS),
      );
      return id;
    },
    [dismiss],
  );

  useEffect(() => {
    return errorReporting.subscribeToErrors((error, context) => {
      const message = errorReporting.messageFromError(error);
      push("error", context ? `${context}: ${message}` : message);
    });
  }, [push]);

  useEffect(() => {
    const activeTimers = timers.current;
    return () => {
      activeTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const value = useMemo(() => ({ toasts, push, dismiss }), [toasts, push, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    // Defensive fallback so a component used outside <ToastProvider> (e.g. in
    // an isolated unit test) degrades to console logging instead of crashing.
    return {
      toasts: [],
      push: (variant, message) => {
        errorReporting.logError(message, `toast:${variant}`);
        return "";
      },
      dismiss: () => {},
    };
  }
  return context;
}
