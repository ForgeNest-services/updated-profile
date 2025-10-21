import React from "react";
import BarbaWrapper from "@/components/commons/Barba";
import {
  AboutUsHero,
  AboutUsStory,
  AboutUsTeam,
  AboutUsValues,
} from "@/components/about";

export default function AboutUsPage() {
  return (
    <BarbaWrapper namespace="about">
      <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto space-y-6">
        <AboutUsHero />
        <AboutUsStory />
        {/* <AboutUsTeam /> */}
        <AboutUsValues />
      </main>
    </BarbaWrapper>
  );
}
