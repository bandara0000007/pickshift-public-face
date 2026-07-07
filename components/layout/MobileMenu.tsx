"use client";

import { Button } from "@/components/ui/Button";
import { navLinks, PLACEHOLDER_HREF } from "@/lib/content";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      className={`absolute inset-x-0 top-16 z-20 overflow-hidden bg-navy transition-[max-height,opacity] duration-300 ease-in-out sm:top-20 lg:hidden ${
        open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-1 px-5 pb-6 pt-4 sm:px-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="min-h-[44px] rounded-lg px-2 py-3 font-inter text-sm font-medium text-white/85 no-underline"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-3 flex flex-col gap-3">
          <Button
            href={PLACEHOLDER_HREF}
            className="w-full rounded-lg border-2 border-white/35 py-3 text-sm text-white"
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
