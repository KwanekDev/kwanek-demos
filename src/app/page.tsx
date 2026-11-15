import { DEMOS } from "@/content/demos";

export default function Home() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="https://kwanek.pl">
          kwanek.pl <span className="separator">/</span> <small className="demo">demo</small>
        </a>
        <nav className="nav" aria-label="Nawigacja">
          <a href="https://kwanek.pl/#about">O mnie</a>
          <a href="https://kwanek.pl/#work">Doświadczenie</a>
          <a href="https://kwanek.pl/#projects">Projekty</a>
          <a href="https://kwanek.pl/#contact">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">Demonstracje</span>
        <h1>Wybór demonstracji</h1>
        <p className="lead">
          Działające aplikacje webowe z portfolio, możesz je kliknąć i przetestować samodzielnie.
        </p>
        <p className="count">{DEMOS.length} {DEMOS.length === 1 ? "demo" : "dema"}</p>
      </section>

      <main className="grid">
        {DEMOS.map((demo) => (
          <a key={demo.slug} className="card" href={demo.url ?? `/${demo.slug}`}>
            <div className="card-head">
              <span className="badge">{demo.kind}</span>
            </div>
            <h2>{demo.name}</h2>
            <p>{demo.description}</p>
            <ul className="highlights">
              {demo.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="stack">
              {demo.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
            <span className="go">Otwórz demo →</span>
          </a>
        ))}
      </main>

      <footer className="footer">
        <span>Portfolio Kwanek · 2026</span>
        <div className="links">
          <a href="https://kwanek.pl">kwanek.pl</a>
          <a href="mailto:banapio51@gmail.com">kontakt</a>
        </div>
      </footer>
    </div>
  );
}

