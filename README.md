# kwanek-demos — hub demonstracji

Ten serwis jest **tylko hubem**: katalog działających aplikacji (demo) Kwanek.
Każde demo żyje w osobnym repozytorium i jest wdrażane osobno.

## Architektura

- **Hub (to repo)** — strona z kafelkami: tytuł, opis, stack, obrazek, link.
- **Demo** — osobne repo Next.js (np. `kwanek-demo-przeglady`, `northstar-logistics-dashboard`), deployowane niezależnie (Vercel).

Hub nigdy nie zawiera kodu aplikacji demo — tylko ich **konfigurację** w `src/content/demos.ts`.

## Jak dodać nowe demo

1. Utwórz osobne repo z aplikacją (Next.js) i wdróż je na Vercel.
2. W `src/content/demos.ts` dodaj wpis:
   - `slug` — unikalny identyfikator,
   - `title`, `kind`, `industry`, `description`, `stack`, `highlights` — dane kafelka,
   - `url` — adres wdrożonego demo,
   - `originEnv` (opcjonalnie) — nazwa zmiennej środowiskowej `NEXT_PUBLIC_...`, która nadpisze `url` w środowisku deweloperskim (podgląd lokalny).
3. Dodaj obrazek do `public/images/hub-<slug>.jpg/png` i podepnij go w mapie `media` w `src/app/page.tsx`.
4. Commit i push huba.

## Development lokalny

Ustaw zmienne nadpisujące, np.:

- `NEXT_PUBLIC_DEMO_PRSZEGLADY_ORIGIN=http://localhost:3210`
- `TMS_ORIGIN=http://localhost:3215` (istniejący rewrite w `next.config.ts`)

Wtedy kafelki otwierają lokalne wersje demo zamiast produkcyjnych URL-i.

## Szablon repo dla nowego demo

Skopiuj `kwanek-demo-przeglady` jako punkt startowy (ma już: globals.css, layout z fontem, struktura app/, public/). Zmień nazwę, potem rozwijaj aplikację.
