import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Wybór demonstracji | kwanek.pl",
    template: "%s | Demo kwanek.pl",
  },
  description:
    "Działające aplikacje webowe z portfolio Kwanek, możesz je kliknąć i przetestować samodzielnie.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
