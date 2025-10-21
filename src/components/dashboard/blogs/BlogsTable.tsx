import React from "react";
import { type Blog } from "@/server/blog";
import Link from "next/link";

export default function BlogsTable({ blogs }: { blogs: Blog[] }) {
  if (!blogs.length) {
    return <div className="text-sm text-foreground/70">No blogs yet.</div>;
  }
  return (
    <div className="overflow-x-auto rounded-lg border border-foreground/20">
      <table className="min-w-full text-sm">
        <thead className="bg-foreground/5 text-left">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Slug</th>
            <th className="px-4 py-2">Published</th>
            <th className="px-4 py-2">Created</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr key={b._id.toString()} className="border-t border-foreground/10">
              <td className="px-4 py-2">
                <Link href={`/blog/${b.slug}`} className="hover:underline">
                  {b.title}
                </Link>
              </td>
              <td className="px-4 py-2">{b.slug}</td>
              <td className="px-4 py-2">{b.isPublished ? "Yes" : "No"}</td>
              <td className="px-4 py-2">{new Date(b.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
