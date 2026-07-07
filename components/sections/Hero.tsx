import { Fragment } from "react";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { SafeImage } from "@/components/ui/SafeImage";
import { StatItem } from "@/components/ui/StatItem";
import { heroBadges, heroStats, PLACEHOLDER_HREF } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative">
      <Nav />

      <div className="relative overflow-hidden lg:h-[700px]">
        <div className="absolute inset-0">
          <SafeImage
            src="/images/hero-background.jpg"
            alt="PickShift team collaborating"
            fill
            priority
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/[.88] via-navy/[.55] via-50% to-navy/[.15]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/[.55] to-transparent to-50%" />
        </div>

        <div className="relative flex flex-col justify-start px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:box-content lg:h-full lg:max-w-[720px] lg:justify-center lg:px-16 lg:pb-0 lg:pt-0">
          <div className="mb-6 flex flex-wrap gap-2">
            <Pill
              label={heroBadges[0]}
              className="border border-cyan/30 bg-cyan/[.15] uppercase tracking-[0.8px] text-cyan"
            />
            <Pill
              label={heroBadges[1]}
              className="border border-yellow/30 bg-yellow/[.12] uppercase tracking-[0.8px] text-yellow"
            />
          </div>

          <h1 className="mb-5 font-poppins text-hero-sm font-extrabold text-white sm:text-hero-md lg:text-hero">
            Good work starts with
            <br />
            <span className="text-yellow">good people.</span>
          </h1>

          <p className="mb-5 max-w-[540px] font-inter text-base leading-[1.72] text-white/[.78]">
            Australia&apos;s AI-powered labour marketplace and labour hire platform. Find verified
            local workers matched to your role, culture and credentials — or find the shift that
            suits your schedule.
          </p>

          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/15 bg-white/[.08] px-4.5 py-2.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                stroke="#FEE202"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span className="font-inter text-[13px] text-white/85">
              <strong className="text-yellow">Free for up to 5 workers</strong> — no credit card
              needed
            </span>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <Button
              href={PLACEHOLDER_HREF}
              className="rounded-xl bg-yellow px-8 py-4 text-base text-navy sm:px-10"
            >
              I&apos;m an Employer →
            </Button>
            <Button
              href={PLACEHOLDER_HREF}
              className="rounded-xl border-2 border-white/40 bg-white/[.14] px-8 py-4 text-base text-white backdrop-blur-sm sm:px-9"
            >
              I&apos;m a Worker →
            </Button>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4 bg-black/[.32] px-5 py-4 backdrop-blur-md sm:grid-cols-3 sm:px-8 lg:flex lg:grid-cols-none lg:flex-row lg:items-center lg:gap-0 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-16">
          {heroStats.map((stat, index) => (
            <Fragment key={stat.label}>
              <StatItem variant="hero" value={stat.value} label={stat.label} />
              {index < heroStats.length - 1 && (
                <div className="hidden h-8 w-px bg-white/15 lg:block" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
