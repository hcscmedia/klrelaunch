import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung für koellner.life gemäß DSGVO.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <h1 className="mb-4">Datenschutzerklärung</h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-10">Stand: April 2025</p>

          <div className="space-y-8 text-[var(--color-text-secondary)] text-sm leading-relaxed">
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">1. Datenschutz auf einen Blick</h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
                mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">2. Verantwortlicher</h2>
              <p>
                Tobias Köllner<br />
                Musterstraße 1, 10115 Berlin<br />
                E-Mail: hallo@koellner.life
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">3. Datenerfassung auf dieser Website</h2>
              <h3 className="font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (Name,
                E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
              </p>
              <h3 className="font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Server-Log-Dateien</h3>
              <p>
                Der Hosting-Anbieter erhebt automatisch Informationen in Server-Log-Dateien,
                die Ihr Browser übermittelt. Dies sind: Browsertyp, Betriebssystem, Referrer-URL,
                IP-Adresse (anonymisiert) und Uhrzeit der Anfrage.
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">4. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
                und Datenübertragbarkeit. Richten Sie entsprechende Anfragen an hallo@koellner.life.
                Außerdem haben Sie das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren.
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">5. Hosting</h2>
              <p>
                Diese Website wird bei Vercel Inc. gehostet. Vercel stellt Infrastruktur bereit,
                die dem Schutz personenbezogener Daten gemäß DSGVO entspricht. Weitere Informationen
                finden Sie in der Datenschutzerklärung von Vercel.
              </p>
            </div>

            <p className="text-xs text-[var(--color-text-muted)] pt-4 border-t border-[var(--color-border)]">
              Diese Datenschutzerklärung wurde zuletzt im April 2025 aktualisiert.
              Sie erhebt keinen Anspruch auf Vollständigkeit und ersetzt keine anwaltliche Beratung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
