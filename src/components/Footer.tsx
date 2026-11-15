import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="text-xl font-extrabold tracking-tight">{site.brand}</span>
            <p className="mt-3 max-w-sm text-sm text-[var(--color-muted)]">
              Profesjonalne strony i aplikacje webowe dla biznesu, projekt, rozwój, wdrożenie i utrzymanie.
            </p>
          </div>
          <div>
            <p className="label mb-3">Nawigacja</p>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              <li><a href="https://kwanek.pl/#uslugi" className="hover:text-[var(--color-fg)]">Usługi</a></li>
              <li><a href="https://kwanek.pl/#projects" className="hover:text-[var(--color-fg)]">Realizacje</a></li>
              <li><a href="https://kwanek.pl/#proces" className="hover:text-[var(--color-fg)]">Proces współpracy</a></li>
              <li><a href="https://kwanek.pl/opieka-techniczna" className="hover:text-[var(--color-fg)]">Opieka techniczna</a></li>
              <li><a href="https://kwanek.pl/branze/transport-logistyka" className="hover:text-[var(--color-fg)]">Transport i logistyka</a></li>
              <li><a href="https://kwanek.pl/#contact" className="hover:text-[var(--color-fg)]">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <p className="label mb-3">Kontakt</p>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              <li><a href={"mailto:" + site.email} className="hover:text-[var(--color-fg)]">{site.email}</a></li>
              <li><a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-fg)]">GitHub ↗</a></li>
              <li><a href={site.usemeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-fg)]">Useme ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="label mb-3">Informacje</p>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              <li><a href="https://kwanek.pl/prywatnosc" className="hover:text-[var(--color-fg)]">Polityka prywatności</a></li>
              <li><a href="https://kwanek.pl/regulamin" className="hover:text-[var(--color-fg)]">Regulamin</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--color-border)] pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-muted-soft)]">
            <span>© {new Date().getFullYear()} {site.brand}. Wszelkie prawa zastrzeżone.</span>
            <span>Zbudowano na: Next.js · Tailwind · Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
