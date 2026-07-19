import { Button } from "@/components/ui/Button";
import { footerCta } from "@/lib/content";

export function FooterCta() {
  return (
    <section className="bg-navy px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-[72px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_400px] lg:gap-12">
        <div className="text-center lg:text-left">
          <h2 className="mb-3 font-poppins text-[32px] font-extrabold leading-tight tracking-[-1.1px] text-white sm:text-[38px] lg:text-[42px]">
            {footerCta.headingLine1}
            <br />
            {footerCta.headingLine2}
          </h2>
          <p className="font-inter text-[15px] text-white/60">{footerCta.subtext}</p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            href={footerCta.primaryHref}
            className="rounded-xl bg-yellow px-10 py-[17px] text-[15px] text-navy"
          >
            {footerCta.primaryLabel}
          </Button>
          <Button
            href={footerCta.secondaryHref}
            className="rounded-xl border-2 border-white/30 px-10 py-[17px] text-[15px] text-white"
          >
            {footerCta.secondaryLabel}
          </Button>
          <p className="mt-1 text-center font-inter text-[11px] text-white/[.28]">{footerCta.finePrint}</p>
        </div>
      </div>
    </section>
  );
}
