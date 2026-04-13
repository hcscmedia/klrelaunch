import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Ausgewählte Web- und KI-Projekte von Tobias Köllner. Von E-Commerce-Plattformen bis zu AI-powered Dashboards — echte Projekte, echte Ergebnisse.",
};

const categories = ["Alle", "Web App", "KI", "CMS", "SaaS", "E-Commerce"];

const projects = [
  {
    title: "KI-gestützte E-Commerce Platform",
    category: "E-Commerce · KI",
    description:
      "Vollständige Neuentwicklung einer E-Commerce-Plattform mit KI-Produktempfehlung, dynamischer Preisgestaltung und personalisierten Kundenerfahrungen.",
    tech: ["Next.js 14", "Stripe", "OpenAI", "PostgreSQL", "Vercel"],
    year: "2024",
    href: "/projekte/ecommerce-ki",
    highlight: "+240% Conversion",
    status: "Live",
  },
  {
    title: "Corporate Dashboard Suite",
    category: "SaaS · Analytics",
    description:
      "Real-time Analytics-Dashboard mit automatisierten Reporting-Flows, Custom-Alerts und exportierbaren Berichten für ein mittelständisches Unternehmen.",
    tech: ["React", "D3.js", "FastAPI", "Redis", "AWS"],
    year: "2024",
    href: "/projekte/dashboard-suite",
    highlight: "60% Zeitersparnis",
    status: "Live",
  },
  {
    title: "AI Content Management System",
    category: "CMS · KI-Integration",
    description:
      "Headless CMS mit KI-gestützter Content-Erstellung, automatischem SEO-Audit, mehrsprachigem Workflow und granularem Rollen-Rechte-System.",
    tech: ["Next.js", "Payload CMS", "Claude API", "TypeScript"],
    year: "2023",
    href: "/projekte/ai-cms",
    highlight: "100K+ Artikel",
    status: "Live",
  },
  {
    title: "Buchungsplattform für Therapeuten",
    category: "Web App · SaaS",
    description:
      "Multi-Tenant SaaS-Plattform für Therapeuten mit Online-Buchung, Patientenmanagement, Videocall-Integration und automatisierten Erinnerungen.",
    tech: ["Next.js", "Prisma", "Twilio", "Stripe", "Supabase"],
    year: "2023",
    href: "/projekte/therapeuten-plattform",
    highlight: "500+ Therapeuten",
    status: "Live",
  },
  {
    title: "KI-Dokumentenanalyse Tool",
    category: "KI · Enterprise",
    description:
      "Internes Tool für ein Rechtsanwaltsbüro: automatische Vertragsprüfung, Risikoerkennung und Zusammenfassung komplexer Dokumente via RAG.",
    tech: ["Python", "FastAPI", "LangChain", "Claude API", "React"],
    year: "2024",
    href: "/projekte/ki-dokumente",
    highlight: "80% Zeitersparnis",
    status: "Intern",
  },
  {
    title: "Marketing Automation Platform",
    category: "SaaS · Automation",
    description:
      "E-Mail-Marketing-Plattform mit KI-gestützter Segmentierung, A/B-Testing, Personalisierung und CRM-Integration.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "SendGrid"],
    year: "2023",
    href: "/projekte/marketing-automation",
    highlight: "+380% ROI",
    status: "Live",
  },
];

export default function ProjektePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="highlight-bar" />
            <h1 className="mb-6">Ausgewählte Projekte</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Jedes Projekt hier steht für echte Herausforderungen, echte Lösungen
              und messbare Ergebnisse. Keine Mock-ups, keine Demo-Sites.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="card p-7 group block relative overflow-hidden"
              >
                {/* Index + Status */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--color-text-muted)]">{project.year}</span>
                    <span className="badge badge-blue" style={{ fontSize: "0.6rem", padding: "0.15rem 0.5rem" }}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Background number */}
                <div
                  className="absolute top-5 right-6 text-6xl font-bold text-[var(--color-border)] select-none transition-opacity group-hover:opacity-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg mb-3 pr-12 leading-snug">{project.title}</h3>

                {/* Highlight metric */}
                <div className="inline-block mb-3 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-md">
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                    {project.highlight}
                  </span>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] group-hover:gap-3 transition-all">
                  Case Study lesen <ExternalLink size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site text-center">
          <h2 className="mb-5">Dein Projekt könnte hier stehen.</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 mx-auto" style={{ maxWidth: "36rem" }}>
            Ich freue mich immer auf neue Herausforderungen. Das Erstgespräch ist
            kostenlos — lass uns sehen, was wir zusammen erreichen können.
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            Projekt anfragen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
