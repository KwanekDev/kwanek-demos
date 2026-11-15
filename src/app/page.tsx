import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { demos } from "@/content/demos";

export const metadata: Metadata = {
  title: "Wybór demonstracji",
  description:
    "Działające aplikacje webowe z portfolio Kwanek, możesz je kliknąć i przetestować samodzielnie.",
};

export default function DemosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-[var(--color-border)]">
          <div className="container-page py-20">
            <p className="label mb-4">DEMONSTRACJE</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Wybór demonstracji.</h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--color-muted)]">
              Działające aplikacje webowe z portfolio, możesz je kliknąć i przetestować każdą samodzielnie.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container-page">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {demos.map((d) => (
                <article
                  key={d.slug}
                  className="group flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-[var(--color-border-strong)]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-bold">{d.title}</h2>
                    <span className="font-mono text-xs text-[var(--color-accent)]">{d.kind}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-[var(--color-muted-soft)]">{d.industry}</p>
                  <p className="mt-4 text-sm text-[var(--color-muted)]">{d.description}</p>
                  <ul className="mt-4 space-y-2">
                    {d.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                        <span className="mt-0.5 font-mono text-[var(--color-accent)]">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-xs text-[var(--color-muted-soft)]">{d.stack.join(" · ")}</p>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-auto pt-6 text-sm font-medium text-[var(--color-fg)]"
                  >
                    Otwórz demo ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
