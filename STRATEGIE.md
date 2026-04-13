# koellner.life — Vollständige Website-Strategie & Architektur

> Premium Relaunch · Version 1.0 · April 2025
> Autor: Tobias Köllner

---

## 1. MARKENSTRATEGIE & POSITIONIERUNG

### Kernbotschaft
> "Ich baue digitale Produkte, die wirklich wirken."

### Positionierung
**Nicht**: Günstige Umsetzungsagentur, Freelancer-Marktplatz-Anbieter, generischer Webdesigner  
**Ja**: Premium Einzelperson-Experte, strategischer Partner, technisch tief + unternehmerisch denkend

### Zielgruppen
| Segment | Bedürfnis | Botschaft |
|---|---|---|
| Startups & Scale-ups | MVP / Wachstum | Schnell, sauber, skalierbar |
| KMU / Mittelstand | Modernisierung | Digitale Transformation ohne Bullshit |
| Agenturen | Subunternehmer | Verlässlicher Senior-Dev |
| Enterprise | KI-Strategie | Hands-on Expertise, kein Buzzword-Bingo |

### Unique Value Proposition
- Kombination aus technischer Tiefe (Full Stack) + strategischem KI-Wissen
- Direkter Ansprechpartner — kein Projektmanager-Sandwich
- Berliner Qualität, remote-first, internationale Projekte
- KI-Erfahrung seit Tag 1, nicht seit dem ChatGPT-Hype

### Brand Personality
Tone of Voice: **Direkt, kompetent, bodenständig** — kein Agentur-Sprech, keine Superlative.  
Visual Identity: **Editorial-Tech** — wie ein Technologie-Magazin trifft auf modernes SaaS-Design.

---

## 2. SITEMAP & URL-STRUKTUR

```
koellner.life/
├── /                         → Home
├── /ueber-mich               → Über mich / About
├── /services                 → Services Übersicht
│   ├── /services/webentwicklung
│   ├── /services/ki-beratung
│   └── /services/online-transformation
├── /projekte                 → Projekte Übersicht
│   ├── /projekte/[slug]      → Projekt Detail (Case Study)
├── /blog                     → Blog Übersicht
│   ├── /blog/[slug]          → Blog Artikel Detail
├── /shop                     → Shop Übersicht
│   ├── /shop/[slug]          → Produkt Detail
├── /kontakt                  → Kontakt & Lead-Formular
├── /impressum                → Impressum
├── /datenschutz              → Datenschutzerklärung
└── /agb                      → AGB (für Shop)
```

### Geplante Erweiterungen
- `/ressourcen` — Kostenlose Downloads, Checklisten
- `/faq` — Häufige Fragen
- `/termin` — Kalender-Integration (Cal.com / Calendly)
- `/newsletter` — Newsletter-Landing-Page

---

## 3. SEITENKONZEPT — HAUPTSEITEN

### 3.1 Home (/)
**Ziel**: Vertrauen aufbauen, zur richtigen Unterseite führen, Leads generieren

**Sektionen:**
1. **Hero** — Headline + Subheadline + 2 CTAs + Status-Badge + Statistiken
2. **Services** — 3 Karten mit Hover-Interaktion
3. **Projekte** — 3 Featured Projects
4. **Why Me** — USPs + Tech-Stack-Card
5. **Testimonials** — 3 Kundenstimmen
6. **CTA-Banner** — Conversion-Fokus

**Primary CTA**: "Projekt starten" → /kontakt  
**Secondary CTA**: "Meine Projekte" → /projekte

### 3.2 Über mich (/ueber-mich)
**Ziel**: Vertrauen, Persönlichkeit, Kompetenz zeigen

**Sektionen:**
1. Hero mit Profilfoto + Kurzbiographie
2. Werte (3 Karten)
3. Karriere-Timeline
4. Tech Stack / Skills Matrix
5. CTA zur Kontaktseite

### 3.3 Services (/services)
**Ziel**: Alle Leistungen darstellen, richtige CTA je Service

