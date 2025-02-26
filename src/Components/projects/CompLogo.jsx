"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/imgs/hero/company/comp1.png";
import img2 from "@/assets/imgs/hero/company/comp2.png";
import img3 from "@/assets/imgs/hero/company/comp3.png";
import img4 from "@/assets/imgs/hero/company/comp4.png";
import img5 from "@/assets/imgs/hero/company/comp5.png";
import img6 from "@/assets/imgs/hero/company/comp6.png";
import img7 from "@/assets/imgs/hero/company/comp7.png";
import img8 from "@/assets/imgs/hero/company/comp8.png";
import img9 from "@/assets/imgs/hero/company/comp9.png";
import img10 from "@/assets/imgs/hero/company/comp10.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CompLogo = () => {
  const logos = [img3, img2, img1, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-10 max-w-[1130px] overflow-hidden">
        <motion.h1
          className="text-2xl font-semibold text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Used by the world's leading companies
        </motion.h1>

        {/* Desktop Second Row */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-6 gap-10 justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {logos.slice(4).map((logo, index) => (
            <motion.div
              key={index}
              className="w-[80px] h-[32px] md:w-[144px] md:h-[55px]"
              variants={logoVariants}
            >
              <Image src={logo} alt="Company Logo" width={144} height={55} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          className="grid lg:hidden grid-cols-4 gap-10 w-full justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {logos.slice(4, 8).map((logo, index) => (
            <motion.div
              key={index}
              className="w-[80px] h-[32px] md:w-[144px] md:h-[55px]"
              variants={logoVariants}
            >
              <Image src={logo} alt="Company Logo" width={144} height={55} />
            </motion.div>
          ))}

          <motion.div
            className="col-span-4 flex justify-center gap-10"
            variants={containerVariants}
          >
            {logos.slice(8, 10).map((logo, index) => (
              <motion.div
                key={index}
                className="w-[80px] h-[32px] md:w-[144px] md:h-[55px]"
                variants={logoVariants}
              >
                <Image src={logo} alt="Company Logo" width={144} height={55} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompLogo;
