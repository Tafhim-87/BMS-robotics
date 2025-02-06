"use client";

import { useRef, useState, useEffect } from "react";
import Arrow from "@/assets/svgs/Arrow";
import PlusSvg from "@/assets/svgs/PlusSvg";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/robo2.png";
import img2 from "@/assets/imgs/robo3.png";
import "./style.css";

const products = [
  {
    id: 1,
    image: img1,
    title: "SCARA | BMS3R1400-S1",
    description: "Pick and place | Packaging | Soldering | Inspection",
  },
  {
    id: 2,
    image: img2,
    title: "SCARA | BMS3R1400-S2",
    description: "Pick and place | Packaging | Soldering | Inspection",
  },
  {
    id: 3,
    image: img1,
    title: "SCARA | BMS3R1400-S3",
    description: "Pick and place | Packaging | Soldering | Inspection",
  },
  {
    id: 4,
    image: img2,
    title: "SCARA | BMS3R1400-S4",
    description: "Pick and place | Packaging | Soldering | Inspection",
  },
];

const Products = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const scrollPercent = (scrollLeft / maxScrollLeft) * 100;
      setScrollProgress(scrollPercent);
    }
  };

  // Scroll Functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-16">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="relative flex flex-col gap-3">
            <div className="flex flex-col items-start">
              <PlusSvg className="absolute top-[-30px] left-[-30px]" />
              <h3 className="text-[22px] font-bold text-[#0B61EA]">
                Popular Products
              </h3>
            </div>
            <h1 className="text-[40px] w-[565px] font-bold text-[#1D242D] leading-[52px]">
              Support and after sales service at all times
            </h1>
          </div>
          <div>
            <Link
              href={"#"}
              className="text-[#0B61EA] flex items-center gap-16 font-semibold border border-solid border-[#0B61EA] rounded-lg py-[18px] px-[24px]"
            >
              Explore More <Arrow className="w-10" color={"#0B61EA"} />
            </Link>
          </div>
        </div>

        {/* Products Section */}
        <div
          ref={scrollRef}
          className="px-14 overflow-x-auto scrollbar-custom flex gap-10 scroll-smooth"
        >
          <div className="flex gap-8 min-w-max">
            {products.map((product, index) => (
              <div key={index} className="text-center w-[394px]">
                <div className="w-[394px] h-[440px] flex items-center justify-center bg-[#F5F6F8] rounded-md">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={440}
                    height={350}
                  />
                </div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <p className="text-xl font-medium">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollbar Navigation */}
        <div className="w-full flex justify-end items-center gap-3">
          <button
            onClick={scrollLeft}
            className="border-[4px] rounded-xl border-solid rotate-180 border-[#B2BBC614] p-5"
          >
            <Arrow color={"#909DAD"} />
          </button>

          {/* Custom Scroll Indicator */}
          <div className="w-[146px] h-3 rounded-full bg-[#B2BBC633] relative">
            <div
              className="h-3 rounded-full bg-[#0B61EA] absolute top-0 left-0 transition-all duration-300"
              style={{ width: `${Math.max(scrollProgress, 5)}%` }} // Ensures visibility even at 0%
            ></div>
          </div>

          <button
            onClick={scrollRight}
            className="border-[4px] rounded-xl border-solid border-[#B2BBC614] p-5"
          >
            <Arrow color={"#909DAD"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
