import CompLogo1 from "@/assets/svgs/companylogo/CompLogo1";
import React from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/company/comp1.png";
import img2 from "@/assets/imgs/company/comp2.png";
import img3 from "@/assets/imgs/company/comp3.png";
import img4 from "@/assets/imgs/company/comp4.png";
import img5 from "@/assets/imgs/company/comp5.png";
import img6 from "@/assets/imgs/company/comp6.png";
import img7 from "@/assets/imgs/company/comp7.png";
import img8 from "@/assets/imgs/company/comp8.png";
import img9 from "@/assets/imgs/company/comp9.png";
import img10 from "@/assets/imgs/company/comp10.png";

export const CompanieLogo = () => {
  const logos = [img3, img2, img1, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-10 max-w-[1440px]">
        <h1 className="text-2xl font-semibold text-center">
          Used by the world's leading companies
        </h1>
        <div className="flex gap-10 justify-center items-center">
          {logos.slice(0, 4).map((logo, index) => (
            <div
              key={index}
              className="w-[80px] h-[32px] md:w-[144px] md:h-[55px]"
            >
              <Image src={logo} alt="Company Logo" width={144} height={55} />
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4 gap-10 justify-center container">
          {logos.slice(4).map((logo, index) => (
            <div
              key={index}
              className="w-[80px] h-[32px] md:w-[144px] md:h-[55px]"
            >
              <Image src={logo} alt="Company Logo" width={144} height={55} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
