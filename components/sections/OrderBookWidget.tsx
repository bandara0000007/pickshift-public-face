"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { orderBookCard, PLACEHOLDER_HREF } from "@/lib/content";
import { orderBookSlides } from "@/lib/orderBookSlides";

const ROTATE_MS = 4000;
const FADE_MS = 450;

export function OrderBookWidget() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      timeoutRef.current = setTimeout(() => {
        setSlideIdx((current) => (current + 1) % orderBookSlides.length);
        setOpacity(1);
      }, FADE_MS);
    }, ROTATE_MS);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const slide = orderBookSlides[slideIdx] ?? orderBookSlides[0];
  if (!slide) return null;

  return (
    <div className="relative h-full min-h-[420px] overflow-hidden bg-[#111]">
      <div className="absolute inset-0" style={{ opacity: opacity * 0.78, transition: "opacity 0.45s ease" }}>
        <SafeImage src={slide.image} alt={`${slide.industry} shift example`} fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,34,124,.2)_0%,transparent_60%)]" />

      <div className="absolute right-5 top-5 flex flex-col items-end gap-2.5 sm:right-7 sm:top-7">
        <span
          data-testid="order-book-industry-label"
          className="rounded-full bg-yellow px-4 py-1.5 font-poppins text-xs font-bold text-navy shadow-[0_4px_14px_rgba(0,0,0,.2)]"
        >
          {slide.industry}
        </span>
        <div className="flex gap-1.5" role="tablist" aria-label="Order book industry examples">
          {orderBookSlides.map((exampleSlide, index) => (
            <span
              key={exampleSlide.role}
              role="tab"
              aria-selected={index === slideIdx}
              aria-label={exampleSlide.industry}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === slideIdx ? "bg-yellow" : "bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-5 animate-floatY rounded-20 bg-white px-5 pb-4 pt-5 shadow-[0_24px_64px_rgba(0,0,0,.38)] sm:inset-x-7 sm:bottom-8">
        <div className="mb-3.5 flex items-center justify-between gap-2">
          <span className="flex shrink-0 items-center gap-1.5 font-poppins text-[11px] font-bold text-navy">
            <span className="h-[7px] w-[7px] animate-pulseDot rounded-full bg-cyan" aria-hidden="true" />
            {orderBookCard.eyebrowLabel}
          </span>
          <span className="rounded-full bg-surface-f5f7fb px-2 py-1 text-right font-inter text-[9px] font-semibold text-ink-aaa">
            {orderBookCard.matchedBadge}
          </span>
        </div>

        <div className="mb-3 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-[#F5F8FF] p-3">
            <div className="mb-2 font-inter text-[9px] font-bold uppercase tracking-[0.8px] text-blue">
              {orderBookCard.rolePostedLabel}
            </div>
            <div className="mb-1 font-poppins text-xs font-bold text-navy">{slide.role}</div>
            <div className="mb-1.5 font-inter text-[10px] text-ink-999">{slide.location}</div>
            <div className="flex flex-col gap-1">
              {[slide.req1, slide.req2, slide.req3].map((req, index) => (
                <div key={req} className="flex items-center gap-1.5 font-inter text-[9px] text-ink-555">
                  <span
                    className={`h-[5px] w-[5px] shrink-0 rounded-full ${index === 2 ? "bg-yellow" : "bg-blue"}`}
                    aria-hidden="true"
                  />
                  {req}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#F5FFFB] p-3">
            <div className="mb-2 font-inter text-[9px] font-bold uppercase tracking-[0.8px] text-cyan">
              {orderBookCard.verifiedShifteesLabel}
            </div>
            <div className="flex flex-col gap-2">
              {slide.workers.map((worker) => (
                <div key={worker.name} className="flex items-center gap-1.5">
                  <div
                    className="h-7 w-7 shrink-0 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${worker.face})` }}
                    role="img"
                    aria-label={worker.name}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-inter text-[11px] font-semibold text-[#1a1a1a]">
                      {worker.name} <span className="text-[9px] font-normal text-cyan">{worker.cred}</span>
                    </div>
                    <div className="font-inter text-[9px] text-ink-aaa">
                      {worker.km} · {worker.rating}
                    </div>
                  </div>
                  <div className="shrink-0 font-poppins text-sm font-extrabold text-cyan">{worker.score}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-2.5 flex items-center gap-2 rounded-lg bg-[#FFFCE6] px-3 py-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              stroke="#C4940A"
              strokeWidth="2"
              fill="rgba(196,148,10,.15)"
            />
          </svg>
          <span className="font-inter text-[9px] font-semibold text-[#856800]">{orderBookCard.footerNote}</span>
        </div>

        <Button
          href={PLACEHOLDER_HREF}
          className="block w-full rounded-lg bg-yellow py-2.5 text-[11px] tracking-[0.5px] text-navy"
        >
          {orderBookCard.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
