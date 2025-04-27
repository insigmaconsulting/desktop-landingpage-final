import React from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };
  return (
    <section className="flex w-full flex-col overflow-hidden items-center justify-center px-20 py-32 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[30px] w-full max-w-[91.5%] mx-auto flex-col max-md:mb-2.5">
        <div className="rounded-[26px] mt-[15px]">
          <div className="rounded-[26px] max-md:mt-10">
            {/* <div className="gap-5 flex           max-md:flex-col max-md:items-stretch"> */}
            <div className="gap-5 flex h-[490px] max-md:flex-col max-md:items-stretch">
              {/* Left Text Content Div */}
              <div className="w-[50%] ml-0 max-md:w-full max-md:ml-0">
                <div className="flex flex-col text-[50px] text-[rgba(49,49,49,1)] font-normal leading-[1.1] my-auto ml-[0px] mr-[0px] mt-[0%]                             max-md:max-w-full max-md:mt-10">
                  <h3 className="tracking-[-1.2px]">Contact Us</h3>
                  <h3 className="text-[rgba(147,146,142,1)] tracking-[-1.2px]">Today</h3>
                  <p className="text-[rgba(147,146,142,1)] text-[27px] leading-8 tracking-[-0.5px] self-stretch mt-[40px] max-md:max-w-full">
                    Whether you have questions, would like <br />
                    to schedule a complimentary on-site <br />
                    consultation, or want to share details <br />
                    about your project, we're here to help. <br />
                    Please don't hesitate to contact us by <br />
                    phone or using the form.
                  </p>
                  <div className="mt-[5px]">
                    <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[10px] max-md:max-w-full">
                      T: +91 XXXX-XXX-XXX
                    </p>
                  </div>
                  <div>
                    <p className="text-[rgba(147,146,142,1)] text-[25px] leading-8 tracking-[-0.5px] self-stretch mt-[10px] max-md:max-w-full">
                      E: pradhuman@borekar.in
                    </p>
                  </div>
                </div>
              </div>


              {/* Right form div */}
              <div className="w-[50%] max-md:w-full max-md:ml-0">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="ml-0 max-md:w-full max-md:ml-0"
                >
                  <div className="flex items-stretch gap-4 text-xs text-[rgba(49,49,49,1)] font-normal tracking-[-0.34px] flex-wrap max-md:max-w-full">
                    <input
                      {...register("firstName")}
                      placeholder="First name"
                      className="bg-white placeholder:text-lg text-lg border grow shrink-0 basis-0 w-fit px-[25px] py-6 rounded-[15px] border-[rgba(205,205,205,1)] border-solid max-md:px-5"
                    />
                    <input
                      {...register("lastName")}
                      placeholder="Last name"
                      className="bg-white placeholder:text-lg text-lg border grow shrink-0 basis-0 w-fit px-[25px] py-6 rounded-[15px] border-[rgba(205,205,205,1)] border-solid max-md:px-5"
                    />
                  </div>
                  <div className="flex grow flex-col items-stretch text-xs text-[rgba(49,49,49,1)] font-normal max-md:max-w-full max-md:mt-10">
                    {/* <input
                      {...register("phone")}
                      type="tel"
                      placeholder="Phone number"
                      className="bg-white placeholder:text-lg text-lg border tracking-[-0.34px] mt-4 px-[25px] py-7 rounded-[15px] border-[rgba(205,205,205,1)] border-solid max-md:max-w-full max-md:px-5"
                    /> */}
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email"
                      className="bg-white placeholder:text-lg text-lg border whitespace-nowrap  mt-4 tracking-[-0.34px] px-[25px] py-7 rounded-[15px] border-[rgba(205,205,205,1)] border-solid max-md:max-w-full max-md:px-5"
                    />
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="Phone number"
                      className="bg-white placeholder:text-lg text-lg border tracking-[-0.34px] mt-4 px-[25px] py-7 rounded-[15px] border-[rgba(205,205,205,1)] border-solid max-md:max-w-full max-md:px-5"
                    />
                    <input
                      {...register("subject")}
                      placeholder="Subject"
                      className="bg-white placeholder:text-lg text-lg border whitespace-nowrap tracking-[-0.34px] mt-[17px] px-[25px] py-[27px] rounded-[15px] border-[rgba(205,205,205,1)] border-solid max-md:max-w-full max-md:px-5"
                    />
                    <textarea
                      {...register("message")}
                      placeholder="Message (Optional)"
                      className="bg-white placeholder:text-lg text-lg border tracking-[-0.34px] mt-[15px] pt-[21px] pb-[55px] px-[25px] rounded-[15px] border-[rgba(205,205,205,1)] border-solid max-md:max-w-full max-md:pb-[110px] max-md:px-5"
                    />
                    <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] leading-none mt-[15px] px-8 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit max-md:px-5">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
