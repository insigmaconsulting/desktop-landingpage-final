// import React from "react";

// export const AboutContent = () => {
//   return (
//     <section className="bg-[rgba(245,243,237,1)] flex w-full flex-col overflow-hidden items-center justify-center px-20 py-32 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
//       <div className="flex mb-[30px] w-full max-w-[91.5%] mx-auto flex-col max-md:mb-2.5">
//         <div className="rounded-[26px] mt-[75px]">
//           <div className="rounded-[26px] max-md:mt-10">
//             <div className="gap-5 flex h-[490px] max-md:flex-col max-md:items-stretch">
//             <div className="bg-[rgba(49,49,49,1)] border w-[74px] text-3xl text-white whitespace-nowrap text-center leading-none h-[74px] px-[22px] rounded-[10px] border-[rgba(205,205,205,1)] border-solid max-md:pl-5">
//               01
//             </div>
//               <div className="w-[50%] max-md:w-full max-md:ml-0">
//                 <img
//                   src="/images/Landing/ProcessFramework1.jpg"
//                   alt="About Us"
//                   // className="aspect-[0.93] object-cover w-full h-full rounded-3xl max-md:max-w-full max-md:mt-10"
//                   className="aspect-[0.93] object-cover object-left w-full h-full rounded-3xl max-md:max-w-full max-md:mt-10"
//                 />
//               </div>
//               <div className="w-[50%] ml-5 max-md:w-full max-md:ml-0">
//                 <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto ml-[35px] mr-[35px] mt-[22%]                             max-md:max-w-full max-md:mt-10">
//                   <h3 className="tracking-[-1.2px]">1. Ideation & Strategy</h3>
//                   <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[30px] max-md:max-w-full">
//                     Utilize advanced technology and strict safety protocols
//                     to ensure precise, efficient construction while
//                     maintaining high-quality standards.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="rounded-[26px] max-md:mt-10">
//             {/* <div className="gap-5 flex           max-md:flex-col max-md:items-stretch"> */}
//             <div className="gap-5 flex h-[490px] max-md:flex-col max-md:items-stretch">
//             <div className="bg-[rgba(49,49,49,1)] border w-[74px] text-3xl text-white whitespace-nowrap text-center leading-none h-[74px] px-[22px] rounded-[10px] border-[rgba(205,205,205,1)] border-solid max-md:pl-5">
//               02
//             </div>
//               <div className="w-[50%] ml-5 max-md:w-full max-md:ml-0">
//                 <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto ml-[35px] mr-[35px] mt-[22%]                             max-md:max-w-full max-md:mt-10">
//                   <h3 className="tracking-[-1.2px]">2. Execution & Quality Control</h3>
//                   <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[30px] max-md:max-w-full">
//                     We are visionary RCC specialists, turning ambitious visions
//                     into enduring landmarks through cutting-edge technology and
//                     masterful craftsmanship.
//                   </p>
//                 </div>
//               </div>
//               <div className="w-[50%] max-md:w-full max-md:ml-0">
//                 <img
//                   src="/images/Landing/ProcessFramework2.jpg"
//                   alt="About Us"
//                   // className="aspect-[0.93] object-cover w-full h-full rounded-3xl max-md:max-w-full max-md:mt-10"
//                   className="aspect-[0.93] object-cover object-center w-full h-full rounded-3xl max-md:max-w-full max-md:mt-10"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="rounded-[26px] max-md:mt-10">
//             {/* <div className="gap-5 flex           max-md:flex-col max-md:items-stretch"> */}
//             <div className="gap-5 flex h-[490px] max-md:flex-col max-md:items-stretch">
//             <div className="bg-[rgba(49,49,49,1)] border w-[74px] text-3xl text-white whitespace-nowrap text-center leading-none h-[74px] px-[22px] rounded-[10px] border-[rgba(205,205,205,1)] border-solid max-md:pl-5">
//               03
//             </div>
//               <div className="w-[50%] max-md:w-full max-md:ml-0">
//                 <img
//                   src="/images/Landing/ProcessFramework3.jpg"
//                   alt="About Us"
//                   // className="aspect-[0.93] object-cover w-full h-full rounded-3xl max-md:max-w-full max-md:mt-10"
//                   className="aspect-[0.93] object-cover object-center w-full h-full rounded-3xl max-md:max-w-full max-md:mt-10"
//                 />
//               </div>
//               <div className="w-[50%] ml-5 max-md:w-full max-md:ml-0">
//                 <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto ml-[35px] mr-[35px] mt-[22%]                             max-md:max-w-full max-md:mt-10">
//                   <h3 className="tracking-[-1.2px]">3. Delivery, Realization & Evolution</h3>
//                   <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[30px] max-md:max-w-full">
//                     Complete projects on time and on budget, followed by
//                     comprehensive reviews to refine processes
//                     and drive future innovation.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center">
//         <div className="bg-white rounded-full w-2 h-2"></div>
//       </div>
//     </section>
//   );
// };


