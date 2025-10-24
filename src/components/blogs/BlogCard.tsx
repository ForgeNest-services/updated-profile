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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/15 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-foreground/25">
      {blog.image ? (
        <div className="relative overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            quality={90}
            priority
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>
      ) : (
        <div className="h-48 w-full bg-foreground/10" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-lg font-semibold text-foreground mb-3">
          <Link
            href={`/blogs/${blog.slug}`}
            className="hover:text-foreground/80 transition-colors duration-300"
          >
            {blog.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-neutral-800 leading-relaxed flex-1">
          {blog.excerpt}
        </p>
        <div className="mt-4 pt-4 border-t border-foreground/10">
          <time
            dateTime={blog.createdAt}
            className="text-xs text-foreground/60 font-medium"
          >
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
}