**Sektionen:**
1. Hero mit Überblick
2. Service-Deep-Dives (alternierend Links/Rechts)
3. Prozess-Ablauf (4 Schritte)
4. CTA

### 3.4 Projekte (/projekte)
**Ziel**: Kompetenz beweisen, Case Studies als Verkaufsargument

**Sektionen:**
1. Hero
2. Filterbares Projekt-Grid (Alle / Web / KI / SaaS)
3. CTA

### 3.5 Blog (/blog)
**Ziel**: SEO-Traffic, Expertise zeigen, Newsletter-Leads

**Sektionen:**
1. Hero
2. Featured Article (groß)
3. Artikel-Grid
4. Newsletter-CTA

### 3.6 Shop (/shop)
**Ziel**: Passive Einnahmen, Lead-Magnet, Expertise-Beweis

**Sektionen:**
1. Hero
2. Produkt-Grid (2 Spalten)
3. Zufriedenheitsgarantie

### 3.7 Kontakt (/kontakt)
**Ziel**: Leads erfassen, Erstgespräch buchen

**Sektionen:**
1. Hero
2. Kontaktformular (links) + Infos (rechts)
3. FAQ

---

## 4. CONTENT-MODELL / CMS-ARCHITEKTUR

### Empfehlung: Payload CMS v3

**Warum Payload CMS:**
- TypeScript-native — kein Disconnect zwischen CMS-Types und Frontend
- Self-hosted — volle Datenkontrolle (DSGVO-Vorteil)
- Kostenlos bei eigem Hosting
- Block-basierter Content-Editor
- Perfekt für Next.js App Router
- Granulare Rollen & Rechte
- Draft/Preview nativ unterstützt

### Collections (Datenmodelle)

#### Pages
```typescript
{
  title: string
  slug: string
  meta: { title, description, ogImage }
  hero: { headline, subheadline, cta }
  content: BlocksField[]  // flexible Blöcke
  status: 'draft' | 'published'
}
```

#### Projects
```typescript
{
  title: string
  slug: string
  category: string[]
  client: string (optional)
  year: number
  status: 'live' | 'intern' | 'archived'
  tagline: string
  description: RichText
  challenge: RichText
  solution: RichText
  results: { metric, value }[]
  tech: string[]
  images: Media[]
  liveUrl?: string
  caseStudy?: boolean
  featured: boolean
  meta: SEOMeta
}
```

#### BlogPosts
```typescript
{
  title: string
  slug: string
  excerpt: string
  content: RichText (Lexical)
  category: Relationship<Categories>
  tags: string[]
  readTime: number (auto-calculated)
  publishedAt: Date
  featured: boolean
  author: Relationship<Users>
  seoMeta: SEOMeta
  status: 'draft' | 'published'
}
```

#### Products (Shop)
```typescript
{
  title: string
  slug: string
  tagline: string
  description: RichText
  type: 'template' | 'course' | 'download' | 'document'
  price: number
  originalPrice?: number
  currency: 'EUR'
  includes: string[]
  downloadUrl?: string
  stripeProductId: string
  badge?: string
  featured: boolean
  status: 'active' | 'draft' | 'archived'
  meta: SEOMeta
}
```

#### Testimonials
```typescript
{
  text: string
  author: string
  role: string
  company: string
  rating: 1 | 2 | 3 | 4 | 5
  projectRef?: Relationship<Projects>
  approved: boolean
}
```

#### Settings (Global)
```typescript
{
  siteName: string
  siteDescription: string
  seo: { defaultTitle, titleSuffix, ogImage }
  navigation: NavItem[]
  footer: { columns, social, legal }
  contact: { email, phone, address, availability }
  analytics: { plausibleDomain, gtmId }
}
```

#### Leads / ContactSubmissions
```typescript
{
  name: string
  email: string
  company?: string
  subject: string
  message: string
  submittedAt: Date
  status: 'new' | 'read' | 'replied' | 'archived'
  source: string (URL)
}
```

