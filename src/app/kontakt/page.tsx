import type { Metadata } from "next";
import { Mail, MapPin, Clock, ExternalLink, GitBranch, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nimm Kontakt mit Christopher Köllner auf. Kostenloses Erstgespräch für neue Projekte — Webentwicklung, KI-Beratung und digitale Transformation.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "hallo@koellner.life",
    href: "mailto:hallo@koellner.life",
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "Berlin, Deutschland · Remote weltweit",
    href: null,
  },
  {
    icon: Clock,
    label: "Reaktionszeit",
    value: "Innerhalb von 24 Stunden",
    href: null,
  },
];

const faqs = [
  {
    q: "Wie läuft das Erstgespräch ab?",
    a: "Das Erstgespräch dauert 30 Minuten und findet per Videocall statt. Wir besprechen dein Projekt, deine Ziele und ob ich der richtige Partner bin. Danach bekommst du ein konkretes Angebot.",
  },
  {
    q: "Wie schnell kannst du mit einem Projekt starten?",
    a: "Je nach aktueller Auslastung starte ich neue Projekte in 2–4 Wochen. Bei dringenden Projekten sprechen wir gerne über Möglichkeiten.",
  },
  {
    q: "Arbeitest du auch remote oder nur in Berlin?",
    a: "Ich arbeite vollständig remote und mit Kunden weltweit. Ein Berliner Büro ist kein Kriterium — wir arbeiten asynchron und mit strukturierten Videocalls.",
  },
  {
    q: "Was kostet ein Projekt ungefähr?",
    a: "Webprojekte starten ab 3.500 € für kleinere Umsetzungen. KI-Beratung wird tageweise abgerechnet (ab 1.800 € / Tag). Komplexere Projekte werden individuell angeboten.",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="highlight-bar" />
            <h1 className="mb-6">Lass uns reden.</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Du hast ein Projekt? Eine Idee? Eine Frage? Schreib mir — ich antworte
              innerhalb von 24 Stunden. Das Erstgespräch ist immer kostenlos.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* CONTACT FORM */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl mb-8">Schreib mir</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Max"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mustermann"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="max@unternehmen.de"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    placeholder="Muster GmbH (optional)"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Worum geht es?
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all appearance-none cursor-pointer">
                    <option value="">Bitte auswählen</option>
                    <option value="webdev">Webentwicklung / Projekt</option>
                    <option value="ki">KI-Beratung</option>
                    <option value="transformation">Online Transformation</option>
                    <option value="shop">Shop / Digitale Produkte</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Deine Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Beschreibe kurz dein Projekt oder deine Frage..."
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 accent-[var(--color-accent)]" />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      Ich habe die{" "}
                      <a href="/datenschutz" className="text-[var(--color-accent)] underline">Datenschutzerklärung</a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-full justify-center">
                  <MessageSquare size={18} />
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-5">Kontaktdaten</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-[var(--color-accent)]" />
                        </div>
                        <div>
                          <div className="text-xs text-[var(--color-text-muted)] mb-0.5">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-sm font-medium text-[var(--color-text-primary)]">{item.value}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-lg font-semibold mb-5">Social</h3>
                <div className="flex gap-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                    <ExternalLink size={16} /> LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                    <GitBranch size={16} /> GitHub
                  </a>
                </div>
              </div>

              {/* Availability card */}
              <div className="card p-6 bg-[var(--color-accent-subtle)] border-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-slow" />
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">Verfügbar</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Ich nehme neue Projekte für Mai 2025 an. Sicher dir jetzt einen Platz
                  mit einer kurzen Anfrage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10">Häufige Fragen</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="card p-7">
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-3">{faq.q}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
