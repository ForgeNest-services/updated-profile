import React from "react";
import { listBlogs, createBlogAction } from "@/server/blog";
import BlogsTable from "@/components/dashboard/blogs/BlogsTable";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default async function BlogsDashboardPage() {
  const blogs = await listBlogs();

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create blog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create blog</DialogTitle>
            </DialogHeader>
            <form action={createBlogAction} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Title *</label>
                <Input name="title" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Excerpt *</label>
                <Textarea name="excerpt" rows={3} required />
              </div>
              <div>
                <label className="block text-sm mb-1">Content *</label>
                <Textarea name="content" rows={8} required />
              </div>
              <div>
                <label className="block text-sm mb-1">Image</label>
                <Input name="image" type="file" accept="image/jpeg,image/jpg,image/png,image/webp" />
                <p className="text-xs text-foreground/60 mt-1">Max 5MB. jpg, jpeg, png, webp.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Tags (comma separated)</label>
                  <Input name="tags" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Keywords (comma separated)</label>
                  <Input name="keywords" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Meta Title</label>
                  <Input name="metaTitle" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Meta Description</label>
                  <Input name="metaDescription" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input id="isPublished" name="isPublished" type="checkbox" value="true" className="size-4" />
                <label htmlFor="isPublished" className="text-sm">Publish immediately</label>
              </div>
              <DialogFooter>
                <Button type="submit">Create</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <BlogsTable blogs={blogs} />
    </section>
  );
}
