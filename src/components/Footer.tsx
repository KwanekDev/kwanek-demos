const FOOTER_LINKS = [
  { href: "https://kwanek.pl/#about", label: "O mnie" },
  { href: "https://kwanek.pl/#work", label: "Doświadczenie" },
  { href: "https://kwanek.pl/#projects", label: "Projekty" },
  { href: "https://kwanek.pl/#contact", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
      <div className="container-page py-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-display text-xl font-bold tracking-tight">Kwanek</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-muted)]">
            {FOOTER_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--color-fg)]">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--color-border)] pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-muted-soft)]">
            <span>© Kwanek {new Date().getFullYear()}</span>
            <span>Poznań, Polska</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
