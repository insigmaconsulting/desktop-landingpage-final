// Now instead of just 3 images, i might have 5 images. On the webpage in the given visible section only 3 images should show at a time.  The arrow section are buttons and pressing that would enable to swipe to other available images.. it is like horizontal scrolling with buttons given. It should be like infinite scrolling. Use react-slick and give me entire updated code and any necessary steps required


import React from "react";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const HomeTypes = () => {
  return (
<section className="w-full overflow-hidden items-center justify-center max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
      <div className="bg-red-100 flex w-full max-w-[82%] mt-[140px] mx-auto items-start gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="flex items-stretch gap-[11px] text-[50px] font-medium tracking-[-1.5px] leading-[1.1] flex-wrap max-md:text-[40px]">
          <h1 className="text-black grow shrink basis-auto max-md:text-[40px]">
            Your Home.
          </h1>
          <span className="text-[rgba(147,146,142,1)] basis-auto max-md:text-[40px]">
            Your Way.
          </span>
        </div>
        <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] font-normal text-right leading-none mt-[25px] px-[25px] py-4 rounded-[25px] max-md:px-5">
          Contact Us
        </button>
      </div>

      <div className="w-full max-w-[91%] mt-[40px] ml-[9%] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="bg-red-100 w-[100%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-8">
              <div className="z-10 flex w-full items-stretch gap-[40px_62px] max-md:max-w-full">
                {/* Arrows Start */}
                <div className="bg-red-200 flex items-center self-start gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/d9ed95ed52274742da296b7d500e37ebf8ffd503?placeholderIfAbsent=true"
                    alt="Design preview 1"
                    className="aspect-[1] object-contain w-[50px] shrink-0 rounded-[10px]"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/f678ca2e24ece58e3cd2bd03ac4176c565ca5260?placeholderIfAbsent=true"
                    alt="Design preview 2"
                    className="aspect-[0.98] object-contain w-[49px] shrink-0 rounded-[10px]"
                  />
                </div>
                {/* Arrows End */}
                {/* images container */}
                <div className="grow shrink basis-auto ml-auto max-md:max-w-full">
                  <div className="bg-red-400 gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="bg-red-600 w-6/12 max-md:w-full max-md:ml-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/ef08cd4e9d6e3386934326c9e8948fb5be7900f0?placeholderIfAbsent=true"
                        alt="House showcase 1"
                        className="aspect-[0.76] object-contain w-full grow rounded-[25px] max-md:mt-8"
                      />
                    </div>
                    <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/b3c01261b9b9b1b790fb94ce1c95a9d8affbc0ee?placeholderIfAbsent=true"
                        alt="House showcase 2"
                        className="aspect-[0.76] object-contain w-full grow rounded-[20px] max-md:mt-8"
                      />
                    </div>
                    <div className="w-6/12 max-md:w-full max-md:ml-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/6481e8ab43fb2b9b5fc025aeda97a958842987a3?placeholderIfAbsent=true"
                        alt="House showcase 1"
                        className="aspect-[0.76] object-contain w-full grow rounded-[25px] max-md:mt-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.1)] self-center flex w-[1010px] max-w-full flex-col ml-[21px] mt-12 rounded-[10px] max-md:mt-10 max-md:pr-5">
        <div className="bg-[rgba(49,49,49,1)] flex w-[426px] shrink-0 max-w-full h-1" />
      </div>
    </section>
      );
};