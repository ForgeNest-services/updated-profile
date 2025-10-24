import React from "react";
import type { Metadata } from "next";
import { listPublishedBlogsPaginated } from "@/server/blog";
import { BlogManager, BlogsHeader } from "@/components/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blogs | Forgenest Services",
  description:
    "Read insights on software development, web, mobile, AI, design, and digital transformation from Forgenest Services.",
  alternates: { canonical: "https://www.forgenestservices.com.np/blogs" },
  openGraph: {
    title: "Blogs | Forgenest Services",
    description:
      "Insights on software development, web, mobile, AI, design, and digital transformation.",
    url: "https://www.forgenestservices.com.np/blogs",
  },
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number(params?.page || 1));
  const q = (params?.q || "").trim() || undefined;
  const pageSize = 10;
  const { items, total } = await listPublishedBlogsPaginated({
    page,
    pageSize,
    q,
  });

  return (
    <main className="bg-background text-foreground py-20 md:py-32">
      <div className="max-w-screen-4xl mx-auto">
        <BlogsHeader />
        <BlogManager
          items={items}
          total={total}
          page={page}
          pageSize={pageSize}
          q={q}
        />
      </div>
    </main>
  );
}
