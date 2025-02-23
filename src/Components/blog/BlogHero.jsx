import React from "react";
import BlogSearch from "./BlogSearch";
import Image from "next/image";
import bg from "@/assets/imgs/blog/bgpatturn.png";

const BlogHero = () => {
  return (
    <div className="w-full flex justify-center items-center relative bg-[#0B61EA] text-[#FFFFFF] py-16 md:py-20 lg:py-28">
      <Image
        src={bg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        width={1440}
        height={800}
      />
      <div className="container flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight md:leading-[62px] font-bold">
          Find Your Next Read
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] mt-4">
          Explore our blogs and uncover insightful stories, tips, and
          innovations in the world of robotics and technology
        </p>
        <div className="w-full max-w-2xl mt-8">
          <BlogSearch />
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
