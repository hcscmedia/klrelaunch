import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Brain,
  TrendingUp,
  ExternalLink,
  Star,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────

const services = [
  {
    icon: Code2,
    title: "Webentwicklung",
    description:
      "Moderne, schnelle und skalierbare Web-Anwendungen mit Next.js, React und TypeScript. Von der Landing Page bis zur komplexen SaaS-Plattform.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    href: "/services/webentwicklung",
    highlight: "150+ Projekte",
  },
  {
    icon: Brain,
    title: "KI-Beratung",
    description:
      "Strategische Integration von KI in dein Unternehmen. Von der Potenzialanalyse über Prompt Engineering bis zur vollständigen KI-Infrastruktur.",
    tags: ["ChatGPT", "Claude API", "RAG", "Automation"],
    href: "/services/ki-beratung",
    highlight: "50+ Beratungen",
  },
  {
    icon: TrendingUp,
    title: "Online Transformation",
    description:
      "Ganzheitliche digitale Transformation deiner Geschäftsprozesse. Vom Ist-Zustand zur zukunftsfähigen digitalen Organisation.",
    tags: ["Strategie", "Prozesse", "Tools", "Change"],
    href: "/services/online-transformation",
    highlight: "Full Service",
  },
];

const projects = [
  {
    title: "KI-gestützte E-Commerce Platform",
    category: "Web App · KI",
    description:
      "Vollständige Neuentwicklung einer E-Commerce-Plattform mit integrierter KI-Produktempfehlung und dynamischer Preisgestaltung.",
    tech: ["Next.js", "Stripe", "OpenAI", "PostgreSQL"],
    year: "2024",
    href: "/projekte/ecommerce-ki",
  },
  {
    title: "Corporate Dashboard Suite",
    category: "SaaS · Analytics",
    description:
      "Real-time Analytics-Dashboard für ein mittelständisches Unternehmen mit automatisierten Reporting-Flows.",
    tech: ["React", "D3.js", "FastAPI", "Redis"],
    year: "2024",
    href: "/projekte/dashboard-suite",
  },
  {
    title: "AI Content Management System",
    category: "CMS · KI-Integration",
    description:
      "Headless CMS mit KI-gestützter Content-Erstellung, automatischem SEO-Audit und mehrsprachigem Content-Workflow.",
    tech: ["Next.js", "Payload CMS", "Claude API", "Vercel"],
    year: "2023",
    href: "/projekte/ai-cms",
  },
];

const stats = [
  { value: "150+", label: "Projekte" },
  { value: "8+", label: "Jahre Erfahrung" },
  { value: "98%", label: "Zufriedenheit" },
  { value: "50+", label: "KI-Projekte" },
];

const testimonials = [
  {
    text: "Tobias hat unsere Erwartungen in jedem Aspekt übertroffen. Die Website ist nicht nur wunderschön, sondern auch messbar erfolgreicher als die alte.",
    author: "Anna Berger",
    role: "Geschäftsführerin, BerlinTech GmbH",
    rating: 5,
  },
  {
    text: "Durch die KI-Beratung haben wir unsere Prozesse um 60% beschleunigt. Ein echter Game-Changer für unser Unternehmen.",
    author: "Michael Schmidt",
    role: "CTO, StartupVentures AG",
    rating: 5,
  },
  {
    text: "Professionell, schnell, denkt mit. Tobias ist der Partner, den du für digitale Projekte brauchst.",
    author: "Julia Wagner",
    role: "Marketing Direktorin, MediaGroup",
    rating: 5,
  },
];

const whyMe = [
  { icon: Zap, title: "Schnell & präzise", text: "Klare Prozesse, enge Kommunikation, pünktliche Lieferung." },
  { icon: Brain, title: "KI-First Denken", text: "Jedes Projekt profitiert von meiner KI-Expertise." },
  { icon: Shield, title: "Qualität by Default", text: "Sauberer Code, DSGVO-konform, zukunftssicher gebaut." },
  { icon: Globe, title: "Direkte Zusammenarbeit", text: "Kein Subunternehmer-Konstrukt — ich bin dein direkter Partner." },
];

