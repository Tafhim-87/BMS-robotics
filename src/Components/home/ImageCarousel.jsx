"use client";
import React, { useState } from "react";
import Link from "next/link";
import LogoSvg from "@/assets/svgs/LogoSvg";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/imgs/hero/robo-img1.png";
import img2 from "@/assets/imgs/hero/robo-img2.jpg";
import img3 from "@/assets/imgs/hero/robo-img3.png";
import "@/Components/home/index.css";

const ImageCarousel = () => {
  return (
    <motion.div
      className="w-full flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container flex mother justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src={img3}
            alt="Image 1"
            width={300}
            height={300}
            className="rotate2 rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src={img2}
            alt="Image 2"
            width={600}
            height={300}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Image
            src={img1}
            alt="Image 3"
            width={300}
            height={300}
            className="rotate1 rounded-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImageCarousel;
