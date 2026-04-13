import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Brain, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Webentwicklung, KI-Beratung und Online Transformation aus Berlin. Entdecke meine Leistungen und wie ich dein Unternehmen voranbringen kann.",
};

const services = [
  {
    icon: Code2,
    title: "Webentwicklung",
    slug: "webentwicklung",
    tagline: "Von der Idee zum Produkt — schnell, sauber, skalierbar.",
    description:
      "Ich entwickle moderne Web-Anwendungen mit dem aktuellen Next.js App Router, TypeScript und einer Architektur, die mit deinem Geschäft wächst. Keine Agentur-Mittelmäßigkeit — sondern maßgeschneiderte Lösungen, die wirklich performen.",
    deliverables: [
      "Performante Next.js / React Anwendungen",
      "Headless CMS Integration (Sanity, Payload, Storyblok)",
      "API-Entwicklung & Backend-Integration",
      "Design System & Komponentenbibliothek",
      "SEO-Optimierung & Core Web Vitals",
      "Deployment & DevOps (Vercel, AWS)",
    ],
    price: "ab 3.500 €",
    duration: "2–12 Wochen",
    color: "blue",
  },
  {
    icon: Brain,
    title: "KI-Beratung",
    slug: "ki-beratung",
    tagline: "KI strategisch einsetzen — nicht einfach ausprobieren.",
    description:
      "Ich helfe dir, KI sinnvoll und nachhaltig in dein Unternehmen zu integrieren. Von der initialen Potenzialanalyse über die Auswahl der richtigen Tools bis zur technischen Umsetzung und dem Training deines Teams.",
    deliverables: [
      "KI-Potenzialanalyse & Roadmap",
      "Tool-Auswahl & Evaluierung",
      "Prompt Engineering & Fine-tuning",
      "RAG-Systeme & Knowledge Bases",
      "KI-Workflow-Automatisierung",
      "Team-Workshops & Schulungen",
    ],
    price: "ab 1.800 € / Tag",
    duration: "Flexibel",
    color: "violet",
  },
  {
    icon: TrendingUp,
    title: "Online Transformation",
    slug: "online-transformation",
    tagline: "Dein Unternehmen, digital neu gedacht.",
    description:
      "Ganzheitliche digitale Transformation — von der Prozessanalyse über die Tool-Selektion bis zur Implementierung und Begleitung der Change-Kommunikation. Ich begleite dein Unternehmen auf dem Weg in die digitale Zukunft.",
    deliverables: [
      "Digitale Reifegradanalyse",
      "Tool-Stack Konzeption & Auswahl",
      "Prozessoptimierung & Automatisierung",
      "Website-Relaunch & Repositionierung",
      "Change Management Begleitung",
      "Langfristiges Coaching & Sparring",
    ],
    price: "Individuelles Angebot",
    duration: "3–12 Monate",
    color: "cyan",
  },
];

const process = [
  { step: "01", title: "Kennenlernen", text: "Kostenloses 30-Minuten-Gespräch. Wir klären Ziele, Scope und ob wir zueinander passen." },
  { step: "02", title: "Analyse & Konzept", text: "Ich analysiere deine Situation und erstelle ein konkretes Konzept mit Zeitplan und Budget." },
  { step: "03", title: "Umsetzung", text: "Strukturierte Umsetzung mit klaren Meilensteinen, regelmäßigen Updates und engem Austausch." },
  { step: "04", title: "Launch & Begleitung", text: "Go-live mit anschließender Begleitung — ich lasse dich nicht allein stehen." },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="highlight-bar" />
            <h1 className="mb-6">Meine Leistungen</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Drei Kernleistungen, die ineinandergreifen. Ob du eine einzelne Leistung
              buchst oder ein vollständiges Paket — du bekommst immer dieselbe Qualität
              und denselben strategischen Einsatz.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-spacing">
        <div className="container-site space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.slug}
                className="card p-8 md:p-12"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center">
                        <Icon size={26} className="text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h2 className="text-2xl">{service.title}</h2>
                        <p className="text-sm text-[var(--color-accent)] font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-6 mb-8 p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                      <div>
                        <div className="text-xs text-[var(--color-text-muted)] mb-1">Investition</div>
                        <div className="font-semibold text-[var(--color-text-primary)]">{service.price}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--color-text-muted)] mb-1">Dauer</div>
                        <div className="font-semibold text-[var(--color-text-primary)]">{service.duration}</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Link href={`/services/${service.slug}`} className="btn btn-primary">
                        Details ansehen <ArrowRight size={16} />
                      </Link>
                      <Link href="/kontakt" className="btn btn-secondary">Anfragen</Link>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-5">
                      Was du bekommst
                    </h4>
                    <ul className="space-y-3.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                          <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="highlight-bar mx-auto" />
            <h2>So läuft eine Zusammenarbeit ab</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} className="card p-7">
                <div className="text-4xl font-bold text-[var(--color-border)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {step.step}
                </div>
                <h3 className="text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-site text-center">
          <h2 className="mb-5">Bereit, anzufangen?</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 mx-auto" style={{ maxWidth: "36rem" }}>
            Das Erstgespräch ist kostenlos, dauert 30 Minuten und du weißt danach,
            ob und wie wir zusammenarbeiten können.
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            Kostenloses Erstgespräch buchen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
