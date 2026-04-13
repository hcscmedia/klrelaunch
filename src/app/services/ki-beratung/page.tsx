import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Beratung Berlin",
  description:
    "Strategische KI-Beratung für Unternehmen. Von der Potenzialanalyse bis zur vollständigen KI-Integration. Christopher Köllner, Berlin.",
};

const offerings = [
  { title: "KI-Potenzialanalyse", desc: "Strukturierte Analyse deiner Prozesse auf KI-Potenziale. Priorisierte Roadmap mit Business-Case-Kalkulation.", duration: "1–2 Tage", price: "ab 3.600 €" },
  { title: "KI-Strategie Workshop", desc: "Intensiv-Workshop mit deinem Team. Vom KI-Grundverständnis zur konkreten Implementierungs-Roadmap.", duration: "1 Tag (6–8h)", price: "ab 2.400 €" },
  { title: "Technische KI-Integration", desc: "Umsetzung konkreter KI-Features in dein Produkt oder deine Infrastruktur. RAG, Chatbots, Automatisierung.", duration: "Individuell", price: "ab 1.800 € / Tag" },
  { title: "Prompt Engineering Training", desc: "Hands-on Training für dein Team. Production-ready Prompts, Evaluation, Best Practices.", duration: "Halbtag / Ganztag", price: "ab 1.200 €" },
];

export default function KIBeratungPage() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-5">
            <Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link>
            <span>/</span><span>KI-Beratung</span>
          </div>
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center mb-6">
              <Brain size={26} className="text-[var(--color-accent)]" />
            </div>
            <h1 className="mb-6">KI-Beratung</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              KI strategisch denken. Nicht Tools sammeln, sondern echten Geschäftswert
              schaffen. Ich begleite dich von der ersten Frage bis zur produktiven Implementierung.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="card p-8">
                <h3 className="text-xl mb-2">{o.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">{o.desc}</p>
                <div className="flex gap-6 mb-6 pt-4 border-t border-[var(--color-border)]">
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] mb-0.5">Dauer</div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">{o.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] mb-0.5">Investition</div>
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">{o.price}</div>
                  </div>
                </div>
                <Link href="/kontakt" className="btn btn-secondary w-full justify-center">Anfragen</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site text-center">
          <h2 className="mb-5">KI ist kein Selbstzweck.</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 mx-auto" style={{ maxWidth: "40rem" }}>
            Ich helfe dir, KI dort einzusetzen, wo sie wirklich hilft — und dir zu sagen,
            wo du dein Geld besser anders investierst. Ehrlichkeit vor dem nächsten Hype.
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            Kostenloses Erstgespräch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
