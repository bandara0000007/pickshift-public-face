import type { Metadata } from "next";
import type { ReactNode } from "react";
import { inter, poppins } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "PickShift — Good work starts with good people",
  description:
    "Australia's AI-powered labour marketplace and labour hire platform. Find verified local workers matched to your role, culture and credentials.",
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