// 
//  New code
// 

// import React from "react";

// export const AboutContent = () => {
//   return (
//     <section className="bg-[rgba(245,243,237,1)] flex w-full flex-col overflow-hidden items-center justify-center py-48 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
//       <div className="flex mb-[0px] w-full max-w-[82%] mx-auto flex-col max-md:mb-2.5">

//         <div className="rounded-[26px] mb-[470px] max-md:mt-10">

//           {/* <div className="rounded-[26px] max-md:mt-10"> */}

//           <div className="gap-5 gap-0 flex h-[490px] max-md:flex-col max-md:items-stretch">

//             <div className="w-[41%] ml-0 max-md:w-full max-md:ml-0">

//               <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto ml-[0px] mr-[0px] mt-[0%] max-md:max-w-full max-md:mt-10">
//                 <div
//                   className="bg-[rgba(49,49,49,1)] border border-[rgba(205,205,205,1)] w-[74px] h-[74px] text-3xl text-white rounded-[10px] flex items-center justify-center">
//                   01
//                 </div>

//                 <h3 className="tracking-[-1.2px] text-[50px] mt-8">About Us</h3>
//                 <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[30px] max-md:max-w-full">
//                   Borekar Consultancy is a forward-thinking RCC contractor delivering turnkey
//                   projects through advanced technology and meticulous planning. Our skilled team
//                   ensures quality work, strict safety standards, and cost efficiency while building strong,
//                   transparent relationships with every client.
//                 </p>
//               </div>
//             </div>
//             <div className="w-[18%] flex justify-center max-md:w-full max-md:ml-0">
//               <div className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center">
//                 <div className="bg-white rounded-full w-2 h-2"></div>
//               </div>
//             </div>
//             <div className="w-[41%] max-md:w-full max-md:ml-0">
//               <img
//                 src="/images/About/AboutUs.jpg"
//                 alt="About Us"
//                 className="aspect-[0.93] object-cover object-center w-full h-[675px] rounded-3xl max-md:max-w-full max-md:mt-10"
//               />
//             </div>
//           </div>
//           {/* </div> */}
//         </div>
//       </div>

//       {/* Our Vision */}

//       <div className="flex mb-[0px] w-full max-w-[82%] mx-auto flex-col max-md:mb-2.5">

//         <div className="rounded-[26px]  mb-[470px]  max-md:mt-10">

//           {/* <div className="rounded-[26px] max-md:mt-10"> */}

//           <div className="gap-5 gap-0 flex h-[490px] max-md:flex-col max-md:items-stretch">

//             <div className="w-[41%] max-md:w-full max-md:ml-0">
//               <img
//                 src="/images/About/AboutVision.jpg"
//                 alt="About Us"
//                 className="aspect-[0.93] object-cover object-center w-full h-[675px] rounded-3xl max-md:max-w-full max-md:mt-10"
//               />
//             </div>


//             <div className="w-[18%] flex justify-center max-md:w-full max-md:ml-0">
//               <div className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center">
//                 <div className="bg-white rounded-full w-2 h-2"></div>
//               </div>
//             </div>

//             <div className="w-[41%] ml-0 max-md:w-full max-md:ml-0">

//               <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto ml-[0px] mr-[0px] mt-[0%] max-md:max-w-full max-md:mt-10">
//                 <div
//                   className="bg-[rgba(49,49,49,1)] border border-[rgba(205,205,205,1)] w-[74px] h-[74px] text-3xl text-white rounded-[10px] flex items-center justify-center">
//                   02
//                 </div>

//                 <h3 className="tracking-[-1.2px] text-[50px] mt-8">Our Vision</h3>
//                 <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[30px] max-md:max-w-full">
//                 We aim to be the industry leader in RCC construction, renowned for innovative planning, 
//                 skilled execution, and transparent communication. Our vision is to consistently deliver 
//                 top-quality projects on time and within budget, setting new benchmarks in efficiency and 
//                 client satisfaction.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* </div> */}
//         </div>
//       </div>

