import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, Star, Shield } from "lucide-react";

type Product = {
  title: string;
  tagline: string;
  description: string;
  type: string;
  format: string;
  price: string;
  originalPrice: string | null;
  includes: string[];
  rating: number;
  reviews: number;
  badge: string | null;
  longDescription: string;
  forWhom: string[];
};

const products: Record<string, Product> = {
  "nextjs-ai-starter": {
    title: "Next.js AI Starter Kit",
    tagline: "Production-ready Boilerplate mit KI-Integration",
    description: "Vollständiges Next.js 14 Starter-Template mit Claude API Integration, Auth, Datenbankanbindung und Deployment-Config.",
    type: "Template",
    format: "ZIP + GitHub Repo",
    price: "149 €",
    originalPrice: "199 €",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 47,
    longDescription: "Das Next.js AI Starter Kit ist das Template, das ich selbst für KI-Projekte nutze. Keine Basteleien, kein Boilerplate-Hell — einfach klonen, Umgebungsvariablen setzen und loslegen. Inklusive vollständiger Dokumentation und 6 Monate Updates.",
    includes: [
      "Next.js 14 + TypeScript + Tailwind CSS v4",
      "Claude API Integration (Chat, RAG, Streaming)",
      "Supabase Auth & Datenbank Setup",
      "Stripe Zahlungsintegration",
      "Vollständiges Design System",
      "Dark/Light Mode",
      "SEO-Komponenten",
      "Deployment-Guides (Vercel / AWS)",
      "6 Monate Updates inklusive",
      "Discord Community Zugang",
    ],
    forWhom: [
      "Entwickler, die schnell KI-Projekte starten wollen",
      "Startups, die kein Zeit für Boilerplate haben",
      "Agenturen, die Next.js-Projekte systematisch aufsetzen",
      "Freelancer, die professionelle Projekte schneller liefern wollen",
    ],
  },
  "ki-strategie-workbook": {
    title: "KI-Strategie Workbook",
    tagline: "Von der Idee zur KI-Roadmap",
    description: "Strukturiertes Workbook für Unternehmen und Berater: KI-Potenzialanalyse, Tool-Evaluierung und Roadmap.",
    type: "Digital Download",
    format: "PDF + Notion Template",
    price: "49 €",
    originalPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 23,
    longDescription: "Dieses Workbook ist das Ergebnis von über 50 KI-Beratungsprojekten. Es führt dich Schritt für Schritt durch eine vollständige KI-Potenzialanalyse — inklusive Business-Case-Kalkulation und priorisierten Umsetzungsschritten.",
    includes: [
      "120-seitiges PDF Workbook",
      "Notion-Template (kopierfertig)",
      "KI-Potenzial-Canvas",
      "ROI-Kalkulations-Sheet (Excel)",
      "Tool-Vergleichs-Matrix (40+ Tools)",
      "6 reale Case Studies",
      "Präsentations-Template für Stakeholder",
    ],
    forWhom: [
      "Geschäftsführer und Entscheider",
      "KI-Berater und Consultants",
      "IT-Leiter und CTOs",
      "Unternehmensberater mit KI-Fokus",
    ],
  },
  "prompt-engineering-kurs": {
    title: "Prompt Engineering Masterclass",
    tagline: "Von null zu production-ready Prompts",
    description: "4-stündige Video-Masterclass: Prompt Engineering für Entwickler und technische Teams.",
    type: "Video-Kurs",
    format: "On-Demand Stream + Downloads",
    price: "89 €",
    originalPrice: "129 €",
    badge: "Neu",
    rating: 5.0,
    reviews: 12,
    longDescription: "Keine Marketing-Beispiele, keine Spielzeug-Prompts. Diese Masterclass zeigt, wie Production-ready Prompts für echte Anwendungen aussehen — mit Evaluation, Versionierung und Best Practices aus realen Projekten.",
    includes: [
      "4+ Stunden HD-Video (On-Demand)",
      "25 Prompt-Templates zum Download",
      "Begleit-Workbook PDF",
      "Evaluierungs-Framework",
      "Lebenslanger Zugriff",
      "Discord Community Zugang",
      "Updates bei neuen Modellen",
    ],
    forWhom: [
      "Entwickler, die KI in Produkte integrieren",
      "Product Manager mit KI-Fokus",
      "Technische Teams, die Prompts systematisieren wollen",
      "Freelancer, die KI-Services anbieten",
    ],
  },
  "freelancer-pack": {
    title: "Freelancer Pack: Verträge & Vorlagen",
    tagline: "DSGVO-konforme Dokumente für Webentwickler",
    description: "Alles was du als Freelancer für professionelle Projekte brauchst: Vertrag, NDA, Angebot und mehr.",
    type: "Dokumentenpaket",
    format: "DOCX + PDF",
    price: "39 €",
    originalPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 31,
    longDescription: "Diese Vorlagen nutze ich selbst für meine Freelance-Projekte. Alle Dokumente sind anwaltlich geprüft, DSGVO-konform und direkt einsetzbar. Einfach ausfüllen, fertig.",
    includes: [
      "Projektvertrag (anwaltlich geprüft)",
      "NDA-Template (bilateral)",
      "Angebots-Template mit Kalkulations-Sheet",
      "Projektbrief-Vorlage",
      "Abnahme-Protokoll",
      "Rechnungs-Template",
      "Nutzungslizenz für unbegrenzte Projekte",
    ],
    forWhom: [
      "Webentwickler und Designer",
      "Freelancer im IT-Bereich",
      "Selbstständige Berater",
      "Agenturen, die Vorlagen für Freelancer suchen",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return { title: "Produkt nicht gefunden" };
  return { title: product.title, description: product.tagline };
}

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export default async function ShopProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug] ?? products["nextjs-ai-starter"];

  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-16 border-b border-[var(--color-border)]">
        <div className="container-site">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Zurück zum Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="badge badge-blue">{product.type}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{product.format}</span>
                {product.badge && <span className="badge badge-blue">{product.badge}</span>}
              </div>
              <h1 className="mb-3 text-3xl md:text-4xl">{product.title}</h1>
              <p className="text-xl text-[var(--color-accent)] font-medium mb-6">{product.tagline}</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">{product.longDescription}</p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-[var(--color-border)]"} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">{product.rating}</span>
                <span className="text-xs text-[var(--color-text-muted)]">({product.reviews} Bewertungen)</span>
              </div>
            </div>

            {/* Purchase card */}
            <div className="card p-7 h-fit space-y-5 border-[var(--color-accent)]">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[var(--color-text-muted)] line-through">{product.originalPrice}</span>
                  )}
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">inkl. MwSt · Sofortdownload</p>
              </div>

              <button className="btn btn-primary w-full justify-center">
                <Download size={16} /> Jetzt kaufen
              </button>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Shield size={14} className="text-green-500 mt-0.5 shrink-0" />
                <p className="text-xs text-green-600 dark:text-green-400 leading-relaxed">
                  30-Tage-Zufriedenheitsgarantie — volle Rückerstattung, keine Fragen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <section className="py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl mb-8">Was du bekommst</h2>
              <ul className="space-y-3.5">
                {product.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-8">Für wen ist das?</h2>
              <ul className="space-y-3.5">
                {product.forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent)] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] font-bold text-[var(--color-accent)]">✓</span>
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site text-center">
          <h2 className="mb-5">Fragen zum Produkt?</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 mx-auto" style={{ maxWidth: "36rem" }}>
            Schreib mir direkt — ich antworte innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">
              <Download size={16} /> {product.price} — Jetzt kaufen
            </button>
            <Link href="/kontakt" className="btn btn-secondary">
              Frage stellen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
