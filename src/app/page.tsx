import {
  About,
  Hero,
  WhatWeDo,
  OurProcess,
  Expertise,
  Newsletter,
} from "@/components/home";
import BarbaWrapper from "@/components/commons/Barba";

export default function Home() {
  return (
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
  );
}
