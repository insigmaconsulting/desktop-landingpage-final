import React from "react";

export const QuoteSection = () => {
  return (
    <section className="w-full max-w-[96.5%] mt-[125px]">
      <div className="flex flex-col self-stretch relative min-h-[535px] overflow-hidden items-center text-white font-normal text-center justify-center px-0 rounded-3xl max-md:max-w-full max-md:pt-[100px] max-md:px-5">
        <img
          src="/images/QuoteSection.jpg"
          alt="Hero background"
          className="absolute h-full w-full object-cover inset-0"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative flex w-[67%] max-w-full flex-col items-stretch">
          <div className="text-[25px] leading-[1.3] tracking-[-1px] self-center">
            Nikhil Sawant - 2024 Google Review
          </div>
          <div className="text-[55px] leading-[55px] tracking-[-1.5px] mt-8 max-md:max-w-full max-md:text-[40px] max-md:leading-[49px]">
            "The quality of the build is exceptional and
            the level of service I received was second
            to none."
          </div>
        </div>
      </div>
    </section>
  );
};
