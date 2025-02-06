import React from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/robo-img1.jpg";
import img2 from "@/assets/imgs/robo-img2.jpg";
import img3 from "@/assets/imgs/robo-img3.jpg";
import PlusSvg from "@/assets/svgs/PlusSvg";

const Optimize = () => {
  const cardData = [
    {
      title: "Industrial Automation",
      description:
        "At BMS Robotics, we provide Industry 4.0 and IIoT solutions for automation, machine learning, and real-time data. Our innovative technologies enhance manufacturing efficiency, reduce costs, and improve performance.",
      image: img1,
      bgColor: "bg-[#F6F9FF]",
      barColor: "bg-[#0055FF]",
      justify: "items-end pl-16",
      imageRound: "rounded-tl-lg",
    },
    {
      title: "Industrial Robotics",
      description:
        "At BMS Robotics, we deliver precise solutions for hazardous environments, system control, and industrial vision using advanced articulated and SCARA robots. Our technology boosts operations and productivity.",
      image: img2,
      bgColor: "bg-[#FEF9F2]",
      barColor: "bg-[#FFA500]",
      justify: "items-start pr-16",
      imageRound: "rounded-tr-lg",
      paddingLeft: "pl-16",
    },
    {
      title: "IoT (Internet Of Things)",
      description:
        "At BMS Robotics, we offer cutting-edge IoT solutions for manufacturing, transportation, and retail. Our expert team delivers innovative solutions that enhance productivity and keep businesses ahead.",
      image: img3,
      bgColor: "bg-[#DF10280A]",
      barColor: "bg-[#DF1028]",
      justify: "items-end",
      imageRound: "rounded-bl-lg",
      paddingLeft: "pl-16",
    },
    {
      title: "Smart Factory Solutions",
      description:
        "BMS Robotics provides intelligent factory automation, integrating IoT, AI, and robotics to optimize operations and increase efficiency in modern industries.",
      image: img1,
      bgColor: "bg-[#4F00B60A]",
      barColor: "bg-[#4F00B6]",
      justify: "items-start pr-16",
      imageRound: "rounded-br-lg",
      paddingLeft: "pl-16",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-10">
        {/* Header Section */}
        <div className="w-[675px] relative flex flex-col gap-3">
          <div className="flex flex-col items-start">
            <PlusSvg className="absolute top-[-30px] left-[-30px]" />
            <h3 className="text-[22px] font-bold text-[#0B61EA]">
              Modern Solutions
            </h3>
          </div>
          <h1 className="text-[40px] font-bold text-[#1D242D] leading-[52px]">
            Advanced Robotics to <br /> Optimize Operations and Efficiency
          </h1>
        </div>

        <div className="flex flex-col justify-center w-full gap-[30px]">
          {/* First Row (First Two Cards) */}
          <div className="flex flex-wrap gap-5 container justify-center">
            {cardData.slice(0, 2).map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} w-[608px] flex flex-col ${card.justify} rounded-sm overflow-hidden gap-5 justify-between`}
              >
                <div
                  className={`flex w-full justify-start ${card.paddingLeft}`}
                >
                  <div className={`w-[90px] h-[6px] ${card.barColor}`}></div>
                </div>
                <div className={`flex flex-col gap-3 ${card.paddingLeft}`}>
                  <h1 className="text-[34px] leading-[51px] font-bold">
                    {card.title}
                  </h1>
                  <h4 className="text-[16px] leading-[26px]">
                    {card.description}
                  </h4>
                </div>
                {/* Image */}
                <div className="relative w-[563px] h-[288px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className={card.imageRound}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row (Last Two Cards Side by Side) */}
          <div className="flex flex-wrap gap-5 container justify-center">
            {cardData.slice(2, 4).map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} w-[608px] flex flex-col ${card.justify} rounded-sm overflow-hidden gap-5 justify-between`}
              >
                {/* Image */}
                <div className="relative w-[563px] h-[288px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className={card.imageRound}
                  />
                </div>
                <div className={`flex flex-col gap-3 ${card.paddingLeft}`}>
                  <h1 className="text-[34px] leading-[51px] font-bold">
                    {card.title}
                  </h1>
                  <h4 className="text-[16px] leading-[24px]">
                    {card.description}
                  </h4>
                </div>
                <div
                  className={`flex w-full justify-start ${card.paddingLeft}`}
                >
                  <div className={`w-[90px] h-[6px] ${card.barColor}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimize;
