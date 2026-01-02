import React from "react";
import type { Metadata } from "next";
import { listPublishedBlogsPaginated } from "@/server/blog";
import { BlogManager, BlogsHeader } from "@/components/blogs";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { generateBreadcrumbSchema } from "@/lib/constants/seo";

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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.forgenestservices.com.np" },
    { name: "Blogs", url: "https://www.forgenestservices.com.np/blogs" },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="bg-background text-foreground pb-20 md:pb-32">
        {/* <Breadcrumb
          items={[
            { label: "Home", url: "/" },
            { label: "Blogs", url: "/blogs", current: true },
          ]}
        /> */}
        <div className="max-w-screen-4xl mx-auto py-12 md:py-16">
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
    </>
  );
}