// ── Page ──────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient min-h-[100dvh] flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-[0.04] rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

        <div className="container-site py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="badge badge-blue mb-8 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-slow" />
              Verfügbar für neue Projekte — Berlin &amp; Remote
            </div>

            <h1 className="animate-fade-in-up delay-100 mb-6">
              Ich baue{" "}
              <span className="text-gradient">digitale Produkte</span>
              <br />
              die wirklich wirken.
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl animate-fade-in-up delay-200 mb-10">
              Tobias Köllner — Webdeveloper &amp; KI-Berater aus Berlin. Ich entwickle
              moderne Web-Anwendungen, integriere KI in Geschäftsprozesse und begleite
              Unternehmen bei ihrer digitalen Transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link href="/kontakt" className="btn btn-primary">
                Projekt starten
                <ArrowRight size={18} />
              </Link>
              <Link href="/projekte" className="btn btn-secondary">
                Meine Projekte
              </Link>
            </div>

            <div className="mt-16 pt-10 border-t border-[var(--color-border)] grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-400">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-spacing border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="highlight-bar mx-auto" />
            <p className="badge badge-blue mb-4 mx-auto w-fit">Was ich tue</p>
            <h2>Meine Leistungen</h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] mx-auto" style={{ maxWidth: "42rem" }}>
              Von der ersten Idee bis zum fertigen Produkt — ich begleite dein Projekt
              mit technischer Tiefe und strategischem Blick.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href={service.href} className="card p-8 group block">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors">
                      <Icon size={22} className="text-[var(--color-accent)] group-hover:text-white transition-colors" />
                    </div>
                    <span className="badge badge-blue" style={{ fontSize: "0.625rem" }}>{service.highlight}</span>
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    Mehr erfahren <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn btn-secondary">Alle Services ansehen</Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-spacing bg-[var(--color-surface)]">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="highlight-bar" />
              <h2>Ausgewählte Projekte</h2>
              <p className="mt-3 text-[var(--color-text-secondary)]" style={{ maxWidth: "36rem" }}>
                Ein Blick auf Projekte, bei denen Technologie und Strategie zusammenkommen.
              </p>
            </div>
            <Link href="/projekte" className="btn btn-secondary shrink-0">Alle Projekte</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={project.title} href={project.href} className="card p-7 group block relative overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">{project.category}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">{project.year}</span>
                </div>
                <div className="absolute top-6 right-7 text-5xl font-bold text-[var(--color-border)] select-none" style={{ fontFamily: "var(--font-display)" }}>
                  0{index + 1}
                </div>
                <h3 className="text-lg mb-3 pr-12 leading-snug">{project.title}</h3>
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

      {/* WHY ME */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="highlight-bar" />
              <h2 className="mb-5">Warum mit mir arbeiten?</h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Ich bin kein Agentur-Konstrukt. Kein Vertriebsteam, kein Subunternehmer-
                Netzwerk. Du arbeitest direkt mit mir — einem erfahrenen Developer und
                Strategen, der für dein Projektergebnis brennt.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyMe.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[var(--color-text-primary)] mb-1">{item.title}</div>
                        <div className="text-sm text-[var(--color-text-secondary)]">{item.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 flex gap-4">
                <Link href="/ueber-mich" className="btn btn-primary">
                  Über mich <ArrowRight size={16} />
                </Link>
                <Link href="/kontakt" className="btn btn-secondary">Erstgespräch</Link>
              </div>
            </div>

            <div className="card p-8 space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center">
                  <Code2 size={22} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">Tobias Köllner</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Webdev &amp; KI-Berater · Berlin</div>
                </div>
              </div>
              {[
                "Next.js · React · TypeScript · Node.js",
                "Python · FastAPI · PostgreSQL",
                "Claude API · OpenAI · LangChain · RAG",
                "AWS · Vercel · Docker · CI/CD",
              ].map((stack, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[var(--color-accent)] shrink-0" />
                  <span className="text-sm text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>{stack}</span>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />
                  <span className="text-sm text-[var(--color-text-secondary)]">Verfügbar für Projekte ab Mai 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2>Was Kunden sagen</h2>
            <p className="mt-3 text-[var(--color-text-secondary)] mx-auto" style={{ maxWidth: "32rem" }}>
              Echte Ergebnisse, echtes Feedback.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="card p-7">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm text-[var(--color-text-primary)]">{t.author}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="relative rounded-2xl overflow-hidden border border-[var(--color-accent)] bg-[var(--color-accent-subtle)] p-12 md:p-16 text-center">
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="mb-5">Bereit, dein Projekt zu starten?</h2>
              <p className="text-[var(--color-text-secondary)] mb-8 mx-auto" style={{ maxWidth: "36rem" }}>
                Ich freue mich auf dein Projekt. Das Erstgespräch ist kostenlos und
                unverbindlich — lass uns herausfinden, wie wir zusammenarbeiten können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt" className="btn btn-primary">
                  Kostenloses Erstgespräch <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn btn-secondary">Services ansehen</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
