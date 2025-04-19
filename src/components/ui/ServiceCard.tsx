import React from "react";

interface BaseProps {
  title: string;
  description: string;
  className?: string;
}

interface IconVariant extends BaseProps {
  variant: "icon";
  icon: string;
  imageUrl?: never;
}

interface ImageVariant extends BaseProps {
  variant: "image";
  imageUrl: string;
  icon?: never;
}

type ServiceCardProps = IconVariant | ImageVariant;

export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const { title, description, className = "" } = props;

  if (props.variant === "icon") {
    return (
      <div className={`bg-[rgba(245,243,237,1)] border flex flex-col px-[41px] py-[45px] rounded-3xl border-[rgba(225,224,219,1)] border-solid max-md:px-5 ${className}`}>
        <img
          src={props.icon}
          alt={`${title} icon`}
          className="aspect-[1] object-contain w-[30px] bg-blend-normal"
        />
        <h3 className="text-[rgba(49,49,49,1)] text-[25px] leading-[1.1] mt-[21px]">
          {title}
        </h3>
        <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-1px] mt-[17px]">
          {description}
        </p>
      </div>
    );
  }

  // else variant === "image"
  return (
    <div className={`flex flex-col ${className}`}>
      <img
        src={props.imageUrl}
        alt={title}
        className="aspect-[0.67] object-contain w-full z-10 rounded-[20px]"
      />
      <div className="bg-white border flex grow flex-col items-stretch w-full px-[41px] py-[52px] rounded-[0_0_24px_24px] border-[rgba(205,205,205,1)] border-solid max-md:px-5">
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
