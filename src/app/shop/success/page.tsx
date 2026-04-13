import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kauf erfolgreich — koellner.life",
  description: "Vielen Dank für deinen Kauf!",
  robots: { index: false },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; product?: string }>;
}) {
  const { product } = await searchParams;

  const productNames: Record<string, string> = {
    "nextjs-ai-starter": "Next.js AI Starter Kit",
    "ki-strategie-workbook": "KI-Strategie Workbook",
    "prompt-engineering-kurs": "Prompt Engineering Masterclass",
    "freelancer-pack": "Freelancer Pack: Verträge & Vorlagen",
  };

  const productName = product ? (productNames[product] ?? "dein Produkt") : "dein Produkt";

  return (
    <>
      <section className="hero-gradient min-h-[80vh] flex items-center">
        <div className="container-site py-24">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} className="text-green-500" />
            </div>

            <h1 className="mb-4 text-3xl md:text-4xl">
              Vielen Dank für deinen Kauf!
            </h1>

            <p className="text-xl text-[var(--color-text-secondary)] mb-3">
              Du hast <span className="text-[var(--color-text-primary)] font-semibold">{productName}</span> erfolgreich gekauft.
            </p>

            <p className="text-[var(--color-text-muted)] mb-12">
              Du erhältst in wenigen Minuten eine E-Mail mit dem Download-Link und der Rechnung.
              Schau auch in deinen Spam-Ordner, falls du nichts siehst.
            </p>

            {/* Next steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
              <div className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center mb-4">
                  <Mail size={18} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="font-semibold mb-2">E-Mail checken</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Du bekommst eine Bestätigungsmail mit Download-Link und Rechnung.
                </p>
              </div>
              <div className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center mb-4">
                  <Download size={18} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="font-semibold mb-2">Download starten</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Der Download-Link in der E-Mail ist 7 Tage gültig und unbegrenzt nutzbar.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" className="btn btn-secondary">
                Zurück zum Shop
              </Link>
              <Link href="/kontakt" className="btn btn-primary">
                Fragen? Schreib mir <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
