import React from "react";
import { ServiceCard } from "../ui/ServiceCard";

export const ServicesSection = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/8a24ea21b9080ee105d8164a6ef1c99c7abfefd4?placeholderIfAbsent=true",
      title: "Timely Delivery & Budget",
      description:
        "Timely delivery and budget control save you time and money.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/0537be160fa7941378e959b43519cb2b291d529d?placeholderIfAbsent=true",
      title: "Quality & Safety",
      description:
        "Skilled resources and strict safety protocols ensure top-quality work.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/657ea9240a8ef20b310c39e40a3a717f15322123?placeholderIfAbsent=true",
      title: "Innovative Tech",
      description:
        "Cutting-edge tools and modern engineering boost precision and efficiency.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/35d0d5f2b14bf981aab11959b321ed14bea99ec8?placeholderIfAbsent=true",
      title: "Turnkey Expertise",
      description:
        "We handle every detail—from excavation to completion—for a seamless experience.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/104c198062c6b4b799e79d04590d77a23df1cf27?placeholderIfAbsent=true",
      title: "Proven Excellence",
      description:
        "Our reputation and industry expertise consistently deliver superior, safe projects.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/65eac2f177e3959306b703b7709578a64e5274d3?placeholderIfAbsent=true",
      title: "Strategic Planning",
      description:
        "Detailed scheduling and organized execution drive project efficiency.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/34060a3785753f8f3b5bcff883e7e72e7d60a280?placeholderIfAbsent=true",
      title: "Client Focus",
      description:
        "Transparent, honest communication and tailored solutions ensure client satisfaction.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/076b926133e75fe721c067f42da8a7f39dabb608?placeholderIfAbsent=true",
      title: "Cost Efficiency",
      description:
        "Smart cost control and resource management maximize value without compromise.",
    },
  ];

  return (
    <section className="flex w-full flex-col mt-[77px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-[rgba(147,146,142,1)] text-[50px] font-medium leading-[1.1] tracking-[-1.5px] ml-[104px] mt-[236px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        Is The Right Choice For You.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-[104px] max-md:px-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
