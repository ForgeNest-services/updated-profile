import React from "react";
import {
  AboutUsHero,
  AboutUsStory,
  AboutUsTeam,
  AboutUsValues,
} from "@/components/about";

export default function AboutUsPage() {
  return (
    <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto space-y-6">
      <AboutUsHero />
      <AboutUsStory />
      {/* <AboutUsTeam /> */}
      <AboutUsValues />
    </main>
  );
}
