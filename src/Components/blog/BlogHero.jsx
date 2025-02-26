import React from "react";
import { motion } from "framer-motion";
import BlogSearch from "./BlogSearch";
import Image from "next/image";
import bg from "@/assets/imgs/blog/bgpatturn.png";
import WhiteNavbaar from "./WhiteNavbar";

const BlogHero = () => {
  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for the search bar
  const searchVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center relative bg-[#0B61EA] text-[#FFFFFF]">
      <Image
        src={bg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        width={1440}
        height={800}
      />
      <WhiteNavbaar />
      <div className="container flex flex-col justify-center items-center text-center px-4 z-10 py-16 md:py-20 lg:py-28">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight md:leading-[62px] font-bold"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Find Your Next Read
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-[22px] mt-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Explore our blogs and uncover insightful stories, tips, and
          innovations in the world of robotics and technology
        </motion.p>
        <motion.div
          className="w-full max-w-2xl mt-8"
          variants={searchVariants}
          initial="hidden"
          animate="visible"
        >
          <BlogSearch />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogHero;
