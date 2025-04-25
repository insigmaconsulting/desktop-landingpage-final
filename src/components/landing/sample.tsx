import React from "react";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const HomeTypes = () => {
  return (
    <section className="bg-black flex w-full max-w-full flex-col items-stretch px-20 mt-[72px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
      <div className="flex w-full max-w-[1181px] items-start gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="flex items-stretch gap-[11px] text-[50px] font-medium tracking-[-1.5px] leading-[1.1] flex-wrap max-md:text-[40px]">
          <h1 className="text-black grow shrink basis-auto max-md:text-[40px]">
            Your Home.
          </h1>
          <span className="text-[rgba(147,146,142,1)] basis-auto max-md:text-[40px]">
            Your Way.
          </span>
        </div>
        <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] font-normal text-right leading-none mt-[34px] px-[25px] py-4 rounded-[25px] max-md:px-5">
          Contact Us
        </button>
      </div>

      <div className="mt-[43px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[74%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-8">
              <div className="z-10 flex w-full items-stretch gap-[40px_62px] flex-wrap max-md:max-w-full">
                <div className="flex items-stretch gap-2">
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
                <div className="grow shrink basis-auto max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-6/12 max-md:w-full max-md:ml-0">
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
                  </div>
                </div>
              </div>

              <div className="w-[778px] max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <ServiceCard
                    title="Luxury Houses"
                    description="Elegance meets innovation—crafted for comfort, style, and timeless luxury."
                    className="w-6/12 max-md:w-full max-md:ml-0"
                  />
                  <ServiceCard
                    title="Row Houses"
                    description="Modern, space-efficient homes with premium design and seamless functionality."
                    className="w-6/12 ml-5 max-md:w-full max-md:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <ServiceCard
              title="Farm Houses"
              description="Luxury in nature—spacious, serene, and built for a perfect escape."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/6481e8ab43fb2b9b5fc025aeda97a958842987a3?placeholderIfAbsent=true"
              className="border grow font-normal rounded-[20px] border-black border-solid max-md:mt-8"
            />
          </div>
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.1)] self-center flex w-[1010px] max-w-full flex-col ml-[21px] mt-12 rounded-[10px] max-md:mt-10 max-md:pr-5">
        <div className="bg-[rgba(49,49,49,1)] flex w-[426px] shrink-0 max-w-full h-1" />
      </div>
    </section>
  );
};
