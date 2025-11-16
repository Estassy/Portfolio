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
  title: "Marc Estassy BATABA — Développeur Full-Stack & Cloud",
  description: "Développeur Full-Stack Java/Spring Boot & React chez Sopra Steria. 2+ ans d'expérience en développement web, DevOps et méthodologie Agile. Spécialisé en solutions cloud et CI/CD.",
  keywords: ["Développeur Full-Stack", "Java", "Spring Boot", "React", "DevOps", "Cloud", "Sopra Steria", "FDJ", "Agile", "GitLab CI/CD"],
  authors: [{ name: "Marc Estassy BATABA" }],
  creator: "Marc Estassy BATABA",
  publisher: "Marc Estassy BATABA",
  openGraph: {
    title: "Marc Estassy BATABA — Développeur Full-Stack & Cloud",
    description: "Développeur Full-Stack Java/Spring Boot & React chez Sopra Steria. 2+ ans d'expérience en développement web, DevOps et méthodologie Agile.",
    url: "https://marc-estassy-bataba.vercel.app",
    siteName: "Marc Estassy BATABA Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Estassy BATABA — Développeur Full-Stack & Cloud",
    description: "Développeur Full-Stack Java/Spring Boot & React chez Sopra Steria. 2+ ans d'expérience en développement web, DevOps et méthodologie Agile.",
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
};

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
      </body>
    </html>
  );
}
