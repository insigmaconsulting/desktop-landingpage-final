import React from "react";

export const AboutSection = () => {
  return (
    <section className="bg-[rgba(245,243,237,1)] flex w-full flex-col overflow-hidden items-center justify-center px-20 py-32 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-27px] w-full max-w-[1181px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-black text-[50px] font-medium leading-[1.1] tracking-[-1.5px] max-md:text-[40px]">
          Who We Are
        </h2>
        <div className="bg-white border mt-[70px] pl-px pr-[54px] py-px rounded-[26px] border-[rgba(225,224,219,1)] border-solid max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[54%] max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/9eee8a66a431b7c503c9a4b085cd2da06350993d?placeholderIfAbsent=true"
                alt="About Us"
                className="aspect-[0.93] object-contain w-full grow rounded-3xl max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col self-stretch text-[40px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto max-md:max-w-full max-md:mt-10">
                <h3 className="tracking-[-1.2px]">Building Trust</h3>
                <div className="tracking-[-1.2px]">Crafting Excellence</div>
                <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[39px] max-md:max-w-full">
                  We are visionary RCC specialists, turning ambitious visions
                  into enduring landmarks through cutting-edge technology and
                  masterful craftsmanship.
                </p>
                <button className="bg-[rgba(208,172,128,1)] text-sm leading-none mt-[70px] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors max-md:mt-10 max-md:px-5">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