---

## 5. ADMIN-DASHBOARD-KONZEPT

### Dashboard Bereiche
| Bereich | Beschreibung |
|---|---|
| Übersicht | Neue Leads, letzte Artikel, Quick-Actions |
| Seiten | Alle Seiten mit Status und letzter Änderung |
| Projekte | CRUD mit Case-Study-Builder |
| Blog | Artikel-Editor mit KI-Assistent |
| Shop | Produktverwaltung + Bestellübersicht |
| Medien | Bilderverwaltung mit Auto-Optimierung |
| SEO | Global SEO-Einstellungen + per-Seite |
| Navigation | Drag-and-drop Menü-Editor |
| Leads | Kontaktanfragen-Inbox |
| Einstellungen | Theme, Site-Settings, Integrationen |

### Rollen & Rechte
| Rolle | Rechte |
|---|---|
| Admin (ich) | Vollzugriff |
| Editor | Blog, Projekte bearbeiten (kein Löschen) |
| Viewer | Nur lesen (für Kunden-Preview) |

---

## 6. KI-FUNKTIONEN IM ADMIN

### Geplante KI-Features (via Claude API)

| Feature | Beschreibung | Trigger |
|---|---|---|
| **Blog-Assistent** | Outline generieren, Abschnitte ausschreiben | Button im Editor |
| **SEO-Meta-Generator** | Title + Description aus Content ableiten | Auto nach Speichern |
| **Zusammenfassung** | Projekt-Beschreibungen kürzen | Button in Projektverwaltung |
| **FAQ-Generator** | FAQ aus Service-Content ableiten | Button in Service-Editor |
| **Interne Links** | Verwandte Artikel vorschlagen | Nach Publikation |
| **Tone-Checker** | Brand Voice prüfen | Vor Publikation |
| **Alt-Text** | Auto-Alt-Texte für Bilder | Bei Medien-Upload |

---

## 7. DESIGNSYSTEM

### Farbpalette

**Light Mode:**
| Token | Wert | Verwendung |
|---|---|---|
| `--color-background` | #ffffff | Seitenhintergrund |
| `--color-surface` | #f8fafc | Abschnitte, Sidebar |
| `--color-border` | #e2e8f0 | Linien, Karten |
| `--color-text-primary` | #0f172a | Headlines, Body |
| `--color-text-secondary` | #475569 | Fließtext |
| `--color-accent` | #2563eb | CTA, Links, Hover |

**Dark Mode:**
| Token | Wert |
|---|---|
| `--color-background` | #060912 |
| `--color-surface` | #0d1117 (GitHub-Dark Style) |
| `--color-border` | #21262d |
| `--color-accent` | #3b82f6 |

### Typografie
| Element | Font | Größe | Gewicht |
|---|---|---|---|
| Headlines | Space Grotesk | clamp(2.5–5rem) | 700 |
| Body | Inter | 1rem / 1rem | 400 |
| Code | JetBrains Mono | 0.875rem | 400 |
| Labels / Badges | Inter | 0.75rem | 600 |

### Spacing-System
8px-Basis (0.5rem): 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

### Komponentenkatalog
- `btn-primary`, `btn-secondary`, `btn-ghost`
- `card` (mit hover-lift)
- `badge`, `badge-blue`
- `tag` (Monospace)
- `highlight-bar`
- `container-site`
- `section-spacing`
- `hero-gradient`
- `dot-grid`
- `text-gradient`

---

## 8. TECHNISCHE ARCHITEKTUR — EMPFEHLUNG

### Gewählter Stack

```
Frontend:  Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
CMS:       Payload CMS v3 (self-hosted)
Database:  PostgreSQL (via Neon oder Railway)
Auth:      Payload built-in Auth
Storage:   Cloudflare R2 (Medien)
Payments:  Stripe (Shop)
Email:     Resend.com
Analytics: Plausible Analytics (DSGVO-konform)
Hosting:   Vercel (Frontend) + Railway (Payload/Postgres)
Search:    Algolia oder Payload built-in Search
```

