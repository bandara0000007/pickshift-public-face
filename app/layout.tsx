import type { Metadata } from "next";
import type { ReactNode } from "react";
import { inter, poppins } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "PickShift — Real people. Right fit. Every shift.",
  description:
    "Australia's AI labour marketplace and labour hire platform — connecting verified local workers to employers with generative AI matching and built-in Fair Work compliance.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
