import React from "react";

export const NotFound404Content = () => {
    return (
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
                    <p className="font-mori font-thin text-4xl">Weight 100 (thin)</p>
                    <p className="font-mori font-extralight text-4xl">Weight 200 (extralight)</p>
                    <p className="font-mori font-light text-4xl">Weight 300 (light)</p>
                    <p className="font-mori font-normal text-4xl">Weight 400 (normal)</p>
                    <p className="font-mori font-medium text-4xl">Weight 500 (medium)</p>
                    <p className="font-mori font-semibold text-4xl">Weight 600 (semibold)</p>
                    <p className="font-mori font-bold text-4xl">Weight 700 (bold)</p>
                    <p className="font-mori font-extrabold text-4xl">Weight 800 (extrabold)</p>
                    <p className="font-mori font-black text-4xl">Weight 900 (black)</p>

                    <div
                        className="tracking-normal text-[rgba(147,146,142,1)] text-[25px]
                    w-full max-w-[80%] mt-[20px]"
                    //  max-sm:text-[15px] max-md:text-[10px] max-md:mt-10"
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

        </section >
    );
};
