"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { errorReporting } from "@/lib/errorReporting";

type SafeImageProps = Omit<ImageProps, "onError"> & {
  fallbackClassName?: string;
};

/**
 * Every photo in the page renders through here. On load failure it swaps to
 * a sized gradient placeholder and reports through the single error choke
 * point (lib/errorReporting), which the toast system is subscribed to — so a
 * broken image surfaces to the user, not just the console.
 */
export function SafeImage({ alt, className = "", fallbackClassName = "", ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        data-testid="safe-image-fallback"
        className={`bg-gradient-to-br from-navy to-blue ${className} ${fallbackClassName}`}
      />
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      {...props}
      onError={() => {
        setHasError(true);
        errorReporting.logError(new Error(`Failed to load image: ${alt || "untitled"}`), "SafeImage");
      }}
    />
  );
}
