import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Code2,
  Brain,
  Coffee,
  Download,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Tobias Köllner — Webdeveloper und KI-Berater aus Berlin mit über 8 Jahren Erfahrung. Erfahre mehr über meinen Werdegang, meine Werte und meine Arbeitsweise.",
};

const timeline = [
  {
    year: "2024–heute",
    title: "Selbstständig · Webdev & KI-Beratung",
    company: "Tobias Köllner — koellner.life",
    description:
      "Freelance Webentwicklung und KI-Strategieberatung für Startups, Mittelstand und Agenturen. Fokus auf Next.js, KI-Integration und digitale Transformation.",
  },
  {
    year: "2021–2024",
    title: "Lead Frontend Developer",
    company: "TechAgency Berlin GmbH",
    description:
      "Leitung des Frontend-Teams (6 Personen), Architektur von React-basierten Plattformen, Einführung von Design Systems und CI/CD-Pipelines.",
  },
  {
    year: "2019–2021",
    title: "Full Stack Developer",
    company: "StartupHub Berlin",
    description:
      "Entwicklung von MVP-Produkten von Grund auf. Node.js Backend, React Frontend, erste Experimente mit ML-Modellen in der Produktempfehlung.",
  },
  {
    year: "2016–2019",
    title: "Webentwickler",
    company: "Digitalagentur Mitte",
    description:
      "Einstieg in die professionelle Webentwicklung. WordPress, PHP, jQuery — und zunehmend moderne JavaScript-Frameworks.",
  },
];

const skills = {
  "Frontend": ["Next.js 14", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  "Backend": ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "GraphQL"],
  "KI & ML": ["Claude API", "OpenAI API", "LangChain", "RAG", "Fine-tuning", "Prompt Engineering"],
  "DevOps": ["Vercel", "AWS", "Docker", "GitHub Actions", "Terraform", "Monitoring"],
};

const values = [
  {
    icon: Code2,
    title: "Handwerk über Trends",
    text: "Ich wähle Technologien nach Eignung, nicht nach Hype. Solider, lesbarer Code der auch in 3 Jahren noch wartbar ist.",
  },
  {
    icon: Brain,
    title: "Strategisch denken",
    text: "Technik ist Mittel zum Zweck. Ich denke immer aus der Perspektive des Geschäftsergebnisses, nicht des technischen Machbaren.",
  },
  {
    icon: Coffee,
    title: "Direkte Kommunikation",
    text: "Kein Agentur-Sprech, keine ausweichenden Antworten. Ich sage, was ich denke — auch wenn es unbequem ist.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="highlight-bar" />
              <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-5">
                <MapPin size={14} />
                <span>Berlin, Deutschland</span>
                <span>·</span>
                <Calendar size={14} />
                <span>Seit 2016 als Entwickler</span>
              </div>
              <h1 className="mb-6">
                Hallo, ich bin{" "}
                <span className="text-gradient">Tobias.</span>
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                Ich bin Webdeveloper und KI-Berater aus Berlin. Ich baue digitale Produkte,
                die nicht nur gut aussehen, sondern messbare Ergebnisse liefern.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-10 leading-relaxed">
                Mein Hintergrund verbindet technische Tiefe mit strategischem Denken.
                Ob Next.js-App, KI-Integration oder komplette digitale Transformation —
                ich begleite Projekte von der ersten Idee bis zum go-live.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt" className="btn btn-primary">
                  Lass uns reden <ArrowRight size={16} />
                </Link>
                <a href="/cv-tobias-koellner.pdf" className="btn btn-secondary">
                  <Download size={16} /> CV herunterladen
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-[var(--color-border)] relative shadow-xl">
                <Image
                  src="/images/tobias-koellner.jpg"
                  alt="Tobias Köllner — Webdeveloper & KI-Berater Berlin"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-background)]/60 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 card p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-primary)]">Open for work</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Berlin & Remote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="highlight-bar mx-auto" />
            <h2>Meine Werte</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card p-8">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg mb-3">{v.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <span className="highlight-bar" />
            <h2 className="mb-12">Werdegang</h2>
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex gap-8 pb-10">
                  {/* Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[var(--color-border)]" />
                  )}
                  {/* Dot */}
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent-subtle)] border-2 border-[var(--color-accent)] flex items-center justify-center mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--color-text-muted)] mb-1">{item.year}</div>
                    <h3 className="text-lg mb-0.5">{item.title}</h3>
                    <div className="text-sm text-[var(--color-accent)] mb-3">{item.company}</div>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-spacing">
        <div className="container-site">
          <span className="highlight-bar" />
          <h2 className="mb-12">Tech Stack &amp; Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-5">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-[var(--color-accent)] shrink-0" />
                      <span className="text-sm text-[var(--color-text-secondary)]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site text-center">
          <h2 className="mb-5">Lass uns zusammenarbeiten</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 mx-auto" style={{ maxWidth: "36rem" }}>
            Du hast ein Projekt im Kopf? Ich freue mich auf das Gespräch.
            Das Erstgespräch ist kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn btn-primary">
              Kontakt aufnehmen <ArrowRight size={16} />
            </Link>
            <Link href="/projekte" className="btn btn-secondary">
              <ExternalLink size={16} /> Projekte ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
