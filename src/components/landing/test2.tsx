import React from "react";

export const Hero = () => (
  <>
    <section
      className={
        "relative overflow-hidden w-full max-w-[96.5%] max-sm:w-[93%] max-w-[1470px] mx-auto " +
        // Rounded: 10px default (<sm), 15px sm–md, 30px md+
        "rounded-[10px] sm:rounded-[15px] md:rounded-[30px] " +
        "aspect-[16/9] sm:aspect-[2/1] xl:aspect-auto xl:h-[598px] " +
        "px-10 max-md:px-5 md:pt-[250px]"
      }
    >
      {/* Background Image */}
      <img
        src="/images/Landing/landing-hero.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content for MD and above */}
      <div 
      className="hidden md:flex flex-col relative z-10 w-full max-w-full mt-5 md:absolute md:left-[7%] md:top-[50%]"
      >
        <h1 className="text-white text-[clamp(20px,6vw,70px)] font-normal leading-[1.1] tracking-[-2.1px]">
          Experts in
        </h1>
        <div className="text-white text-[clamp(20px,6vw,70px)] font-normal leading-[1.1] tracking-[-2.1px] mt-1">
          RCC Construction
        </div>
        <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] leading-none mt-[1.6%] px-8 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
          Get in touch today
        </button>
      </div>
    </section>

    {/* Content for SM and above, below MD */}
    <div className="hidden bg-red-100 sm:flex  sm:flex-col md:hidden mt-5 w-full max-w-[96.5%] max-sm:w-[93%] mx-auto px-0">
      <h1 className="text-black text-[clamp(20px,6vw,70px)] font-normal leading-[1.1] tracking-[-2.1px]">
        Experts in
      </h1>
      <div className="text-black text-[clamp(20px,6vw,70px)] font-normal leading-[1.1] tracking-[-2.1px] mt-1">
        RCC Construction
      </div>
      <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] leading-none mt-4 px-8 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
        Get in touch today
      </button>
    </div>

    {/* Content for below SM */}
    <div className="sm:hidden mt-5 w-full max-w-[96.5%] max-sm:w-[91%] mx-auto px-0">
      <h1 className="text-black text-[clamp(40px,6vw,70px)] font-normal leading-[1.1] tracking-[-2.1px]">
        Experts in
      </h1>
      <div className="text-black text-[clamp(40px,6vw,70px)] font-normal leading-[1.1] tracking-[-2.1px] mt-1">
        RCC Construction
      </div>
      <button className="bg-[rgba(208,172,128,1)] text-md text-[rgba(49,49,49,1)] leading-none mt-2 px-8 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
        Get in touch today
      </button>
    </div>
  </>
);
