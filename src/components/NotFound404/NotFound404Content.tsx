import React from "react";

export const NotFound404Content = () => {
    return (
        // <section className="w-full max-w-[82%] mx-auto px-0">
        // <div className="flex w-full items-stretch gap-5 flex-wrap justify-between mt-[74px] max-md:max-w-full max-md:mt-10">
        //   <div className="flex flex-col items-stretch text-[50px] font-medium tracking-[-1.5px] leading-[1.1] max-md:max-w-full max-md:text-[40px]">
        //     <h1 className="text-black max-md:max-w-full max-md:text-[40px]">
        //       404
        //     </h1>
        //     <h1 className="text-[rgba(147,146,142,1)] mt-[20px] max-md:max-w-full max-md:text-[40px]">
        //     Not Found
        //     </h1>
        //     <div className="text-[rgba(147,146,142,1)] text-[25px] w-full max-w-[80%]  mt-[20px] max-md:text-[10px] max-md:mt-10">
        //       Apologies, but the page you requested could not be found
        //     </div>
        //   </div>
        //   <a
        //     href="https://g.co/kgs/upyrG28"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     className="inline-flex items-center self-center bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] font-normal leading-none px-[19px] py-4 rounded-[25px] max-md:pr-5">
        //     Home
        //   </a>
        // </div>
        // </section>
        <section className="w-full max-w-[82%] mx-auto px-0">
            <div
                className="flex flex-col items-start gap-5
               w-full mt-[74px] max-md:max-w-full max-md:mt-10"
            >
                <div
                    className="flex flex-col items-stretch
                 text-[50px] font-medium tracking-[-1.5px] leading-[1.1]
                 max-md:max-w-full max-md:text-[40px]"
                >
                    <h1 className="text-black max-md:text-[40px]">404</h1>
                    <h1 className="text-[rgba(147,146,142,1)] mt-[20px] max-md:text-[40px]">
                        Not Found
                    </h1>
                    <div
                        className="text-[rgba(147,146,142,1)] text-[25px]
                   w-full max-w-[80%] mt-[20px] max-md:text-[10px] max-md:mt-10"
                    >
                        Apologies, but the page you requested could not be found
                    </div>
                </div>

                {/* ← now this sits under the text block */}
                <a
                    href="https://g.co/kgs/upyrG28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center
                 bg-[rgba(208,172,128,1)] text-sm
                 text-[rgba(49,49,49,1)] font-normal
                 leading-none px-[19px] py-4 rounded-[25px]"
                >
                    Home
                </a>
            </div>
        </section>

    );
};
