import type { ReactNode } from "react";

export function Button({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-inter font-semibold no-underline transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}
