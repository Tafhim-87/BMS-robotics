"use client";

import Arrow from "@/assets/svgs/Arrow";
import Link from "next/link";
import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import Image from "next/image";
import img1 from "@/assets/imgs/hero/VectorImg.png";
import { motion } from "framer-motion";

const images = ["/image1.png", "/image2.png", "/image3.png"]; // Replace with your image paths

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div className="container flex flex-col gap-[30px] md:gap-[60px] mt-10 md:mt-20 max-w-[1440px] px-4">
        {/* Text Content */}
        <motion.div
          className="text-center w-full flex flex-col gap-2 justify-center items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-[28px] md:text-[38px] lg:text-[58px] leading-[32px] md:leading-[42px] lg:leading-[63px] font-bold text-[#1D242D] w-full md:w-[610px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Smart{" "}
            <span className="relative">
              <Image
                src={img1}
                alt="Robotics"
                width={206}
                height={80}
                className="absolute top-0 left-0"
              />
              <motion.span
                className="text-[#0B61EA] z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Robotics
              </motion.span>
            </span>{" "}
            for Modern Industries
          </motion.h1>
          <motion.h1
            className="text-[#3D4C5E] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[27px] w-full md:w-[768px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            We empower industries with intelligent robotics solutions that
            simplify automation, enhance efficiency, and drive innovation across
            manufacturing, welding, and beyond.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href={"#"}
              className="bg-[#0B61EA] text-[#FFFFFF] py-[14px] px-[18px] rounded-[15px] flex gap-[10px] items-center active:scale-105 mt-4"
            >
              Explore Our Solutions <Arrow />
            </Link>
          </motion.div>
        </motion.div>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Hero;