### Warum NICHT die Alternativen

| Stack | Warum nicht |
|---|---|
| WordPress | Performance-Overhead, PHP-Altlast, Theme-Hell, Security-Aufwand |
| Astro | Gut für statische Sites, aber KI-Features und Shop brauchen mehr |
| Contentful/Storyblok | SaaS-Lock-in, Kosten skalieren schlecht, weniger TypeScript-native |
| Sanity | Gut, aber Payload ist für Dev-zentrierte Projekte besser geeignet |

### Architektur-Diagram (vereinfacht)

```
User → Vercel Edge → Next.js App
                        ├── RSC: Direkt Payload-API
                        └── Client: REST/GraphQL zu Payload

Payload CMS (Railway)
    ├── Admin UI
    ├── REST & GraphQL API
    └── PostgreSQL (Neon)
        
Medien → Cloudflare R2
Payments → Stripe
Email → Resend
Analytics → Plausible
KI → Claude API (Anthropic)
```

---

## 9. SEO & AI-READINESS-KONZEPT

### SEO-Grundlagen
- [ ] `sitemap.xml` — automatisch via Next.js App Router
- [ ] `robots.txt` — optimiert
- [ ] Open Graph + Twitter Cards auf allen Seiten
- [ ] Strukturierte Daten (JSON-LD): Person, Service, BlogPosting, Product
- [ ] Canonical URLs
- [ ] Hreflang (wenn mehrsprachig)
- [ ] Breadcrumbs mit Structured Data
- [ ] Core Web Vitals: LCP < 1.5s, CLS < 0.1, FID < 100ms

### AI-Readiness (LLM Discoverability)
- Klare H1–H6-Hierarchie auf jeder Seite
- `<article>` und `<section>` semantisch korrekt
- FAQ-Schema für Kontakt-FAQ
- `llms.txt` Datei (Emerging Standard für KI-Crawler)
- Klare Autoreninfos mit `author` Markup
- Konsistente interne Verlinkung

### Content-Strategie für SEO
| Keyword-Cluster | Seite | Ziel |
|---|---|---|
| "Webentwickler Berlin" | /services/webentwicklung | Local SEO |
| "Next.js Entwickler freelance" | /ueber-mich | Zielgruppe Dev-Markt |
| "KI-Beratung Unternehmen" | /services/ki-beratung | B2B Lead |
| "Next.js Tutorial" | /blog/[...] | Organischer Traffic |
| "Headless CMS Vergleich" | /blog/[...] | Mid-Funnel |

---

## 10. UX & CONVERSION-KONZEPT

### Conversion-Pfade

**Pfad 1: Direkter Lead (hoch-intent)**
Home Hero → "Projekt starten" → Kontakt → Formular

**Pfad 2: Service-Exploration**
Home → Services → Service-Detail → "Anfragen" → Kontakt

**Pfad 3: Trust-Building via Projekte**
Home → Projekte → Case Study → CTA → Kontakt

**Pfad 4: Blog → Lead**
Google → Blog-Artikel → CTA am Artikelende → Kontakt

**Pfad 5: Shop → Trust → Projekt**
Shop-Käufer → Blog → "Projekt anfragen"

### Conversion-Elemente
- Sticky Header CTA: "Projekt starten" (immer sichtbar)
- Verfügbarkeits-Indikator (grüner Dot, "Open for work")
- Testimonials nahe Service-CTAs
- Preistransparenz (Orientierungspreise) — reduziert Hürden
- "Erstgespräch kostenlos" explizit kommuniziert
- Formular kurz halten: Name, Email, Kategorie, Nachricht = 4 Felder

### Trust-Signale
- Statistiken (150+ Projekte, 8+ Jahre)
- Named Testimonials mit Rolle und Unternehmen
- Technologie-Logos (bekannte Tools = Expertise)
- Preistransparenz
- Reaktionszeit kommunizieren (24h)
- Berliner Adresse = lokale Glaubwürdigkeit

