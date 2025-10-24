import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";

const oswald = localFont({
  src: "../../../public/fonts/oswald/Oswald-VariableFont_wght.ttf",
  variable: "--font-oswald",
  weight: "200 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin Dashboard - Forgenest Services",
  description: "Admin dashboard for managing website content",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
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
