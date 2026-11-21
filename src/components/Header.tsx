"use client";
import { useState } from "react";

const links = [
  { href: "https://kwanek.pl/#about", label: "O mnie" },
  { href: "https://kwanek.pl/#work", label: "Doświadczenie" },
  { href: "https://kwanek.pl/#projects", label: "Projekty" },
  { href: "https://kwanek.pl/#contact", label: "Kontakt" },
];

const serviceLinks = [
  { href: "https://kwanek.pl/aplikacje-webowe", label: "Panele i Dashboardy" },
  { href: "https://kwanek.pl/opieka-techniczna", label: "Opieka techniczna" },
  { href: "https://kwanek.pl/redesign-strony", label: "Redesign" },
  { href: "https://kwanek.pl/strony-internetowe", label: "Strony internetowe" },
];

const NAV_CLASS =
  "font-display text-base text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-accent)]";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="text-sm py-6 md:px-16 px-6 border-b border-[var(--color-border)] z-30 md:mb-28 mb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        <a href="https://kwanek.pl" className="justify-self-start font-display text-2xl font-bold tracking-tight text-[var(--color-fg)]">Kwanek</a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={NAV_CLASS}>{l.label}</a>
              </li>
            ))}
            <li className="relative group">
              <button type="button" className="flex items-center gap-1.5 font-display text-base text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-accent)]">
                Usługi
                <svg width="12" height="12" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true" className="transition-transform duration-200 group-hover:rotate-180"><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.5 4.13638L9.43181 6.06819C9.60754 6.24392 9.89246 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.8182 3.18179C7.73379 3.09738 7.61933 3.05 7.5 3.05C7.38067 3.05 7.26621 3.09738 7.1818 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89246 8.75606 9.60754 8.75606 9.43181 8.93179L7.5 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.1818 11.8182C7.26621 11.9026 7.38067 11.95 7.5 11.95C7.61933 11.95 7.73379 11.9026 7.8182 11.8182L10.0682 9.56819Z" /></svg>
              </button>
              <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="w-64 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] p-2 shadow-xl">
                  {serviceLinks.map((l) => (
                    <a key={l.href} href={l.href} className="block rounded px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-fg)]">{l.label}</a>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-x-4">
          <a href="https://kwanek.pl/umow-spotkanie" className="hidden md:inline-flex items-center gap-2 border border-[var(--color-border-strong)] px-4 py-2 text-sm font-medium tracking-tight text-[var(--color-fg)] transition-colors hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)]">
            Umów spotkanie <span aria-hidden="true">→</span>
          </a>
          <button aria-label="Menu" onClick={() => setOpen(true)} className="md:hidden rounded-md border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-2">
            <svg width="18" height="18" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed left-0 top-0 z-40 h-full w-full bg-[var(--color-bg)]">
          <div className="flex items-center justify-between mt-6 px-8">
            <a href="https://kwanek.pl" className="font-display text-2xl font-bold tracking-tight text-[var(--color-fg)]">Kwanek</a>
            <button aria-label="Zamknij menu" onClick={() => setOpen(false)} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex flex-col mt-6 pb-safe">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between font-display font-semibold text-lg border-b border-[var(--color-border)] p-6 group">
                <span>{l.label}</span><span className="text-[var(--color-accent)]">→</span>
              </a>
            ))}
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] px-6 pt-8 pb-2">Usługi</p>
            {serviceLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between font-display font-semibold text-lg border-b border-[var(--color-border)] p-6 group">
                <span>{l.label}</span><span className="text-[var(--color-accent)]">→</span>
              </a>
            ))}
            <a href="https://kwanek.pl/umow-spotkanie" onClick={() => setOpen(false)} className="flex items-center justify-between font-display font-semibold text-lg border-b border-[var(--color-border)] p-6 group">
              <span>Umów spotkanie</span><span className="text-[var(--color-accent)]">→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
