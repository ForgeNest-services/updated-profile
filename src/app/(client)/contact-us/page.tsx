import { ContactManager } from "@/components/contact";
import React from "react";

export default function ContactUsPage() {
  return (
    <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto space-y-6">
      <ContactManager />
    </main>
  );
}
