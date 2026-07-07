"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks, PLACEHOLDER_HREF } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="absolute inset-x-0 top-0 z-10 flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8 lg:h-[88px] lg:px-16">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-inter text-sm no-underline ${
                index === navLinks.length - 1
                  ? "font-semibold text-yellow"
                  : "font-medium text-white/85"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={PLACEHOLDER_HREF}
            className="rounded-lg border-2 border-white/35 px-[22px] py-2.5 text-sm text-white"
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
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-white lg:hidden"
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
