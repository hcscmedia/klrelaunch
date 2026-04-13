import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Transformation",
  description:
    "Ganzheitliche digitale Transformation für Unternehmen. Von der Analyse bis zur Umsetzung. Christopher Köllner, Berlin.",
};

const phases = [
  { phase: "01", title: "Analyse & Diagnose", desc: "Digitaler Reifegrad, Prozessaufnahme, Tool-Audit. Wir schauen uns an, wo du wirklich stehst.", weeks: "Woche 1–2" },
  { phase: "02", title: "Strategie & Roadmap", desc: "Konkrete Zielarchitektur, Tool-Stack-Empfehlung, priorisierte Umsetzungsschritte.", weeks: "Woche 3–4" },
  { phase: "03", title: "Umsetzung", desc: "Implementierung der neuen Systeme, Prozesse und Tools mit wöchentlichem Jour-Fix.", weeks: "Monat 2–6" },
  { phase: "04", title: "Stabilisierung & Training", desc: "Team-Training, Dokumentation, Change-Management und Übergabe.", weeks: "Monat 6–12" },
];

export default function OnlineTransformationPage() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-5">
            <Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link>
            <span>/</span><span>Online Transformation</span>
          </div>
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center mb-6">
              <TrendingUp size={26} className="text-[var(--color-accent)]" />
            </div>
            <h1 className="mb-6">Online Transformation</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Dein Unternehmen, digital neu gedacht. Kein IT-Projekt — eine echte
              Transformation. Ich begleite den Weg von der Strategie bis zur
              gelebten digitalen Unternehmenskultur.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2>Der Transformationsprozess</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p) => (
              <div key={p.phase} className="card p-7">
                <div className="text-4xl font-bold text-[var(--color-border)] mb-4" style={{ fontFamily: "var(--font-display)" }}>{p.phase}</div>
                <div className="text-xs font-mono text-[var(--color-text-muted)] mb-2">{p.weeks}</div>
                <h3 className="text-lg mb-3">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site text-center">
          <h2 className="mb-5">Transformation braucht Vertrauen.</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 mx-auto" style={{ maxWidth: "40rem" }}>
            Ich arbeite langfristig mit Unternehmen zusammen, die wirklich vorankommen wollen.
            Im ersten Gespräch finden wir heraus, ob das passt.
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            Gespräch vereinbaren <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
