import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen für den Shop auf koellner.life",
  robots: { index: false, follow: false },
};

export default function AGBPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <h1 className="mb-4">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-10">Stand: April 2025</p>

          <div className="space-y-8 text-[var(--color-text-secondary)] text-sm leading-relaxed">
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">§ 1 Geltungsbereich</h2>
              <p>Diese AGB gelten für alle Käufe digitaler Produkte im Shop von Christopher Köllner (koellner.life). Mit dem Kauf akzeptierst du diese Bedingungen.</p>
            </div>
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">§ 2 Vertragspartner</h2>
              <p>Christopher Köllner · Musterstraße 1 · 10115 Berlin · hallo@koellner.life</p>
            </div>
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">§ 3 Digitale Produkte</h2>
              <p>
                Digitale Produkte (Templates, PDFs, Kurse) werden nach dem Kauf sofort zum Download
                bereitgestellt. Mit dem Download beginnt das Widerrufsrecht zu erlöschen, sofern du
                ausdrücklich zugestimmt hast (§ 356 Abs. 5 BGB).
              </p>
            </div>
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">§ 4 Widerrufsrecht</h2>
              <p>
                Du hast das Recht, binnen 14 Tagen ohne Angabe von Gründen zu widerrufen.
                Bei digitalen Inhalten erlischt das Widerrufsrecht mit Beginn des Downloads
                nach ausdrücklicher Zustimmung. Ich biete zusätzlich eine freiwillige
                30-Tage-Zufriedenheitsgarantie.
              </p>
            </div>
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">§ 5 Nutzungsrecht</h2>
              <p>
                Mit dem Kauf erhältst du ein einfaches, nicht übertragbares Nutzungsrecht
                für den persönlichen und gewerblichen Gebrauch. Eine Weitergabe oder ein
                Weiterverkauf der Produkte ist nicht gestattet.
              </p>
            </div>
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">§ 6 Preise und Zahlung</h2>
              <p>Alle Preise sind Bruttopreise inkl. gesetzlicher MwSt. Zahlung erfolgt via Stripe (Kreditkarte, SEPA, PayPal).</p>
            </div>
            <div>
              <h2 className="text-lg text-[var(--color-text-primary)] mb-3">§ 7 Gewährleistung</h2>
              <p>
                Ich stelle sicher, dass alle digitalen Produkte zum Zeitpunkt des Kaufs wie
                beschrieben funktionieren. Updates für Templates werden für mindestens 6 Monate
                nach Kauf bereitgestellt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
