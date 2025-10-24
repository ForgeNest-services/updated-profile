"use client";

import React from "react";
import { createBlogAction } from "@/server/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export default function CreateBlogForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Create Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Create New Blog Post
          </DialogTitle>
        </DialogHeader>
        <form action={createBlogAction} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Title *
              </label>
              <Input
                name="title"
                required
                className="w-full"
                placeholder="Enter blog title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Excerpt *
              </label>
              <Textarea
                name="excerpt"
                rows={3}
                required
                className="w-full"
                placeholder="Brief description of the blog post"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Content *
              </label>
              <Textarea
                name="content"
                rows={12}
                required
                className="w-full"
                placeholder="Write using Markdown. Use #, ##, ### for headings; blank line for new paragraph; - for lists; **bold**; [link](https://example.com)."
              />
              <p className="text-xs text-foreground/60 mt-1">
                Supports Markdown (GFM). Tip: write headings like "## Heading"
                (with a space), blank line = new paragraph, single line break
                becomes a <br />.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Featured Image
              </label>
              <Input
                name="image"
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                className="w-full"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && file.size > 10 * 1024 * 1024) {
                    // 10MB limit
                    alert("File size must be less than 10MB");
                    e.target.value = "";
                  }
                }}
              />
              <p className="text-xs text-foreground/60 mt-1">
                Max 10MB. Supported formats: JPG, JPEG, PNG, WebP
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tags
                </label>
                <Input name="tags" placeholder="tag1, tag2, tag3" />
                <p className="text-xs text-foreground/60 mt-1">
                  Separate tags with commas
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Keywords
                </label>
                <Input
                  name="keywords"
                  placeholder="keyword1, keyword2, keyword3"
                />
                <p className="text-xs text-foreground/60 mt-1">
                  Separate keywords with commas
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Meta Title
                </label>
                <Input
                  name="metaTitle"
                  placeholder="SEO title for search engines"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Meta Description
                </label>
                <Input
                  name="metaDescription"
                  placeholder="SEO description for search engines"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
              <input
                id="isPublished"
                name="isPublished"
                type="checkbox"
                value="true"
                className="size-4 rounded border-foreground/20"
              />
              <label
                htmlFor="isPublished"
                className="text-sm font-medium text-foreground"
              >
                Publish immediately
              </label>
            </div>
          </div>
          <DialogFooter className="flex gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Create Blog Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
