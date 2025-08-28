import type { Metadata } from "next";

import "./globals.css";

import { Providers } from "./Provider";

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
      <body className={` relative     antialiased`}>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
