/* eslint-disable @next/next/no-html-link-for-pages --
   Internal links are plain anchors on purpose. Cross-document view
   transitions only run on real page loads, which next/link would bypass. */
import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./editorial.css";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-display",
  display: "swap",
});

const text = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const DESCRIPTION =
  "Dan Edwards takes mobile products from architecture to the App Store. Staff software engineer at Infinite Red with over ten years of experience in React Native, TypeScript, design systems and agentic engineering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://danedwards.us"),
  title: {
    default: "Dan Edwards | Staff Software Engineer | React Native & TypeScript",
    template: "%s | Dan Edwards",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Dan Edwards | Staff Software Engineer",
    description: DESCRIPTION,
    url: "https://danedwards.us",
    siteName: "Dan Edwards",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Edwards | Staff Software Engineer",
    description: DESCRIPTION,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Edwards",
  url: "https://danedwards.us",
  image: "https://danedwards.us/headshot.jpg",
  jobTitle: "Staff Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Infinite Red",
    url: "https://infinite.red",
  },
  description:
    "Staff software engineer with over ten years of experience specializing in React Native, TypeScript, design systems, and AI-augmented engineering.",
  knowsAbout: [
    "React Native",
    "TypeScript",
    "React.js",
    "Next.js",
    "Expo",
    "GraphQL",
    "Node.js",
    "AI",
    "Agentic Engineering",
    "Context Engineering",
    "Design Systems",
    "Mobile Development",
    "Web Development",
  ],
  sameAs: [
    "https://github.com/cdanwards",
    "https://www.linkedin.com/in/cdanwards/",
    "https://bsky.app/profile/cdanwards.bsky.social",
  ],
  email: "cdaniel.edwards@gmail.com",
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Anderson University" },
    { "@type": "EducationalOrganization", name: "The Iron Yard" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`ed ${display.variable} ${text.variable} ${mono.variable}`}>
        <header className="ed-grid ed-header ed-label">
          <a className="ed-name" href="/">
            Dan Edwards
          </a>
          <nav className="ed-nav" aria-label="Main">
            <a href="/#work">Work</a>
            <a href="/about">About</a>
            <a href="/resume">Resume</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="ed-grid ed-footer ed-label">
          <p>
            Colophon: set in Fraunces, Instrument Sans and JetBrains Mono.
            Built with Next.js and plain CSS. Last edited November 2026.
          </p>
        </footer>
      </body>
    </html>
  );
}
