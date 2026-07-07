"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { errorReporting } from "@/lib/errorReporting";

interface Props {
  children: ReactNode;
  fallback: (reset: () => void) => ReactNode;
  context?: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    errorReporting.logError(error, this.props.context ?? `${info.componentStack ?? "component"}`);
  }

  reset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.reset);
    }
    return this.props.children;
  }
}
