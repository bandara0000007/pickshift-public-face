export type ErrorSubscriber = (error: unknown, context?: string) => void;

const subscribers = new Set<ErrorSubscriber>();

function logError(error: unknown, context?: string): void {
  if (context) {
    // eslint-disable-next-line no-console
    console.error(`[${context}]`, error);
  } else {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  subscribers.forEach((subscriber) => {
    subscriber(error, context);
  });
}

function subscribeToErrors(subscriber: ErrorSubscriber): () => void {
  subscribers.add(subscriber);
  return () => {
    subscribers.delete(subscriber);
  };
}

function messageFromError(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Something went wrong.";
}

/** Test-only utility to reset subscriber state between test files. */
function __clearErrorSubscribers(): void {
  subscribers.clear();
}

/**
 * Single choke point for every error in the app: component render errors,
 * image load failures, and uncaught window errors/rejections all funnel
 * through `errorReporting.logError`. Always logs to the console; also
 * notifies any subscribers (e.g. the toast system) so the failure can reach
 * the user, not just devtools.
 *
 * Exposed as one grouped object (rather than loose named exports) so call
 * sites reference `errorReporting.logError(...)` at call time — this keeps
 * the methods mockable with `jest.spyOn` in tests, which fails against plain
 * named exports once transpiled to ESM-interop getters.
 */
export const errorReporting = {
  logError,
  subscribeToErrors,
  messageFromError,
  __clearErrorSubscribers,
};
