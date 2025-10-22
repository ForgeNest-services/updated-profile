import React from "react";
import { getPublishedBlogBySlug } from "@/server/blog";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getPublishedBlogBySlug(params.slug);
  if (!blog) return { title: "Blog post not found" };
  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getPublishedBlogBySlug(params.slug);
  if (!blog) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <div className="mt-2 text-sm text-foreground/60">
          <time dateTime={new Date(blog.createdAt).toISOString()}>
            {new Date(blog.createdAt).toISOString().slice(0, 10)}
          </time>
        </div>
      </header>
      {blog.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={blog.image}
          alt={blog.title}
          className="mb-6 h-80 w-full rounded-md object-cover"
        />
      )}
      <section className="prose max-w-none dark:prose-invert">
        {blog.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>
    </article>
  );
}
