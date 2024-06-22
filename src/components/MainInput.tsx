import { Search } from "lucide-react";
import React from "react";

const MainInput = () => {
  return (
    <div className="relative group w-full">
      <input
        type="text"
        placeholder="Search for articles..."
        className="py-4 block px-6 text-xl pl-14 outline-none w-full rounded-md bg-[#364452] focus:bg-white duration-300 caret-black placeholder:text-white placeholder:focus:text-[#364452] focus:text-[#364452] text-white"
      />
      <Search className="absolute top-[50%] translate-y-[-50%] left-4 text-white group-focus-within:text-[#364452]" />
    </div>
  );
};

export default MainInput;
