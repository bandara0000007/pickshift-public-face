export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  light = false,
}: {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
      {eyebrow && (
        <p className="mb-2.5 font-inter text-[11px] font-bold uppercase tracking-[2px] text-cyan">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-poppins text-[28px] font-extrabold leading-tight tracking-[-0.6px] sm:text-[32px] md:text-[36px] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`mt-3 font-inter text-[15px] ${light ? "text-white/70" : "text-ink-999"}`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
