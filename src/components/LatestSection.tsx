import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const LatestSection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="rounded-md shadow-sm py-6 px-3 flex flex-col gap-8 border-[1px] border-gray-200">
          <h2 className="text-2xl font-bold pl-3">Latest improvements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href={"/"}
              className="p-3 rounded-md duration-300 hover:bg-secondAlt hover:text-second flex justify-between items-center"
            >
              <p>What&apos;s new in Reports?</p>
              <ChevronRight className="text-second" size={16} />
            </Link>
            <Link
              href={"/"}
              className="py-3 px-4 rounded-md duration-300 hover:bg-secondAlt hover:text-second flex justify-between items-center"
            >
              <p>What&apos;s new in tickets?</p>
              <ChevronRight className="text-second" size={16} />
            </Link>
            <Link
              href={"/"}
              className="py-3 px-4 rounded-md duration-300 hover:bg-secondAlt hover:text-second flex justify-between items-center"
            >
              <p>What&apos;s new in Help Center?</p>
              <ChevronRight className="text-second" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
