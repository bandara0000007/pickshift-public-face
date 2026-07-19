import type { MouseEvent, ReactNode } from "react";

export function Button({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-inter font-semibold no-underline transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}
