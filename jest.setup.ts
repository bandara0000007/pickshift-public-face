import "@testing-library/jest-dom";

// This setup file runs for every test file, including API route tests that
// declare `@jest-environment node` (no `window`/`Element` globals at all) —
// guard every browser-only polyfill so it doesn't crash those.
const isBrowserEnvironment = typeof window !== "undefined";

if (isBrowserEnvironment && typeof window.matchMedia !== "function") {
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

if (isBrowserEnvironment && typeof window.PromiseRejectionEvent === "undefined") {
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

if (isBrowserEnvironment && typeof Element.prototype.scrollIntoView !== "function") {
  Element.prototype.scrollIntoView = function scrollIntoView() {};
}

if (isBrowserEnvironment && typeof window.fetch !== "function") {
  const fetchStub = jest.fn() as unknown as typeof fetch;
  window.fetch = fetchStub;
  global.fetch = fetchStub;
}
