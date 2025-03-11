"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import img2 from "@/assets/imgs/contactForm/icn2.png";
import img3 from "@/assets/imgs/contactForm/icn3.png";
import img4 from "@/assets/imgs/contactForm/icn4.png";
import img5 from "@/assets/imgs/contactForm/icn5.png";

const icons = [img2, img3, img4, img5];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animations for child elements
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactHero = () => {
  return (
    <motion.div
      className="w-full flex justify-center items-center mb-20 md:mb-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container relative flex flex-col md:flex-row items-center md:justify-between justify-center gap-5 max-w-[1440px] md:px-10 md:h-[90vh]">
        <div className="bg-[#6FA6FD]/20 blur-[400px] rounded-full inset-0 z-0 w-full h-[400px] absolute"></div>

        {/* Animated Text Section */}
        <motion.div
          className="flex flex-col gap-4 md:gap-8"
          variants={childVariants}
        >
          <h6 className="text-2xl">Get Started</h6>
          <div className="flex flex-col gap-4 md:gap-8 text-center md:text-start">
            <motion.h1
              className="text-[30px] md:text-[42px] lg:text-[52px] font-bold "
              variants={childVariants}
            >
              Let’s Shape the <span className="text-[#0B61EA]">Future</span>{" "}
              Together.
            </motion.h1>
            <motion.p
              className="text-[18px] md:text-[20px] lg:max-w-[800px] max-w-full"
              variants={childVariants}
            >
              Have questions or ready to innovate? The BMS Robotics team is here
              to support you every step of the way. Reach out to us today, and
              let’s create intelligent solutions that transform your business.
            </motion.p>
          </div>
        </motion.div>

        {/* Animated Icons Section */}
        <motion.div
          className="flex gap-6 md:flex-col flex-row justify-between w-full md:w-auto"
          variants={containerVariants}
        >
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className="border border-[#B7B7B7] rounded-full w-[50px] h-[50px] flex justify-center items-center z-20"
              variants={childVariants}
              whileHover={{ scale: 1.1 }} // Add hover animation
            >
              <Image src={icon} alt={`icon-${index}`} width={15} height={15} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactHero;
