import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung nach § 5 TMG für koellner.life",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <h1 className="mb-10">Impressum</h1>

          <div className="space-y-8 text-[var(--color-text-secondary)]">
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">Angaben gemäß § 5 TMG</h2>
              <p>Tobias Köllner<br />
                Musterstraße 1<br />
                10115 Berlin<br />
                Deutschland</p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:hallo@koellner.life" className="text-[var(--color-accent)]">hallo@koellner.life</a><br />
                Website: <a href="https://koellner.life" className="text-[var(--color-accent)]">koellner.life</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE [Nummer eintragen]
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Webentwickler / IT-Berater (freiberuflich)<br />
                Verliehen in: Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
                Meine E-Mail-Adresse finden Sie oben im Impressum. Ich bin nicht bereit oder verpflichtet,
                an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">Haftung für Inhalte</h2>
              <p className="text-sm leading-relaxed">
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
                den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
