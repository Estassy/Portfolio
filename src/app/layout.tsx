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
  title: "Marc Estassy BATABA — Software Engineer Java / Angular",
  description: "Software Engineer Full-Stack chez Sogeti (mission France Travail). 3+ ans d'expérience en Java Spring Boot, Angular, GraphQL, CI/CD et méthodologie Agile.",
  keywords: ["Software Engineer", "Java", "Spring Boot", "Angular", "GraphQL", "Directus", "Sogeti", "France Travail", "DevOps", "Agile"],
  authors: [{ name: "Marc Estassy BATABA" }],
  creator: "Marc Estassy BATABA",
  publisher: "Marc Estassy BATABA",
  openGraph: {
    title: "Marc Estassy BATABA — Software Engineer Java / Angular",
    description: "Software Engineer Full-Stack chez Sogeti en mission France Travail. Java Spring Boot, Angular, GraphQL, CI/CD.",
    url: "https://marc-estassy-bataba.vercel.app",
    siteName: "Marc Estassy BATABA Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Estassy BATABA — Software Engineer Java / Angular",
    description: "Software Engineer Full-Stack chez Sogeti en mission France Travail. Java Spring Boot, Angular, GraphQL, CI/CD.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    google: "z-CcmXPhdZMNcEuWNJ-gpFiCVPHxtiER2usZuMc13Pk",
  },
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
