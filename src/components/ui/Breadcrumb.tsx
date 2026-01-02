"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  url: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className=" bg-background border-b border-foreground/10"
      aria-label="Breadcrumb"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.current ? (
                <span className="text-sm md:text-base text-foreground font-medium">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.url}
                    className="text-sm md:text-base text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  {index < items.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-foreground/40" />
                  )}
                </>
              )}
              {item.current && index < items.length - 1 && (
                <ChevronRight className="w-4 h-4 text-foreground/40" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
