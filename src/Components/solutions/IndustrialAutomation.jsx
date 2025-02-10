import React from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/solution/indAutomation.png";
import SettingIcn from "@/assets/svgs/solutionSvg/SettingIcn";

const IndustrialAutomation = () => {
  const list = [
    {
      title: "Customized Design",
      description:
        "Tailored robotics solutions to meet your unique operational needs.",
    },
    {
      title: "Smart Integration",
      description:
        "Connects seamlessly with IoT devices and AI for predictive maintenance and real-time analytics.",
    },
    {
      title: "Task Automation",
      description:
        "Automates repetitive tasks to improve productivity and safety.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Designed to grow with your business, ensuring long-term value.",
    },
  ];
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8">
      <div className="container max-w-[1440px] flex flex-col gap-10">
        <h1 className="text-[22px] font-bold text-[#0B61EA] text-center">
          Industrial Automation
        </h1>
        <div className="flex flex-col text-center">
          <h1 className="text-[40px] font-bold text-[#1D242D]">
            Advanced Industrial Automation Solutions for Smarter Manufacturing
          </h1>
          <p className="text-[20px] font-medium text-[#1D242D] mt-4">
            Transform your production lines with our industrial automation
            solutions. By integrating advanced robotics, IoT, and AI, we
            optimize processes like assembly, material handling, and quality
            control, boosting efficiency, reducing downtime, and lowering costs
          </p>
        </div>
      </div>
      <div className="bg-[#EEF3FF] w-screen h-[544px] flex justify-center">
        <div className="container max-w-[1440px] flex gap-14 py-10">
          <div className="h-[450px] bg-slate-500 flex justify-start items-center">
            <Image
              src={img1}
              alt="Industrial Automation"
              width={690}
              height={450}
              className=" h-[450px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            {list.map((item, index) => (
              <div key={index} className="w-[540px] pr-8">
                <div className="flex items-center gap-4">
                  <SettingIcn />
                  <h1 className="text-[22px] font-bold text-[#0B61EA]">
                    {item.title}
                  </h1>
                </div>
                <p className="text-[20px] font-medium text-[#1D242D] ml-12 leading-[25px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialAutomation;
