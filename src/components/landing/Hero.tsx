// import React from "react";

// export const Hero = () => {
//   return (
//     // <section className="flex flex-col self-center relative min-h-[686px] w-[1388px] max-w-full overflow-hidden text-[70px] text-white font-normal leading-[1.1] pt-[379px] pb-[72px] px-20 rounded-[30px] max-md:text-[40px] max-md:pt-[100px] max-md:px-5">
//     // <section className="w-full max-w-[1440px] min-h-[686px] max-md:min-h-[400px] mx-auto relative overflow-hidden text-[70px] text-white font-normal leading-[1.1] px-10 pt-[250px] pb-20 rounded-[30px] max-md:text-[40px] max-md:px-5">
//     <section className="bg-red-100 w-full aspect-[16/6.5] max-w-[1470px] mx-auto relative overflow-hidden text-[70px] text-white font-normal leading-[1.1] px-10 pt-[250px] pb-20 rounded-[30px] max-md:text-[40px] max-md:px-5">
//       <img
//         // src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/63fa0e571f94f7ab9696610a2c8ff7001a9dd173?placeholderIfAbsent=true"
//         src="/images/Landing/landing-hero.jpg"
//         alt="Hero Background"
//         className="absolute h-full w-full object-cover inset-0"
//       />
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20 z-0" />

//       {/* <div className="relative flex w-[530px] max-w-full flex-col max-md:text-[40px]"> */}
//       {/* Foreground Content */}
//       <div className="relative flex w-[630px] max-w-full flex-col ml-16 mt-11 max-md:text-[40px]">
//         <h1 className="tracking-[-2.1px] max-md:text-[40px]">Experts in</h1>
//         <div className="tracking-[-2.1px] self-stretch mt-1 max-md:max-w-full max-md:text-[40px]">
//           RCC Construction
//         </div>
//         <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] leading-none mt-[27px] px-8 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit max-md:px-5">
//           Get in touch today
//         </button>
//       </div>
//     </section>
//   );
// };


// import React from "react";

// export const Hero = () => (
//   <section
//     className={
//       "relative overflow-hidden w-full max-w-[96.5%] max-sm:w-[93%] max-w-[1470px] mx-auto rounded-[30px] " +
//       // "aspect-[16/9] xl:aspect-auto xl:h-[597px] bg-red-100 " +
//       "aspect-[16/9] sm:aspect-[2/1] xl:aspect-auto xl:h-[598px] " +
//       "px-10 max-md:px-5 md:pt-[250px]"
//     }
//   >
//     {/* Background Image */}
//     <img
//       src="/images/Landing/landing-hero.jpg"
//       alt="Hero Background"
//       className="absolute inset-0 w-full h-full object-cover"
//     />

//     {/* Dark Overlay */}
//     <div className="absolute inset-0 bg-black/50 z-0" />

//     {/* Foreground Content */}
//     <div
//       className={
//         "relative z-10 w-full flex flex-col max-w-full " +
//         "max-md:mt-5 md:absolute md:left-[7%] md:top-[50%]"
//       }
//     >
//       <h1 className="text-white text-[clamp(20px,6vw,70px)] font-normal leading-[1.1] tracking-[-2.1px]">
//         Experts in
//       </h1>
//       <div className="text-white text-[clamp(20px,6vw,70px)] font-normal leading-[1.1] tracking-[-2.1px] mt-1">
//         RCC Construction
//       </div>
//       <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] leading-none mt-[1.6%] px-8 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit max-md:px-5">
//         Get in touch today
//       </button>
//     </div>
//   </section>
// );

import React from "react";

export const Hero = () => (
  <>
    <section
      // className={
      //   "relative overflow-hidden w-full max-w-[96.5%] max-sm:w-[93%] max-w-[1470px] mx-auto rounded-[30px] " +
      //   "aspect-[16/9] sm:aspect-[2/1] xl:aspect-auto xl:h-[598px] " +
      //   "px-10 max-md:px-5 md:pt-[250px]"
      // }
      className={
        "relative overflow-hidden w-full max-w-[96.5%] max-sm:w-[92%] max-w-[1470px] mx-auto rounded-[18px] sm:rounded-[15px] md:rounded-[18px] lg:rounded-[30px] " +
        "aspect-[16/9] sm:aspect-[2/1] xl:aspect-auto xl:h-[598px] " +
        "px-10 max-md:px-5 md:pt-[250px]"
      }
      // Rounded: 10px default (<sm), 15px sm–md, 30px md+
        // "rounded-[10px] sm:rounded-[15px] md:rounded-[18px] lg:rounded-[30px]" +
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
