"use server";

import { revalidatePath } from "next/cache";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { uploadBlogImage } from "@/server/cloudinary";

const DB_NAME = process.env.DB_NAME || "forgenest";
const COLLECTION = "blogs";

let client: MongoClient | null = null;

async function getClient() {
  if (!client) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI not configured");
    client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
    await client.connect();
  }
  return client;
}

async function getCollection() {
  const c = await getClient();
  return c.db(DB_NAME).collection(COLLECTION);
}

export type Blog = {
  _id: ObjectId;
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
  createdAt: Date;
  updatedAt: Date;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function listBlogs(): Promise<Blog[]> {
  const col = await getCollection();
  const docs = await col.find({}).sort({ createdAt: -1 }).toArray();
  return docs as Blog[];
}

export async function createBlogAction(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const isPublished = String(formData.get("isPublished") || "false") === "true";
  const metaTitle = String(formData.get("metaTitle") || "").trim() || undefined;
  const metaDescription =
    String(formData.get("metaDescription") || "").trim() || undefined;
  const tags = String(formData.get("tags") || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const keywords = String(formData.get("keywords") || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const file = formData.get("image") as File | null;

  if (!title || !excerpt || !content) {
    throw new Error("Missing required fields");
  }

  let imageUrl: string | undefined = undefined;
  if (file && file.size > 0) {
    const uploaded = await uploadBlogImage(file);
    imageUrl = uploaded.url;
  }

  const col = await getCollection();
  const slug = slugify(title);

  // Ensure unique slug by appending -n if exists
  let uniqueSlug = slug;
  let counter = 1;
  while (await col.findOne({ slug: uniqueSlug })) {
    uniqueSlug = `${slug}-${counter++}`;
  }

  const now = new Date();
  await col.insertOne({
    title,
    slug: uniqueSlug,
    excerpt,
    content,
    image: imageUrl,
    metaTitle,
    metaDescription,
    tags: tags.length ? tags : undefined,
    keywords: keywords.length ? keywords : undefined,
    author: "Forgenest Services",
    authorImage:
      "https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png",
    isPublished,
    createdAt: now,
    updatedAt: now,
  });

  revalidatePath("/dashboard/blogs");
}

export async function deleteBlogAction(id: string) {
  const col = await getCollection();
  await col.deleteOne({ _id: new ObjectId(id) });
  revalidatePath("/dashboard/blogs");
}
