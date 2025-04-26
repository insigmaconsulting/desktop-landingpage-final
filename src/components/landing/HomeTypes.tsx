import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const HomeTypes = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    speed: 10,
    dragFree: false,
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onScroll = () =>
      setScrollProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    onScroll();
    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi]);

  const items = [
    {
      src: "/images/Landing/HomeTypes1.jpg",
      title: "Luxury Houses",
      description:
        "Elegance meets innovation—crafted for comfort, style, and timeless",
    },
    {
      src: "/images/Landing/HomeTypes2.jpg",
      title: "Modern Row Houses",
      description:
        "Space-efficient, modern row houses with sleek design and functionality.",
    },
    {
      src: "/images/Landing/HomeTypes3.jpg",
      title: "Farm Houses",
      description:
        "Rustic farmhouse retreats blending comfort and countryside charm.",
    },
    {
      src: "/images/Landing/HomeTypes4.jpg",
      title: "Beach Villas",
      description: "Coastal villas designed for ultimate relaxation by the sea.",
    },
    {
      src: "/images/Landing/HomeTypes5.jpg",
      title: "Urban Lofts",
      description:
        "Stylish loft spaces ideal for a contemporary urban lifestyle.",
    },
  ];

  return (
    <section className="w-full overflow-hidden max-md:max-w-full max-md:mt-10">
      {/* Heading */}
      <div className="flex w-full max-w-[82%] mt-[140px] mx-auto items-start gap-5 justify-between max-md:max-w-full">
        <div className="flex items-stretch gap-[11px] text-[50px] font-medium tracking-[-1.5px] leading-[1.1] max-md:text-[40px]">
          <h1 className="text-black">Your Home.</h1>
          <span className="text-[rgba(147,146,142,1)]">Your Way.</span>
        </div>
        <button className="bg-[rgba(208,172,128,1)] text-sm leading-none mt-[25px] px-[25px] py-4 rounded-[25px] max-md:px-5">
          Contact Us
        </button>
      </div>

      {/* Carousel + Arrows */}
      <div className="w-full max-w-[91%] mt-[40px] ml-[9%] max-md:ml-0 max-md:mt-10">
        <div className="flex items-start gap-4">
          {/* Arrows */}
          <div className="flex gap-2 pt-1 mr-[47px]">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center border border-[rgb(154,154,150)]"
            >
              <img src="/images/Landing/left-arrow.svg" alt="Prev" className="w-6" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center border border-[rgb(154,154,150)]"
            >
              <img src="/images/Landing/right-arrow.svg" alt="Next" className="w-5" />
            </button>
          </div>

          {/* Embla viewport */}
          <div className="overflow-hidden flex-grow" ref={emblaRef}>
            <div className="flex space-x-8">
              {items.map(({ src, title, description }, idx) => (
                <div key={idx} className="flex-none">
                  <ServiceCard
                    imageUrl={src}
                    title={title}
                    description={description}
                    className="w-[375px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll-progress bar */}
      <div className="bg-[rgba(0,0,0,0.1)] self-center flex w-[1080px] max-w-full flex-col ml-[20%] mt-12 rounded-[10px] max-md:mt-10 max-md:pr-5">
        <div
          className="bg-[rgba(49,49,49,1)] h-1"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      <div className="mb-[135px]"></div>
    </section>
  );
};
