import {
  About,
  Hero,
  OurProcess,
  Newsletter,
  Services,
  FeaturedBlogs,
} from "@/components/home";
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from "@/lib/constants/seo";

// ISR - Revalidate every 1 hour
export const revalidate = 3600;

// Optimize dynamic rendering
export const dynamic = "force-static";

export default function Home() {
  const websiteSchema = generateWebsiteSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main className="bg-background text-foreground font-oswald space-y-20 md:space-y-32">
        <Hero />
        <About />
        <Services />
        <OurProcess />
        <FeaturedBlogs />
        <Newsletter />
      </main>
    </>
  );
}
