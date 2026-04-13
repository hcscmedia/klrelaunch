import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tobias Köllner — Webentwicklung & KI-Beratung Berlin",
    template: "%s · Tobias Köllner",
  },
  description:
    "Webdeveloper und KI-Berater aus Berlin. Ich entwickle moderne Websites, Web-Apps und begleite Unternehmen bei ihrer digitalen KI-Transformation.",
  metadataBase: new URL("https://koellner.life"),
  keywords: [
    "Webentwicklung Berlin",
    "KI-Beratung",
    "Next.js Entwickler",
    "Full Stack Developer",
    "Digitale Transformation",
    "AI Consultant",
    "Freiberufler Berlin",
  ],
  authors: [{ name: "Tobias Köllner", url: "https://koellner.life" }],
  creator: "Tobias Köllner",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://koellner.life",
    siteName: "Tobias Köllner",
    title: "Tobias Köllner — Webentwicklung & KI-Beratung Berlin",
    description:
      "Webdeveloper und KI-Berater aus Berlin. Moderne Websites, Web-Apps und KI-Transformation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tobias Köllner — Webentwicklung & KI-Beratung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tobias Köllner — Webentwicklung & KI-Beratung Berlin",
    description:
      "Webdeveloper und KI-Berater aus Berlin. Moderne Websites, Web-Apps und KI-Transformation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
