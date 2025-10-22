"use server";

import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { revalidatePath } from "next/cache";

const DB_NAME = process.env.DB_NAME || "forgenest";
const COLLECTION = "newsletter_subscribers";

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

export type Subscriber = {
  _id: ObjectId;
  email: string;
  createdAt: Date;
};

export type SubscriberRow = { id: string; email: string; createdAt: string };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function subscribeAction(formData: FormData) {
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();
  if (!email || !isValidEmail(email)) {
    throw new Error("Please provide a valid email address");
  }

  const col = await getCollection();

  // Avoid duplicates
  const existing = await col.findOne({ email });
  if (existing) {
    // Idempotent success
    revalidatePath("/");
    revalidatePath("/dashboard/newsletter");
    return;
  }

  await col.insertOne({ email, createdAt: new Date() });

  revalidatePath("/");
  revalidatePath("/dashboard/newsletter");
}

export async function listSubscribers(): Promise<SubscriberRow[]> {
  const col = await getCollection();
  const docs = (await col
    .find({})
    .sort({ createdAt: -1 })
    .toArray()) as Subscriber[];
  return docs.map((d) => ({
    id: d._id.toString(),
    email: d.email,
    createdAt: new Date(d.createdAt).toISOString(),
  }));
}
