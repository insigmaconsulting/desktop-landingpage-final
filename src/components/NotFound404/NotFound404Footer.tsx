import React from "react";

export const NotFound404Footer = () => {
  return (
    <footer className="bg-[rgba(245,243,237,1)] self-center flex w-full max-w-[97%] flex-col items-center mt-[142px] pt-[84px] px-20 rounded-3xl max-md:mt-10 max-md:px-5">
      <div className="w-full max-w-[95%] max-md:max-w-full">
        <div className="flex w-full max-w-[100%] gap-5 flex-wrap justify-between mr-6 max-md:max-w-full max-md:mr-2.5">
          <div className="self-stretch flex flex-col items-stretch font-normal max-md:max-w-full">
            <h3 className="text-[rgba(49,49,49,1)] text-[25px] leading-[1.1]">
              Visit Our Office
            </h3>
            <address className="text-[rgba(147,146,142,1)] text-[17px] leading-[22px] tracking-[-0.34px] mt-[17px] max-md:max-w-full not-italic">
              Shop No. 4, CTS.No-54, Plot No. 62/20 Ideal Landmark, Near Joggers
              Park, Opposite Bank Of India Behind Phoenix Marketcity, Viman
              Nagar, Pune, Maharashtra 411014, India
            </address>
          </div>

          <nav className="flex flex-col text-[17px] text-[rgba(147,146,142,1)] font-normal tracking-[-0.34px] leading-none">
            <a href="#socials" className="mt-[0px]">
              Socials
            </a>
            <a href="#about" className="self-stretch mt-[15px]">
              About Us
            </a>
            <a href="#home" className="mt-[15px]">
              Home
            </a>
          </nav>

          <div className="flex items-stretch gap-[40px_50px]">
            <div className="flex flex-col items-stretch text-[rgba(147,146,142,1)] font-normal mr-[50px] tracking-[-0.32px]">
              <div className="flex items-stretch gap-[3px] max-md:mr-[7px]">
                <span className="text-base leading-none">T:</span>
                <a
                  href="tel:02030112860"
                  className="text-[17px] leading-none grow shrink w-[114px]"
                >
                  0203 011 2860
                </a>
              </div>
              <a
                href="mailto:info@okopod.com"
                className="text-[17px] leading-none mt-[15px]"
              >
                info@okopod.com
              </a>
              <button className="border text-sm leading-none mt-[15px] px-[25px] py-[15px] rounded-[25px] border-[rgba(205,205,205,1)] border-solid max-md:px-5">
                Contact Us
              </button>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[rgba(147,146,142,1)] text-base font-normal leading-none tracking-[-0.32px]">
                Socials
              </h4>
              <div className="flex items-stretch gap-2 mt-[18px]">
                <img
                  // src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/793a06ce49aec1eb6f79c054d32e8fd070e0e072?placeholderIfAbsent=true"
                  src="images/Footer/instagram-dark.svg"
                  alt="Social media"
                  className="aspect-[1] object-contain w-6 shrink-0 rounded-[5px]"
                />
                <img
                  // src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/79511755d3a78f03c62f5ee9550164468f274aef?placeholderIfAbsent=true"
                  src="images/Footer/facebook-dark.svg"
                  alt="Social media"
                  className="aspect-[1] object-contain w-6 shrink-0 rounded-[5px]"
                />
                <img
                  // src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/0cda883facf5d9b13fb5012da01704d12e25edd8?placeholderIfAbsent=true"
                  src="images/Footer/google-dark.svg"
                  alt="Social media"
                  className="aspect-[1] object-contain w-6 shrink-0 rounded-[5px]"
                />
                <img
                  // src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/c3d0e1d051bbd34429761e0ac3d4f5926d300619?placeholderIfAbsent=true"
                  src="images/Footer/linkedin-dark.svg"
                  alt="Social media"
                  className="aspect-[1] object-contain w-6 shrink-0 rounded-[5px]"
                />
              </div>
              <div className="self-stretch flex items-stretch gap-4 text-sm text-[rgba(147,146,142,1)] font-normal tracking-[-0.32px] leading-none mt-8">
                <span className="my-auto">Site by</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/033d03f4feb01f79ea676db1c0cbce6d785bb3ff?placeholderIfAbsent=true"
                  alt="Company logo"
                  className="aspect-[2.31] object-contain w-[90px] bg-blend-normal shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/260cfafbe0bc9e9987e1cd56baa84a12e06f29a3?placeholderIfAbsent=true"
          alt="Footer decoration"
          className="aspect-[7.94] object-contain w-full ml-3.5 mt-[45px] max-md:max-w-full max-md:mt-10"
        />
      </div>
    </footer>
  );
};
