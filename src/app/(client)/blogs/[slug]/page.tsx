import React from "react";
import { getPublishedBlogBySlug } from "@/server/blog";
import { notFound } from "next/navigation";
import TitleAnimation from "@/components/ui/TitleAnimation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { ShareButtons } from "@/components/blogs";
import { generateBlogPostSchema, generateBreadcrumbSchema } from "@/lib/constants/seo";

// export const dynamic = "force-dynamic";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) return { title: "Blog post not found" };

  const siteUrl = "https://www.forgenestservices.com.np";
  const canonical = `${siteUrl}/blogs/${blog.slug}`;

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.keywords?.join(", "),
    authors: [{ name: blog.author }],
    alternates: { canonical },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      url: canonical,
      images: blog.image
        ? [
            {
              url: blog.image,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : undefined,
      type: "article",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) notFound();

  // Calculate reading time (average 200 words per minute)
  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Prepare JSON-LD
  const structuredData = generateBlogPostSchema({
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    content: blog.content,
    author: blog.author,
    publishedAt: new Date(blog.createdAt).toISOString(),
    image: blog.image || "https://www.forgenestservices.com.np/og-image.jpg",
    url: `https://www.forgenestservices.com.np/blogs/${blog.slug}`,
    category: blog.tags?.[0] || "Technology",
    tags: blog.tags || [],
    readTime: readingTime,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.forgenestservices.com.np" },
    { name: "Blogs", url: "https://www.forgenestservices.com.np/blogs" },
    { name: blog.title, url: `https://www.forgenestservices.com.np/blogs/${blog.slug}` },
  ]);

  // Format date
  const publishedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const updatedDate = new Date(blog.updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-background text-foreground py-20 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", url: "/" },
          { label: "Blogs", url: "/blogs" },
          { label: blog.title, url: `/blogs/${blog.slug}`, current: true },
        ]}
      />
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Featured Image */}
        {blog.image && (
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-contain md:object-cover"
              />
              <div className="absolute inset-0 bg-foreground/10" />
            </div>
          </div>
        )}
        {/* Article Header */}
        <header className="mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag: string, index: number) => (
                  <Link
                    key={index}
                    href={`/blogs?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs md:text-sm font-medium bg-foreground/10 text-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Title */}
            <TitleAnimation
              as="h1"
              className="text-2xl md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-6"
            >
              {blog.title}
            </TitleAnimation>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-8">
                {blog.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-foreground/60">
              {/* Author */}
              <div className="flex items-center gap-3">
                {blog.authorImage ? (
                  <Image
                    src={blog.authorImage}
                    alt={blog.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-foreground">{blog.author}</p>
                </div>
              </div>

              <div className="h-6 w-px bg-foreground/20" />

              {/* Published Date */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={new Date(blog.createdAt).toISOString()}>
                  {publishedDate}
                </time>
              </div>

              {/* Reading Time */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>

            {/* Updated Date (if different from published) */}
            {blog.updatedAt !== blog.createdAt && (
              <p className="text-xs md:text-sm text-foreground/50 mt-4">
                Last updated: {updatedDate}
              </p>
            )}
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto pb-20">
          <div className="prose prose-lg md:prose-xl max-w-none dark:prose-invert prose-headings:font-oswald prose-headings:font-bold prose-p:text-foreground/80 prose-p:leading-relaxed prose-a:text-foreground prose-a:underline hover:prose-a:no-underline prose-strong:text-foreground prose-img:rounded-lg">
            {/* Normalize headings missing a space after # (e.g., "##Title" -> "## Title") */}
            {(() => {
              const normalized = blog.content.replace(
                /^(#{1,6})(?!\s)(.*)$/gm,
                "$1 $2"
              );
              return (
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                  {normalized}
                </ReactMarkdown>
              );
            })()}
          </div>

          {/* Keywords Section */}
          {blog.keywords && blog.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-foreground/10">
              <h3 className="font-oswald text-lg font-normal mb-4 text-foreground">
                Related Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {blog.keywords.map((keyword: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-foreground/5 text-foreground/70 rounded-full border border-foreground/20 hover:border-foreground/40 transition-colors duration-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-foreground/10">
            <h3 className="font-oswald text-lg font-normal text-foreground mb-4">
              Share this article
            </h3>
            <ShareButtons title={blog.title} slug={blog.slug} />
          </div>

          {/* Back to Blog */}
          <div className="mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all duration-300 font-medium"
            >
              <span>←</span>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
