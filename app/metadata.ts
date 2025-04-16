import type { Metadata } from "next"

// Base metadata that can be extended by individual pages
export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://jahwongrant.com"),
  title: {
    default: "Jahwon Grant | Data Analytics & Business Intelligence Leader",
    template: "%s | Jahwon Grant",
  },
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
    "data analyst portfolio",
    "business analytics",
    "data-driven decision making",
    "tableau dashboards",
    "data storytelling",
  ],
  authors: [{ name: "Jahwon Grant" }],
  creator: "Jahwon Grant",
  publisher: "Jahwon Grant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://jahwongrant.com",
  },
}

// Helper function to generate metadata for project pages
export function generateProjectMetadata(project: {
  title: string
  summary: string
  slug: string
  coverImage: string
}): Metadata {
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Jahwon Grant`,
      description: project.summary,
      url: `https://jahwongrant.com/projects/${project.slug}`,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      title: `${project.title} | Jahwon Grant`,
      description: project.summary,
      images: [project.coverImage],
    },
  }
}

// Helper function to generate metadata for blog pages
export function generateBlogMetadata(post: {
  title: string
  summary: string
  slug: string
  coverImage: string
  publishedAt: string
  author: {
    name: string
  }
}): Metadata {
  return {
    title: post.title,
    description: post.summary,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: `${post.title} | Jahwon Grant's Blog`,
      description: post.summary,
      type: "article",
      url: `https://jahwongrant.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      title: `${post.title} | Jahwon Grant's Blog`,
      description: post.summary,
      images: [post.coverImage],
    },
  }
}
