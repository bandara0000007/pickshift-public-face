import "@testing-library/jest-dom";

if (typeof window.matchMedia !== "function") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}

if (typeof window.PromiseRejectionEvent === "undefined") {
  class PromiseRejectionEventPolyfill extends Event {
    reason: unknown;
    promise: Promise<unknown>;

    constructor(type: string, init: { reason: unknown; promise: Promise<unknown> }) {
      super(type);
      this.reason = init.reason;
      this.promise = init.promise;
    }
  }

  // @ts-expect-error -- polyfilling a browser-only global missing in jsdom
  window.PromiseRejectionEvent = PromiseRejectionEventPolyfill;
}
