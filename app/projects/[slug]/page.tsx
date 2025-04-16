import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects"
import type { Metadata } from "next"
import { generateProjectMetadata } from "@/app/metadata"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return generateProjectMetadata(project)
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <ProjectDetail project={project} />
    </div>
  )
}
