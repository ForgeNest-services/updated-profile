import React from "react";
import GlobeSection from "./GlobeSection";
import ContactForm from "./ContactForm";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

export default function ContactManager() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-8 py-20 lg:py-32">
      {/* Title */}
      <div className="text-center space-y-6">
        <TitleAnimation className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
          Let’s build something exceptional
        </TitleAnimation>
        <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-foreground rounded-full mx-auto" />
        <TextAnimation
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed"
          animationType="fadeUp"
          delay={0.2}
        >
          Tell us about your project, timeline, and goals. We’ll get back within
          24–48 hours with next steps and an estimate.
        </TextAnimation>
      </div>
      <div className="mt-10 flex flex-col items-center w-full">
        <GlobeSection />
        <ContactForm />
      </div>
    </section>
  );
}
