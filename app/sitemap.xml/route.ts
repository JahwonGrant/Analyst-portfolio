import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://jahwongrant.com"

  // Static routes
  const routes = ["", "/about", "/projects", "/blog", "/experience", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Project routes - in a real app, you'd fetch these from your data source
  const projectSlugs = ["automated-tableau-dashboards", "sales-pipeline-tracking", "pricing-strategy-optimization"]
  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog routes - in a real app, you'd fetch these from your data source
  const blogSlugs = [
    "data-visualization-best-practices",
    "lean-six-sigma-for-data-analysts",
    "future-of-business-intelligence",
  ]
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes, ...blogRoutes]
}
