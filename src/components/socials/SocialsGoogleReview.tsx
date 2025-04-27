import React from "react";

export const SocialsGoogleReview = () => {
  return (
    <section className="bg-red-00 w-full max-w-[82%] mx-auto px-0">
      <div className="flex w-full items-stretch gap-5 flex-wrap justify-between mt-[74px] max-md:max-w-full max-md:mt-10">
        <div className="flex flex-col items-stretch text-[50px] font-medium tracking-[-1.5px] leading-[1.1] max-md:max-w-full max-md:text-[40px]">
          <h1 className="text-[rgba(147,146,142,1)] max-md:max-w-full max-md:text-[40px]">
            Find Us And Share Your
          </h1>
          <h1 className="text-[rgba(147,146,142,1)] max-md:max-w-full max-md:text-[40px]">
            Experience On
          </h1>
          <div className="text-black mt-[0px] max-md:text-[40px] max-md:mt-10">
            Google Reviews
          </div>
        </div>
        <a
          href="https://g.co/kgs/upyrG28"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center self-center bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] font-normal leading-none px-[19px] py-4 rounded-[25px] max-md:pr-5">
          Google Reviews
          <img
            src="/images/Socials/SocialsGoogle.svg"
            alt="Google icon"
            className="w-5 h-5 ml-2"
          />
        </a>
      </div>

      <div className="bg-red-00 w-full max-w-[100%] mt-[75px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="bg-red-00 w-[54%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch text-[25px] font-normal text-center tracking-[-0.5px] mt-3 max-md:max-w-full max-md:mt-10">
              <h2 className="text-black leading-[1.3] self-center">
                Temporary Borekar
              </h2>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/images/Socials/SocialsStar.svg"
                    alt="Star"
                    className="w-6 h-6 object-contain"
                  />
                ))}
              </div>
              <blockquote className="text-[rgba(147,146,142,1)] leading-8 mt-[13px] max-md:max-w-full max-md:mt-10">
                '' Great experience! Their team was efficient, <br />
                attentive, and used advanced technology to ensure <br />
                top-notch results. ''
              </blockquote>
            </div>
          </div>
          <div className="bg-red-00 w-[46%] flex justify-center mx-auto max-md:w-full max-md:ml-0">
            <img
              src="/images/Socials/SocialsGR1.jpg"
              alt="Reviewer"
              className="aspect-[1.21] object-cover object-center w-[239px] shrink-0 max-w-full rounded-[25px] max-md:mt-10"
            />
          </div>
        </div>
      </div>

      <div className="bg-red-00 w-full max-w-[100%] mt-[75px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="bg-red-00 w-[46%] flex justify-center mx-auto max-md:w-full max-md:ml-0">
            <img
              src="/images/Socials/SocialsGR2.jpg"
              alt="Reviewer"
              className="aspect-[1.21] object-cover object-center w-[239px] shrink-0 max-w-full rounded-[25px] max-md:mt-10"
            />
          </div>
          <div className="bg-red-00 w-[54%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch text-[25px] font-normal text-center tracking-[-0.5px] mt-3 max-md:max-w-full max-md:mt-10">
              <h2 className="text-black leading-[1.3] self-center">
                Aishwarya Lokhande
              </h2>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/images/Socials/SocialsStar.svg"
                    alt="Star"
                    className="w-6 h-6 object-contain"
                  />
                ))}
              </div>
              <blockquote className="text-[rgba(147,146,142,1)] leading-8 mt-[13px] max-md:max-w-full max-md:mt-10">
                " Borekar Consultancy delivered our project on time with  <br />
                exceptional quality and professionalism. Highly  <br />
                recommend their innovative approach! "
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};