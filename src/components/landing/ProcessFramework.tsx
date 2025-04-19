import React from "react";
import { ProcessStep } from "@/components/ui/ProcessStep";

export const ProcessFramework = () => {
  return (
    <section className="bg-[rgba(245,243,237,1)] flex w-full flex-col items-center justify-center mt-[182px] px-20 py-[148px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-33px] w-full max-w-[1180px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-black text-6xl font-medium leading-none tracking-[-1.5px] max-md:max-w-full max-md:text-[40px]">
          Our Process Framework
        </h2>

        <div className="flex items-stretch gap-5 font-normal flex-wrap justify-between max-md:max-w-full">
          <div className="text-[rgba(147,146,142,1)] text-[40px] leading-none tracking-[-1.5px] max-md:max-w-full">
            Defining Our Process Bylaws
          </div>
          <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] text-right leading-none mt-2.5 px-6 py-4 rounded-[25px] max-md:px-5">
            Contact Our Team
          </button>
        </div>

        <div className="bg-white border flex w-full flex-col mt-[75px] p-px rounded-[26px] border-[rgba(225,224,219,1)] border-solid max-md:max-w-full max-md:mt-10">
          <ProcessStep
            title="Ideation & Strategy"
            description="Collaborate with clients to create detailed project blueprints that outline clear objectives and sustainable solutions."
            imageUrl="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/2519235ff0f6dbf7b13e43ef8e2aff205ce4c77b?placeholderIfAbsent=true"
          />

          <ProcessStep
            title="Execution & Quality Control"
            description="Utilize advanced technology and strict safety protocols to ensure precise, efficient construction while maintaining high-quality standards."
            imageUrl="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/842998bb944d8ac8aeb209d045b3a52f1b037c3f?placeholderIfAbsent=true"
            imagePosition="left"
          />

          <ProcessStep
            title="Delivery, Realization & Evolution"
            description="Complete projects on time and on budget, followed by comprehensive reviews to refine processes and drive future innovation."
            imageUrl="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/a5e2ceafb9cb2d0d8378e404dafe265ca402ae7b?placeholderIfAbsent=true"
          />
        </div>
      </div>
    </section>
  );
};
