export interface DemoMeta {
  slug: string;
  url?: string;
  kind: string;
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
}

export const DEMOS: DemoMeta[] = [
  {
    slug: "tms",
    kind: "Dashboard",
    name: "TMS+CRM",
    description:
      "System zarządzania transportem dla firm logistycznych: dashboard kierownictwa, symulator przedsiębiorstwa, flota, transporty, finanse i raporty.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Recharts", "Zod"],
    highlights: [
      "Silnik symulacyjny z presetami scenariuszy",
      "Role CEO i pracownik z uprawnieniami",
      "REST API z walidacją Zod",
    ],
  },
  {
    slug: "tms-klient",
    url: "/tms/klient",
    kind: "Portal klienta",
    name: "Strefa klienta TMS",
    description:
      "Portal klienta systemu TMS: śledzenie przesyłek po kodzie bez logowania oraz konto klienta z pełną listą transportów i szczegółami zleceń.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4"],
    highlights: [
      "Publiczne śledzenie po kodzie TRK-XXXX",
      "Konto demo klienta z listą transportów",
      "Szczegóły zlecenia z osią czasu",
    ],
  },
];

