import React from "react";

export const QuoteSection = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[404px] overflow-hidden items-center text-white font-normal text-center justify-center px-20 py-[95px] rounded-3xl max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/7940471a92bd95b2fb842547bf8608aefed9123a?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[853px] max-w-full flex-col items-stretch">
        <div className="text-[25px] leading-[1.3] tracking-[-1px] self-center">
          Nikhil Sawant - 2024 Google Review
        </div>
        <div className="text-[50px] leading-[55px] tracking-[-1.5px] mt-8 max-md:max-w-full max-md:text-[40px] max-md:leading-[49px]">
          "The quality of the build is exceptional and the level of service I
          received was second to none."
        </div>
      </div>
    </section>
  );
};
