import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { Providers } from "./Provider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Portfolio Rajnish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${sora.variable} ${spaceGrotesk.variable} relative antialiased`}>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
