"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "https://kwanek.pl/#about", label: "O mnie" },
  { href: "https://kwanek.pl/#work", label: "Doświadczenie" },
  { href: "https://kwanek.pl/#projects", label: "Projekty" },
  { href: "https://kwanek.pl/#contact", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="https://kwanek.pl"
          className="font-display text-xl font-bold tracking-tight text-[var(--color-fg)]"
        >
          {site.brand} <span className="font-mono text-sm font-normal text-[var(--color-accent)]">/ demo</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[15px] text-[var(--color-muted)] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--color-fg)]">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button type="button" onClick={() => setOpen((v) => !v)} className="rounded-md border border-[var(--color-border)] px-3 py-1.5 text-xs">
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[var(--color-border)] md:hidden">
          <div className="container-page flex flex-col gap-2 py-4 text-[15px]">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1.5">
                {l.label}→
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

