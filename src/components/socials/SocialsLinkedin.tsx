import React from "react";

export const SocialsLinkedin = () => {
  return (
    <section className="bg-[rgba(245,243,237,1)] w-full mt-[100px] mx-auto px-0">
      <div className="flex flex-col items-center justify-center w-full max-w-[82%] mx-auto py-20">
        <div className="flex w-full items-stretch gap-5 flex-wrap justify-between mt-[74px] max-md:max-w-full max-md:mt-10">
          <div className="flex flex-col items-stretch text-[50px] font-medium tracking-[-1.5px] leading-[1.1] max-md:max-w-full max-md:text-[40px]">
            <h1 className="text-[rgba(147,146,142,1)] max-md:max-w-full max-md:text-[40px]">
              Let's Connect And Upscale
            </h1>
            <h1 className="text-[rgba(147,146,142,1)] max-md:max-w-full max-md:text-[40px]">
              Our Professional Reach
            </h1>
            <div className="text-black mt-[0px] max-md:text-[40px] max-md:mt-10">
              With LinkedIn
            </div>
          </div>
          <a
            href="https://www.linkedin.com/company/larsen-&-toubro-limited/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center self-center bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] font-normal leading-none px-[19px] py-4 rounded-[25px] max-md:pr-5">
            LinkedIn
            <img
              src="/images/Socials/SocialsLinkedin.svg"
              alt="LinkedIn icon"
              className="w-5 h-5 ml-2"
            />
          </a>
        </div>

        <div className="w-full max-w-[100%] mt-[75px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[50%] flex justify-center mx-auto max-md:w-full max-md:ml-0">
              <img
                src="/images/Socials/SocialsLinkedin1.jpg"
                alt="Reviewer"
                className="aspect-[1] object-cover object-top w-[90%] shrink-0 max-w-full rounded-[25px] max-md:mt-10"
              />
            </div>
            <div className="w-[50%] flex justify-center mx-auto max-md:w-full max-md:ml-0">
              <img
                src="/images/Socials/SocialsLinkedin2.jpg"
                alt="Reviewer"
                className="aspect-[3] object-cover object-center w-[90%] shrink-0 max-w-full rounded-[25px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};