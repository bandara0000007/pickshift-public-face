"use client";

import type { ModelIcon, TwoModelColumnData } from "@/lib/types";
import { scrollToSection } from "@/lib/scrollToSection";
import { Button } from "./Button";
import { FeatureChecklist } from "./FeatureChecklist";

const ICON_STYLES: Record<ModelIcon, { iconBg: string; stroke: string; check: string }> = {
  briefcase: { iconBg: "bg-cyan/10", stroke: "stroke-blue", check: "text-cyan" },
  people: { iconBg: "bg-yellow/10", stroke: "stroke-yellow", check: "text-yellow" },
  person: { iconBg: "bg-green/10", stroke: "stroke-green", check: "text-green" },
};

function Icon({ icon, className }: { icon: ModelIcon; className: string }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  if (icon === "briefcase") {
    return (
      <svg {...props}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    );
  }

  if (icon === "people") {
    return (
      <svg {...props}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M15 14.2c2.6.5 4.5 2.8 4.5 5.8" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

export function ModelColumn({ column, bordered }: { column: TwoModelColumnData; bordered?: boolean }) {
  const dark = column.tone === "dark";
  const styles = ICON_STYLES[column.icon];

  return (
    <div
      id={column.sectionId}
      className={`relative px-8 py-10 sm:px-10 sm:py-12 ${dark ? "bg-navy" : "bg-transparent"} ${
        bordered ? "lg:border-r lg:border-surface-e4e8f0" : ""
      }`}
    >
      {column.ribbonLabel && (
        <div className="absolute left-7 top-0 whitespace-nowrap rounded-b-lg bg-yellow px-3 py-1 font-inter text-[10px] font-bold tracking-[0.6px] text-navy">
          {column.ribbonLabel}
        </div>
      )}

      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-14 ${styles.iconBg}`}>
        <Icon icon={column.icon} className={styles.stroke} />
      </div>

      <h3 className={`mb-1.5 font-poppins text-lg font-bold ${dark ? "text-white" : "text-navy"}`}>
        {column.heading}
      </h3>
      <p className={`mb-3.5 font-inter text-xs font-semibold uppercase tracking-[0.8px] ${styles.check}`}>
        {column.eyebrow}
      </p>
      <p className={`mb-5 font-inter text-sm leading-[1.75] ${dark ? "text-white/70" : "text-ink-555"}`}>
        {column.description}
      </p>

      <FeatureChecklist
        features={column.features}
        checkClassName={styles.check}
        textClassName={dark ? "text-white/80" : "text-ink-444"}
      />

      <Button
        href={column.ctaHref}
        onClick={
          column.ctaSectionId
            ? (event) => {
                event.preventDefault();
                scrollToSection(column.ctaSectionId as string);
              }
            : undefined
        }
        className={`rounded-[9px] px-6 py-3.5 text-[13px] ${
          column.ctaTone === "blue" ? "bg-blue text-white" : "bg-yellow text-navy"
        }`}
      >
        {column.ctaLabel}
      </Button>
    </div>
  );
}
