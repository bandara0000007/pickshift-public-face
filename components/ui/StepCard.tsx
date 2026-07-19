import type { HowItWorksStep } from "@/lib/types";

function CircleIcon({ icon }: { icon: "star" | "check" }) {
  if (icon === "star") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="#FEE202"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 12l2 2 4-4" stroke="#00227C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#00227C" strokeWidth="2" />
    </svg>
  );
}

export function StepCard({ step }: { step: HowItWorksStep }) {
  return (
    <div className="flex flex-col items-center px-3 text-center">
      <div
        className="relative z-[1] mb-5 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full font-poppins text-2xl font-bold text-white"
        style={{ backgroundColor: step.circleColor, boxShadow: `0 4px 16px ${step.shadowColor}` }}
      >
        {step.circleIcon ? <CircleIcon icon={step.circleIcon} /> : step.index}
      </div>
      <h3 className="mb-2 font-poppins text-[15px] font-bold text-navy">{step.title}</h3>
      <p className="font-inter text-[13px] leading-[1.65] text-[#777]">{step.body}</p>
      {step.badges && (
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {step.badges.map((badge) => (
            <span
              key={badge.label}
              className="whitespace-nowrap rounded-full px-2.5 py-1 font-inter text-[10px] font-bold"
              style={{ backgroundColor: badge.bg, color: badge.color }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
