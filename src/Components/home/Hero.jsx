"use client";

import Arrow from "@/assets/svgs/Arrow";
import Link from "next/link";
import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";

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
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-[60px] mt-20">
        {/* Text Content */}
        <div className="text-center w-full flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[58px] leading-[63px] font-bold text-[#1D242D] w-[610px]">
            Smart <span className="text-[#0B61EA]">Robotics</span> for Modern
            Industries
          </h1>
          <h1 className="text-[#3D4C5E] text-[18px] leading-[27px] w-[768px]">
            We empower industries with intelligent robotics solutions that
            simplify automation, enhance efficiency, and drive innovation across
            manufacturing, welding, and beyond.
          </h1>
          <Link
            href={"#"}
            className="bg-[#0B61EA] text-[#FFFFFF] py-[14px] px-[18px] rounded-[15px] flex gap-[10px] items-center active:scale-105"
          >
            Explore Our Solutions <Arrow />
          </Link>
        </div>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Hero;
