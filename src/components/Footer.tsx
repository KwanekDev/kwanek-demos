export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-page flex flex-wrap items-center justify-between gap-6 py-10">
        <span className="font-display text-xl font-extrabold tracking-tight">Kwanek</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-muted)]">
          <a href="https://kwanek.pl" className="hover:text-[var(--color-fg)]">kwanek.pl</a>
          <a href="https://kwanek.pl/cennik" className="hover:text-[var(--color-fg)]">Cennik</a>
          <a href="https://kwanek.pl/umow-spotkanie" className="link-underline font-medium">Umów rozmowę</a>
        </div>
        <div className="flex w-full items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 font-mono text-xs text-[var(--color-muted-soft)]">
          <span>© Kwanek {new Date().getFullYear()}</span>
          <span>Poznań, Polska</span>
        </div>
      </div>
    </footer>
  );
}

