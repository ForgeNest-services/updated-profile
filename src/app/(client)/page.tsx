import {
  About,
  Hero,
  WhatWeDo,
  OurProcess,
  Expertise,
  Newsletter,
} from "@/components/home";
import BarbaWrapper from "@/components/commons/Barba";
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from "@/lib/constants/seo";

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
      <BarbaWrapper namespace="home">
        <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto space-y-6">
          <Hero />
          <About />
          <WhatWeDo />
          <OurProcess />
          <Expertise />
          <Newsletter />
        </main>
      </BarbaWrapper>
    </>
  );
}
