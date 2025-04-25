import React from "react";
import { TopBanner } from "@/components/layout/TopBanner";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/landing/Hero";
import { ActionLine } from "@/components/landing/ActionLine";
import { AboutSection } from "@/components/landing/AboutSection";
import { HomeTypes } from "@/components/landing/HomeTypes";
import { ProcessFramework } from "@/components/landing/ProcessFramework";
import { QuoteSection } from "@/components/landing/QuoteSection";
import { WhyUs } from "@/components/landing/WhyUs";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <header className="bg-white flex w-full flex-col items-stretch font-normal max-md:max-w-full">
        <TopBanner />
        <Navigation />
      </header>
      <Hero />
      <ActionLine />
      <AboutSection />
      <main className="flex flex-col items-center">
        <HomeTypes />
        <ProcessFramework />
        <QuoteSection />
        <WhyUs />
      </main>
      < Footer />
    </div>
  );
};

export default Index;
