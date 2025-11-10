"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogRow } from "@/server/blog";
import { listPublishedBlogsPaginated } from "@/server/blog";
import BlogCard from "@/components/blogs/BlogCard";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedBlogs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [blogs, setBlogs] = useState<BlogRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { items } = await listPublishedBlogsPaginated({
          page: 1,
          pageSize: 3,
        });
        setBlogs(items || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length === 0) return;

    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter((el) => el !== null);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [blogs]);

  if (isLoading) {
    return (
      <section
        ref={sectionRef}
        className="bg-background text-foreground overflow-hidden w-full"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-start flex-col mb-12 md:mb-16">
            <TitleAnimation className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
              Latest Insights
            </TitleAnimation>
            <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
          </div>
          <div className="text-center text-foreground/60">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground overflow-hidden w-full"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-start items-start flex-col mb-12 md:mb-16">
          <TitleAnimation className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
            Latest Insights
          </TitleAnimation>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
        </div>

        <TextAnimation
          className="max-w-3xl text-sm md:text-lg text-foreground leading-relaxed mb-16"
          animationType="fadeUp"
          delay={0.1}
        >
          Thoughts on design, development, and building digital products that
          matter.
        </TextAnimation>

        {/* Blog Cards Grid */}
        {blogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        ) : null}

        {/* View All Link */}
        <div className="flex justify-center md:justify-start">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-full font-oswald text-sm md:text-base uppercase hover:opacity-90 transition-opacity duration-300 group"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
