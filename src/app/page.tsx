import {
  About,
  Hero,
  WhatWeDo,
  OurProcess,
  Expertise,
  Newsletter,
  Footer,
} from "@/components/home";

export default function Home() {
  return (
    <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto p-4 space-y-6">
      <Hero />
      <About />
      <WhatWeDo />
      <OurProcess />
      <Expertise />
      <Newsletter />
      <Footer />
    </main>
  );
}
