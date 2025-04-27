import React from "react";

export const ContactVisit = () => {
  return (
    <section className="flex w-full flex-col overflow-hidden items-center justify-center px-20 py-32 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[30px] w-full max-w-[91.5%] mx-auto flex-col max-md:mb-2.5">
        <div className="rounded-[26px] mt-[15px]">
          <div className="rounded-[26px] max-md:mt-10">
            <div className="gap-5 flex h-[490px] max-md:flex-col max-md:items-stretch">
              {/* Left Text Content Div */}
              <div className="w-[50%] ml-0 max-md:w-full max-md:ml-0">
                <div className="flex flex-col text-[50px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto ml-[0px] mr-[0px] mt-[0%] max-md:max-w-full max-md:mt-10">
                  <h3 className="tracking-[-1.2px]">Visit Our</h3>
                  <h3 className="text-[rgba(147,146,142,1)] tracking-[-1.2px]">Office</h3>

                  <div className="flex items-stretch gap-9 ml-2 flex-wrap mt-[35px] max-md:mr-1 max-md:mt-10">
                    <img
                      src="/images/Contact/ContactTime.svg"
                      alt="Office Hours"
                      className="aspect-[1] object-contain w-[57px] shrink-0"
                    />
                    <div className="grow text-[25px] shrink basis-auto my-auto">
                      Monday - Saturday ( 9 A.M. to 5 P.M. )
                    </div>
                  </div>

                  <div className="flex items-stretch gap-9 ml-2 flex-nowrap mt-[35px] max-md:mr-1 max-md:mt-10">
                    <img
                      src="/images/Contact/ContactAddress.svg"
                      alt="Location"
                      className="aspect-[1] object-contain w-[57px] shrink-0"
                    />
                    <div className="grow shrink basis-auto my-auto min-w-0 text-[25px]">
                      1st Floor, 381, Ismail Bldg, Dadabhai Naoroji Road, Flora
                      Fountain, Pune - 444805
                    </div>
                  </div>

                  <div className="flex items-stretch gap-9 ml-2 flex-wrap mt-[35px] max-md:mr-1 max-md:mt-10">
                    <img
                      src="/images/Contact/ContactLandmark.svg"
                      alt="Transportation"
                      className="aspect-[1] object-contain w-[57px] shrink-0"
                    />
                    <div className="grow text-[25px] shrink basis-auto my-auto">
                      10 minutes away from Bus stand
                    </div>
                  </div>

                  <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] leading-none mt-[35px] px-8 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit max-md:px-5">
                    Click To Redirect
                  </button>

                </div>
              </div>


              {/* Google Map Location For Landmark */}
              <div className="bg-red-100 w-[50%] max-md:w-full max-md:ml-0">
                <div className="mx-5 h-full">
                  <iframe
                    title="Our Office Location"
                    src="https://maps.google.com/maps?q=18.517193,73.834392&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-[15px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};