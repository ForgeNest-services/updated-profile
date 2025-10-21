import React from "react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/dashboard/blogs"
          className="block rounded-lg border border-foreground/20 p-4 hover:border-foreground/40 transition-colors"
        >
          <div className="text-lg font-medium">Blogs</div>
          <p className="text-sm text-foreground/70">
            Create, edit, and manage blog posts.
          </p>
        </Link>
        {/* Add more links/cards as needed */}
      </div>
    </section>
  );
}
