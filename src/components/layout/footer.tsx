import Link from "next/link";
import { Code2, Mail, GitBranch, ExternalLink, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/webentwicklung", label: "Webentwicklung" },
    { href: "/services/ki-beratung", label: "KI-Beratung" },
    { href: "/services/online-transformation", label: "Online Transformation" },
    { href: "/kontakt", label: "Projekt anfragen" },
  ],
  company: [
    { href: "/ueber-mich", label: "Über mich" },
    { href: "/projekte", label: "Projekte" },
    { href: "/blog", label: "Blog" },
    { href: "/shop", label: "Shop" },
  ],
  legal: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-[var(--color-text-primary)]">
                Köllner<span className="text-[var(--color-accent)]">.life</span>
              </span>
            </Link>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-sm">
              Webdeveloper und KI-Berater aus Berlin. Ich baue moderne digitale
              Produkte und helfe Unternehmen, das volle Potenzial von KI und
              Web-Technologien zu nutzen.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:hallo@koellner.life"
                aria-label="E-Mail"
                className="w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <GitBranch size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div>
            <div className="rounded-xl border border-[var(--color-accent)] bg-[var(--color-accent-subtle)] p-5 space-y-3">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                Projekt in der Pipeline?
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Lass uns reden. Erstgespräch kostenlos.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:gap-2.5 transition-all"
              >
                Jetzt anfragen <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Tobias Köllner · Berlin · Alle Rechte vorbehalten
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
