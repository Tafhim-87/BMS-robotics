"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/assets/imgs/hero/robo-img1.jpg";
import img2 from "@/assets/imgs/hero/robo-img2.jpg";
import img3 from "@/assets/imgs/hero/robo-img3.jpg";
import img4 from "@/assets/imgs/hero/icon1.png";
import PlusSvg from "@/assets/svgs/PlusSvg";

const cardData = [
  {
    title: "Industrial Automation",
    description:
      "At BMS Robotics, we provide Industry 4.0 and IIoT solutions for automation, machine learning, and real-time data.",
    image: img1,
    bgColor: "bg-[#F6F9FF]",
    barColor: "bg-[#0055FF]",
    justify: "items-end pl-8 md:pl-16",
    imageRound: "rounded-tl-lg",
  },
  {
    title: "Industrial Robotics",
    description:
      "At BMS Robotics, we deliver precise solutions for hazardous environments, system control, and industrial vision.",
    image: img2,
    bgColor: "bg-[#FEF9F2]",
    barColor: "bg-[#FFA500]",
    justify: "items-start pr-0 md:pr-16",
    imageRound: "rounded-tr-lg",
    paddingLeft: " pl-8 md:pl-16",
  },
  {
    title: "IoT (Internet Of Things)",
    description:
      "At BMS Robotics, we offer cutting-edge IoT solutions for manufacturing, transportation, and retail.",
    image: img3,
    bgColor: "bg-[#DF10280A]",
    barColor: "bg-[#DF1028]",
    justify: "items-end",
    imageRound: "rounded-bl-lg",
    paddingLeft: "pl-8 md:pl-16",
  },
  {
    title: "Smart Factory Solutions",
    description:
      "BMS Robotics provides intelligent factory automation, integrating IoT, AI, and robotics to optimize operations.",
    image: img1,
    bgColor: "bg-[#4F00B60A]",
    barColor: "bg-[#4F00B6]",
    justify: "items-start pr-8 md:pr-16",
    imageRound: "rounded-br-lg",
    paddingLeft: "pl-16",
  },
];

const Optimize = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-10 max-w-[1440px]">
        {/* Header Section */}
        <motion.div
          className="w-full md:w-[675px] relative flex flex-col gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 items-start">
            <PlusSvg className="absolute top-[-30px] left-[-15px] md:left-[-30px]" />
            <Image src={img4} alt="" width={24} height={24} />
            <h3 className="text-[22px] font-bold text-[#0B61EA]">
              Modern Solutions
            </h3>
          </div>
          <h1 className="text-[28px] md:text-[40px] font-bold text-[#1D242D] leading-[42px] md:leading-[52px]">
            Advanced Robotics to <br /> Optimize Operations and Efficiency
          </h1>
        </motion.div>

        {/* Cards Section */}
        <div className="flex flex-col justify-center w-full gap-[30px]">
          {/* First Row */}
          <div className="flex flex-wrap gap-5 w-full justify-center">
            {cardData.slice(0, 2).map((card, index) => (
              <motion.div
                key={index}
                className={`${card.bgColor} w-[608px] flex flex-col ${card.justify} rounded-sm overflow-hidden gap-5 justify-between`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`flex w-full justify-start ${card.paddingLeft}`}
                >
                  <div className={`w-[90px] h-[6px] ${card.barColor}`}></div>
                </div>
                <div className={`flex flex-col gap-3 ${card.paddingLeft}`}>
                  <h1 className="md:text-[34px] text-[24px] leading-[51px] font-bold">
                    {card.title}
                  </h1>
                  <h4 className="text-[14px] md:text-[16px] leading-[26px]">
                    {card.description}
                  </h4>
                </div>
                <div className="relative w-[366px] sm:w-full md:w-[563px] h-[288px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className={card.imageRound}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap gap-5 w-full justify-center">
            {cardData.slice(2, 4).map((card, index) => (
              <motion.div
                key={index}
                className={`${card.bgColor} w-[608px] flex flex-col ${card.justify} rounded-sm overflow-hidden gap-5 justify-between`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-[366px] sm:w-full md:w-[563px] h-[288px]">
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
                  <h4 className="text-[14px] md:text-[16px] leading-[26px]">
                    {card.description}
                  </h4>
                </div>
                <div
                  className={`flex w-full justify-start ${card.paddingLeft}`}
                >
                  <div className={`w-[90px] h-[6px] ${card.barColor}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimize;
