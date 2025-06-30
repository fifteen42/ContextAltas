import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ContextAtlas - AI-Powered Context Management Platform",
  description:
    "Manage all your product context with AI. From code information to user feedback, ContextAtlas helps AI understand your organization better.",
  keywords: [
    "AI",
    "context management",
    "product management",
    "code analysis",
    "user feedback",
  ],
  authors: [{ name: "ContextAtlas Team" }],
  openGraph: {
    title: "ContextAtlas - AI-Powered Context Management",
    description: "Comprehensive context management for AI-driven organizations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
