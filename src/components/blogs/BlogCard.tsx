import Image from "next/image";
import Link from "next/link";

export type BlogCardData = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image?: string;
  createdAt: string; // ISO
};

export default function BlogCard({ blog }: { blog: BlogCardData }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-foreground/15 bg-card shadow-sm">
      {blog.image ? (
        <Image
          src={blog.image}
          alt={blog.title}
          width={200}
          height={200}
          priority
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="h-48 w-full bg-foreground/10" />
      )}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-lg font-semibold">
          <Link href={`/blogs/${blog.slug}`} className="hover:underline">
            {blog.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-foreground/70">
          {blog.excerpt}
        </p>
        <div className="mt-auto pt-4 text-xs text-foreground/60">
          <time dateTime={blog.createdAt}>{blog.createdAt.slice(0, 10)}</time>
        </div>
      </div>
    </article>
  );
}
