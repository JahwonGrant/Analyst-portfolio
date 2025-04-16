import { notFound } from "next/navigation"

export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  // If we reach this page, the route doesn't exist
  notFound()
}
