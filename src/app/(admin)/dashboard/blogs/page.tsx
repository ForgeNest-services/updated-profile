import React from "react";
import { listBlogs } from "@/server/blog";
import BlogsTable from "@/components/dashboard/blogs/BlogsTable";
import CreateBlogForm from "@/components/dashboard/blogs/CreateBlogForm";

export default async function BlogsDashboardPage() {
  const blogs = await listBlogs();
  const clientBlogs = blogs.map((b) => ({
    id: b._id.toString(),
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    content: b.content,
    image: b.image,
    metaTitle: b.metaTitle,
    metaDescription: b.metaDescription,
    tags: b.tags,
    keywords: b.keywords,
    author: b.author,
    authorImage: b.authorImage,
    isPublished: b.isPublished,
    createdAt: new Date(b.createdAt).toISOString(),
    updatedAt: new Date(b.updatedAt).toISOString(),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Blog Management
            </h1>
            <p className="text-foreground/70 mt-2">
              Create, edit, and manage your blog posts
            </p>
          </div>
          <CreateBlogForm />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-foreground/20 shadow-sm">
        <BlogsTable blogs={clientBlogs} />
      </div>
    </div>
  );
}
