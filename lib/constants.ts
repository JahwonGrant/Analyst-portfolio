// Site configuration constants
export const siteConfig = {
  name: "Jahwon Grant",
  description: "Data Analytics & Business Intelligence Leader",
  url: process.env.NEXT_PUBLIC_APP_URL || "",
  ogImage: "/images/og-image.jpg",
  links: {
    linkedin: "https://linkedin.com/in/jahwongrant",
    github: "https://github.com/JahwonGrant",
    twitter: "https://twitter.com/jahwongrant",
    email: "mailto:jahwongrant@gmail.com",
  },
}

// Default SEO configuration
export const defaultSeo = {
  title: "Jahwon Grant | Data Analytics & Business Intelligence Leader",
  description:
    "Executive-level data analytics professional specializing in business intelligence, process optimization, and strategic decision-making.",
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Jahwon Grant | Data Analytics & Business Intelligence Leader",
    description:
      "Executive-level data analytics professional specializing in business intelligence, process optimization, and strategic decision-making.",
    siteName: "Jahwon Grant Portfolio",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Jahwon Grant - Data Analytics & Business Intelligence Leader",
      },
    ],
  },
  twitter: {
    handle: "@jahwongrant",
    site: "@jahwongrant",
    cardType: "summary_large_image",
  },
}
