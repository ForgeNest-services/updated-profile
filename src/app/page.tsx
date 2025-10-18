import { About, Hero } from "@/components/home";

export default function Home() {
  return (
    <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto p-4">
      <Hero />
      <About/>
    </main>
  );
}
