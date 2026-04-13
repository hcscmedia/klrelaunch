import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Video, FileText, Star, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Digitale Produkte, Templates und Ressourcen von Tobias Köllner. Next.js Boilerplates, KI-Prompts, Guides und mehr.",
};

const products = [
  {
    icon: Download,
    title: "Next.js AI Starter Kit",
    tagline: "Production-ready Boilerplate mit KI-Integration",
    description:
      "Vollständiges Next.js 14 Starter-Template mit Claude API Integration, Auth, Datenbankanbindung, Deployment-Config und einem durchdachten Design System. Sofort produktionsreif.",
    price: "149 €",
    originalPrice: "199 €",
    type: "Template",
    format: "ZIP + GitHub Repo",
    includes: [
      "Next.js 14 + TypeScript + Tailwind v4",
      "Claude API Integration (Chat, RAG)",
      "Supabase Auth & DB Setup",
      "Stripe Zahlungsintegration",
      "Vollständiges Design System",
      "Deployment-Guides (Vercel / AWS)",
      "6 Monate Updates inklusive",
    ],
    href: "/shop/nextjs-ai-starter",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 47,
  },
  {
    icon: FileText,
    title: "KI-Strategie Workbook",
    tagline: "Von der Idee zur KI-Roadmap",
    description:
      "Strukturiertes Workbook für Unternehmen und Berater: KI-Potenzialanalyse, Tool-Evaluierung, Business-Case Kalkulation und Implementierungs-Roadmap in einem Dokument.",
    price: "49 €",
    originalPrice: null,
    type: "Digital Download",
    format: "PDF + Notion Template",
    includes: [
      "120-seitiges PDF Workbook",
      "Notion-Template (kopierfertig)",
      "KI-Potenzial-Canvas",
      "ROI-Kalkulations-Sheet",
      "Tool-Vergleichs-Matrix",
      "6 Case Studies",
    ],
    href: "/shop/ki-strategie-workbook",
    badge: null,
    rating: 4.8,
    reviews: 23,
  },
  {
    icon: Video,
    title: "Prompt Engineering Masterclass",
    tagline: "Von null zu production-ready Prompts",
    description:
      "4-stündige Video-Masterclass: Prompt Engineering für Entwickler und technische Teams. Echte Projekte, echte Patterns, keine Marketing-Beispiele.",
    price: "89 €",
    originalPrice: "129 €",
    type: "Video-Kurs",
    format: "On-Demand Stream + Downloads",
    includes: [
      "4+ Stunden HD-Video",
      "25 Prompt-Templates zum Download",
      "Begleit-Workbook PDF",
      "Community Discord Zugang",
      "Lebenslanger Zugriff",
      "Updates bei neuen Modellen",
    ],
    href: "/shop/prompt-engineering-kurs",
    badge: "Neu",
    rating: 5.0,
    reviews: 12,
  },
  {
    icon: FileText,
    title: "Freelancer Pack: Verträge & Vorlagen",
    tagline: "DSGVO-konforme Dokumente für Webentwickler",
    description:
      "Alles was du als Freelancer für professionelle Projekte brauchst: Agenturvertrag, NDA, Projektbrief-Vorlage, Angebots-Template und Abnahme-Protokoll.",
    price: "39 €",
    originalPrice: null,
    type: "Dokumentenpaket",
    format: "DOCX + PDF",
    includes: [
      "Projektvertrag (anwaltlich geprüft)",
      "NDA-Template",
      "Angebots-Template",
      "Projektbrief-Vorlage",
      "Abnahme-Protokoll",
      "Nutzungslizenz für deine Projekte",
    ],
    href: "/shop/freelancer-pack",
    badge: null,
    rating: 4.7,
    reviews: 31,
  },
];

export default function ShopPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="highlight-bar" />
            <h1 className="mb-6">Digitale Produkte</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Templates, Kurse und Ressourcen aus echten Projekten. Kein
              recycelter Content — alles was ich hier verkaufe, nutze ich selbst.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.title} className="card p-8 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center">
                      <Icon size={22} className="text-[var(--color-accent)]" />
                    </div>
                    {product.badge && (
                      <span className="badge badge-blue">{product.badge}</span>
                    )}
                  </div>

                  <div className="mb-1">
                    <span className="text-xs font-mono text-[var(--color-text-muted)]">{product.type} · {product.format}</span>
                  </div>
                  <h3 className="text-xl mb-1">{product.title}</h3>
                  <p className="text-sm font-medium text-[var(--color-accent)] mb-4">{product.tagline}</p>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Includes */}
                  <div className="mb-6 space-y-2.5">
                    {product.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[var(--color-accent)] flex items-center justify-center mt-0.5 shrink-0">
                          <span className="text-white text-[8px] font-bold">✓</span>
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-[var(--color-border)]"}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">{product.rating}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">({product.reviews} Bewertungen)</span>
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-auto pt-6 border-t border-[var(--color-border)] flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-[var(--color-text-muted)] line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)]">inkl. MwSt · Sofortdownload</div>
                    </div>
                    <Link href={product.href} className="btn btn-primary shrink-0">
                      <ShoppingCart size={16} />
                      Kaufen
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-subtle)] flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🛡️</span>
            </div>
            <h2 className="mb-4">30-Tage-Zufriedenheitsgarantie</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Wenn du mit einem Produkt nicht zufrieden bist, erstatte ich dir den
              vollen Betrag — innerhalb von 30 Tagen, keine Fragen gestellt.
            </p>
            <Link href="/kontakt" className="btn btn-secondary">
              Fragen zum Shop? <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
