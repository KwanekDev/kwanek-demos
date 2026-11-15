export interface DemoMeta {
  slug: string;
  kind: string;
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
}

export const DEMOS: DemoMeta[] = [
  {
    slug: "tms",
    kind: "SaaS / dashboard",
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
];
