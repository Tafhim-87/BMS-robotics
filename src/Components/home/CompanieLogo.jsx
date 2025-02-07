import CompLogo1 from "@/assets/svgs/companylogo/CompLogo1";
import React from "react";

export const CompanieLogo = () => {
  const logos = [
    CompLogo1,
    CompLogo1,
    CompLogo1,
    CompLogo1,
    CompLogo1,
    CompLogo1,
    CompLogo1,
    CompLogo1,
    CompLogo1,
    CompLogo1,
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-10 max-w-[1440px]">
        <h1 className="text-2xl font-semibold text-center">
          Used by the world's leading companies
        </h1>
        <div className="flex gap-10 justify-center items-center">
          {logos.slice(0, 4).map((_, index) => (
            <CompLogo1 key={index} />
          ))}
        </div>
        <div className="flex gap-10 justify-center container">
          {logos.slice(4).map((_, index) => (
            <CompLogo1 key={index + 4} />
          ))}
        </div>
      </div>
    </div>
  );
};
