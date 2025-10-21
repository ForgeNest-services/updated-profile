"use server";

import { cookies } from "next/headers";

const SESSION_COOKIE = "admin_session";

export type LoginResult =
  | { success: true }
  | { success: false; message: string };

export async function loginAdmin({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResult> {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    return { success: false, message: "Server auth is not configured." };
  }

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const oneWeek = 60 * 60 * 24 * 7;
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, "true", {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: oneWeek,
    });
    return { success: true };
  }

  return { success: false, message: "Invalid credentials" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAuthenticated() {
  const value = (await cookies()).get(SESSION_COOKIE)?.value;
  return value === "true";
}
