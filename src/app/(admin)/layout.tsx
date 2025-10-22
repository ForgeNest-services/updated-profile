import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard - Forgenest Services",
  description: "Admin dashboard for managing website content",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
