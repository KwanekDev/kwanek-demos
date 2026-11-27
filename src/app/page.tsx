import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { demos } from "@/content/demos";
import { demoUrl } from "@/content/demos";

export const metadata: Metadata = {
  title: "Wybór demonstracji",
  description: "Działające aplikacje webowe Kwanek - przetestuj je samodzielnie.",
};

const media: Record<string, string> = {
  przeglady: "/images/hub-przeglady.png",
  tms: "/images/hub-tms.png",
};

export default function DemosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[70dvh] items-end overflow-hidden">
          <Image src="/images/hub-tms.png" alt="" fill priority sizes="100vw" className="object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" aria-hidden="true" />
          <div className="relative container-page py-24">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl">
              Wybór demonstracji.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              Działające aplikacje webowe - kliknij i przetestuj każdą samodzielnie.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-page">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {demos.map((d) => (
                <a
                  key={d.slug}
                  href={demoUrl(d)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--color-border)]">
                    <Image
                      src={media[d.slug] || "/images/hub-office.jpg"}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top opacity-70 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="text-xl font-bold">{d.title}</h2>
                      <span className="shrink-0 font-mono text-xs text-[var(--color-accent-ink)]">{d.kind}</span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-[var(--color-muted-soft)]">{d.industry}</p>
                    <p className="mt-4 text-sm text-[var(--color-muted)]">{d.description}</p>
                    <ul className="mt-4 space-y-2">
                      {d.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                          <span className="mt-0.5 font-mono text-[var(--color-accent-ink)]">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 font-mono text-xs text-[var(--color-muted-soft)]">{d.stack.join(" · ")}</p>
                    <span className="mt-auto pt-6 text-sm font-medium text-[var(--color-accent-ink)] transition-transform duration-300 group-hover:translate-x-1">
                      Otwórz demo ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

