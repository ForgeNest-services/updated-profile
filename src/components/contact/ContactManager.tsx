import React from "react";
import GlobeSection from "./GlobeSection";
import ContactForm from "./ContactForm";

export default function ContactManager() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-start py-20 lg:py-32">
      <GlobeSection />
      <ContactForm />
    </section>
  );
}
