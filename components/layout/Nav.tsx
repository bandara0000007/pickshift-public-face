"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks, PLACEHOLDER_HREF } from "@/lib/content";
import { scrollToSection } from "@/lib/scrollToSection";
import { MobileMenu } from "./MobileMenu";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative border-b border-surface-ebebeb bg-white">
      <nav className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8 lg:h-20 lg:px-16">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                if (link.sectionId) scrollToSection(link.sectionId);
              }}
              className={`font-inter text-sm no-underline ${
                link.label === "Pricing" ? "font-semibold text-blue" : "font-medium text-ink-444"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={PLACEHOLDER_HREF}
            className="rounded-lg border-2 border-blue px-[22px] py-2.5 text-sm text-blue"
          >
            Sign In
          </Button>
          <Button href={PLACEHOLDER_HREF} className="rounded-lg bg-yellow px-6 py-2.5 text-sm text-navy">
            Start Free
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-navy lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
