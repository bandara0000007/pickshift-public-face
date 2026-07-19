"use client";

import { Button } from "@/components/ui/Button";
import { navLinks, PLACEHOLDER_HREF } from "@/lib/content";
import { scrollToSection } from "@/lib/scrollToSection";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      className={`absolute inset-x-0 top-16 z-20 overflow-hidden border-t border-surface-ebebeb bg-white transition-[max-height,opacity] duration-300 ease-in-out sm:top-20 lg:hidden ${
        open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-1 px-5 pb-6 pt-4 sm:px-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(event) => {
              event.preventDefault();
              if (link.sectionId) scrollToSection(link.sectionId);
              onClose();
            }}
            className={`min-h-[44px] rounded-lg px-2 py-3 font-inter text-sm no-underline ${
              link.label === "Pricing" ? "font-semibold text-blue" : "font-medium text-ink-444"
            }`}
          >
            {link.label}
          </a>
        ))}
        <div className="mt-3 flex flex-col gap-3">
          <Button
            href={PLACEHOLDER_HREF}
            className="w-full rounded-lg border-2 border-blue py-3 text-sm text-blue"
          >
            Sign In
          </Button>
          <Button href={PLACEHOLDER_HREF} className="w-full rounded-lg bg-yellow py-3 text-sm text-navy">
            Start Free
          </Button>
        </div>
      </div>
    </div>
  );
}
