import React from "react";
import Link from "next/link";

const AiSection = () => {
  return (
    <section className="ml-content-block flex w-content-block flex-col items-center bg-cover bg-center bg-no-repeat py-14 text-content-block bg-[url('https://downloads.intercomcdn.com/i/o/509732/367f21e8ea49a0c1ead55ab2/5c8521cacae2cb425d976e25ded58a58.png')]">
      <div className="flex flex-col gap-3 text-white justify-center items-center">
        <h2 className="text-2xl font-bold">Introducing Fin AI Copilot</h2>
        <p className="text-center">
          Increase support agent efficiency by 31% with Fin AI Copilot.
          <br /> Join the waitlist to access the beta.
        </p>
        <Link
          href={"/"}
          className="bg-white text-black hover:bg-gray-100 rounded-[8px] block py-2 px-4 text-lg duration-300"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default AiSection;
