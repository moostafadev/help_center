import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] py-8 bg-main text-white overflow-hidden relative">
      <div className="container h-[calc(100vh-200px)]">
        <div className="flex justify-center items-center h-full mt-[-80px] flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold text-center">
              Hi there, need some help?
            </h1>
          </div>
          <div className="relative group">
            <input
              type="text"
              placeholder="Search for articles..."
              className="py-4 px-6 pl-14 outline-none rounded-md bg-[#364452] focus:bg-white duration-300 caret-black w-[260px] sm:w-[440px] md:w-[640px] placeholder:text-white placeholder:focus:text-[#364452] focus:text-[#364452] text-white"
            />
            <Search className="absolute top-[50%] translate-y-[-50%] left-4 text-white group-focus-within:text-[#364452]" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-40px] sm:bottom-0 left-[-50%] sm:left-0 w-[200%] sm:w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(272%+1.3px)] h-[200px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
