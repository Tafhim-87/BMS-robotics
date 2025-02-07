"use client";
import Image from "next/image";
import img1 from "@/assets/imgs/industry1.jpg";
import img2 from "@/assets/imgs/robo-img3.jpg";
import img3 from "@/assets/imgs/vector1.png";
import img4 from "@/assets/imgs/vector2.png";

const industries = [
  {
    title: "Industrial Facilities",
    description:
      "The company enhances efficiency through robotics and automation.",
    image: img1,
    width: "w-full lg:w-[495px]",
    linear: "bg-gradient-to-b from-[#000000] to-transparent",
    textPosition: "justify-start",
    textColor: "text-[#FFFFFF]/90",
  },
  {
    title: "Transportation",
    description: "Smart automation improves logistics and operations.",
    image: img3,
    width: "w-full lg:w-[721px]",
    textPosition: "justify-end",
    textColor: "text-[#1D242D]",
  },
  {
    title: "Manufacturing",
    description: "Streamlining manufacturing with advanced robotics and IoT.",
    image: img4,
    width: "w-full lg:w-[721px]",
    textPosition: "justify-end",
    textColor: "text-[#1D242D]",
  },
  {
    title: "Food Processing",
    description:
      "Automation boosts precision and productivity in food production.",
    image: img2,
    width: "w-full lg:w-[495px]",
    textPosition: "justify-start",
    linear: "bg-gradient-to-b from-[#000000] to-transparent",
    textColor: "text-[#FFFFFF]/90",
  },
];

export default function IndustryCards() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="text-center mb-10 container max-w-[1440px] px-10">
        <h3 className="text-[#EC0E0E] uppercase tracking-wide font-semibold">
          Industries We Serve
        </h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Solutions That are Customized for <br /> Different Industries
        </h2>
      </div>
      <div className="flex flex-wrap w-full px-8 lg:px-0 lg:w-[1246px] gap-7">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`relative rounded-lg ${industry.width} overflow-hidden shadow-lg group cursor-pointer`}
          >
            <Image
              src={industry.image}
              alt={industry.title}
              width={600}
              height={321}
              className={`${industry.width} object-cover h-[321px] transition-transform group-hover:scale-105`}
            />
            <div
              className={`absolute inset-0 flex flex-col ${industry.textPosition} p-6 text-white ${industry.linear}`}
            >
              <h3 className={`text-[34px] font-bold ${industry.textColor}`}>
                {industry.title}
              </h3>
              <p className={`text-[18px] ${industry.textColor}`}>
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
