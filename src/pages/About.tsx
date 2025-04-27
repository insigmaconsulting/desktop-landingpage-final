import React from "react";
import { AboutTopBanner } from "@/components/about/AboutTopBanner";
import { AboutNavigation } from "@/components/about/AboutNavigation";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutActionLine } from "@/components/about/AboutActionLine";
import { AboutFooter } from "@/components/about/AboutFooter";
import { AboutContent } from "@/components/about/AboutContent";
import { AboutQuote } from "@/components/about/AboutQuote";

const About = () => {
    return (
<div className="bg-white flex flex-col items-stretch">
      <header className="bg-white flex w-full flex-col items-stretch font-normal max-md:max-w-full">
        <AboutTopBanner />
        <AboutNavigation />
      </header>
      <AboutHero />
      <AboutActionLine />
      <AboutContent />
      <main className="flex flex-col items-center">
      <AboutQuote />
        {/* <HomeTypes />
        <ProcessFramework />
        <QuoteSection />
        <WhyUs /> */}
      </main>
      <AboutFooter />
    </div>
  );
};

export default About;
