import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Share2 } from "lucide-react";

// ── Static demo data (will be replaced by Payload CMS in Phase 2) ──

type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  content: { type: "h2" | "h3" | "p" | "ul" | "code-block"; text?: string; items?: string[]; lang?: string }[];
};

const posts: Record<string, BlogPost> = {
  "ki-strategie-2025": {
    title: "Warum jedes Unternehmen 2025 eine KI-Strategie braucht",
    excerpt:
      "KI ist kein Hype mehr — es ist Infrastruktur. Wer jetzt nicht strategisch handelt, wird in zwei Jahren schwer aufzuholen haben.",
    category: "KI-Strategie",
    readTime: "8 min",
    date: "12. April 2025",
    author: "Christopher Köllner",
    tags: ["KI", "Strategie", "Transformation"],
    content: [
      {
        type: "p",
        text: "Ende 2022 war KI ein Experiment für Tech-Enthusiasten. Anfang 2025 ist sie operative Realität in jedem wettbewerbsfähigen Unternehmen. Der Unterschied zwischen Unternehmen, die jetzt handeln, und denen, die es nicht tun, wird in den nächsten 24 Monaten sichtbar werden — und er wird erheblich sein.",
      },
      {
        type: "h2",
        text: "Warum jetzt? Das Fenster schließt sich.",
      },
      {
        type: "p",
        text: "Technologische Vorsprünge gibt es selten. Die meisten Technologien etablieren sich graduell, und der Einstieg ist fast immer noch möglich, wenn auch teurer. KI ist anders: Die Unternehmen, die heute KI-Kompetenz aufbauen — intern, kulturell, technisch — sitzen 2027 auf einem strukturellen Vorteil, der schwer einzuholen ist.",
      },
      {
        type: "p",
        text: "Das liegt nicht daran, dass KI-Tools exklusiv werden. Im Gegenteil: Sie werden commoditisiert. Der Unterschied liegt in der institutionellen Fähigkeit, KI effektiv einzusetzen — in den Prozessen, im Wissen, im Vertrauen der Mitarbeiter. Das baut sich nicht in drei Monaten auf.",
      },
      {
        type: "h2",
        text: "Was eine KI-Strategie NICHT ist",
      },
      {
        type: "ul",
        items: [
          "Ein ChatGPT-Abonnement für alle Mitarbeiter",
          "Ein Pilotprojekt, das nach sechs Monaten in der Schublade landet",
          "Eine Präsentation des IT-Leiters über \"KI-Potenziale\"",
          "Das Kopieren der Konkurrenz ohne eigenen Use-Case",
        ],
      },
      {
        type: "h2",
        text: "Drei Fragen, die jede KI-Strategie beantworten muss",
      },
      {
        type: "h3",
        text: "1. Wo verlieren wir heute Zeit durch Informationsarbeit?",
      },
      {
        type: "p",
        text: "Der größte Quick-Win von KI liegt in der Beschleunigung von Informationsarbeit: Texte zusammenfassen, E-Mails schreiben, Recherche beschleunigen, Berichte generieren. Eine ehrliche Bestandsaufnahme zeigt fast immer drei bis fünf Prozesse, die sofort automatisierbar wären.",
      },
      {
        type: "h3",
        text: "2. Welche Entscheidungen treffen wir heute mit unvollständiger Information?",
      },
      {
        type: "p",
        text: "KI kann Entscheidungsgrundlagen verbessern: durch schnellere Analyse, Mustererkennung in Daten, Simulation von Szenarien. Welche Entscheidungen in deinem Unternehmen würden besser ausfallen, wenn du mehr und bessere Information hättest?",
      },
      {
        type: "h3",
        text: "3. Wo ist unser Kundenerlebnis noch nicht personalisiert?",
      },
      {
        type: "p",
        text: "Personalisierung war früher teuer. Mit KI ist sie erschwinglich — in der Kommunikation, im Produkt, im Support. Unternehmen, die heute echte Personalisierung liefern, werden höhere Loyalität ernten.",
      },
      {
        type: "h2",
        text: "Der erste konkrete Schritt",
      },
      {
        type: "p",
        text: "Mein Rat: Starte mit einer zweistündigen Potenzialanalyse in deinem Team. Nicht mit Beratern, nicht mit Consultants — mit deinen eigenen Leuten. Die Frage ist simpel: Welche unserer Alltagsaufgaben könnten in 10 Minuten erledigt werden, wenn KI uns dabei hilft? Die Antworten werden überraschen.",
      },
      {
        type: "p",
        text: "Wenn du bei dieser Analyse Unterstützung möchtest — ob strukturiert oder als informelles Gespräch — melde dich gerne. Das ist genau die Arbeit, die ich mit Unternehmen mache.",
      },
    ],
  },
  "nextjs-server-components": {
    title: "Next.js App Router: Das solltest du über Server Components wissen",
    excerpt:
      "Server Components verändern, wie wir über React-Architektur denken. Hier sind die wichtigsten Patterns aus echten Projekten.",
    category: "Webentwicklung",
    readTime: "6 min",
    date: "8. April 2025",
    author: "Christopher Köllner",
    tags: ["Next.js", "React", "Performance"],
    content: [
      {
        type: "p",
        text: "Mit dem App Router hat Next.js React Server Components (RSC) als Standard eingeführt. Nach einem Jahr Produktionserfahrung mit dem neuen Paradigma hier meine ehrliche Einschätzung: Es ist ein Paradigmenwechsel — und er ist gut.",
      },
      {
        type: "h2",
        text: "Was Server Components wirklich bedeuten",
      },
      {
        type: "p",
        text: "Der entscheidende Punkt: Server Components rendern auf dem Server und senden nur HTML an den Client. Kein JavaScript für die Komponente selbst, kein Client-State. Das reduziert Bundle-Größen dramatisch und macht Datenbankzugriff direkt in Komponenten möglich.",
      },
      {
        type: "code-block",
        lang: "tsx",
        text: `// Server Component — kein "use client" nötig
// Direkter DB-Zugriff, kein API-Roundtrip
async function BlogList() {
  const posts = await db.posts.findMany({
    orderBy: { publishedAt: 'desc' },
    take: 10,
  });

  return (
    <ul>
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </ul>
  );
}`,
      },
      {
        type: "h2",
        text: "Die wichtigste Regel: Client-Boundary so spät wie möglich",
      },
      {
        type: "p",
        text: "Der häufigste Fehler: \"use client\" zu früh in den Komponentenbaum zu ziehen und damit ganze Teilbäume zu Client-Komponenten zu machen. Die Faustregel: Client-Komponenten so weit unten wie möglich halten, nur dort wo Interaktivität wirklich nötig ist.",
      },
      {
        type: "h2",
        text: "Anti-Pattern: \"use client\" auf Page-Level",
      },
      {
        type: "p",
        text: "Wer eine ganze Page-Komponente mit \"use client\" markiert, verliert alle Vorteile des App Routers. Stattdessen: Die Page bleibt Server Component, und nur die interaktiven Teile (Formulare, Buttons, Animationen) werden in separate Client-Komponenten ausgelagert.",
      },
    ],
  },
};

