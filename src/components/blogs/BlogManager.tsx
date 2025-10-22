import BlogCard, { type BlogCardData } from "@/components/blogs/BlogCard";
import SearchBar from "@/components/blogs/SearchBar";
import Link from "next/link";

export default function BlogManager({
  items,
  total,
  page,
  pageSize,
  q,
}: {
  items: BlogCardData[];
  total: number;
  page: number;
  pageSize: number;
  q?: string;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const buildHref = (p: number) => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (p > 1) sp.set("page", String(p));
    const s = sp.toString();
    return `/blogs${s ? `?${s}` : ""}`;
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="space-y-8">
        <div className="flex justify-end">
          <SearchBar q={q} />
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-neutral-800 text-base md:text-lg">
              No posts found.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((b) => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-4">
            <Link
              href={buildHref(Math.max(1, page - 1))}
              aria-disabled={page === 1}
              className={`rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-all duration-300 ${
                page === 1
                  ? "pointer-events-none opacity-50"
                  : "hover:bg-foreground/5 hover:border-foreground/40"
              }`}
            >
              Previous
            </Link>
            <div className="text-sm text-neutral-800 font-medium">
              Page {page} of {totalPages}
            </div>
            <Link
              href={buildHref(Math.min(totalPages, page + 1))}
              aria-disabled={page === totalPages}
              className={`rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-all duration-300 ${
                page === totalPages
                  ? "pointer-events-none opacity-50"
                  : "hover:bg-foreground/5 hover:border-foreground/40"
              }`}
            >
              Next
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}