---

## 11. UMSETZUNGS-ROADMAP

### Phase 1: MVP Launch (Woche 1–3) ✅
- [x] Next.js Projekt aufsetzen
- [x] Design System (Tokens, Farben, Typografie)
- [x] Header + Footer
- [x] Home Page
- [x] Über mich
- [x] Services (Übersicht + 3 Detail-Seiten)
- [x] Projekte
- [x] Blog (statisch)
- [x] Shop (statisch)
- [x] Kontakt
- [x] Impressum / Datenschutz

### Phase 2: CMS Integration (Woche 4–6)
- [ ] Payload CMS v3 aufsetzen
- [ ] Collections erstellen (Projects, Blog, Shop, Settings)
- [ ] Payload Admin anpassen (custom views)
- [ ] Next.js mit Payload verbinden
- [ ] Blog-Seite dynamisch machen
- [ ] Projekte dynamisch machen
- [ ] SEO-Felder einbauen
- [ ] Draft/Preview-Modus

### Phase 3: Shop & Payments (Woche 7–8)
- [ ] Stripe Integration
- [ ] Produkt-Seiten dynamisch
- [ ] Checkout-Flow
- [ ] Download-Delivery nach Kauf
- [ ] Stripe-Webhooks für Bestellbestätigung
- [ ] E-Mail-Templates (Resend)

### Phase 4: KI-Features (Woche 9–10)
- [ ] Claude API Integration im Payload-Admin
- [ ] Blog-Assistent
- [ ] SEO-Meta-Generator
- [ ] Alt-Text-Generator
- [ ] Interne-Link-Vorschläge

### Phase 5: SEO & Performance (Woche 11–12)
- [ ] Sitemap & robots.txt
- [ ] JSON-LD Strukturierte Daten
- [ ] Core Web Vitals Audit
- [ ] Plausible Analytics
- [ ] llms.txt
- [ ] Performance-Optimierung (Images, Fonts, JS)

### Phase 6: Launch & Growth (ab Monat 3)
- [ ] Soft Launch
- [ ] Erste Blog-Artikel (SEO)
- [ ] Newsletter (Resend)
- [ ] Cal.com Integration (Terminbuchung)
- [ ] A/B Tests auf Hero und CTAs

---

## 12. WIREFRAME-SKIZZEN (Textform)

### Home — Hero Bereich
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo]        Home  Über  Services  Projekte  Blog  Shop   [CTA] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ● Verfügbar für Projekte · Berlin & Remote                 │
│                                                             │
│  Ich baue digitale Produkte                                 │
│  die wirklich wirken.                              [   ]    │
│                                                    [ ··· ]  │
│  Tobias Köllner — Webdeveloper & KI-Berater                 │
│  aus Berlin. [beschreibung]                                 │
│                                                             │
│  [Projekt starten →]  [Meine Projekte]                      │
│                                                             │
│  ─────────────────────────────────────────────             │
│  150+           8+              98%           50+           │
│  Projekte       Jahre           Zufrieden     KI-Proj.      │
└─────────────────────────────────────────────────────────────┘
```

### Service-Karte
```
┌────────────────────────────────────────┐
│ [Icon]                      [150+ Proj]│
│                                        │
│ Webentwicklung                         │
│                                        │
│ Moderne, schnelle und skalierbare...   │
│                                        │
│ [Next.js] [React] [TS] [Node.js]      │
│                                        │
│ Mehr erfahren →                        │
└────────────────────────────────────────┘
         (hover: lebt hoch, blauer Rand)
```

### Blog-Karte
```
┌────────────────────────────────────────┐
│ [KI-Strategie]  ⏱ 8 min               │
│                                        │
│ Warum jedes Unternehmen 2025           │
│ eine KI-Strategie braucht             │
│                                        │
│ KI ist kein Hype mehr — es ist...     │
│                                        │
│ [KI] [Strategie]          12. Apr 25  │
└────────────────────────────────────────┘
```
