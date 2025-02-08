"use client";

import Arrow from "@/assets/svgs/Arrow";
import Link from "next/link";
import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import Image from "next/image";
import img1 from "@/assets/imgs/VectorImg.png";

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
      <div className="container flex flex-col gap-[60px] mt-20 max-w-[1440px] px-4">
        {/* Text Content */}
        <div className="text-center w-full flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[28px] md:text-[38px] lg:text-[58px] leading-[32px] md:leading-[42px] lg:leading-[63px] font-bold text-[#1D242D] w-full md:w-[610px]">
            Smart{" "}
            <span className="relative">
              <Image
                src={img1}
                alt="Robotics"
                width={206}
                height={80}
                className="absolute top-0 left-0"
              />
              <span className="text-[#0B61EA] z-10">Robotics</span>
            </span>{" "}
            for Modern Industries
          </h1>
          <h1 className="text-[#3D4C5E] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[27px] w-full md:w-[768px]">
            We empower industries with intelligent robotics solutions that
            simplify automation, enhance efficiency, and drive innovation across
            manufacturing, welding, and beyond.
          </h1>
          <Link
            href={"#"}
            className="bg-[#0B61EA] text-[#FFFFFF] py-[14px] px-[18px] rounded-[15px] flex gap-[10px] items-center active:scale-105 mt-4"
          >
            Explore Our Solutions <Arrow />
          </Link>
        </div>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Hero;