//       {/* Our Mission */}

//       <div className="flex mb-[0px] w-full max-w-[82%] mx-auto flex-col max-md:mb-2.5">

//         <div className="rounded-[26px]  mb-[0px]  max-md:mt-10">

//           {/* <div className="rounded-[26px] max-md:mt-10"> */}

//           <div className="gap-5 gap-0 flex h-[490px] max-md:flex-col max-md:items-stretch">

//             <div className="w-[41%] ml-0 max-md:w-full max-md:ml-0">

//               <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto ml-[0px] mr-[0px] mt-[0%] max-md:max-w-full max-md:mt-10">
//                 <div
//                   className="bg-[rgba(49,49,49,1)] border border-[rgba(205,205,205,1)] w-[74px] h-[74px] text-3xl text-white rounded-[10px] flex items-center justify-center">
//                   03
//                 </div>

//                 <h3 className="tracking-[-1.2px] text-[50px] mt-8">Our Mission</h3>
//                 <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[30px] max-md:max-w-full">
//                 Our mission is to revolutionize construction by integrating advanced systems and 
//                 expert planning to deliver projects on schedule and within budget. We focus on safety, 
//                 quality, and honest communication to save time and money while exceeding client 
//                 expectations.
//                 </p>
//               </div>
//             </div>
//             <div className="w-[18%] flex justify-center max-md:w-full max-md:ml-0">
//               <div className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center">
//                 <div className="bg-white rounded-full w-2 h-2"></div>
//               </div>
//             </div>
//             <div className="w-[41%] max-md:w-full max-md:ml-0">
//               <img
//                 src="/images/About/AboutMission.jpg"
//                 alt="About Us"
//                 className="aspect-[0.93] object-cover object-center w-full h-[675px] rounded-3xl max-md:max-w-full max-md:mt-10"
//               />
//             </div>
//           </div>

//           <div className="w-[100%] mt-[350px] flex justify-center max-md:w-full max-md:ml-0">
//             <div className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center">
//               <div className="bg-white rounded-full w-2 h-2"></div>
//             </div>
//           </div>
//           {/* </div> */}
//         </div>
//       </div>

//     </section>
//   );
// };

import React, { useRef, useState, useEffect } from "react";

