import React from "react";
import { SocialsTopBanner } from "@/components/socials/SocialsTopBanner";
import { SocialsNavigation } from "@/components/socials/SocialsNavigation";
import { SocialsHero } from "@/components/socials/SocialsHero";
import { SocialsFooter } from "@/components/socials/SocialsFooter";
import { SocialsGoogleReview } from "@/components/socials/SocialsGoogleReview";
import { SocialsInstagram } from "@/components/socials/SocialsInstagram";
import { SocialsFacebook } from "@/components/socials/SocialsFacebook";
import { SocialsLinkedin } from "@/components/socials/SocialsLinkedin";

const Socials = () => {
    return (
<div className="bg-white flex flex-col items-stretch">
      <header className="bg-white flex w-full flex-col items-stretch font-normal max-md:max-w-full">
        <SocialsTopBanner />
        <SocialsNavigation />
      </header>
      {/* <SocialsHero /> */}
      <SocialsGoogleReview />
      <SocialsInstagram />
      <SocialsFacebook />
      <SocialsLinkedin />
      <main className="flex flex-col items-center">
      </main>
      <SocialsFooter />
    </div>
  );
};

export default Socials;
