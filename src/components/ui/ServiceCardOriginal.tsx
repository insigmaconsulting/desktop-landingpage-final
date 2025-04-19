import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  imageUrl?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  className = "",
  imageUrl,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="aspect-[0.67] object-contain w-full z-10 rounded-[20px]"
        />
      )}
      <div className="bg-white border flex grow flex-col items-stretch font-normal w-full px-[41px] py-[52px] rounded-[0px_0px_24px_24px] border-[rgba(205,205,205,1)] border-solid max-md:mt-8 max-md:px-5">
        <h3 className="text-black text-[25px] leading-[1.3] tracking-[-0.75px]">
          {title}
        </h3>
        <p className="text-[rgba(147,146,142,1)] text-[17px] leading-5 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};
