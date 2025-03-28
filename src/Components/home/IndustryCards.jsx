"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/imgs/hero/industry1.jpg";
import img2 from "@/assets/imgs/hero/robo-img3.jpg";
import img3 from "@/assets/imgs/hero/vector1.png";
import img4 from "@/assets/imgs/hero/vector2.png";
import img5 from "@/assets/imgs/hero/icon3.png";

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
      {/* Animated Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
        className="text-center mb-10 container max-w-[1440px] px-10 flex flex-col items-center"
      >
        {/* <Image src={img5} alt="" width={240} height={240} className="mb-4" /> */}
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-[#EC0E0E] uppercase tracking-wide font-semibold"
        >
          Industries We Serve
        </motion.h3>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mt-2"
        >
          Solutions That are Customized for <br /> Different Industries
        </motion.h2>
      </motion.div>

      {/* Animated Cards */}
      <div className="flex flex-wrap w-full lg:w-[1246px] gap-7">
        {industries.map((industry, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }} // Moves back when scrolling up
              viewport={{ once: false, margin: "-100px" }} // `once: false` allows reanimation
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative rounded-none md:rounded-lg ${industry.width} overflow-hidden shadow-lg group cursor-pointer`}
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
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}
