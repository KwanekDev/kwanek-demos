"use client";
import { useState } from "react";

const links = [
  { href: "https://kwanek.pl/#about", label: "O mnie" },
  { href: "https://kwanek.pl/#work", label: "Doświadczenie" },
  { href: "https://kwanek.pl/#projects", label: "Projekty" },
  { href: "https://kwanek.pl/#contact", label: "Kontakt" },
];

const NAV_CLASS =
  "font-display text-base text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-accent)]";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="text-sm py-6 md:px-16 px-6 border-b border-[var(--color-border)] z-30 md:mb-28 mb-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
        <a
          href="https://kwanek.pl"
          className="font-display text-2xl font-bold tracking-tight text-[var(--color-fg)]"
        >
          Kwanek
        </a>
        <nav className="md:block hidden">
          <ul className="flex items-center gap-x-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={NAV_CLASS}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-x-4">
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="md:hidden rounded-md border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-2"
          >
            <svg width="18" height="18" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true">
              <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 z-40 h-full w-full transform transition-transform duration-500 ease-[cubic-bezier(0.7,0,0,1)] bg-[var(--color-bg)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <a
            href="https://kwanek.pl"
            className="font-display text-2xl font-bold tracking-tight text-[var(--color-fg)]"
          >
            Kwanek
          </a>
          <button
            aria-label="Zamknij menu"
            onClick={() => setOpen(false)}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col mt-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between font-display font-semibold text-lg border-b border-[var(--color-border)] p-6 group"
            >
              <span>{l.label}</span>
              <span className="text-[var(--color-accent)]">→</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
