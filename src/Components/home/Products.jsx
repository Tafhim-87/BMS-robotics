"use client";

import { useRef, useState } from "react";
import Arrow from "@/assets/svgs/Arrow";
import PlusSvg from "@/assets/svgs/PlusSvg";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/imgs/hero/robo2.png";
import img2 from "@/assets/imgs/hero/robo3.png";
import img3 from "@/assets/imgs/hero/icon2.png";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to handle scroll progress
  const handleScroll = () => {
    if (swiperInstance) {
      const progress = (swiperInstance.progress * 100).toFixed(2);
      setScrollProgress(progress);
    }
  };

  // Scroll Functions
  const scrollLeft = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const scrollRight = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <section className="w-full flex justify-center">
      <div className="container flex flex-col gap-16 max-w-[1440px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="relative flex flex-col gap-3">
            <div className="flex flex-col items-start">
              <PlusSvg className="absolute top-[-30px] left-[-15px] md:left-[-30px]" />
              <h3 className="text-[22px] font-bold text-[#0B61EA] flex items-center gap-2">
                <Image src={img3} alt="" width={24} height={24} />
                Popular Products
              </h3>
            </div>
            <h1 className="lg:text-[40px] text-[28px] lg:w-[565px] container font-bold text-[#1D242D] leading-[52px]">
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

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={handleScroll}
          className="w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className="w-[394px] h-[440px] flex items-center justify-center bg-[#F5F6F8] rounded-md">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={440}
                  height={350}
                />
              </div>
              <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
              <p className="text-xl font-medium">{product.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Scrollbar Navigation */}
        <div className="w-full flex justify-center md:justify-end items-center gap-3">
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
    </section>
  );
};

export default Products;
