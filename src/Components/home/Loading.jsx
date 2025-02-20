import React from "react";

const Loading = () => {
  return (
    <section className="w-full h-screen flex justify-center overflow-hidden">
      <div className="container flex flex-col gap-[30px] md:gap-[60px] mt-10 md:mt-20 max-w-[1440px] px-4 animate-pulse">
        {/* Text Skeleton */}
        <div className="w-full flex flex-col gap-2 justify-center items-center text-center">
          <div className="h-10 md:h-12 lg:h-16 w-3/4 md:w-[610px] bg-gray-300 rounded-md"></div>
          <div className="h-4 md:h-5 lg:h-6 w-5/6 md:w-[768px] bg-gray-300 rounded-md mt-2"></div>
          <div className="h-12 w-40 bg-gray-300 rounded-md mt-4"></div>
        </div>

        {/* Image Carousel Skeleton */}
        <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
      </div>
    </section>
  );
};

export default Loading;
