import ProjectsClientPage from "./ProjectsClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Analysis Projects | Portfolio",
  description: "Explore my data analysis and business intelligence projects showcasing real-world impact and results.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
