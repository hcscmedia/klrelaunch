import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel über Webentwicklung, KI-Integration, digitale Transformation und Best Practices von Christopher Köllner aus Berlin.",
};

const featuredPost = {
  title: "Warum jedes Unternehmen 2025 eine KI-Strategie braucht",
  excerpt:
    "KI ist kein Hype mehr — es ist Infrastruktur. Wer jetzt nicht strategisch handelt, wird in zwei Jahren schwer aufzuholen haben. Hier ist, wie du eine realistische KI-Roadmap entwickelst.",
  category: "KI-Strategie",
  readTime: "8 min",
  date: "12. April 2025",
  href: "/blog/ki-strategie-2025",
  tags: ["KI", "Strategie", "Transformation"],
};

const posts = [
  {
    title: "Next.js App Router: Das solltest du über Server Components wissen",
    excerpt: "Server Components verändern, wie wir über React-Architektur denken. Hier sind die wichtigsten Patterns und Anti-Patterns aus echten Projekten.",
    category: "Webentwicklung",
    readTime: "6 min",
    date: "8. April 2025",
    href: "/blog/nextjs-server-components",
    tags: ["Next.js", "React", "Performance"],
  },
  {
    title: "RAG vs. Fine-tuning: Wann welche KI-Strategie sinnvoll ist",
    excerpt: "Retrieval-Augmented Generation oder Fine-tuning? Eine ehrliche Entscheidungshilfe für Entwickler und Entscheider.",
    category: "KI",
    readTime: "7 min",
    date: "3. April 2025",
    href: "/blog/rag-vs-finetuning",
    tags: ["KI", "RAG", "LLM"],
  },
  {
    title: "Das beste Headless CMS 2025 für dein Next.js Projekt",
    excerpt: "Sanity, Payload, Storyblok, Contentful — ich habe alle evaluiert. Hier ist mein ehrlicher Vergleich nach echten Projekterfahrungen.",
    category: "CMS",
    readTime: "10 min",
    date: "28. März 2025",
    href: "/blog/headless-cms-vergleich-2025",
    tags: ["CMS", "Next.js", "Headless"],
  },
  {
    title: "Prompt Engineering: Von Basics zu Production-ready Prompts",
    excerpt: "Die meisten Prompt-Guides zeigen Spielzeug-Beispiele. Hier zeige ich, wie echte Production-Prompts für KI-Anwendungen aussehen.",
    category: "KI",
    readTime: "9 min",
    date: "20. März 2025",
    href: "/blog/prompt-engineering-production",
    tags: ["Prompt Engineering", "KI", "Claude"],
  },
  {
    title: "TypeScript Utility Types, die du täglich brauchst",
    excerpt: "Partial, Pick, Omit, Record — du kennst sie. Aber kennst du auch Awaited, Infer und Template Literal Types? Praxis-Beispiele aus dem Projektalltag.",
    category: "TypeScript",
    readTime: "5 min",
    date: "15. März 2025",
    href: "/blog/typescript-utility-types",
    tags: ["TypeScript", "JavaScript"],
  },
  {
    title: "DSGVO-konformes Analytics 2025: Meine Setup-Empfehlungen",
    excerpt: "Google Analytics 4 ist für viele Unternehmen in Deutschland rechtlich riskant. Hier sind meine Empfehlungen für DSGVO-konforme Alternativen.",
    category: "Recht & Tools",
    readTime: "6 min",
    date: "10. März 2025",
    href: "/blog/dsgvo-analytics-2025",
    tags: ["DSGVO", "Analytics", "Recht"],
  },
];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-20 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="highlight-bar" />
            <h1 className="mb-6">Blog</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Artikel über Webentwicklung, KI und digitale Transformation.
              Kein Content-Marketing — konkrete Einblicke aus echten Projekten.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section-spacing border-b border-[var(--color-border)]">
        <div className="container-site">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
            Empfohlener Artikel
          </p>
          <Link href={featuredPost.href} className="card p-10 md:p-14 block group">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge badge-blue">{featuredPost.category}</span>
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Clock size={12} /> {featuredPost.readTime}
              </div>
              <span className="text-xs text-[var(--color-text-muted)]">{featuredPost.date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-5 group-hover:text-[var(--color-accent)] transition-colors leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8" style={{ maxWidth: "56rem" }}>
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] group-hover:gap-4 transition-all">
              Artikel lesen <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* ALL POSTS */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.title} href={post.href} className="card p-7 group block">
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge badge-blue" style={{ fontSize: "0.65rem" }}>{post.category}</span>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                    <Clock size={11} /> {post.readTime}
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 tag">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-[var(--color-text-muted)]">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load more placeholder */}
          <div className="mt-12 text-center">
            <button className="btn btn-secondary">Weitere Artikel laden</button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section-spacing bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Neue Artikel direkt ins Postfach</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Kein Spam. Nur neue Artikel wenn sie fertig sind — 1–2 pro Monat.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="deine@email.de"
                className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              />
              <button type="submit" className="btn btn-primary shrink-0">
                Abonnieren
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
