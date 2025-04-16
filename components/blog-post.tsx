"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface BlogPostProps {
  post: {
    id: string
    title: string
    slug: string
    summary: string
    content: string
    coverImage: string
    publishedAt: string
    readingTime: string
    categories: string[]
    author: {
      name: string
      avatar: string
      title: string
    }
    relatedPosts?: {
      title: string
      slug: string
      coverImage: string
    }[]
  }
}

export function BlogPost({ post }: BlogPostProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(0)

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-sm">
              {category}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 executive-text-gradient">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">{post.summary}</p>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg border accent-border mb-12">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="flex gap-6">
        <div className="hidden md:flex flex-col gap-4 sticky top-24 h-fit">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={handleLike}>
            <ThumbsUp className={`h-5 w-5 ${likes > 0 ? "text-primary" : ""}`} />
            <span className="sr-only">Like</span>
          </Button>
          {likes > 0 && <span className="text-xs text-center">{likes}</span>}

          <Button variant="ghost" size="icon" className="rounded-full" onClick={handleBookmark}>
            <Bookmark className={`h-5 w-5 ${isBookmarked ? "text-primary fill-primary" : ""}`} />
            <span className="sr-only">Bookmark</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[200px]">
              <DropdownMenuItem>
                <Link
                  href={`https://twitter.com/intent/tweet?text=${post.title}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full"
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  Twitter
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full"
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className="flex items-center w-full"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert("Link copied to clipboard!")
                  }}
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Copy Link
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-1">
          <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="flex items-center justify-between py-6 border-t border-b mb-12">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleLike}>
                <ThumbsUp className={`h-4 w-4 ${likes > 0 ? "text-primary" : ""}`} />
                <span>{likes > 0 ? likes : "Like"}</span>
              </Button>

              <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleBookmark}>
                <Bookmark className={`h-4 w-4 ${isBookmarked ? "text-primary fill-primary" : ""}`} />
                <span>{isBookmarked ? "Saved" : "Save"}</span>
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${post.title}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full"
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    Twitter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full"
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button
                    className="flex items-center w-full"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href)
                      alert("Link copied to clipboard!")
                    }}
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Copy Link
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 executive-text-gradient">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost, index) => (
                  <Link key={index} href={`/blog/${relatedPost.slug}`}>
                    <div className="group flex gap-4 items-start">
                      <div className="relative h-16 w-24 overflow-hidden rounded-md flex-shrink-0">
                        <Image
                          src={relatedPost.coverImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="group">
              <Link href="/blog">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </Button>
            <Button asChild className="executive-button group">
              <Link href="/contact">
                Discuss This Topic
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
