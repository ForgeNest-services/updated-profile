"use client";
import React, { useState, useTransition } from "react";
import { deleteBlogAction, updateBlogAction } from "@/server/blog";
import Link from "next/link";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type BlogRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
  keywords?: string[];
  author: string;
  authorImage: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function BlogsTable({ blogs }: { blogs: BlogRow[] }) {
  if (!blogs.length) {
    return <div className="text-sm text-foreground/70">No blogs yet.</div>;
  }
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  async function handleDelete(id: string) {
    const fd = new FormData();
    fd.append("id", id);
    try {
      await deleteBlogAction(fd);
      toast.success("Blog deleted");
      setConfirmDeleteId(null);
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message || "Failed to delete blog");
    }
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-foreground/20">
      <table className="min-w-full text-sm">
        <thead className="bg-foreground/5 text-left">
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Slug</th>
            <th className="px-4 py-2">Published</th>
            <th className="px-4 py-2">Created</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr
key={b.id}
              className="border-t border-foreground/10"
            >
              <td className="px-4 py-2">
                {b.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-10 w-16 rounded object-cover border border-foreground/10"
                  />
                ) : (
                  <div className="h-10 w-16 rounded bg-foreground/10" />
                )}
              </td>
              <td className="px-4 py-2">
                <Link href={`/blogs/${b.slug}`} className="hover:underline">
                  {b.title}
                </Link>
              </td>
              <td className="px-4 py-2">{b.slug}</td>
              <td className="px-4 py-2">{b.isPublished ? "Yes" : "No"}</td>
              <td className="px-4 py-2">
                <time dateTime={b.createdAt}>{b.createdAt.slice(0, 10)}</time>
              </td>
              <td className="px-4 py-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Edit Blog</DialogTitle>
                        </DialogHeader>
                        <form
                          action={async (formData: FormData) => {
                            try {
                              await updateBlogAction(formData);
                              toast.success("Blog updated");
                              router.refresh();
                            } catch (e: any) {
                              toast.error(
                                e?.message || "Failed to update blog"
                              );
                            }
                          }}
                          className="space-y-4"
                        >
                          <input
                            type="hidden"
                            name="id"
value={b.id}
                          />
                          <input
                            type="hidden"
                            name="oldImage"
                            value={b.image || ""}
                          />
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Title *
                            </label>
                            <Input
                              name="title"
                              defaultValue={b.title}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Excerpt *
                            </label>
                            <Textarea
                              name="excerpt"
                              defaultValue={b.excerpt}
                              rows={3}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Content *
                            </label>
                            <Textarea
                              name="content"
                              defaultValue={b.content}
                              rows={8}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Featured Image
                            </label>
                            <Input
                              name="image"
                              type="file"
                              accept="image/jpeg,image/jpg,image/png,image/webp"
                            />
                            <p className="text-xs text-foreground/60 mt-1">
                              Leave empty to keep existing image
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Tags
                              </label>
                              <Input
                                name="tags"
                                defaultValue={(b.tags || []).join(", ")}
                                placeholder="tag1, tag2"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Keywords
                              </label>
                              <Input
                                name="keywords"
                                defaultValue={(b.keywords || []).join(", ")}
                                placeholder="keyword1, keyword2"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Meta Title
                              </label>
                              <Input
                                name="metaTitle"
                                defaultValue={b.metaTitle || ""}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Meta Description
                              </label>
                              <Input
                                name="metaDescription"
                                defaultValue={b.metaDescription || ""}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
id={`isPublished-${b.id}`}
                              name="isPublished"
                              type="checkbox"
                              value="true"
                              defaultChecked={b.isPublished}
                              className="size-4 rounded border-foreground/20"
                            />
                            <label
htmlFor={`isPublished-${b.id}`}
                              className="text-sm font-medium"
                            >
                              Published
                            </label>
                          </div>
                          <DialogFooter>
                            <Button
                              type="submit"
                              className="bg-primary hover:bg-primary/90"
                            >
                              Save Changes
                            </Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="destructive"
                      size="sm"
onClick={() => setConfirmDeleteId(b.id)}
                      disabled={pending}
                    >
                      Delete
                    </Button>
                  </div>
{confirmDeleteId === b.id && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertTitle>Delete blog?</AlertTitle>
                      <AlertDescription>
                        <div className="flex items-center justify-between gap-2 mt-2">
                          <span>This action cannot be undone.</span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setConfirmDeleteId(null)}
                              disabled={pending}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() =>
                                startTransition(() =>
handleDelete(b.id)
                                )
                              }
                            >
                              {pending ? "Deleting..." : "Confirm"}
                            </Button>
                          </div>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
