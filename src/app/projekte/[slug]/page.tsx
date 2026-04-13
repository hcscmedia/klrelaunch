import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, TrendingUp } from "lucide-react";

// ── Static demo data (replaced by Payload CMS in Phase 2) ──

type Project = {
  title: string;
  category: string;
  client: string;
  year: string;
  status: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  tech: string[];
  deliverables: string[];
  liveUrl?: string;
  duration: string;
};

const projects: Record<string, Project> = {
  "ecommerce-ki": {
    title: "KI-gestützte E-Commerce Platform",
    category: "Web App · KI · E-Commerce",
    client: "Berliner Modehandel GmbH",
    year: "2024",
    status: "Live",
    tagline: "+240% Conversion durch personalisierte KI-Empfehlungen",
    description:
      "Vollständige Neuentwicklung einer veralteten E-Commerce-Plattform hin zu einem modernen, KI-gestützten System mit Echtzeit-Produktempfehlungen, dynamischer Preisgestaltung und personalisierten Kundenerfahrungen.",
    challenge:
      "Die bestehende Shopware 5 Plattform war technisch überholt, hatte Performance-Probleme (Ladezeit > 8 Sekunden) und bot keinerlei Personalisierung. Conversion Rate lag bei 0,8%. Die Migration musste ohne Datenverlust und ohne Geschäftsunterbrechung stattfinden.",
    solution:
      "Vollständige Neuentwicklung mit Next.js 14 App Router, Stripe für Payments und einer eigens entwickelten KI-Engine auf Basis von OpenAI Embeddings für Produktempfehlungen. RAG-basiertes System analysiert Klickverhalten und Kaufhistorie in Echtzeit. Headless-Architektur ermöglicht zukünftige Erweiterbarkeit.",
    results: [
      { metric: "Conversion Rate", value: "+240%", description: "Von 0,8% auf 2,7% in 60 Tagen nach Launch" },
      { metric: "Ladezeit", value: "0,9s", description: "Vorher: 8,2 Sekunden — jetzt unter 1 Sekunde" },
      { metric: "Ø Bestellwert", value: "+35%", description: "Durch personalisierte Upsell-Empfehlungen" },
      { metric: "Core Web Vitals", value: "100/100", description: "Perfekter Score auf Mobile und Desktop" },
    ],
    tech: ["Next.js 14", "TypeScript", "Stripe", "OpenAI Embeddings", "PostgreSQL", "Redis", "Vercel"],
    deliverables: [
      "Next.js 14 App Router Plattform",
      "KI-Produktempfehlungs-Engine",
      "Stripe Checkout + Abonnements",
      "Admin-Dashboard für Produktverwaltung",
      "Migrationsskripte (Shopware → Next.js)",
      "Performance-Optimierung & CDN-Setup",
      "Technische Dokumentation",
    ],
    liveUrl: "https://example.com",
    duration: "14 Wochen",
  },
  "dashboard-suite": {
    title: "Corporate Dashboard Suite",
    category: "SaaS · Analytics · B2B",
    client: "MittelstandGroup AG",
    year: "2024",
    status: "Live",
    tagline: "60% Zeitersparnis durch automatisiertes Reporting",
    description:
      "Real-time Analytics-Dashboard mit automatisierten Reporting-Flows, Custom-Alerts und exportierbaren Berichten. Das System ersetzt manuelle Excel-Prozesse und liefert Echtzeit-Transparenz über alle Geschäftsbereiche.",
    challenge:
      "Das Unternehmen verbrachte jeden Montag 4–6 Stunden mit der manuellen Erstellung von Management-Reports aus verschiedenen Datenquellen. Fehlerquote war hoch, Aktualität der Daten bis zu 3 Tage veraltet.",
    solution:
      "Zentrales Dashboard mit Live-Anbindung an alle Datenquellen (ERP, CRM, Google Analytics). Automatisierte Report-Generierung jeden Montagmorgen um 7 Uhr. Custom-Alert-System für KPIs. One-Click-Export als PDF und Excel.",
    results: [
      { metric: "Zeitersparnis", value: "60%", description: "Report-Erstellung von 5h auf 2h reduziert" },
      { metric: "Datenaktualität", value: "Echtzeit", description: "Vorher: bis zu 3 Tage Verzug" },
      { metric: "Fehlerrate", value: "-95%", description: "Manuelle Fehler durch Automatisierung eliminiert" },
      { metric: "Nutzerakzeptanz", value: "98%", description: "Adoption-Rate nach 3 Monaten" },
    ],
    tech: ["React 19", "TypeScript", "D3.js", "FastAPI", "Python", "PostgreSQL", "Redis", "AWS"],
    deliverables: [
      "React Dashboard mit D3.js Visualisierungen",
      "FastAPI Backend mit Datenbankanbindungen",
      "Automatisierter Report-Generator",
      "Alert-System mit E-Mail-Benachrichtigungen",
      "PDF/Excel-Export-Funktion",
      "User-Management & Rollen",
    ],
    duration: "10 Wochen",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Projekt nicht gefunden" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug] ?? projects["ecommerce-ki"];

  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-16 border-b border-[var(--color-border)]">
        <div className="container-site">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Alle Projekte
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="badge badge-blue">{project.category}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{project.year}</span>
                <span className="badge badge-blue" style={{ fontSize: "0.6rem" }}>{project.status}</span>
              </div>
              <h1 className="mb-5 text-3xl md:text-4xl leading-tight">{project.title}</h1>
              <p className="text-xl font-medium text-[var(--color-accent)] mb-6">{project.tagline}</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{project.description}</p>
            </div>

            {/* Meta card */}
            <div className="card p-7 h-fit space-y-5">
              {[
                { label: "Kunde", value: project.client },
                { label: "Jahr", value: project.year },
                { label: "Dauer", value: project.duration },
                { label: "Status", value: project.status },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs text-[var(--color-text-muted)] mb-1">{item.label}</div>
                  <div className="text-sm font-medium text-[var(--color-text-primary)]">{item.value}</div>
                </div>
              ))}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center !text-sm"
                >
                  Live ansehen <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp size={20} className="text-[var(--color-accent)]" />
            <h2 className="text-2xl">Ergebnisse</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {project.results.map((result) => (
              <div key={result.metric} className="card p-6 text-center">
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {result.value}
                </div>
                <div className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{result.metric}</div>
                <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE + SOLUTION */}
      <section className="py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="card p-8">
              <h3 className="text-xl mb-5">Die Herausforderung</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-[1.85]">{project.challenge}</p>
            </div>
            <div className="card p-8 border-[var(--color-accent)] bg-[var(--color-accent-subtle)]">
              <h3 className="text-xl mb-5">Die Lösung</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-[1.85]">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH + DELIVERABLES */}
      <section className="py-16 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-6">Deliverables</h3>
              <ul className="space-y-3">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-site text-center">
          <h2 className="mb-5">Ähnliches Projekt geplant?</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 mx-auto" style={{ maxWidth: "36rem" }}>
            Ich freue mich auf dein Projekt. Das Erstgespräch ist kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn btn-primary">
              Projekt anfragen <ArrowRight size={16} />
            </Link>
            <Link href="/projekte" className="btn btn-secondary">Alle Projekte</Link>
          </div>
        </div>
      </section>
    </>
  );
}
