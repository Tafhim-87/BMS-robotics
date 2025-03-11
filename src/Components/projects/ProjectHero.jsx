import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import hero from "@/assets/imgs/projects/heroimg.png";

const ProjectHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full flex justify-center items-center relative">
      {/* Content Container */}
      <div className="container max-w-[1440px] flex flex-col lg:flex-row gap-14 md:gap-10 lg:gap-0 items-center justify-between z-10">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 text-center md:text-start justify-center min-h-auto lg:min-h-[70vh]"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-5 sm:gap-[27px] max-w-full md:max-w-[753px]"
          >
            <h1 className="text-[#1D242D] text-3xl sm:text-4xl md:text-[52px] leading-tight sm:leading-[45px] md:leading-[57px] font-bold">
              Pioneering <span className="text-[#0B61EA]">Robotics</span>{" "}
              Solutions <br /> Across Industries
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] leading-[26px] sm:leading-[30px] max-w-full md:max-w-[677px]">
              Explore our innovative projects and discover how BMS Robotics is
              not just transforming the future, but also paving the way for
              groundbreaking advancements in technology.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center mt-8 md:justify-start gap-4 sm:gap-[35px]"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-[#0B61EA] text-white px-4 sm:px-5 py-3 sm:py-[15px] rounded-lg text-sm sm:text-base hover:bg-[#0a50c5] transition-colors"
            >
              Get Your Consultation
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-[#0B61EA] border border-solid border-[#0B61EA] px-4 sm:px-5 py-3 sm:py-[15px] rounded-lg text-sm sm:text-base hover:bg-[#0B61EA] hover:text-white transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="relative flex justify-center items-center w-full md:w-[625px]">
          <div className="bg-[#063784] blur-[400px] rounded-full inset-0 z-0 w-[400px] h-[400px]"></div>
          <div className="z-10">
            <Image
              src={hero}
              alt="hero"
              width={625}
              height={425}
              className="absolute top-0 left-0 w-[625px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
