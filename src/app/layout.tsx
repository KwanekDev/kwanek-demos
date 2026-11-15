import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Demo | kwanek.pl",
    template: "%s | Demo kwanek.pl",
  },
  description:
    "Wybór demonstracji portfolio kwanek.pl, działające aplikacje webowe do przetestowania.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

