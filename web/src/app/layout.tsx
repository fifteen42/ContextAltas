import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ContextAtlas - Context Engineering Resources & Tutorials",
  description:
    "Curated collection of context engineering resources for AI agents. Learn best practices, patterns, and techniques from industry leaders.",
  keywords: [
    "context engineering",
    "AI agents",
    "prompt engineering",
    "context management",
    "AI tutorials",
    "LangChain",
    "Anthropic",
    "agent development",
  ],
  authors: [{ name: "ContextAtlas" }],
  openGraph: {
    title: "ContextAtlas - Context Engineering Resources",
    description: "Curated collection of context engineering resources for AI agents. Tutorials and videos from industry leaders.",
    type: "website",
    siteName: "ContextAtlas",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContextAtlas - Context Engineering Resources",
    description: "Learn context engineering for AI agents from the best tutorials and videos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://contextatlas.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ContextAtlas",
    "description": "Curated collection of context engineering resources for AI agents",
    "url": "https://contextatlas.com",
    "about": {
      "@type": "Thing",
      "name": "Context Engineering",
      "description": "Best practices and techniques for engineering context in AI agents"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N51DHXT07V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N51DHXT07V');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
