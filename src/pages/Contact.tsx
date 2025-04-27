import React from "react";
import { ContactTopBanner } from "@/components/contact/ContactTopBanner";
import { ContactNavigation } from "@/components/contact/ContactNavigation";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactVisit } from "@/components/contact/ContactVisit";
import { ContactFooter } from "@/components/contact/ContactFooter";

const Contact = () => {
    return (
<div className="bg-white flex flex-col items-stretch">
      <header className="bg-white flex w-full flex-col items-stretch font-normal max-md:max-w-full">
        <ContactTopBanner />
        <ContactNavigation />
      </header>
      <ContactHero />
      <ContactForm />
      <ContactVisit />
      <main className="flex flex-col items-center">
      </main>
      <ContactFooter />
    </div>
  );
};

export default Contact;
