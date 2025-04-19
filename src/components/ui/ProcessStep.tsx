import React from "react";

interface ProcessStepProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  imageUrl,
  imagePosition = "right",
}) => {
  const ContentSection = () => (
    <div className="flex flex-col self-stretch text-[rgba(49,49,49,1)] font-normal my-auto max-md:max-w-full max-md:mt-10">
      <h3 className="text-[40px] leading-[1.1] tracking-[-1.2px]">{title}</h3>
      <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[35px] max-md:max-w-full">
        {description}
      </p>
      <button className="bg-[rgba(208,172,128,1)] text-sm leading-none mt-[29px] px-6 py-4 rounded-[25px] max-md:px-5">
        Contact Us
      </button>
    </div>
  );

  const ImageSection = () => (
    <img
      src={imageUrl}
      alt={title}
      className="aspect-[1.1] object-contain w-full grow rounded-3xl max-md:max-w-full max-md:mt-10"
    />
  );

  return (
    <div className="w-full max-w-[1108px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {imagePosition === "right" ? (
          <>
            <div className="w-[45%] max-md:w-full max-md:ml-0">
              <ContentSection />
            </div>
            <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
              <ImageSection />
            </div>
          </>
        ) : (
          <>
            <div className="w-[55%] max-md:w-full max-md:ml-0">
              <ImageSection />
            </div>
            <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
              <ContentSection />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
