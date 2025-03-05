import React from "react";
import Image from "next/image";
import BG from "@/assets/imgs/projects/automationBG.png";
import person1 from "@/assets/imgs/projects/person/person1.png";
import person2 from "@/assets/imgs/projects/person/person2.png";
import person3 from "@/assets/imgs/projects/person/person3.png";
import person4 from "@/assets/imgs/projects/person/person4.png";
import person5 from "@/assets/imgs/projects/person/person6.png";

const Automation = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-r from-[#0C191F]/70 to-[#6C57DB] rounded-2xl overflow-hidden relative">
      <Image
        src={BG}
        alt="Automation & Robotics"
        layout="fill"
        objectFit="cover"
        className="opacity-40"
      />
      <div className="container max-w-[1440px] py-16 px-28 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="text-white text-left max-w-lg">
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-start">
            Achieve your dream automation with us!
          </h2>
          <p className="text-lg mb-6 text-center lg:text-start">
            Join with more 1200+ happy customers
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <div className="flex -space-x-2">
              <Image
                src={person1}
                alt="Customer 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={person2}
                alt="Customer 2"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={person3}
                alt="Customer 3"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={person4}
                alt="Customer 4"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={person5}
                alt="Customer 4"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <span className="text-lg">and others</span>
          </div>
        </div>
        <div className="text-white flex items-center justify-center flex-col lg:text-right mt-8 lg:mt-0 max-w-[265px]">
          <p className="mb-4 font-medium text-center">
            Feel free to let me know if you'd like any further adjustments!
          </p>
          <button className="w-[180px] h-[58px] border-[#ffffff] border-solid border bg-[#f4f4f4]/30 text-[#FFFFFF] font-medium rounded-full hover:bg-[#6D28D9] hover:text-white transition-all shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Automation;
