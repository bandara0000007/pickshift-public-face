import { act, render, screen } from "@testing-library/react";
import { orderBookSlides } from "@/lib/orderBookSlides";
import { OrderBookWidget } from "./OrderBookWidget";

function advanceOneCycle() {
  act(() => {
    jest.advanceTimersByTime(4000);
  });
  act(() => {
    jest.advanceTimersByTime(450);
  });
}

describe("OrderBookWidget", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it("renders the first slide's content on mount", () => {
    render(<OrderBookWidget />);
    const firstSlide = orderBookSlides[0]!;
    expect(screen.getByTestId("order-book-industry-label")).toHaveTextContent(firstSlide.industry);
    expect(screen.getByText(firstSlide.role)).toBeInTheDocument();
  });

  it("advances to the next slide after a full 4000ms + 450ms cycle", () => {
    render(<OrderBookWidget />);
    advanceOneCycle();
    const secondSlide = orderBookSlides[1]!;
    expect(screen.getByTestId("order-book-industry-label")).toHaveTextContent(secondSlide.industry);
    expect(screen.getByText(secondSlide.role)).toBeInTheDocument();
  });

  it("wraps around to the first slide after cycling through all slides", () => {
    render(<OrderBookWidget />);
    for (let i = 0; i < orderBookSlides.length; i += 1) {
      advanceOneCycle();
    }
    const firstSlide = orderBookSlides[0]!;
    expect(screen.getByTestId("order-book-industry-label")).toHaveTextContent(firstSlide.industry);
  });

  it("does not update state after unmounting mid-cycle", () => {
    const { unmount } = render(<OrderBookWidget />);

    act(() => {
      jest.advanceTimersByTime(4000);
    });
    // Unmount while the 450ms "advance slide" timeout is still pending.
    unmount();

    expect(() => {
      act(() => {
        jest.advanceTimersByTime(450);
      });
    }).not.toThrow();
  });
});
