import React from "react";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const WhyUs = () => {
  const services = [
    { icon: "/images/WhyUsTime.svg", title: "Timely Delivery & Budget", description: "Timely delivery and budget control save you time and money." },
    { icon: "/images/WhyUsQuality.svg", title: "Quality & Safety", description: "Skilled resources and strict safety protocols ensure top-quality work." },
    { icon: "/images/WhyUsInnovative.svg", title: "Innovative Tech", description: "Cutting-edge tools and modern engineering boost precision and efficiency." },
    { icon: "/images/WhyUsTurnkey.svg", title: "Turnkey Expertise", description: "We handle every detail—from excavation to completion—for a seamless experience." },
    { icon: "/images/WhyUsFocus.svg", title: "Proven Excellence", description: "Our reputation and industry expertise consistently deliver superior, safe projects." },
    { icon: "/images/WhyUsStrategy.svg", title: "Strategic Planning", description: "Detailed scheduling and organized execution drive project efficiency." },
    { icon: "/images/WhyUsClient.svg", title: "Client Focus", description: "Transparent, honest communication and tailored solutions ensure client satisfaction." },
    { icon: "/images/WhyUsCost.svg", title: "Cost Efficiency", description: "Smart cost control and resource management maximize value without compromise." },
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
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Image */}
          <div className="w-full max-h-[600px] md:w-1/2">
            <img
              src="/images/WhyUs.jpg"
              alt="Why Us"
              className="w-full h-full object-cover object-right rounded-3xl max-md:mb-8"
            />
          </div>

          {/* Right Cards: one per row, full width */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {services.map((service, index) => (
              // This wrapper shrinks only the first <img> inside ServiceCard:
              <div
                key={index}
                className="[&>div>img]:w-12 [&>div>img]:h-12"
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