const relatedPosts = [
  { title: "RAG vs. Fine-tuning: Wann welche KI-Strategie sinnvoll ist", href: "/blog/rag-vs-finetuning", readTime: "7 min" },
  { title: "Next.js App Router: Das solltest du über Server Components wissen", href: "/blog/nextjs-server-components", readTime: "6 min" },
  { title: "Das beste Headless CMS 2025 für dein Next.js Projekt", href: "/blog/headless-cms-vergleich-2025", readTime: "10 min" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Artikel nicht gefunden" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug] ?? posts["ki-strategie-2025"];

  return (
    <>
      {/* HERO */}
      <section className="hero-gradient pt-32 pb-16 border-b border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Zurück zum Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge badge-blue">{post.category}</span>
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Clock size={12} /> {post.readTime}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Calendar size={12} /> {post.date}
              </div>
            </div>

            <h1 className="mb-6 text-3xl md:text-5xl leading-tight">{post.title}</h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author row */}
            <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-[var(--color-accent)]">CK</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--color-text-primary)]">{post.author}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Webdev & KI-Berater · Berlin</div>
                </div>
              </div>
              <button className="btn btn-ghost !py-1.5 !px-3 text-xs flex items-center gap-1.5">
                <Share2 size={13} /> Teilen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <article className="prose-custom space-y-6">
              {post.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="text-2xl md:text-3xl mt-12 mb-4 first:mt-0">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3 key={i} className="text-xl mt-8 mb-3">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "p") {
                  return (
                    <p key={i} className="text-base text-[var(--color-text-secondary)] leading-[1.85] max-w-none">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "ul" && block.items) {
                  return (
                    <ul key={i} className="space-y-2.5 pl-0">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2.5 shrink-0" />
                          <span className="text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "code-block") {
                  return (
                    <div key={i} className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
                        <span className="text-xs font-mono text-[var(--color-text-muted)]">{block.lang}</span>
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                          <div className="w-3 h-3 rounded-full bg-green-400/60" />
                        </div>
                      </div>
                      <pre className="p-5 bg-[var(--color-neutral-950)] overflow-x-auto text-sm leading-relaxed">
                        <code className="text-[var(--color-neutral-200)]">{block.text}</code>
                      </pre>
                    </div>
                  );
                }
                return null;
              })}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 tag">
                  <Tag size={11} /> {tag}
                </span>
              ))}
            </div>

            {/* Author CTA */}
            <div className="mt-10 card p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent-subtle)] border-2 border-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-[var(--color-accent)]">CK</span>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text-primary)] mb-1">Christopher Köllner</div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Webdeveloper und KI-Berater aus Berlin. Wenn du Fragen zu diesem Artikel hast
                  oder KI-Unterstützung für dein Unternehmen suchst — ich freue mich auf das Gespräch.
                </p>
                <Link href="/kontakt" className="btn btn-primary !py-2 !px-4 !text-sm">
                  Gespräch anfragen <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="py-16 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl mb-8">Weitere Artikel</h3>
            <div className="space-y-4">
              {relatedPosts
                .filter((p) => !p.href.includes(slug))
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.href}
                    href={related.href}
                    className="card p-5 flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                        {related.title}
                      </p>
                      <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 mt-1">
                        <Clock size={11} /> {related.readTime}
                      </span>
                    </div>
                    <ArrowRight size={16} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] shrink-0 transition-colors" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
