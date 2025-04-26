import React from "react";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const WhyUs = () => {
  const services = [
    { icon: "/images/Landing/WhyUsTime.svg", title: "Timely Delivery & Budget", description: "Timely delivery and budget control save you time and money." },
    { icon: "/images/Landing/WhyUsQuality.svg", title: "Quality & Safety", description: "Skilled resources and strict safety protocols ensure top-quality work." },
    { icon: "/images/Landing/WhyUsInnovative.svg", title: "Innovative Tech", description: "Cutting-edge tools and modern engineering boost precision and efficiency." },
    { icon: "/images/Landing/WhyUsTurnkey.svg", title: "Turnkey Expertise", description: "We handle every detail—from excavation to completion—for a seamless experience." },
    { icon: "/images/Landing/WhyUsFocus.svg", title: "Proven Excellence", description: "Our reputation and industry expertise consistently deliver superior, safe projects." },
    { icon: "/images/Landing/WhyUsStrategy.svg", title: "Strategic Planning", description: "Detailed scheduling and organized execution drive project efficiency." },
    { icon: "/images/Landing/WhyUsClient.svg", title: "Client Focus", description: "Transparent, honest communication and tailored solutions ensure client satisfaction." },
    { icon: "/images/Landing/WhyUsCost.svg", title: "Cost Efficiency", description: "Smart cost control and resource management maximize value without compromise." },
  ];

  return (
    <section className="flex justify-center mt-[140px] max-md:mt-10">
      <div className="w-[82%] flex flex-col">
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 className="text-black text-[50px] font-medium leading-[1.1] tracking-[-1.5px] max-md:text-[40px]">
            Why Neeya
          </h2>
          <h2 className="text-[rgba(147,146,142,1)] text-[50px] font-medium leading-[1.1] tracking-[-1.5px] max-md:text-[40px]">
            Is The Right Choice For You.
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col mt-[10px] md:flex-row gap-8">
          {/* Left Image */}
          <div className="w-full max-h-[600px] md:w-1/2  md:sticky md:top-[100px]">
            <img
              src="/images/Landing/WhyUs.jpg"
              alt="Why Us"
              className="w-[82%] h-full object-cover object-right rounded-3xl"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-12">
            {services.map((service, index) => (
              // This wrapper shrinks only the first <img> inside ServiceCard:
              <div
                key={index}
                // className="[&>div>img]:w-12 [&>div>img]:h-12 [&>div>img]:mt-[40px] [&>div>img]:ml-[40px]"
                className={
                  "bg-[rgba(245,243,237,1)] rounded-[25px] [&>div>img]:w-9 [&>div>img]:h-9 [&>div>img]:mt-[45px] [&>div>img]:ml-[40px] " +
                  "[&>div>div]:bg-[rgba(245,243,237,1)] [&>div>div]:py-[15px] [&>div>div>p]:mt-[20px] [&>div>div>p]:text-[25px] [&>div>div>p]:leading-[1.35] [&>div>div>p]:mb-[25px]"
                }
              >
                <ServiceCard
                  imageUrl={service.icon}
                  title={service.title}
                  description={service.description}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};