export const AboutContent = () => {
  // refs for section and first/last circles
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstCircleRef = useRef<HTMLDivElement>(null);
  const lastCircleRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // store offsets in refs so they persist without causing re-renders
  const startOffset = useRef<number>(0);
  const maxHeight = useRef<number>(0);

  // compute positions of first and last circle within the section
  useEffect(() => {
    const computeOffsets = () => {
      if (!sectionRef.current || !firstCircleRef.current || !lastCircleRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const firstRect = firstCircleRef.current.getBoundingClientRect();
      const lastRect = lastCircleRef.current.getBoundingClientRect();
      // offset from top of section to center of first circle
      startOffset.current = firstRect.top - sectionRect.top + firstRect.height / 2;
      // total distance between centers of first and last circles
      maxHeight.current = (lastRect.top - sectionRect.top + lastRect.height / 2) - startOffset.current;
    };

    computeOffsets();
    window.addEventListener("resize", computeOffsets);
    return () => window.removeEventListener("resize", computeOffsets);
  }, []);

  // update lineHeight based on scroll, starting when first circle reaches mid viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // trigger point: halfway down the viewport
      const triggerPoint = viewportH / 2;
      // how far we've scrolled past the start point relative to trigger
      const scrolled = triggerPoint - (top + startOffset.current);
      // clamp between 0 and maxHeight
      const newH = Math.max(0, Math.min(scrolled, maxHeight.current));
      setLineHeight(newH);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[rgba(245,243,237,1)] flex w-full flex-col overflow-hidden items-center justify-center py-48 max-md:max-w-full max-md:px-5 max-md:py-[100px]"
    >
      {/* Animated line from first to last circle */}
      <div
        className="absolute w-[2px] bg-[rgba(208,172,128,1)] left-1/2 transform -translate-x-1/2"
        style={{
          top: `${startOffset.current}px`,
          height: `${lineHeight}px`,
          zIndex: 0
        }}
      />

      {/* First block: About Us */}
      <div className="flex mb-[0px] w-full max-w-[82%] mx-auto flex-col max-md:mb-2.5">
        <div className="rounded-[26px] mb-[470px] max-md:mt-10">
          <div className="gap-5 flex h-[490px] max-md:flex-col max-md:items-stretch">
            <div className="w-[41%] max-md:w-full">
              <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto max-md:mt-10">
                <div className="bg-[rgba(49,49,49,1)] border border-[rgba(205,205,205,1)] w-[74px] h-[74px] text-3xl text-white rounded-[10px] flex items-center justify-center">
                  01
                </div>
                <h3 className="tracking-[-1.2px] text-[50px] mt-8">About Us</h3>
                <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] mt-[30px] max-md:max-w-full">
                  Borekar Consultancy is a forward-thinking RCC contractor delivering turnkey
                  projects through advanced technology and meticulous planning. Our skilled team
                  ensures quality work, strict safety standards, and cost efficiency while building strong,
                  transparent relationships with every client.
                </p>
              </div>
            </div>
            <div className="w-[18%] flex justify-center max-md:w-full">
              <div ref={firstCircleRef} className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center z-10">
                <div className="bg-white rounded-full w-2 h-2"></div>
              </div>
            </div>
            <div className="w-[41%] max-md:w-full">
              <img
                src="/images/About/AboutUs.jpg"
                alt="About Us"
                className="aspect-[0.93] object-cover object-center w-full h-[675px] rounded-3xl max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second block: Our Vision */}
      <div className="flex mb-[0px] w-full max-w-[82%] mx-auto flex-col max-md:mb-2.5">
        <div className="rounded-[26px] mb-[470px] max-md:mt-10">
          <div className="gap-5 flex h-[490px] max-md:flex-col max-md:items-stretch">
            <div className="w-[41%] max-md:w-full">
              <img
                src="/images/About/AboutVision.jpg"
                alt="Our Vision"
                className="aspect-[0.93] object-cover object-center w-full h-[675px] rounded-3xl max-md:mt-10"
              />
            </div>
            <div className="w-[18%] flex justify-center max-md:w-full">
              <div className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center z-10">
                <div className="bg-white rounded-full w-2 h-2"></div>
              </div>
            </div>
            <div className="w-[41%] max-md:w-full">
              <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto max-md:mt-10">
                <div className="bg-[rgba(49,49,49,1)] border border-[rgba(205,205,205,1)] w-[74px] h-[74px] text-3xl text-white rounded-[10px] flex items-center justify-center">
                  02
                </div>
                <h3 className="tracking-[-1.2px] text-[50px] mt-8">Our Vision</h3>
                <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] mt-[30px] max-md:max-w-full">
                  We aim to be the industry leader in RCC construction, renowned for innovative planning,
                  skilled execution, and transparent communication. Our vision is to consistently deliver
                  top-quality projects on time and within budget, setting new benchmarks in efficiency and
                  client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third block: Our Mission */}
      <div className="flex mb-[0px] w-full max-w-[82%] mx-auto flex-col max-md:mb-2.5">
        <div className="rounded-[26px] mb-[0px] max-md:mt-10">
          <div className="gap-5 flex h-[490px] max-md:flex-col max-md:items-stretch">
            <div className="w-[41%] max-md:w-full">
              <div className="flex flex-col text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto max-md:mt-10">
                <div className="bg-[rgba(49,49,49,1)] border border-[rgba(205,205,205,1)] w-[74px] h-[74px] text-3xl text-white rounded-[10px] flex items-center justify-center">
                  03
                </div>
                <h3 className="tracking-[-1.2px] text-[50px] mt-8">Our Mission</h3>
                <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] mt-[30px] max-md:max-w-full">
                  Our mission is to revolutionize construction by integrating advanced systems and
                  expert planning to deliver projects on schedule and within budget. We focus on safety,
                  quality, and honest communication to save time and money while exceeding client
                  expectations.
                </p>
              </div>
            </div>
            <div className="w-[18%] flex justify-center max-md:w-full">
              <div className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center z-10">
                <div className="bg-white rounded-full w-2 h-2"></div>
              </div>
            </div>
            <div className="w-[41%] max-md:w-full">
              <img
                src="/images/About/AboutMission.jpg"
                alt="Our Mission"
                className="aspect-[0.93] object-cover object-center w-full h-[675px] rounded-3xl max-md:mt-10"
              />
            </div>
          </div>
          <div className="w-[100%] mt-[350px] flex justify-center max-md:w-full">
            <div ref={lastCircleRef} className="bg-[rgba(208,172,128,1)] rounded-full w-7 h-7 flex items-center justify-center z-10">
              <div className="bg-white rounded-full w-2 h-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};