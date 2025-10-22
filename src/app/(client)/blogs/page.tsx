import React from "react";
import { listPublishedBlogsPaginated } from "@/server/blog";
import { BlogManager, BlogsHeader } from "@/components/blogs";

export const dynamic = "force-dynamic";

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
    <main className="mx-auto max-w-screen-4xl px-4 py-20 md:py-32">
      <BlogsHeader />
      <BlogManager
        items={items}
        total={total}
        page={page}
        pageSize={pageSize}
        q={q}
      />
    </main>
  );
}
