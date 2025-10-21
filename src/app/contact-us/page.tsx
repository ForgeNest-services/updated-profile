import { BarbaWrapper } from "@/components/commons";
import { ContactManager } from "@/components/contact";
import React from "react";

export default function ContactUsPage() {
  return (
    <BarbaWrapper namespace="contact-us">
      <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto space-y-6">
        <ContactManager />
      </main>
    </BarbaWrapper>
  );
}
