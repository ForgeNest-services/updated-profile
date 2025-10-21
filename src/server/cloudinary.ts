"use server";

import crypto from "node:crypto";

const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]);
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

export type UploadResult = { url: string; publicId: string };

export async function uploadBlogImage(file: File): Promise<UploadResult> {
  if (!ALLOWED_MIME.has(file.type)) {
    throw new Error("Invalid image type. Allowed: jpg, jpeg, png, webp.");
  }
  if (file.size > MAX_SIZE_BYTES) {
    throw new Error("Image too large. Max 5MB.");
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary is not configured.");
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const folder = "forgenest/blogs";
  const paramsToSign = `folder=${folder}&timestamp=${timestamp}`;
  const signature = crypto
    .createHash("sha1")
    .update(paramsToSign + apiSecret)
    .digest("hex");

  const body = new FormData();
  body.append("file", file);
  body.append("api_key", apiKey);
  body.append("timestamp", String(timestamp));
  body.append("signature", signature);
  body.append("folder", folder);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body,
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Cloudinary upload failed: ${text}`);
  }

  const data = (await res.json()) as { secure_url: string; public_id: string };
  return { url: data.secure_url, publicId: data.public_id };
}
