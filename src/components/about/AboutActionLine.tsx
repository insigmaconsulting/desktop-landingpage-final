import React from "react";

export const AboutActionLine = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center text-center justify-center px-20 py-[151px] mb-[37px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-33px] w-full max-w-[1084px] flex-col items-center max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-[rgba(49,49,49,1)] text-[50px] font-medium leading-[1.2] tracking-[-1.5px] max-md:max-w-full max-md:text-[40px]">
          Turnkey Construction, Crafted for Your Lifestyle.
        </h2>
        <p className="text-[rgba(147,146,142,1)] text-[28px] font-normal leading-[1.3] tracking-[-0.75px] self-center mt-8 max-md:max-w-full">
          Bespoke bungalows, villas, and farmhouses—designed with elegance,
          built with expertise,
        </p>
        <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] leading-none mt-[27px] px-8 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit max-md:px-5">
          Get in touch today
        </button>
      </div>
    </section>
  );
};
