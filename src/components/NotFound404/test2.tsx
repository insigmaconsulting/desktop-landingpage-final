// import React, { useState } from "react";

// export const NotFound404Navigation = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white self-center flex w-[1470px] max-w-full items-center gap-5 text-[rgba(49,49,49,1)] flex-wrap justify-between pr-4 py-[17px] relative">
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/e346a9808e42f9e3917fd17e5c7c29154828fd1c?placeholderIfAbsent=true"
//         alt="Company Logo"
//         className="aspect-[7.94] object-contain w-[167px] bg-blend-normal self-stretch shrink-0 max-w-full my-auto"
//       />

//       {/* Spacer or left group */}
      
//       <div className="self-stretch flex items-stretch gap-[25px] text-[15px] leading-none flex-wrap my-auto max-md:max-w-full">
//       </div>

//       {/* Desktop Buttons for width >= md */}
//       <div className="self-stretch flex items-stretch gap-[10px] text-sm leading-none mr-[-10px] hidden md:flex">
//         <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
//           Home
//         </button>
//         <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
//           About us
//         </button>
//         <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
//           Socials
//         </button>
//         <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
//           Contact Us
//         </button>
//       </div>

//       {/* Mobile Hamburger Icon for width < md */}
//       <button
//         className="md:hidden flex flex-col justify-center items-center px-[17px] py-[20px] bg-[rgba(208,172,128,1)] rounded-full"
//         onClick={() => setMenuOpen((open) => !open)}
//         aria-label="Toggle menu"
//       >
//         <span className="block w-4 h-[1.5px] bg-[rgba(49,49,49,1)] mb-[1.5px]" />
//         <span className="block w-4 h-[1.5px] bg-[rgba(49,49,49,1)] mb-[2px]" />
//         <span className="block w-4 h-[1.5px] bg-[rgba(49,49,49,1)]" />
//       </button>

//       {/* Mobile Overlay Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-[#313131] rounded-lg p-6 space-y-4 w-[100vw] h-[100vh] flex flex-col justify-center items-start overflow-auto relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="absolute top-11 right-4 w-12 h-12 flex justify-center items-center bg-[rgba(208,172,128,1)] rounded-full"
//               aria-label="Close menu"
//             >
//               <span className="absolute w-4 h-[1.5px] bg-[rgba(49,49,49,1)] rotate-45" />
//               <span className="absolute w-4 h-[1.5px] bg-[rgba(49,49,49,1)] -rotate-45" />
//             </button>

//             <button
//               onClick={() => setMenuOpen(false)}
//               className="w-full text-center bg-none px-0 py-2 text-white text-2xl"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="w-full text-center bg-none px-0 py-2 text-white text-2xl"
//             >
//               About us
//             </button>
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="w-full text-center bg-none px-0 py-2 text-white text-2xl"
//             >
//               Socials
//             </button>
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="w-full text-center bg-none px-0 py-2 text-white text-2xl"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };


import React, { useState } from "react";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white self-center flex w-[1470px] max-w-full items-center gap-5 text-[rgba(49,49,49,1)] flex-wrap justify-between pr-4 py-[17px] relative">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/e346a9808e42f9e3917fd17e5c7c29154828fd1c?placeholderIfAbsent=true"
        alt="Company Logo"
        className="aspect-[7.94] object-contain w-[167px] bg-blend-normal self-stretch shrink-0 max-w-full my-auto"
      />

      {/* Spacer or left group */}
      {/* insert code here */}
      <div className="self-stretch flex items-stretch gap-[25px] text-[15px] leading-none flex-wrap my-auto max-md:max-w-full">
        <button className="grow hover:text-[rgba(208,172,128,1)] transition-colors">
          Our Services
        </button>
        <button className="basis-auto hover:text-[rgba(208,172,128,1)] transition-colors">
          Who We Are
        </button>
        <button className="basis-auto hover:text-[rgba(208,172,128,1)] transition-colors">
          Process Framework
        </button>
        <button className="hover:text-[rgba(208,172,128,1)] transition-colors">
          Why Us
        </button>
      </div>

      <div className="self-stretch flex items-stretch gap-[25px] text-[15px] leading-none flex-wrap my-auto max-md:max-w-full">
      </div>

      {/* Desktop Buttons for width >= lg */}
      <div className="self-stretch flex items-stretch gap-[10px] text-sm leading-none mr-[-10px] hidden lg:flex">
        <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
          About us
        </button>
        <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
          Socials
        </button>
        <button className="bg-[rgba(208,172,128,1)] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors w-fit">
          Contact Us
        </button>
      </div>

      {/* Mobile Hamburger Icon for width < lg */}
      <button
        className="lg:hidden flex flex-col justify-center items-center px-[17px] py-[20px] bg-[rgba(208,172,128,1)] rounded-full"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className="block w-4 h-[1.5px] bg-[rgba(49,49,49,1)] mb-[1.5px]" />
        <span className="block w-4 h-[1.5px] bg-[rgba(49,49,49,1)] mb-[2px]" />
        <span className="block w-4 h-[1.5px] bg-[rgba(49,49,49,1)]" />
      </button>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#313131] rounded-lg p-6 space-y-4 w-[100vw] h-[100vh] flex flex-col justify-center items-start overflow-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-11 right-4 w-12 h-12 flex justify-center items-center bg-[rgba(208,172,128,1)] rounded-full"
              aria-label="Close menu"
            >
              <span className="absolute w-4 h-[1.5px] bg-[rgba(49,49,49,1)] rotate-45" />
              <span className="absolute w-4 h-[1.5px] bg-[rgba(49,49,49,1)] -rotate-45" />
            </button>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-none px-0 py-2 text-white text-2xl"
            >
              Home
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-none px-0 py-2 text-white text-2xl"
            >
              About us
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-none px-0 py-2 text-white text-2xl"
            >
              Socials
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-none px-0 py-2 text-white text-2xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}        
    </nav>
  );
};
