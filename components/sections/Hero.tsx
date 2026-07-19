import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { SafeImage } from "@/components/ui/SafeImage";
import {
  heroBadges,
  heroFreeTierCallout,
  heroHeadline,
  heroPrimaryCta,
  heroSecondaryCta,
  heroSubcopy,
  heroTrustAvatars,
  heroTrustCaption,
} from "@/lib/content";
import { OrderBookWidget } from "./OrderBookWidget";

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:min-h-[640px] lg:grid-cols-2">
      <div className="relative overflow-hidden bg-navy px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-[76px]">
        <div className="pointer-events-none absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full bg-cyan/[.07]" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-[300px] w-[300px] rounded-full bg-yellow/[.04]" />

        <div className="relative z-[1] mb-7 flex animate-fadeUp flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/25 bg-cyan/[.12] px-3.5 py-1 font-inter text-[11px] font-bold uppercase tracking-[0.8px] text-cyan">
            <span className="h-[5px] w-[5px] animate-pulseDot rounded-full bg-cyan" aria-hidden="true" />
            {heroBadges[0]}
          </span>
          <Pill
            label={heroBadges[1]}
            className="border border-yellow/25 bg-yellow/[.1] uppercase tracking-[0.8px] text-yellow"
          />
        </div>

        <h1
          className="relative z-[1] mb-5 animate-fadeUp font-poppins text-hero-sm font-extrabold text-white sm:text-hero-md lg:text-hero"
          style={{ animationDelay: "80ms" }}
        >
          {heroHeadline.line1}
          <br />
          {heroHeadline.line2}
          <br />
          <span className="text-yellow">{heroHeadline.highlighted}</span>
        </h1>

        <p
          className="relative z-[1] mb-9 max-w-[430px] animate-fadeUp font-inter text-base leading-[1.75] text-white/[.72]"
          style={{ animationDelay: "160ms" }}
        >
          {heroSubcopy}
        </p>

        <div
          className="relative z-[1] mb-7 flex animate-fadeUp flex-wrap gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <Button href={heroPrimaryCta.href} className="rounded-[10px] bg-yellow px-7 py-3.5 text-sm text-navy">
            {heroPrimaryCta.label}
          </Button>
          <Button
            href={heroSecondaryCta.href}
            className="rounded-[10px] border-2 border-white/30 px-7 py-3.5 text-sm text-white"
          >
            {heroSecondaryCta.label}
          </Button>
        </div>

        <div
          className="relative z-[1] mb-7 inline-flex w-fit animate-fadeUp items-center gap-2.5 rounded-xl border border-white/[.12] bg-white/[.06] px-4.5 py-3"
          style={{ animationDelay: "320ms" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              stroke="#FEE202"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <span className="font-inter text-[13px] text-white/80">
            <strong className="text-yellow">{heroFreeTierCallout.bold}</strong>
            {heroFreeTierCallout.rest}
          </span>
        </div>

        <div className="relative z-[1] flex animate-fadeUp items-center gap-3" style={{ animationDelay: "380ms" }}>
          <div className="flex">
            {heroTrustAvatars.map((src, index) => (
              <div
                key={src}
                className={`relative h-8 w-8 overflow-hidden rounded-full border-2 border-navy ${
                  index > 0 ? "-ml-2" : ""
                }`}
              >
                <SafeImage src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
          <span className="font-inter text-xs text-white/50">{heroTrustCaption}</span>
        </div>
      </div>

      <div className="relative min-h-[420px] lg:min-h-0">
        <OrderBookWidget />
      </div>
    </section>
  );
}
