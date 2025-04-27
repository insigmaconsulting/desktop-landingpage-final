import React from "react";

export const ContactTopBanner = () => {
  return (
    <div className="bg-[rgba(49,49,49,1)] flex w-full flex-col items-center text-sm text-white leading-none justify-center px-[70px] py-[7px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[261px] max-w-full items-stretch gap-[17px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/4db29a453557cbaca4e16b4b9462f9672cab3ed8?placeholderIfAbsent=true"
          alt="Google Reviews"
          className="aspect-[5.68] object-contain w-[68px] shrink-0"
        />
        <div className="grow shrink w-[162px]">5 star on Google Reviews</div>
      </div>
    </div>
  );
};
