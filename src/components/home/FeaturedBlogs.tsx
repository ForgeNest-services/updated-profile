import { listPublishedBlogsPaginated } from "@/server/blog";
import FeaturedBlogsClient from "./FeaturedBlogsClient";

export default async function FeaturedBlogs() {
  const { items } = await listPublishedBlogsPaginated({
    page: 1,
    pageSize: 3,
  });

  return <FeaturedBlogsClient blogs={items} />;
}
