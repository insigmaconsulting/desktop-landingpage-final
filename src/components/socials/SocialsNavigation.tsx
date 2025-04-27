import React from "react";

export const SocialsNavigation = () => {
  return (
    <nav className="bg-white self-center flex w-[1470px] max-w-full items-center gap-5 text-[rgba(49,49,49,1)] flex-wrap justify-between pr-4 py-[17px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/e346a9808e42f9e3917fd17e5c7c29154828fd1c?placeholderIfAbsent=true"
        alt="Company Logo"
        className="aspect-[7.94] object-contain w-[167px] bg-blend-normal self-stretch shrink-0 max-w-full my-auto"
      />
      <div className="self-stretch flex items-stretch gap-[25px] text-[15px] leading-none flex-wrap my-auto max-md:max-w-full">
        <button className="grow hover:text-[rgba(208,172,128,1)] transition-colors">
          Google Reviews
        </button>
        <button className="basis-auto hover:text-[rgba(208,172,128,1)] transition-colors">
          Facebook
        </button>
        <button className="basis-auto hover:text-[rgba(208,172,128,1)] transition-colors">
          Instagram
        </button>
        <button className="basis-auto hover:text-[rgba(208,172,128,1)] transition-colors">
          LinkedIn
        </button>
      </div>
      <div className="self-stretch flex items-stretch gap-[10px] text-sm leading-none mr-[-10px]">
        <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit max-md:px-5">
          Home
        </button>
        <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit max-md:px-5">
        About Us
        </button>
        <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit max-md:px-5">
        Contact Us
        </button>
      </div>
    </nav>
  );
};
