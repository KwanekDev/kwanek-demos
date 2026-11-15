# kwanek-demos — hub „Wybór demonstracji”

Hub demonstracji dostępny pod `demo.kwanek.pl`. Zwiera listę działających aplikacji webowych z portfolio `kwanek.pl`; każde demo jest osobnym deployem, a hub przekierowuje ścieżki (np. `/tms/*`) do właściwej aplikacji.

## Struktura (wg schematu)

```
kwanek.pl                    → portfolio (repo: strona-portfolio)
└─ demo.kwanek.pl            → ten hub (repo: kwanek-demos)
   └─ „Wybór demonstracji”   → strona główna huba
      └─ /tms               → demo TMS+CRM (repo: northstar-logistics-dashboard)
         └─ podstrony (Pulpit, Transporty, Flota, Finanse, Raporty, Terminarz)
            └─ funkcjonalności
```

## Routing ścieżkowy

`next.config.ts` ustawia rewrites: `/tms/:path*` → `${TMS_ORIGIN}/tms/:path*` (zachowując prefiks `/tms`). Domyślnie `TMS_ORIGIN=https://demonstracja.kwanek.pl`. Dzięki temu URL-e są ścieżkowe (`demo.kwanek.pl/tms/...`), a TMS działa jako osobny deploy.

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:3000 (hub), http://localhost:3000/tms (demo przez proxy)
npm run build
npm start
```

## Deploy na Vercel i DNS

1. Utwórz projekt na Vercel i połącz z tym repozytorium.
2. W ustawieniach domeny projektu dodaj `demo.kwanek.pl` i ustaw jako domenę produkcyjną.
3. W DNS `kwanek.pl` wskaż `demo.kwanek.pl` na Vercel (rekord CNAME skonfigurowany przez Vercel).
4. Zmienna środowiskowa `TMS_ORIGIN` pozostaje domyślna lub wskazuje aktualny origin TMS.
5. `demonstracja.kwanek.pl` pozostaje jako origin demo TMS+CRM.

## Dodawanie kolejnych demo

1. Dopisz wpis w `src/content/demos.ts` (slug, nazwa, opis, stack, najważniejsze funkcje).
2. Dodaj rewrite w `next.config.ts` dla ścieżki `/slug/:path*` → origin danego demo.
