export type Demo = {
  slug: string;
  title: string;
  kind: string;
  industry: string;
  description: string;
  stack: string[];
  highlights: string[];
  url: string;
};

export const demos: Demo[] = [
  {
    slug: "tms",
    title: "TMS+CRM",
    kind: "Dashboard",
    industry: "Transport / logistyka",
    description:
      "System zarządzania transportem dla firm logistycznych: dashboard kierownictwa, symulator przedsiębiorstwa, flota, transporty, finanse i raporty.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Zod"],
    highlights: [
      "Silnik symulacyjny z presetami scenariuszy",
      "Role CEO i pracownik z uprawnieniami",
      "REST API z walidacją Zod",
      "Konta demonstracyjne gotowe do testów",
    ],
    url: "https://demo.kwanek.pl/tms",
  },
  {
    slug: "tms-klient",
    title: "Strefa klienta TMS",
    kind: "Portal klienta",
    industry: "Transport / logistyka",
    description:
      "Portal klienta systemu TMS: śledzenie przesyłek po kodzie bez logowania oraz konto klienta z pełną listą transportów i szczegółami zleceń.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    highlights: [
      "Publiczne śledzenie po kodzie TRK-XXXX",
      "Konto demo klienta z listą transportów",
      "Szczegóły zlecenia z osią czasu",
    ],
    url: "https://demo.kwanek.pl/tms/klient",
  },
];
