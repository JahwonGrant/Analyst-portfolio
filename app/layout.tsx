import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jahwon Grant | Data Analytics & Business Intelligence Leader",
  description:
    "Executive-level data analytics professional specializing in business intelligence, process optimization, and strategic decision-making.",
  keywords: [
    "data analytics",
    "business intelligence",
    "data visualization",
    "process improvement",
    "Lean Six Sigma",
    "MBA",
    "executive analytics",
    "strategic decision-making",
    "Jahwon Grant",
  ],
  authors: [{ name: "Jahwon Grant" }],
  creator: "Jahwon Grant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jahwongrant.com",
    title: "Jahwon Grant | Data Analytics & Business Intelligence Leader",
    description:
      "Executive-level data analytics professional specializing in business intelligence, process optimization, and strategic decision-making.",
    siteName: "Jahwon Grant Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jahwon Grant - Data Analytics & Business Intelligence Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahwon Grant | Data Analytics & Business Intelligence Leader",
    description:
      "Executive-level data analytics professional specializing in business intelligence, process optimization, and strategic decision-making.",
    images: ["/images/og-image.jpg"],
    creator: "@jahwongrant",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'