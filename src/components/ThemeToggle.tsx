"use client";
import { useEffect, useState, useSyncExternalStore } from "react";

function getInitial(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(getInitial);
  const isClient = useIsClient();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((v) => !v)}
      aria-label={dark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
      className="rounded-md border border-[var(--color-border)] px-3 py-1.5 font-mono text-xs text-[var(--color-muted)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
    >
      {isClient ? (dark ? "Jasny" : "Ciemny") : ""}
    </button>
  );
}
