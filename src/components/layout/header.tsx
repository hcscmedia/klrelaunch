"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Monitor, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/services", label: "Services" },
  { href: "/projekte", label: "Projekte" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/kontakt", label: "Kontakt" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const themes = [
    { value: "light", icon: Sun, label: "Hell" },
    { value: "dark", icon: Moon, label: "Dunkel" },
    { value: "system", icon: Monitor, label: "System" },
  ] as const;

  const current = themes.find((t) => t.value === theme) ?? themes[2];
  const Icon = current.icon;
  const next = themes[(themes.findIndex((t) => t.value === theme) + 1) % themes.length];

  return (
    <button
      onClick={() => setTheme(next.value)}
      className="btn btn-ghost !p-2 rounded-lg"
      aria-label={`Theme wechseln: aktuell ${current.label}`}
      title={`Theme: ${current.label} → ${next.label}`}
    >
      <Icon size={18} />
    </button>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-background)]/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Christopher Köllner — Startseite"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center shadow-sm group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-shadow">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-[var(--color-text-primary)]">
              Köllner<span className="text-[var(--color-accent)]">.life</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                    isActive
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-subtle)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/kontakt"
              className="hidden md:inline-flex btn btn-primary !py-2 !px-4 !text-sm"
            >
              Projekt starten
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden btn btn-ghost !p-2"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-[var(--color-background)]/98 backdrop-blur-xl" />
        <nav className="relative container-site pt-6 pb-8 flex flex-col gap-1" aria-label="Mobile Navigation">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${i * 60}ms` }}
                className={cn(
                  "px-4 py-3.5 rounded-xl text-base font-medium transition-all",
                  "animate-fade-in-up opacity-0",
                  isOpen && "opacity-100",
                  isActive
                    ? "text-[var(--color-accent)] bg-[var(--color-accent-subtle)]"
                    : "text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
            <Link href="/kontakt" className="btn btn-primary w-full justify-center">
              Projekt starten
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
