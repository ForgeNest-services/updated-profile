import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "../globals.css";
import { BarbaWrapper, Navbar, SmoothScroll } from "@/components/commons";
import { Footer } from "@/components/home";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forgenest Services Pvt. Ltd.",
  description: "IT service and Consulting Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} font-sans antialiased`}>
        <Navbar />
        <SmoothScroll>
          <BarbaWrapper>
            {children}
            <Footer />
          </BarbaWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}
