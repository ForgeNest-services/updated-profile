import React from "react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-foreground/70 mt-2">
          Manage your website content and settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/dashboard/blogs"
          className="group block rounded-xl border border-foreground/20 bg-card p-6 hover:border-foreground/40 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              Blogs
            </h3>
          </div>
          <p className="text-sm text-foreground/70">
            Create, edit, and manage blog posts and articles.
          </p>
        </Link>

        {/* Placeholder for future features */}
        <div className="group block rounded-xl border border-foreground/10 bg-card/50 p-6 opacity-60">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <svg
                className="w-5 h-5 text-muted-foreground"
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
            </div>
            <h3 className="text-lg font-semibold text-foreground/60">
              Coming Soon
            </h3>
          </div>
          <p className="text-sm text-foreground/50">
            More features will be added here.
          </p>
        </div>
      </div>
    </div>
  );
}
