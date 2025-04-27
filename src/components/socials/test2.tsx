import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ServiceCardSocials } from "@/components/ui/ServiceCardSocials";

export const SocialsInstagram = () => {
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
    { imageUrl: "/images/Socials/SocialsInstagram1.jpg" },
    { videoUrl: "/videos/Socials/SocialsInstagram2.mp4" },
    { imageUrl: "/images/Socials/SocialsInstagram3.jpg" },
    { imageUrl: "/images/Socials/SocialsInstagram1.jpg" },
    { imageUrl: "/images/Socials/SocialsInstagram2.jpg" },
  ];

  return (
    <section className="bg-[rgba(245,243,237,1)] w-full overflow-hidden mt-[100px] max-md:max-w-full max-md:mt-10">
      {/* Heading + CTA */}
      <div className="flex w-full max-w-[82%] mt-[140px] mx-auto items-start gap-5 justify-between max-md:max-w-full">
        <div className="flex flex-col gap-[11px] text-[50px] font-medium tracking-[-1.5px] leading-[1.1] max-md:text-[40px]">
          <h1 className="text-black">From Reels To Reality</h1>
          <h1 className="text-[rgba(147,146,142,1)]">Follow Us On Instagram</h1>
        </div>
        <a
          href="https://www.instagram.com/construction_pune/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center self-center bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] font-normal leading-none px-[19px] py-4 rounded-[25px] max-md:pr-5">
          Instagram
          <img
            src="/images/Socials/SocialsInstagram.svg"
            alt="Instagram icon"
            className="w-5 h-5 ml-2"
          />
        </a>
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
              <img
                src="/images/Landing/left-arrow.svg"
                alt="Prev"
                className="w-6"
              />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center border border-[rgb(154,154,150)]"
            >
              <img
                src="/images/Landing/right-arrow.svg"
                alt="Next"
                className="w-5"
              />
            </button>
          </div>

          {/* Embla viewport */}
          <div className="overflow-hidden flex-grow" ref={emblaRef}>
            <div className="flex space-x-8">
              {items.map(({ imageUrl, videoUrl }, idx) => (
                <div key={idx} className="flex-none w-[375px]">
                  <ServiceCardSocials
                    imageUrl={imageUrl}
                    videoUrl={videoUrl}
                    className=""
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
      <div className="mb-[135px]" />
    </section>
  );
};
