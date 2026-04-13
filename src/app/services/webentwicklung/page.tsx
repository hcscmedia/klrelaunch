import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Zap, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Webentwicklung Berlin",
  description:
    "Professionelle Webentwicklung mit Next.js, React und TypeScript. Moderne, schnelle und skalierbare Web-Anwendungen von Christopher Köllner aus Berlin.",
};

const features = [
  { icon: Zap, title: "Performance First", text: "Core Web Vitals 100/100. Deine Website lädt in unter 1 Sekunde — auch auf mobilen Netzwerken." },
  { icon: Shield, title: "Sicherheit & DSGVO", text: "Sicherheitsbest-Practices by default. DSGVO-konforme Datenverarbeitung ohne Overhead." },
  { icon: Globe, title: "SEO Ready", text: "Strukturierte Daten, Server-Side-Rendering, sitemap.xml — Google versteht deine Website." },
  { icon: Code2, title: "Clean Code", text: "TypeScript, Tests, Dokumentation. Kein Wartungschaos in 12 Monaten." },
];

const deliverables = [
  "Responsive Design (Mobile-First)",
  "Next.js 14 App Router Architektur",
  "TypeScript & sauber strukturierter Code",
  "Headless CMS Integration nach Wahl",
  "SEO-Grundoptimierung & Meta-Struktur",
  "Core Web Vitals Optimierung",
  "Deployment & Hosting-Setup",
  "30 Tage Post-Launch Support",
];

const packages = [
  {
    name: "Landing Page",
    price: "ab 3.500 €",
    duration: "2–3 Wochen",
    ideal: "Startups, Freelancer, Kampagnenseiten",
    includes: ["Single Page oder mehrere Sektionen", "Kontaktformular", "SEO-Basis", "Responsive Design", "CMS für einfache Inhalte"],
  },
  {
    name: "Business Website",
    price: "ab 7.500 €",
    duration: "4–6 Wochen",
    ideal: "KMU, Agenturen, Dienstleister",
    includes: ["Bis zu 15 Seiten", "Blog-Funktion", "Headless CMS", "Kontakt- & Lead-Formulare", "SEO-Optimierung", "Analytics-Integration"],
    highlighted: true,
  },
  {
    name: "Web App / SaaS",
    price: "ab 15.000 €",
    duration: "8–16 Wochen",
    ideal: "SaaS-Produkte, Plattformen, komplexe Projekte",
    includes: ["Individuelle Architektur", "Auth & Nutzerverwaltung", "API-Entwicklung", "Datenbank-Design", "CI/CD Pipeline", "Laufende Wartung möglich"],
  },
];

export default function WebentwicklungPage() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-5">
            <Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link>
            <span>/</span>
            <span>Webentwicklung</span>
          </div>
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center mb-6">
              <Code2 size={26} className="text-[var(--color-accent)]" />
            </div>
            <h1 className="mb-6">Webentwicklung</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Ich baue Web-Anwendungen, die performen. Mit Next.js, TypeScript und einer
              Architektur, die mit deinem Business skaliert — nicht dagegen.
            </p>
            <div className="flex gap-4">
              <Link href="/kontakt" className="btn btn-primary">
                Projekt anfragen <ArrowRight size={16} />
              </Link>
              <Link href="/projekte" className="btn btn-secondary">Referenzen</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card p-7">
                  <div className="w-11 h-11 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="highlight-bar mx-auto" />
            <h2>Pakete & Preise</h2>
            <p className="mt-3 text-[var(--color-text-secondary)] mx-auto" style={{ maxWidth: "36rem" }}>
              Orientierungspreise. Jedes Projekt ist anders — ich erstelle dir gerne ein individuelles Angebot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`card p-8 flex flex-col ${pkg.highlighted ? "border-[var(--color-accent)] shadow-[var(--shadow-glow)]" : ""}`}>
                {pkg.highlighted && (
                  <div className="badge badge-blue mb-4 w-fit">Empfohlen</div>
                )}
                <h3 className="text-xl mb-1">{pkg.name}</h3>
                <p className="text-xs text-[var(--color-text-muted)] mb-4">{pkg.ideal}</p>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-display)" }}>{pkg.price}</span>
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mb-6">Projektdauer: {pkg.duration}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className={`btn ${pkg.highlighted ? "btn-primary" : "btn-secondary"} justify-center`}>
                  Anfragen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="highlight-bar" />
              <h2 className="mb-5">Was du immer bekommst</h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Egal welches Paket — gewisse Standards sind nicht verhandelbar.
              </p>
              <ul className="space-y-3.5">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8 bg-[var(--color-accent-subtle)] border-[var(--color-accent)]">
              <h3 className="text-xl mb-4">Kostenloses Erstgespräch</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                30 Minuten. Kein Pitching, kein Verkaufsdruck. Ich höre zu, stelle
                Fragen und sage dir ehrlich, ob und wie ich helfen kann.
              </p>
              <Link href="/kontakt" className="btn btn-primary w-full justify-center">
                Jetzt anfragen <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
